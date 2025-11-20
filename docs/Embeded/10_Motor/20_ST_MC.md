---
lang: zh-CN
description: 介绍ST电机控制中间件
sidebarDepth: 5
---
<!-- markdownlint-disable MD033 -->

# ST电机库

## 结构体

ST电机库包含 MCI 和 MCT 这两个顶层结构体，其中 MCI 用于 用户和电机库进行交互 的能力，MCT 用于实现电机控制中的每个环节的能力。

顶层结构体是由众多基础功能结构体组件而来，其中部分基础组件公用，以实现用户交互数据和电机运行数据的耦合。

部分基础结构体在 mc_config.c 中定义，部分在 相关组件c文件 中定义，顶层结构体拼装在 mc_task.c 中实现。

MCI 和 MCT 两个顶层结构体的能力如下：

``` C
MCI_Handle_t                    MCI[NBR_OF_MOTORS];     /* 用户控制组件 */
MCI_Handle_t                    *pMCI[NBR_OF_MOTORS];   /* 用户控制组件指针 */ 
MCT_Handle_t                    MCT[NBR_OF_MOTORS];     /* 电机控制组件 */ 
MCT_Handle_t                    * pMCT[NBR_OF_MOTORS];  /* 电机控制组件指针 */

typedef struct    
{   
  STM_Handle_t                  * pSTM;                 /* 状态机组件 */
  SpeednTorqCtrl_Handle_t       * pSTC;                 /* 转速扭矩控制器组件 */
  pFOCVars_t                    pFOCVars;               /* FOC组件 */
  PosCtrl_Handle_t              * pPosCtrl;             /* 轨迹规划组件*/
  MCI_UserCommands_t            lastCommand;            /* 最近一次 用户命令 的类型 */
  int16_t                       hFinalSpeed;            /* 最近一次 速度指令 设定值 */
  int16_t                       hFinalTorque;           /* 最近一次 扭矩指令 设定值  */
  qd_t                          Iqdref;                 /* 电流指令设置的Iq轴和Id轴的目标电流 */
  uint16_t                      hDurationms;            /* 指令执行时间，单位 ms */
  MCI_CommandState_t            CommandState;           /* 缓冲命令执行状态 */
  STC_Modality_t                LastModalitySetByUser;  /* 电机的运动模式(扭矩模式 or 速度模式) */
} MCI_Handle_t;

typedef struct
{
  PID_Handle_t                  * pPIDSpeed;            /* 速度 PID 组件 */
  PID_Handle_t                  * pPIDIq;               /* Iq PID 组件 */
  PID_Handle_t                  * pPIDId;               /* id PID 组件 */
  PID_Handle_t                  * pPIDFluxWeakening;    /* 弱磁控制 PID 组件 */
  PWMC_Handle_t                 * pPWMnCurrFdbk;        /* 电机PWM输出组件 */
  RevUpCtrl_Handle_t            * pRevupCtrl;           /* 起转控制组件 */
  SpeednPosFdbk_Handle_t        * pSpeedSensorMain;     /* 速度和位置反馈组件 */
  SpeednPosFdbk_Handle_t        * pSpeedSensorAux;      /* 速度和位置反馈组件 */
  VirtualSpeedSensor_Handle_t   * pSpeedSensorVirtual;  /* 虚拟速度传感器组件 */
  SpeednTorqCtrl_Handle_t       * pSpeednTorqueCtrl;    /* 速度和扭矩控制组件 */
  STM_Handle_t                  * pStateMachine;        /* 状态机 */
  NTC_Handle_t                  * pTemperatureSensor;   /* 温度传感器 */
  BusVoltageSensor_Handle_t     * pBusVoltageSensor;    /* 总线电压传感器 */
  DOUT_handle_t                 * pBrakeDigitalOutput;  /* 数字量输出 */
  DOUT_handle_t                 * pNTCRelay;            /* 数字量输出 */
  MotorPowMeas_Handle_t         * pMPM;                 /* 电功率计算 */
  FW_Handle_t                   * pFW;                  /* 弱磁控制组件 */
  FF_Handle_t                   * pFF;                  /* 前馈组件 */
  PosCtrl_Handle_t              *  pPosCtrl;            /* 位置控制组件 */
#ifdef HFINJECTION
  HFI_FP_Ctrl_Handle_t          * pHFI;                    
#endif /* HFINJECTION */
  SCC_Handle_t                  *  pSCC;
  OTT_Handle_t                  *  pOTT;
} MCT_Handle_t;
```

## 状态机

| 状态值 | 状态名称                | 状态类型   | 说明                               |
|:------:|-------------------------|------------|------------------------------------|
| 0      | IDLE                    | 持久状态   | 就绪状态                           |
| 1      | IDLE_ALIGNMENT          | 直通状态   | 编码器对齐前状态                   |
| 2      | ALIGNMENT               | 持久状态   | 编码器角度对齐                     |
| 3      | IDLE_START              | 直通状态   | 主要进行电机启动时的一些准备工作   |
| 4      | START                   | 直通状态   | 预留                               |
| 5      | START_RUN               | 直通状态   | 完成启动前准备工作                 |
| 6      | RUN                     | 持久状态   | 电机正常运行状态                   |
| 7      | ANY_STOP                | 直通状态   | 从任意状态转入 STOP 的前置状态     |
| 8      | STOP                    | 持久状态   | 电机停止                           |
| 9      | STOP_IDLE               | 直通状态   | 预留                               |
| 10     | FAULT_NOW               | 持久状态   | 表示电机当前处于错误状态           |
| 11     | FAULT_OVER              | 持久状态   | 当故障条件消失时，应用程序所处的状态 |
| 12     | ICLWAIT                 | 持久状态   | 等待硬件初始化就绪，预留           |
| 13     | ALIGN_CHARGE_BOOT_CAP   | 持久状态   | 自举电容充电                       |
| 14     | ALIGN_OFFSET_CALIB      | 持久状态   | 电机电流偏移量校准                 |
| 15     | ALIGN_CLEAR             | 直通状态   | 对象被清除并设置为启动             |
| 16     | CHARGE_BOOT_CAP         | 持久状态   | 自举电容充电状态，完成充电后进行电流校准 |
| 17     | OFFSET_CALIB            | 持久状态   | 等待电流校准完成                   |
| 18     | CLEAR                   | 直通状态   | 清除FOC相关的一切变量              |
| 19     | SWITCH_OVER             | 直通状态   | 预留                               |
| 20     | WAIT_STOP_MOTOR         | 直通状态   | 预留                               |

## 通讯协议

### 物理层

### 通讯协议帧（请求：主->从）

#### 请求帧格式

![alt text](image.png)

#### FRAME_START（请求）

**MOTOR**（bit7-5）：标识这一帧的控制对象是哪个电机

| 取值 | 描述 |
|-------|-------------|
| 000   | 上一次所选的电机 |
| 001   | Motor1    |
| 010   | Motor2    |
| 111   | None    |

**FRAME_ID** （bit4-0）：标识这一帧的作用

| FRAME_ID | 名称 | Description |
|------|-------|-------------|
| 0x01 | MC_PROTOCOL_CODE_SET_REG          | 设置寄存器的值 |
| 0x02 | MC_PROTOCOL_CODE_GET_REG          | 获取寄存器的值 |
| 0x03 | MC_PROTOCOL_CODE_EXECUTE_CMD      | 控制功能指令 |
| 0x04 | MC_PROTOCOL_CODE_STORE_TOADDR     | 按地址存储数据 |
| 0x05 | MC_PROTOCOL_CODE_LOAD_FROMADDR    | 按地址读取数据 |
| 0x06 | MC_PROTOCOL_CODE_GET_BOARD_INFO   | 获取板子的信息 |
| 0x07 | MC_PROTOCOL_CODE_SET_SPEED_RAMP   | 设置速度 Ramp |
| 0x08 | MC_PROTOCOL_CODE_GET_REVUP_DATA   | 获取无感模式的开环启动参数 |
| 0x09 | MC_PROTOCOL_CODE_SET_REVUP_DATA   | 设置无感模式的开环启动参数 |
| 0x0A | MC_PROTOCOL_CODE_SET_CURRENT_REF  | 设置电流目标值 |
| 0x0B | MC_PROTOCOL_CODE_GET_MP_INFO      | 设置电流目标值 |
| 0x0C | MC_PROTOCOL_CODE_GET_FW_VERSION   | 获取固件库版本号 |
| 0x0D | MC_PROTOCOL_CODE_SET_TORQUE_RAMP  | 设置扭矩 Ramp |
| 0x12 | MC_PROTOCOL_CODE_SET_POSITION_CMD | 设置位置模式 |

#### PAYLOAD_LENGTH（请求）

Payload Length 是 Payload 关键数据段长度

#### PAYLOAD（请求）

PAYLOAD_ID：当 FRAME_ID 不同时 PAYLOAD_ID 代表不同含义。

当 FRAME_ID 是 MC_PROTOCOL_CODE_SET_REG(设置寄存器的值) 或 MC_PROTOCOL_CODE_GET_REG(获取寄存器的值) 时，PAYLOAD_ID 就是寄存器ID，PAYLOAD[n]就是要写的值，读无PAYLOAD[n]。具体的寄存器列表如下：

| 寄存器ID(DEC) | 寄存器ID(HEX) | 寄存器名称 | 作用 |
|:------:|:-------:|-----------|------|
| 0 | 0x00 | MC_PROTOCOL_REG_TARGET_MOTOR | 目标电机选择 |
| 1 | 0x01 | MC_PROTOCOL_REG_FLAGS | 标志位 |
| 2 | 0x02 | MC_PROTOCOL_REG_STATUS | 系统状态 |
| 3 | 0x03 | MC_PROTOCOL_REG_CONTROL_MODE | 控制模式 |
| 4 | 0x04 | MC_PROTOCOL_REG_SPEED_REF | 速度参考值 |
| 5 | 0x05 | MC_PROTOCOL_REG_SPEED_KP | 速度环比例增益 |
| 6 | 0x06 | MC_PROTOCOL_REG_SPEED_KI | 速度环积分增益 |
| 7 | 0x07 | MC_PROTOCOL_REG_SPEED_KD | 速度环微分增益 |
| 8 | 0x08 | MC_PROTOCOL_REG_TORQUE_REF | 转矩参考值 |
| 9 | 0x09 | MC_PROTOCOL_REG_TORQUE_KP | 转矩环比例增益 |
| 10 | 0x0A | MC_PROTOCOL_REG_TORQUE_KI | 转矩环积分增益 |
| 11 | 0x0B | MC_PROTOCOL_REG_TORQUE_KD | 转矩环微分增益 |
| 12 | 0x0C | MC_PROTOCOL_REG_FLUX_REF | 磁链参考值 |
| 13 | 0x0D | MC_PROTOCOL_REG_FLUX_KP | 磁链环比例增益 |
| 14 | 0x0E | MC_PROTOCOL_REG_FLUX_KI | 磁链环积分增益 |
| 15 | 0x0F | MC_PROTOCOL_REG_FLUX_KD | 磁链环微分增益 |
| 16 | 0x10 | MC_PROTOCOL_REG_OBSERVER_C1 | 观测器参数C1 |
| 17 | 0x11 | MC_PROTOCOL_REG_OBSERVER_C2 | 观测器参数C2 |
| 18 | 0x12 | MC_PROTOCOL_REG_OBSERVER_CR_C1 | 电流重构观测器参数C1 |
| 19 | 0x13 | MC_PROTOCOL_REG_OBSERVER_CR_C2 | 电流重构观测器参数C2 |
| 20 | 0x14 | MC_PROTOCOL_REG_PLL_KI | PLL积分增益 |
| 21 | 0x15 | MC_PROTOCOL_REG_PLL_KP | PLL比例增益 |
| 22 | 0x16 | MC_PROTOCOL_REG_FLUXWK_KP | 磁链弱化比例增益 |
| 23 | 0x17 | MC_PROTOCOL_REG_FLUXWK_KI | 磁链弱化积分增益 |
| 24 | 0x18 | MC_PROTOCOL_REG_FLUXWK_BUS | 磁链弱化总线电压 |
| 25 | 0x19 | MC_PROTOCOL_REG_BUS_VOLTAGE | 总线电压 |
| 26 | 0x1A | MC_PROTOCOL_REG_HEATS_TEMP | 散热器温度 |
| 27 | 0x1B | MC_PROTOCOL_REG_MOTOR_POWER | 电机功率 |
| 28 | 0x1C | MC_PROTOCOL_REG_DAC_OUT1 | DAC输出1 |
| 29 | 0x1D | MC_PROTOCOL_REG_DAC_OUT2 | DAC输出2 |
| 30 | 0x1E | MC_PROTOCOL_REG_SPEED_MEAS | 测量速度 |
| 31 | 0x1F | MC_PROTOCOL_REG_TORQUE_MEAS | 测量转矩 |
| 32 | 0x20 | MC_PROTOCOL_REG_FLUX_MEAS | 测量磁链 |
| 33 | 0x21 | MC_PROTOCOL_REG_FLUXWK_BUS_MEAS | 测量磁链弱化总线电压 |
| 34 | 0x22 | MC_PROTOCOL_REG_RUC_STAGE_NBR | RUC阶段编号 |
| 35 | 0x23 | MC_PROTOCOL_REG_I_A | A相电流 |
| 36 | 0x24 | MC_PROTOCOL_REG_I_B | B相电流 |
| 37 | 0x25 | MC_PROTOCOL_REG_I_ALPHA | α轴电流 |
| 38 | 0x26 | MC_PROTOCOL_REG_I_BETA | β轴电流 |
| 39 | 0x27 | MC_PROTOCOL_REG_I_Q | Q轴电流 |
| 40 | 0x28 | MC_PROTOCOL_REG_I_D | D轴电流 |
| 41 | 0x29 | MC_PROTOCOL_REG_I_Q_REF | Q轴电流参考值 |
| 42 | 0x2A | MC_PROTOCOL_REG_I_D_REF | D轴电流参考值 |
| 43 | 0x2B | MC_PROTOCOL_REG_V_Q | Q轴电压 |
| 44 | 0x2C | MC_PROTOCOL_REG_V_D | D轴电压 |
| 45 | 0x2D | MC_PROTOCOL_REG_V_ALPHA | α轴电压 |
| 46 | 0x2E | MC_PROTOCOL_REG_V_BETA | β轴电压 |
| 47 | 0x2F | MC_PROTOCOL_REG_MEAS_EL_ANGLE | 测量电角度 |
| 48 | 0x30 | MC_PROTOCOL_REG_MEAS_ROT_SPEED | 测量转速 |
| 49 | 0x31 | MC_PROTOCOL_REG_OBS_EL_ANGLE | 观测器电角度 |
| 50 | 0x32 | MC_PROTOCOL_REG_OBS_ROT_SPEED | 观测器转速 |
| 51 | 0x33 | MC_PROTOCOL_REG_OBS_I_ALPHA | 观测器α轴电流 |
| 52 | 0x34 | MC_PROTOCOL_REG_OBS_I_BETA | 观测器β轴电流 |
| 53 | 0x35 | MC_PROTOCOL_REG_OBS_BEMF_ALPHA | 观测器α轴反电动势 |
| 54 | 0x36 | MC_PROTOCOL_REG_OBS_BEMF_BETA | 观测器β轴反电动势 |
| 55 | 0x37 | MC_PROTOCOL_REG_OBS_CR_EL_ANGLE | 电流重构观测器电角度 |
| 56 | 0x38 | MC_PROTOCOL_REG_OBS_CR_ROT_SPEED | 电流重构观测器转速 |
| 57 | 0x39 | MC_PROTOCOL_REG_OBS_CR_I_ALPHA | 电流重构观测器α轴电流 |
| 58 | 0x3A | MC_PROTOCOL_REG_OBS_CR_I_BETA | 电流重构观测器β轴电流 |
| 59 | 0x3B | MC_PROTOCOL_REG_OBS_CR_BEMF_ALPHA | 电流重构观测器α轴反电动势 |
| 60 | 0x3C | MC_PROTOCOL_REG_OBS_CR_BEMF_BETA | 电流重构观测器β轴反电动势 |
| 61 | 0x3D | MC_PROTOCOL_REG_DAC_USER1 | 用户DAC输出1 |
| 62 | 0x3E | MC_PROTOCOL_REG_DAC_USER2 | 用户DAC输出2 |
| 63 | 0x3F | MC_PROTOCOL_REG_MAX_APP_SPEED | 最大应用速度 |
| 64 | 0x40 | MC_PROTOCOL_REG_MIN_APP_SPEED | 最小应用速度 |
| 65 | 0x41 | MC_PROTOCOL_REG_IQ_SPEEDMODE | 速度模式下的Q轴电流 |
| 66 | 0x42 | MC_PROTOCOL_REG_EST_BEMF_LEVEL | 估计反电动势水平 |
| 67 | 0x43 | MC_PROTOCOL_REG_OBS_BEMF_LEVEL | 观测器反电动势水平 |
| 68 | 0x44 | MC_PROTOCOL_REG_EST_CR_BEMF_LEVEL | 估计电流重构反电动势水平 |
| 69 | 0x45 | MC_PROTOCOL_REG_OBS_CR_BEMF_LEVEL | 观测器电流重构反电动势水平 |
| 70 | 0x46 | MC_PROTOCOL_REG_FF_1Q | Q轴前馈1 |
| 71 | 0x47 | MC_PROTOCOL_REG_FF_1D | D轴前馈1 |
| 72 | 0x48 | MC_PROTOCOL_REG_FF_2 | 前馈2 |
| 73 | 0x49 | MC_PROTOCOL_REG_FF_VQ | Q轴电压前馈 |
| 74 | 0x4A | MC_PROTOCOL_REG_FF_VD | D轴电压前馈 |
| 75 | 0x4B | MC_PROTOCOL_REG_FF_VQ_PIOUT | Q轴电压前馈PI输出 |
| 76 | 0x4C | MC_PROTOCOL_REG_FF_VD_PIOUT | D轴电压前馈PI输出 |
| 77 | 0x4D | MC_PROTOCOL_REG_PFC_STATUS | PFC状态 |
| 78 | 0x4E | MC_PROTOCOL_REG_PFC_FAULTS | PFC故障 |
| 79 | 0x4F | MC_PROTOCOL_REG_PFC_DCBUS_REF | PFC直流母线参考电压 |
| 80 | 0x50 | MC_PROTOCOL_REG_PFC_DCBUS_MEAS | PFC直流母线测量电压 |
| 81 | 0x51 | MC_PROTOCOL_REG_PFC_ACBUS_FREQ | PFC交流母线频率 |
| 82 | 0x52 | MC_PROTOCOL_REG_PFC_ACBUS_RMS | PFC交流母线RMS电压 |
| 83 | 0x53 | MC_PROTOCOL_REG_PFC_I_KP | PFC电流环比例增益 |
| 84 | 0x54 | MC_PROTOCOL_REG_PFC_I_KI | PFC电流环积分增益 |
| 85 | 0x55 | MC_PROTOCOL_REG_PFC_I_KD | PFC电流环微分增益 |
| 86 | 0x56 | MC_PROTOCOL_REG_PFC_V_KP | PFC电压环比例增益 |
| 87 | 0x57 | MC_PROTOCOL_REG_PFC_V_KI | PFC电压环积分增益 |
| 88 | 0x58 | MC_PROTOCOL_REG_PFC_V_KD | PFC电压环微分增益 |
| 89 | 0x59 | MC_PROTOCOL_REG_PFC_STARTUP_DURATION | PFC启动持续时间 |
| 90 | 0x5A | MC_PROTOCOL_REG_PFC_ENABLED | PFC使能 |
| 91 | 0x5B | MC_PROTOCOL_REG_RAMP_FINAL_SPEED | 斜坡最终速度 |
| 92 | 0x5C | MC_PROTOCOL_REG_RAMP_DURATION | 斜坡持续时间 |
| 93 | 0x5D | MC_PROTOCOL_REG_HFI_EL_ANGLE | HFI电角度 |
| 94 | 0x5E | MC_PROTOCOL_REG_HFI_ROT_SPEED | HFI转速 |
| 95 | 0x5F | MC_PROTOCOL_REG_HFI_CURRENT | HFI电流 |
| 96 | 0x60 | MC_PROTOCOL_REG_HFI_INIT_ANG_PLL | HFI初始角度PLL |
| 97 | 0x61 | MC_PROTOCOL_REG_HFI_INIT_ANG_SAT_DIFF | HFI初始角度饱和差异 |
| 98 | 0x62 | MC_PROTOCOL_REG_HFI_PI_PLL_KP | HFI PLL比例增益 |
| 99 | 0x63 | MC_PROTOCOL_REG_HFI_PI_PLL_KI | HFI PLL积分增益 |
| 100 | 0x64 | MC_PROTOCOL_REG_HFI_PI_TRACK_KP | HFI跟踪比例增益 |
| 101 | 0x65 | MC_PROTOCOL_REG_HFI_PI_TRACK_KI | HFI跟踪积分增益 |
| 102 | 0x66 | MC_PROTOCOL_REG_SC_CHECK | 系统配置检查 |
| 103 | 0x67 | MC_PROTOCOL_REG_SC_STATE | 系统配置状态 |
| 104 | 0x68 | MC_PROTOCOL_REG_SC_RS | 定子电阻 |
| 105 | 0x69 | MC_PROTOCOL_REG_SC_LS | 定子电感 |
| 106 | 0x6A | MC_PROTOCOL_REG_SC_KE | 反电动势常数 |
| 107 | 0x6B | MC_PROTOCOL_REG_SC_VBUS | 系统配置总线电压 |
| 108 | 0x6C | MC_PROTOCOL_REG_SC_MEAS_NOMINALSPEED | 测量额定速度 |
| 109 | 0x6D | MC_PROTOCOL_REG_SC_STEPS | 系统配置步骤 |
| 110 | 0x6E | MC_PROTOCOL_REG_SPEED_KP_DIV | 速度环比例增益除数 |
| 111 | 0x6F | MC_PROTOCOL_REG_SPEED_KI_DIV | 速度环积分增益除数 |
| 112 | 0x70 | MC_PROTOCOL_REG_UID | 唯一标识符 |
| 113 | 0x71 | MC_PROTOCOL_REG_HWTYPE | 硬件类型 |
| 114 | 0x72 | MC_PROTOCOL_REG_CTRBDID | 控制板ID |
| 115 | 0x73 | MC_PROTOCOL_REG_PWBDID | 功率板ID |
| 116 | 0x74 | MC_PROTOCOL_REG_SC_PP | 极对数 |
| 117 | 0x75 | MC_PROTOCOL_REG_SC_CURRENT | 系统配置电流 |
| 118 | 0x76 | MC_PROTOCOL_REG_SC_SPDBANDWIDTH | 速度环带宽 |
| 119 | 0x77 | MC_PROTOCOL_REG_SC_LDLQRATIO | Ld/Lq比率 |
| 120 | 0x78 | MC_PROTOCOL_REG_SC_NOMINAL_SPEED | 额定速度 |
| 121 | 0x79 | MC_PROTOCOL_REG_SC_CURRBANDWIDTH | 电流环带宽 |
| 122 | 0x7A | MC_PROTOCOL_REG_SC_J | 转动惯量 |
| 123 | 0x7B | MC_PROTOCOL_REG_SC_F | 摩擦系数 |
| 124 | 0x7C | MC_PROTOCOL_REG_SC_MAX_CURRENT | 最大电流 |
| 125 | 0x7D | MC_PROTOCOL_REG_SC_STARTUP_SPEED | 启动速度 |
| 126 | 0x7E | MC_PROTOCOL_REG_SC_STARTUP_ACC | 启动加速度 |
| 127 | 0x7F | MC_PROTOCOL_REG_SC_PWM_FREQUENCY | PWM频率 |
| 128 | 0x80 | MC_PROTOCOL_REG_SC_FOC_REP_RATE | FOC重复率 |
| 129 | 0x81 | MC_PROTOCOL_REG_PWBDID2 | 功率板ID2 |
| 130 | 0x82 | MC_PROTOCOL_REG_SC_COMPLETED | 系统配置完成标志 |
| 131 | 0x83 | MC_PROTOCOL_REG_CURRENT_POSITION | 当前位置 |
| 132 | 0x84 | MC_PROTOCOL_REG_TARGET_POSITION | 目标位置 |
| 133 | 0x85 | MC_PROTOCOL_REG_MOVE_DURATION | 移动持续时间 |
| 134 | 0x86 | MC_PROTOCOL_REG_POSITION_KP | 位置环比例增益 |
| 135 | 0x87 | MC_PROTOCOL_REG_POSITION_KI | 位置环积分增益 |
| 136 | 0x88 | MC_PROTOCOL_REG_POSITION_KD | 位置环微分增益 |

当 FRAME_ID 是 MC_PROTOCOL_CODE_EXECUTE_CMD(控制功能指令) 时，PAYLOAD_ID 就是 控制功能指令ID，无PAYLOAD[n]。具体的控制功能指令列表如下：

| 控制功能ID | 控制功能 | 作用 |
|:----------:|---------|------|
| 0x01 | MC_PROTOCOL_CMD_START_MOTOR | 启动电机 |
| 0x02 | MC_PROTOCOL_CMD_STOP_MOTOR | 停止电机 |
| 0x03 | MC_PROTOCOL_CMD_STOP_RAMP | 停止斜坡 |
| 0x04 | MC_PROTOCOL_CMD_RESET | 系统复位 |
| 0x05 | MC_PROTOCOL_CMD_PING | 通信检测 |
| 0x06 | MC_PROTOCOL_CMD_START_STOP | 启动/停止切换 |
| 0x07 | MC_PROTOCOL_CMD_FAULT_ACK | 故障确认 |
| 0x08 | MC_PROTOCOL_CMD_ENCODER_ALIGN | 编码器对齐 |
| 0x09 | MC_PROTOCOL_CMD_IQDREF_CLEAR | 清除IQ/D轴参考值 |
| 0x0A | MC_PROTOCOL_CMD_PFC_ENABLE | 使能PFC |
| 0x0B | MC_PROTOCOL_CMD_PFC_DISABLE | 禁用PFC |
| 0x0C | MC_PROTOCOL_CMD_PFC_FAULT_ACK | PFC故障确认 |
| 0x0D | MC_PROTOCOL_CMD_SC_START | 启动系统配置 |
| 0x0E | MC_PROTOCOL_CMD_SC_STOP | 停止系统配置 |

PAYLOAD[n]

#### CRC（请求）

虽然名字叫 CRC，但实际实现上，并不是 CRC校验算法，而是将除 MOTOR和CRC 之外全部数据累加起来（uint16），然后将得到的16位数据的高字节和低字节再累加，得到就是8位的 CRC校验码。

### 通讯协议帧（应答：从->主）

从机每接收到一帧数据都会返回应答帧。

#### 应答帧格式

![alt text](image-1.png)

#### FRAME_START（应答）

| 取值 | 描述 | 含义 |
|------|-------------| --- |
| 0xF0 | Data Acknowledgment | 数据帧正确响应返回相应的数据 |
| 0xFF | Error Acknoeledgement | 数据帧错误响应返回错误码 |

#### PAYLOAD（应答）

应答帧无 PAYLOAD_ID，Payload[n] 根据发送帧的 FRAME_ID 返回不同内容，如果FRAME_ID 是 MC_PROTOCOL_CODE_GET_REG（），Payload[n] 返回相应的寄存器数据；如果是MC_PROTOCOL_CODE_EXECUTE_CMD（控制功能指令），控制成功则无Payload[n]，控制失败时Payload[n]为错误码。错误码包含了通信错误和控制指令错误等信息。具体的错误码信息如下：

| 错误值 | 错误名称 | 含义 |
|--------|----------|------|
| 0x00 | ERROR_NONE | 无错误 |
| 0x01 | ERROR_BAD_FRAME_ID | 错误的帧ID，固件无法识别该帧ID |
| 0x02 | ERROR_CODE_SET_READ_ONLY | 写入只读寄存器，主机试图写入只读寄存器 |
| 0x03 | ERROR_CODE_GET_WRITE_ONLY | 读取不允许，该值不能被读取 |
| 0x04 | ERROR_CODE_NO_TARGET_DRIVE | 错误的目标驱动器，固件不支持目标电机 |
| 0x05 | ERROR_CODE_WRONG_SET | 设置值超出范围，帧中使用的值超出固件预期范围 |
| 0x06 | ERROR_CODE_CMD_ID | 未使用 |
| 0x07 | ERROR_CODE_WRONG_CMD | 错误的命令ID，固件无法识别该命令ID |
| 0x08 | ERROR_CODE_OVERRUN | 过载错误，传输速度太快，帧接收不正确 |
| 0x09 | ERROR_CODE_TIMEOUT | 超时错误，接收到的帧损坏或固件无法识别 |
| 0x0A | ERROR_CODE_BAD_CRC | CRC校验错误，计算的CRC与接收的CRC字节不匹配 |
| 0x0B | ERROR_BAD_MOTOR_SELECTED | 错误的目标驱动器，固件不支持目标电机 |
| 0x0C | ERROR_MP_NOT_ENABLED | 电机分析器未启用 |

#### CRC（应答）

和请求CRC相同。
