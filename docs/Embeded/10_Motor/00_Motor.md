---
lang: zh-CN
title: 电机教程
description: 这是一个C语言基础页面
---

## 电机的分类
- 同步电动机
  - 永磁同步电动机
- 异步电动机
- 直流电动机
- 步进电动机
- 无刷直流电动机
- 伺服电动机

## 书籍
1. 电机学(Stephen j.Chapman 第五版).pdf
2. 电机学(哈理工 戈宝军 第三版)·pdf
3. 电机学(西交大 阎治安 第三版).pdf
4. 电机与拖动基础(汤天浩 第三版).pdf
5. 现代电机控制技术 PPT(王成元 第二版).pdf
6. 现代电机控制技术(王成元 第二版).pdf
7. 现代永磁电机理论与设计(唐任远).pdf
8. 永磁无刷电机及其驱动技术(R,Krishnan).pdf

## 教程
### ST官方
[面向电机控制的STM32生态系统](https://www.st.com.cn/content/st_com/zh/ecosystems/stm32-motor-control-ecosystem.html)


### 硬石资料
#### 资料下载
[硬石科技](http://www.ing10bbs.com/page.php?id=2)

#### 教程
##### F407教程
[F407教程](https://www.bilibili.com/video/BV1yp411f7gs/?)

##### 电机控制教程
[电机驱动与控制](https://www.bilibili.com/video/BV1Fs411p7Zc/?)

###### 1.直流有刷
   1. 电机概述&硬石电机实验箱
   2. 有刷电机原理和减速电机
   3. 电机参数和电机控制基础
   4. H桥驱动的不同模式分析
   5. [MOS管驱动原理分析(含自举电路)](https://www.bilibili.com/video/BV1Fs411p7Zc/?p=5)
   6. 硬石有刷驱动板原理图分析
   7. 有刷电机基本旋转驱动代码分析
   8. 有刷电机的按键和串口控制实现
   9.  有刷电机编码器测速实现

###### 2.PID算法
  1. 闭环控制系统
  2. PID控制的比例P和积分I的介绍
  3. PID控制的微分项
  4. 位置式PID和增量式PID算法介绍
  5. 增量式PID速度闭环代码分析1(PID上位机使用介绍)
  6. 增量式PID速度闭环代码分析2
  7. 位置式PID速度环和位置环代码分析
  8. PID参数调试方法
  9. 电机电流采集原理和代码分析
  10. 提高电流采集精度
  11. 限流保护功能
  12. 电流环
  13. 位置速度电流多闭环

###### 3.舵机控制
  1. 舵机的内部结构和工作原理
  2. 舵机的控制信号和控制演示

###### 4.步进电机
  1. 步进电机的几个基本概念
  2. 单相和两相步进电机结构和工作原理
  3. 步进电机分类与结构特点
  4. 步进电机工作原理和细分驱动原理
  5. 28步进电机驱动硬件设计分析
  6. 28步进电机旋转和控制
  7. 57步进电机参数介绍
  8. 57步进电机驱动芯片说明1
  9. 57步进电机驱动芯片说明2
  10. 57步进电机旋转实现
  11. 57步进电机旋转控制
  12. 4个步进电机和RS485的控制例程分析

###### 5.步进加减速
  1. 步进电机的失步和过冲
  2. 梯形加减速算法原理分析
  3. 梯形加减速算法实现分析1
  4. 梯形加减速算法实现分析2
  5. 梯形加减速代码分析1
  6. 梯形加减速代码分析2
  7. 直线滑台和接近开关
  8. 丝杆滑台运动控制
  9. 丝杆滑台控制代码实现分析1
  10. 丝杆滑台控制代码实现分析2

###### 6.步进闭环
  1. 双出轴步进电机和编码器
  2. 增量式AB相编码器数据读取
  3. 光栅尺和绝对式编码器读取
  4. PID速度环
  5. 位置闭环和双闭环

###### 7.直流无刷
  1. 简介及例程演示
  2. 直流无刷电机工作原理
  3. 驱动板硬件设计
  4. STM32定时器基础
  5. 无刷电机的基础驱动_HALL
  6. 无刷电机的简单控制例程解释
  7. 霍尔传感器测速基础
  8. 无刷电机速度闭环例程解释
  9. 总结及控制波形测量

###### 8.FOC
  1. 软件安装及使用
  2. 基础简介
  3. SVPWM原理(一)
  4. SVPWM原理(二)
  5. SVPWM原理(三)
  6. 坐标变换
  7. 坐标变换验证
  8. HALL传感器测量电角度
  9. ADC采样时机
  10. 源码解析_HALL传感器中断
  11. 源码解析_系统嘀嗒定时器中断
  12. 源码解析_ADC采样中断(一)
  13. 源码解析_ADC采样中断(二)
  14. [ST FOC电机库串口通信协议](https://www.bilibili.com/video/BV1Fs411p7Zc?p=74)
  15. 源码解析_总结

### 澄远FOC
1. [课程介绍](https://www.bilibili.com/video/BV1n7421o798/?)
2. [PMSM调速逻辑及控制方式](https://www.bilibili.com/video/BV1Ps421u7ja/?)
3. [SVPWM原理及实现](https://www.bilibili.com/video/BV1eM4m1U7hi?)
4. [VF控制的仿真与代码生成](https://www.bilibili.com/video/BV1ux4y187ua?)
5. 多模式FOC控制系统
   1. [统一框架设计](https://www.bilibili.com/video/BV1kJ4m1T7Kp?)
   2. [电流环设计](https://www.bilibili.com/video/BV1VtvveNEFD?)
   3. [IF控制](https://www.bilibili.com/video/BV1iUsMezE4o?)
   4. [速度环设计](https://www.bilibili.com/video/BV1wL4JeUEEA?)
6. Hall速度控制
   1. [传感器测量速度与电角度](https://www.bilibili.com/video/[BV1U6ieYgEX8?)
   2. [建模+CubeMX配置+代码集成](https://www.bilibili.com/video/[BV1qzckegEY3?)
   3. [Hall自学习](https://www.bilibili.com/video/BV15cTWzxE6W?)
7. 龙伯格无感控制
   1. [数学模型推导与定点化处理](https://www.bilibili.com/video/BV1FWTkzpEom?)
   2. [零速闭环启动的设计与实现](https://www.bilibili.com/video/BV1ZtTkzUEUe?)
   3. [IF启动切观测器](https://www.bilibili.com/video/BV15EguztEUs?)
8. 非线性磁链无感FOC
   1. [数学模型推导与定点化处理](https://www.bilibili.com/video/BV1hmtQzJEBf?)
   2. [零速闭环启动的设计与实现](https://www.bilibili.com/video/BV1D1tQzDERt?)

### 稚晖
[深入浅出讲解FOC算法与SVPWM技术](https://zhuanlan.zhihu.com/p/147659820)



## 其他
### 其他学习资料

[FOC?看这篇文章就够了 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/364247816)

[如何从零开始学习电机控制 - YouTube](https://www.youtube.com/watch?v=cQY4S9r86Rg&list=PLX9pXgLRG1A8Qt8bdvsia8S_cK4MKL_ZU)

### 视频课程

##### FOC

[做了个FOC驱动器，成本仅50元，开源了！精度很高！](https://mp.weixin.qq.com/s/N4F2gCVMJB69gCgtm4RpBg)
[YoungFOC——年轻人的第一块SimpleFOC验证板](https://www.bilibili.com/video/BV1V24y1c7AN/)
[【开源】如何制作一个超迷你FOC无刷驱动器](https://www.bilibili.com/video/BV1i84y1k7tk/?spm_id_from=333.999.0.0)  
[【开源】自制超级无敌宇宙超迷你FOC磁场定向控制的无刷伺服电机矢量控控制器【烂核】](https://www.bilibili.com/video/BV1NW4y157Ls/?spm_id_from=333.999.0.0)  
[【开源】自制超级无敌宇宙超迷你FOC磁场定向控制的无刷伺服电机矢量控控制器【烂核】](https://www.bilibili.com/video/BV1NW4y157Ls/?spm_id_from=333.999.0.0&vd_source=8628b70b8921792574747e076af0f11a)
[【开源】成本仅25元的超迷你FOC无刷电机控制驱动一体板](https://www.bilibili.com/video/BV1Ur4y1T7fG/?spm_id_from=333.999.0.0)  
[新春开源FOC计划·进度100%](https://www.bilibili.com/video/BV1aY411X7WF/?spm_id_from=333.999.0.0)  
[「开源」不足百元的SimpleFOC无刷电机驱动板](https://www.bilibili.com/video/BV1md4y1V7iS/?spm_id_from=333.999.0.0)  
[【自制】听说这是最简单的无刷电机FOC控制器？自制鲲FOC无刷电机控制器软硬件开源_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lc411t7Sq/?spm_id_from=333.1007.tianma.3-4-10.click&vd_source=8628b70b8921792574747e076af0f11a)
[FOC算法详解之Clark变换与Park变换](https://www.bilibili.com/video/BV1ZR4y1G7SC/?spm_id_from=333.999.0.0)  
[FOC驱动器适配工业电机（上）](https://www.bilibili.com/video/BV1N14y1N77U/?spm_id_from=333.999.0.0)  
[龙伯格观测器PLL--STM32G0无刷电机控制](https://www.bilibili.com/video/BV12P4y1972g/?spm_id_from=333.999.0.0)  
[PMSM_FOC控制入门—从两个变换到高阶滑模系列视频（完结）](https://www.bilibili.com/video/BV1QL411d7oL/)
[电机测功机到货啦，接下来要做BLDC PMSM FOC矢量控制，全部算法采用MATLAB建模 代码生成](https://www.bilibili.com/video/BV1dA411g7NL/)
[基于STM32F1的10KHZ电流环一体FOC电机，支持CAN通信](https://www.bilibili.com/video/BV1Dx4y1M7Co/?spm_id_from=333.999.0.0)  
[【DIY】10分钟用自动控制原理带你搞定电流环](https://www.bilibili.com/video/BV1Dd4y1j7ZL/?spm_id_from=333.999.0.0)  
[【干货|开源MIT Min cheetah机械狗设计(十二)】电机控制器FOC算法剖析](https://zhuanlan.zhihu.com/p/648074415)
[ESP32 NOW无线通讯 simplefoc无刷电机互联控制](https://www.bilibili.com/video/BV1mW4y1G7vj/?spm_id_from=333.999.0.0)  
[【自制开源】FOC无刷电机驱动器基于SimpleFoc版本](https://www.bilibili.com/video/BV1ra411B7ge)
[SimpleFoc无刷电机闭环控制，硬件已开源](https://www.bilibili.com/video/BV1QR4y1c78x)
[DIY力回馈方向盘之直流有刷电机的选择](https://www.bilibili.com/video/BV1YA411w7T7)
[AQMD6030NS大功率直流有刷电机驱动器正反转及调速方](https://www.bilibili.com/video/BV1Ak4y1U7ys)
[KE0104 双路大功率直流电机驱动扩展板](https://www.bilibili.com/video/BV1DV411B7C6)
[【开源】100A宽压无刷电机驱动（电调）功率板pcb设计](https://www.bilibili.com/video/BV1gq4y127r6)
[直流电机驱动电路采用大功率功率管 控制30A电机马达的](https://www.bilibili.com/video/BV1Qy4y1S7DZ)
[FICO28L无刷FOC驱动，基于SIMPLE FOC](https://www.bilibili.com/video/BV1c5411U7i7)
[无感情咕区up｜超迷你双路Foc带wifi蓝牙的无刷控制器 大小只有](https://www.bilibili.com/video/BV1T94y1d7EK)
[DIY触觉输入旋钮：BLDC电机+圆形LCD](https://www.bilibili.com/video/BV1Ku411z7GW)
[开源｜低成本foc驱动器 基于stm32f103](https://www.bilibili.com/video/BV15v4y1U7ZJ/)
[【硬件工程师修仙之路】无刷电机FOC案例](https://www.bilibili.com/video/BV1vN4y1P7EM/)
[STM32无刷电机控制-电流环PI参数计算](https://www.bilibili.com/video/BV1yG411V7Nn/)
[[机器人控制]透彻讲解，SVPWM无刷电机FOC控制，Clark变换及Park](https://www.bilibili.com/video/BV1Pd4y197Uq/)
[【自制】超迷你 Foc控制器，机器人心脏。](https://www.bilibili.com/video/BV1BY4y1j7U6/)

##### 六步换向

[(BLDC)无感直流无刷电机驱动原理](https://www.bilibili.com/video/BV1SQ4y117mq/?spm_id_from=333.999.0.0)  
[开源闭环电机驱动器](https://mp.weixin.qq.com/s/DbYpJ7IsQRpgqTc7Uy6VOw)

##### 直流马达控制

[【DIY】10分钟用自动控制原理带你走进直流电机PID速度环调速](https://www.bilibili.com/video/BV1iv4y1R74Y/?spm_id_from=333.999.0.0)  

##### 驱动器硬件

[这是什么神仙芯片，电机所有控制功能全集成？](https://www.bilibili.com/video/BV1rN41117he/)
[开源STM32G431CBU6大疆无人机官方电调PCB，开源PAC5223电调，德州仪器TMS320F28027](https://www.bilibili.com/video/BV1Ex4y1T7eJ/)
[大疆无人机电调电路分析2,德州仪器TMS320F28027F+DRV8301 DRV8313 PAC5223 ESC1000 ESC2000 ESC3000](https://www.bilibili.com/video/BV1mY4y1y7TD/)
[电机震动大怎么办？自己做个动平衡仪吧](https://www.bilibili.com/video/BV1DG411o7mH/)
[智能车TC264主驱一体国一硬件方案开源（TC264裸片方案 功率控制全隔离 2020双车组）](https://www.bilibili.com/video/BV1d84y1s77A/?spm_id_from=333.999.0.0) 

##### 电机本体

[600克57牛米关节电机](https://www.bilibili.com/video/BV1Pu411G7M2/)
[国内第一台六自由度磁悬浮平面电机样机和六自由度驱动完整展示](https://www.bilibili.com/video/BV1JZ4y1o7FM)

##### 减速器

[【开源】自制迷你摆线减速器基于2204无刷电机全3D打印](https://www.bilibili.com/video/BV11d4y1L7zm/?spm_id_from=333.999.0.0)  

##### 带屏旋钮

[我们开发了一个实用的SmartKnob智能旋钮](https://www.bilibili.com/video/BV1wg411n7Bm/?spm_id_from=333.999.0.0) 
[虽然程序写的一坨答辩，但还是开源了   旋转按钮](https://www.bilibili.com/video/BV1po4y1t7Jr/)
[开源 X-Knob：Smart konb 的 X-TRACK UI (lvgl) 实现智能旋钮，支持Surface Dial](https://www.bilibili.com/video/BV1N3411Z764/?spm_id_from=333.999.0.0)  
[【开源】力控旋钮 十分钟教你如何成就优秀毕设](https://www.bilibili.com/video/BV1bf4y1f7p3/?spm_id_from=333.999.0.0)  
[【全球优秀机器人开源项目系列】DIY触觉输入旋钮：](https://www.bilibili.com/video/BV1d44y1V7j1)

##### 作品演示

[新能源汽车电机控制器简介](https://www.bilibili.com/video/BV1nv4y1x79J/)
[价值1400元的电动车控制器设计的怎么样？给大家详细拆解一下](https://www.bilibili.com/video/BV1yq4y1u7bQ/?spm_id_from=333.880.my_history.page.click&vd_source=8628b70b8921792574747e076af0f11a)
[挑战全网性价比最强57步进闭环驱动，超大力矩、中低速超静音超低震动、高速急停急启，支持无限位回零](https://www.bilibili.com/video/BV1Wh4y1f7a3/)
[小米暴打友商！CyberGear机器人关节测试+保姆级驱动教程](https://www.bilibili.com/video/BV1ym4y1N74J/)
[【全网最详细】暴拆分析小米 CyberGear 机器人关节电机](https://www.bilibili.com/video/BV1qN4y197cr/)
[机器人+持续发力 伺服轮模组硬件接线示意](https://www.bilibili.com/video/BV1gh41177nu/)

##### 其他

[中科大RM电控合集](https://www.bilibili.com/video/BV1z14y1G77V/?spm_id_from=333.788&vd_source=8628b70b8921792574747e076af0f11a)
[一不小心搞了个万用型电机驱动板，无刷无感驱动，无刷有](https://www.bilibili.com/video/BV15v411s7jQ)

[你知道现在的两轮车控制器有多卷吗？ (qq.com)](https://mp.weixin.qq.com/s/haHH4A47wJG-8PELkoiqSA)
[直流无刷电机的控制方式，了解一下~ (qq.com)](https://mp.weixin.qq.com/s/QmeUL3xKQPTivyRI5E5CGg)
[电机控制算法工程师需要哪些能力？](https://www.zhihu.com/question/341791865/answer/2452663309)
[月薪 4 万人民币是一种怎样的感受？](https://www.zhihu.com/question/36996031/answer/2057851119)
[【自制FOC驱动器】深入浅出讲解FOC算法与SVPWM技术](https://zhuanlan.zhihu.com/p/147659820)

[伺服驱动软件（一）-FOC让电机转起来（CubeMX配置+C代码实现）](https://zhuanlan.zhihu.com/p/572855026)
[ST电机库5.0完全开源了。这对电机控制软件工程师有何影响？](https://www.zhihu.com/question/268883121/answer/343760278)
[电机控制打工仔两年工作经验分享](https://zhuanlan.zhihu.com/p/367462218)
[伺服基础知识简介（一）](https://zhuanlan.zhihu.com/p/261667038)
[电机驱动底层软件工程师具体工作内容是什么?](https://www.zhihu.com/question/453187399/answer/1825263438)
[电机技术面试总结](https://zhuanlan.zhihu.com/p/51788339)
[从降本增效到电机控制知识树](https://zhuanlan.zhihu.com/p/604830277)
[如何设计大功率 BLDC 控制器（一）](https://zhuanlan.zhihu.com/p/612887510)
[无刷电机原理及应用（FOC、Clarke变换、Park变换、SVPWM、SPWM）](https://zhuanlan.zhihu.com/p/542899672)
[电控入门之四（电机FOC，如何动能回收）](https://zhuanlan.zhihu.com/p/271678646)
[五万字一文读懂 电动汽车制动能量回收系统（BERS/RBS)](https://zhuanlan.zhihu.com/p/574084925)
[电机控制方向的核心是什么？](https://www.zhihu.com/question/62598014/answer/3152518072)
[【空中课堂】S32K3 + Simulink：软硬结合，快速搞定汽车电机控制开发！](https://www.bilibili.com/video/BV1h54y1M7Kt/)
[【专家访谈】EtherCAT取得如此成功的因素](https://www.bilibili.com/video/BV1vc411u7vZ/)
[步进伺服产品 梯形和S型加减速 表现对比](https://www.bilibili.com/video/BV1CM411L7oB/)
[COMSOL电磁模块-电机仿真&和Maxwell结果对比](https://www.bilibili.com/video/BV1uP411G7in/)
[硬件培训----常见电机和电机驱动](https://www.bilibili.com/video/BV17G4y1y76N/?spm_id_from=333.999.0.0)  
[从零开始自己编写FOC 算法篇3：快速正弦算法](https://www.bilibili.com/video/BV19M4y1Q7qa/?spm_id_from=333.999.0.0)  
[BLDC有感启动](https://blog.csdn.net/weixin_43626341/article/details/112599175)
[步进电机权威平台_中国步进电机网](http://www.zgbjdj.com/)

##### FOC
[STM32 PMSM FOC SDK V3 2讲座](https://www.bilibili.com/video/BV1EW411D7ZF?vd_source=8628b70b8921792574747e076af0f11a)

  ###### FOC基本概念
  
  [外行人怎么去理解foc电机控制](https://www.bilibili.com/video/BV19E411g7jj)
  [漫谈伺服电机](https://www.bilibili.com/medialist/play/watchlater/BV1r94y1Z7sD)
  [无刷电机学习日志第4期：需要哪些基础知识？](https://www.bilibili.com/video/BV1x8411x7RM/)
  [开环FOC跟我一起撸代码](https://www.bilibili.com/medialist/play/watchlater/BV1FY4y1i7Pm)
  
  ###### FOC硬件
  
  [第三期 03直流电机驱动原理及元器件选型](https://www.bilibili.com/video/BV1Nt4y1y7xj)
  [基于ir2103的全N Mos驱动板开放资料啦，满足大功率的](https://www.bilibili.com/video/BV1kh411U7pj)
  [能实现调速的电机驱动功率器件IRF3205还不够好用？维库](https://www.bilibili.com/video/BV1qZ4y1k75v)
  [低压直流无刷电机驱动芯片TMC6300](https://www.bilibili.com/video/BV1pA4y1D7BS)
  [业界体积最小的直流伺服TMCM-1617](https://www.bilibili.com/video/BV1iF411u7ag)
  
  ###### FOC开源项目
