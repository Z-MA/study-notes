## 测量工具

### 万用表

[年轻人的，第二个电流表（完整开源）](https://www.bilibili.com/video/BV1LV4y1J7Kd/)
[开源ESP32彩屏WIFI智能万用表制作过程：成品外观、功能](https://www.bilibili.com/video/BV1Zr4y1s7A1?spm_id_from=333.999.0.0)

### 示波器

#### 主要用途

1. **实时波形显示**
   
   - 直观显示电压随时间变化的曲线（时域分析），用于调试电路、验证信号完整性。

2. **测量信号参数**
   
   - 测量幅度、频率、周期、上升/下降时间、占空比等。

3. **故障诊断**
   
   - 检测信号异常（如噪声、失真、毛刺）、通信协议解码（I2C、SPI、UART等）。

4. **相位分析**
   
   - 多通道示波器可比较不同信号的相位差，适用于电源、电机控制等场景。

5. **频域分析**
   
   - 结合FFT功能，分析信号的频谱成分（如谐波、干扰）。

#### 核心参数

1. **带宽（Bandwidth）**
   
   - **定义**：示波器能准确测量的最高频率（通常指-3dB衰减点）。指示波器前端模拟电路（放大器/衰减器）的频响特性，通常以-3dB衰减点对应的频率为标称值（例如100MHz带宽表示输入100MHz正弦波时，幅度显示为实际值的70.7%）。决定示波器能测量的最高频率分量。
   
   - **选择依据**：带宽 ≥ 3倍信号最高频率（例如，测量100MHz信号需300MHz带宽）。

2. **采样率（Sample Rate）**
   
   - **定义**：每秒采集的样本点数（如1GS/s表示每秒10亿次采样）。指ADC（模数转换器）每秒对信号采样的次数，单位是**Sa/s**（如1GS/s表示每秒10亿次采样）。决定信号时间轴的细节还原能力。
   
   - **关键点**：采样率需 ≥ 2倍信号最高频率（即采样率 ≥ 2×带宽，奈奎斯特定理），实际建议 ≥ 4倍以避免混叠。100MHz带宽示波器，推荐采样率 ≥ 400MS/s（实际中高端示波器可能提供1GS/s以上）。

3. **存储深度（Memory Depth）**
   
   - **定义**：单次采集可存储的样本点数，影响波形细节保留能力。（如1Mpts表示100万个点）
   
   - **计算关系**：存储深度 = 采样率 × 捕获时间。高存储深度适合长时基下的高频信号分析。

4. **垂直分辨率（ADC位数）**
   
   - **定义**：模数转换器的位数（如8bit、12bit），决定电压测量的精细程度。
   
   - **影响**：高分辨率（12bit以上）适合小信号或高动态范围测量。

5. **上升时间（Rise Time）**
   
   - **定义**：示波器对快速边沿信号的响应能力，与带宽相关（公式：上升时间 ≈ 0.35/带宽）。
   
   - **示例**：100MHz带宽示波器的上升时间约为3.5ns。

6. **输入通道数**
   
   - 常见2/4通道，多通道适合同步测量多个信号（如差分信号、三相电源）。

7. **触发功能（Trigger）**
   
   - 支持边沿、脉宽、视频、协议触发等，确保稳定捕获特定事件（如异常脉冲）。

8. **波形捕获率（Waveform/s）**
   
   - 每秒可捕获的波形次数，高捕获率提高偶发事件（如毛刺）的发现概率。

#### 其他重要特性

- **探头兼容性**：高压/差分探头扩展测量范围。

- **软件功能**：自动测量、数学运算、协议解码、眼图分析等。

- **接口与扩展**：USB、LAN、支持远程控制或数据导出。

#### 选型

1. **带宽优先**
   
   - 先根据信号最高频率选择带宽（如测量100MHz信号选300MHz以上带宽），再匹配采样率。
   
   - **高频信号**：更依赖高带宽（例如1GHz以上示波器测高速串行信号）。

2. **采样率验证**
   
   - 确保采样率足够还原信号细节（例如测10ns的脉冲，需采样间隔远小于10ns）。
   
   - **公式**：时间分辨率 ≈ 1/采样率（如1GS/s对应1ns分辨率）。

3. **存储深度的影响**
   
   - 高采样率 + 长时基需要大存储深度（例如1GS/s采样率下捕获1ms波形，需1M点存储深度）。

#### 应用场景示例

- **数字电路调试**：需高带宽（≥200MHz）、协议解码功能。

- **电源分析**：需12bit高分辨率、纹波测量能力。

- **射频信号**：结合频谱分析功能（如混合域示波器）。

[【已开源】STM32G431示波器笔](https://www.bilibili.com/video/BV1CG4y1L7An/?spm_id_from=333.999.0.0)

### 功率分析仪

#### 主要用途

**1. 电能质量分析**

- 测量电压、电流的**谐波失真（THD）**，评估电网或设备的电能质量。

- 检测**电压波动、闪变、不平衡度**等，确保符合国际标准（如IEC 61000-4-30）。

**2. 功率与效率测量**

- 精确测量**有功功率（W）、无功功率（VAR）、视在功率（VA）、功率因数（PF）**。

- 计算**效率（η）**，如逆变器、电机、电源转换器的输入/输出效率。

**3. 新能源系统测试**

- 光伏逆变器（PV Inverter）的**MPPT效率、转换损耗**分析。

- 风力发电机的**功率曲线**测试。

- 电池充放电过程的**能量损耗**评估。

**4. 电机与驱动系统测试**

- 测量电机的**输入/输出功率、扭矩-转速特性**。

- 评估变频器（VFD）的**开关损耗、谐波影响**。

**5. 家电与工业设备能效测试**

- 符合**能源之星（Energy Star）、ErP指令**等能效标准。

- 分析待机功耗、动态负载下的能耗。

#### 核心参数

**1. 带宽（Bandwidth）**

- **定义**：仪器能准确测量的最高信号频率，通常以**-3dB衰减点**为基准。

- **选择依据**：
  
  - 普通工频（50/60Hz）测量：1kHz带宽足够。
  
  - 电力电子（如PWM、变频器）：需**500kHz~5MHz**带宽以捕获高频开关成分。
  
  - 高频应用（如GaN/SiC器件）：可能需要**10MHz+**带宽。

**2. 采样率（Sample Rate）**

- **定义**：ADC每秒采样的点数，影响波形细节的还原能力。

- **典型值**：
  
  - 工频测量：100kS/s~1MS/s。
  
  - 高频开关分析：≥5MS/s（如横河WT5000支持10MS/s）。

**3. 精度（Accuracy）**

- **定义**：测量值与真实值的偏差，通常以**百分比（%）**表示。

- **关键指标**：
  
  - **基本电压/电流精度**：±0.1%~±0.02%（高端型号）。
  
  - **功率精度**：±0.05%~±0.2%（受相位误差影响）。

- **校准标准**：需符合**IEC 61869、IEEE 1459**等规范。

**4. 通道数（Channels）**

- **常见配置**：
  
  - **2~4通道**：适用于单相或三相平衡系统。
  
  - **6~8通道**：用于多相电机、双逆变器系统等复杂测试。

- **同步采样**：所有通道需严格同步（时延<1μs），避免相位误差。

**5. 电流测量方式**

- **直接输入**：小电流（<5A）可直接接入。

- **电流传感器**：
  
  - **电流钳（AC/DC）**：适用于非侵入式测量（如LEM、Hioki传感器）。
  
  - **罗氏线圈（Rogowski Coil）**：高频大电流测量（如开关电源浪涌电流）。
  
  - **分流器（Shunt）**：高精度但需断开电路。

**6. 谐波分析能力**

- **谐波阶次**：通常支持**50~100次谐波**（符合IEC 61000-4-7）。

- **FFT分辨率**：影响谐波分析的精细度（如4096点FFT）。

**7. 功率计算功能**

- **测量模式**：
  
  - 瞬时功率、平均功率、积分能量（Wh、kWh）。

- **特殊计算**：
  
  - 三相不平衡度、峰值因数（Crest Factor）、纹波功率。

**8. 数据存储与通信接口**

- **存储深度**：影响长时间录波能力（如1GB存储可记录数小时数据）。

- **接口**：
  
  - **USB/ LAN/LXI**：远程控制与数据传输。
  
  - **GPIB/ CAN**：工业自动化集成。

#### 其他重要特性

#### 选型

1. **带宽与采样率匹配**：高频应用（如SiC/GaN）需高带宽（≥5MHz）+高采样率（≥10MS/s）。

2. **精度 vs. 成本**：实验室级精度（±0.02%）价格高昂，工业测试可选±0.1%。

3. **传感器兼容性**：确保电流传感器带宽与仪器匹配（如100kHz电流钳不能测1MHz信号）。

4. **软件功能**：是否支持自定义算法、自动化测试（如Python/ LabVIEW驱动）。

| **应用场景**  | **关键参数要求**              | **推荐型号示例**       |
| --------- | ----------------------- | ---------------- |
| 工频电能质量分析  | 带宽1kHz，精度±0.1%，50次谐波    | 日置PW3390         |
| 光伏逆变器效率测试 | 带宽500kHz，6通道，±0.05%功率精度 | 横河WT5000         |
| 电机驱动系统测试  | 带宽5MHz，8通道，支持扭矩-转速计算    | 周立功PA8000        |
| 高频开关电源分析  | 带宽10MHz，10MS/s采样，罗氏线圈支持 | Keysight PA2203A |

#### 应用场景实例

#### 和示波器的区别

### 逻辑分析仪

#### 用途

#### 参数

[项目分享| 开源逻辑分析仪nanoDLA，一起动手做一个吧！ (qq.com)](https://mp.weixin.qq.com/s/6rNvOR3p6aASlrd9CygLSw)

## 焊接工具

### 烙铁

[部分已开源&抽奖】都2023年了，还不给你的烙铁升级一下？](https://www.bilibili.com/video/BV1k84y187Vf/?spm_id_from=333.999.0.0)  
[真·智能？万众期待的智能烙铁来了，看看它到底好在哪](https
[DIY自制Arduino开源高性能T12焊台(电烙铁)](https://www.bilibili.com/video/BV1hU4y1h7u2)
[开源 ESP32 T12烙铁 新UI 预告](https://www.bilibili.com/video/BV1s64y1v7mY)www.bilibili.com/video/BV1j14y127fr/)
[又又又一款Mini T12 Arduino便携条形烙铁 欢迎白嫖](https://www.bilibili.com/video/BV1vf4y1B7Xa/)

### 加热台

[【开源】加热台量产计划](https://www.bilibili.com/video/BV1cD4y177ec/?spm_id_from=333.999.0.0)  
[（真的可以白嫖）制作一个免费的高温焊台](https://www.bilibili.com/video/BV14L4y1e7eN/)
[【开源】加热台量产计划](https://www.bilibili.com/video/BV1Wg41167od/)
[便携加热台V2.0 开源迷你数显加热台](https://www.bilibili.com/video/BV1AT4y1a7Hz)

### 回流焊

[开源回流焊](https://www.bilibili.com/video/BV1wU4y1S7AF)
[只花80元，更是一件美事！[知识] [回流焊炉]](https://www.bilibili.com/video/BV1Wu411U79s/)

### 过滤风扇

[[开源]焊接烟雾过滤小风扇](https://www.bilibili.com/video/BV1Eo4y1w7dJ/)

### 点焊机

[ESP32便携点焊机/开源自制/超级电容](https://www.bilibili.com/video/BV1d84y177io/)

### 贴片机

[贴片机-进度99％](https://www.bilibili.com/video/BV1As4y1B72z/)
[【硬核】爆肝一个月，手搓贴片机，效果怎么样？](https://www.bilibili.com/video/BV1Cm4y1g7Qi/)

## 辅助工具

### UPS

[开源准UPS迷你交换机 嵌入式必备神器](https://www.bilibili.com/video/BV1rx4y1j7mi/?spm_id_from=333.999.0.0)  

### 电子显微镜

[自制扫描隧道显微镜（二）：压电陶瓷扫描头 Scanning Tunneling Microscope (STM )](https://www.bilibili.com/video/BV11e4y1w7JF/)
[【硬核】我用3D打印的STM看到了碳原子 自制扫描隧道显微镜【终】](https://www.bilibili.com/video/BV1p94y1z7jX/)

### 红外成像

[[开源]红外热成像仪 Nahida_Eyes_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1mM4y1Z7rE/?spm_id_from=333.999.0.0&vd_source=8628b70b8921792574747e076af0f11a)

### 激光雕刻机

[开源机器人，激光雕刻，SCARA ROBOT DIY，100%开源](https://www.bilibili.com/video/BV1dM41187CH/?spm_id_from=333.999.0.0)  
[自制迷你雕刻机 第三集 伺服电机](https://www.bilibili.com/video/BV1MB4y1U7xE)
[diy数控车铣床，第四篇，主轴箱体](https://www.bilibili.com/video/BV12k4y127Fh/)
[【开源】DIY CNC雕刻机 图纸分享](https://www.bilibili.com/medialist/play/watchlater/BV1gu411S7uq)
[关于激光雕刻机的GBRL的引脚定义，和inkscape - 机械坊 - 极客工坊 - Powered by Discuz!](https://www.geek-workshop.com/thread-10478-1-1.html)
[【Knight 教程】教你制作Co2激光切割机](https://www.bilibili.com/video/BV1XX4y1G7cK)
[500块DIY一台某宝1000多的激光雕刻机，全套资料开源！](https://www.bilibili.com/video/BV1gf4y1H7Bc)
[2300元拥有一套小型雕刻机，包括电子箱回家插电脑就可以使用，并](https://www.bilibili.com/video/BV1oY411E7cR)

### 线切割

[【全球优秀机器人开源项目系列】基于Arduino DIY 线切割机](https://www.bilibili.com/video/BV1Lg411s7wC/?spm_id_from=333.999.0.0)  

### 其他

[会焊电路板 如何低价的获得一个自制的机械键盘？](https://www.zhihu.com/question/383361725/answer/3137462230)
[一种调试工具](https://www.bilibili.com/video/BV1AM4y1v7Du/)
[DIY 力反馈踏板 国外网友开源](https://www.bilibili.com/video/BV1f14y1o7TK/)
[基于 Arduino 的 DIY 齿轮切割机](https://www.bilibili.com/video/BV1e8411K72m/?spm_id_from=333.999.0.0)  
[【自制低价】全自动翻页扫描仪、书刊招描仪、全自动书籍扫描仪，自动翻页](https://www.bilibili.com/video/BV1nh4y1Q7P3/)
[diy低成本3d扫描仪，组装完成](https://www.bilibili.com/video/BV1Ju4y1v7SU/)

[带大家参观一下我们重新改造的工作室](https://www.bilibili.com/video/BV1KQ4y1o7mQ)
[STM32小项目-剪线机 附赠程序](https://www.bilibili.com/medialist/play/watchlater/BV1eZ4y117rn)=
[（开源）SWD无线下载器固件烧录和使用教程](https://www.bilibili.com/video/BV1pg411R7KU/)

### 待分类

[小白想接触电子焊接，什么牌子电子维修工具比较好?](https://www.zhihu.com/question/268167197/answer/1966981184)
示波器入门第一课，基础测试仪器概述！
https://www.bilibili.com/video/BV1W84y1J7tE/

最近有不少朋友问道，搭建一个电子实验室是不是要很多钱？其实如果只是业余爱好的话，搭建一个轻量级的实验室，费用不是很贵，咱们普通人也是可以尝试的。

[![](https://mmbiz.qpic.cn/mmbiz_png/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUzEI2MbveEan7icw7ib3RZCrMWcr7l25bG7IicSySJfHxDSNbw2QmUjMibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUzEI2MbveEan7icw7ib3RZCrMWcr7l25bG7IicSySJfHxDSNbw2QmUjMibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

下面进行分类主要有：

**仪器类：**

1. 首先是**电源**，首选双路可调稳压电源，一般几百块钱拿下了。能符合大部分的板机设计要求。
2. **万用表**必不可少，福禄克，胜利牌的就行，一般几十块或几百不等。
3. **示波器**是工程师必备神器，泰克，选个普源RIGOL其实就够用了，预算充足可以买好点，预算紧张的话，其实1000多也能拿下普源了，一般调试其实也够用的。

**焊接工具：**

1. **焊台**必不可少，0~500这个区间，可以拿下了，记得用恒温焊台，温度可调，升温快的；
2. **热风枪**，焊接，拆芯片都很好用，0~500这个区间，温度可调，升温快的；
3. **焊接和风枪一体**，功能和上面一样，优点是非常省空间，我比较推荐这种风格的；
4. **恒温加热台**，焊接贴片的时候，还是比较好用的，几百可以拿下；
5. **杂七杂八的**，比如镊子，焊锡，锡膏，松香，助焊剂，都是需要的；

**测量工具：**

1. 游标卡尺是必备的，可以选择机械游标卡尺，也有电子游标卡尺，推荐后者，简单好用；
2. 各种调试器，不赘述了，一般都有；
3. 电子显微镜，这个看情况吧，有时候看看引脚有没有虚焊，还是很好用的；

**五金工具：**

1. 各种钳子；
2. 各种螺丝刀；
3. 小型电动钻，可以拧螺丝，可以打孔；
4. 热熔枪；

**选配部分：**

1. 宽屏电脑，目前市面上21:9的34寸显示器不错，或者配个双屏；
2. 收纳盒，各种电子元器件，可以收拾地很好；
3. 3D打印机，一千到几万都有，看自己需求和预算吧；
4. 雕刻机，看需求；
5. 护眼台灯，经常伏案而坐，保护眼睛很重要；
6. 人体工程学座椅，经常坐着，这个钱其实花的也不冤枉；
7. 灭火器，记得注意安全；

最后，再强调一下，比较重要的，记得再配个灭火器，注意安全。

总结一下以上的设备，其实几千块差不多可以置办下来，另外大家还有什么补充，欢迎在下面留言讨论。

所以最近逛论坛的时候，很羡慕那些在家有一个自己实验室的工程师。这样就可以把自己的想法实现出来。下面分享一下。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUUd0Tic7W6TJRbf9uiaHyUtNlADKbGZSibwhSZrQpAuMldnl9ghjPmaWqQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUUd0Tic7W6TJRbf9uiaHyUtNlADKbGZSibwhSZrQpAuMldnl9ghjPmaWqQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUVeJFNM1ePrCqibNE6Hh5OFtiaibhc2QTMXYNibmNvoQDxvLr7nvXJPz8Gw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUVeJFNM1ePrCqibNE6Hh5OFtiaibhc2QTMXYNibmNvoQDxvLr7nvXJPz8Gw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUVtGFlxSrwajf1tvlsAN6zlExPvoMxHptWhCjeako1nxmTqaCJK1icJQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUVtGFlxSrwajf1tvlsAN6zlExPvoMxHptWhCjeako1nxmTqaCJK1icJQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUKicibTWfBjMeLlzdKWH880v2ULC9gojISaz6HbsNJP87XiagsoGCu1CoQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUKicibTWfBjMeLlzdKWH880v2ULC9gojISaz6HbsNJP87XiagsoGCu1CoQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUnnOP7tsjgoX3xtyqMTbwPa8iaUQxkkwhNeOibRVg2nhZ6W8ddticLYPoQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUnnOP7tsjgoX3xtyqMTbwPa8iaUQxkkwhNeOibRVg2nhZ6W8ddticLYPoQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUlzx3wHsv1oLUGsLWOrfibT1dqicnexpZVpoCfpcjRqG88buMMuanJSCA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUlzx3wHsv1oLUGsLWOrfibT1dqicnexpZVpoCfpcjRqG88buMMuanJSCA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUewWGs3ZkXPjoDadAmRZpzV8bww2tPBGwqIEkom31TIIFictibbqP5GcQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUewWGs3ZkXPjoDadAmRZpzV8bww2tPBGwqIEkom31TIIFictibbqP5GcQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUx8iak1ZJjibibqlKiaGYicE0zV6SlrLGgXqFQwyjC4OEdj709cR4IEuJsgQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUx8iak1ZJjibibqlKiaGYicE0zV6SlrLGgXqFQwyjC4OEdj709cR4IEuJsgQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUIn4hZvZ6DBz0ohCpKEYFAP5yZxBvfH4kgC5ITtRJmKrvwQqYOVVSsg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUIn4hZvZ6DBz0ohCpKEYFAP5yZxBvfH4kgC5ITtRJmKrvwQqYOVVSsg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU6YkJQboJNH10dDCY9TX7UcIFLSYQBYXEknzotT9t7icytKiawFosrW4g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU6YkJQboJNH10dDCY9TX7UcIFLSYQBYXEknzotT9t7icytKiawFosrW4g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUmRlrwmhDUnOAb8Yq6kXvVM2IQgpplXAw8ZzkibaMyzYy6mQZhLibhdNw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUmRlrwmhDUnOAb8Yq6kXvVM2IQgpplXAw8ZzkibaMyzYy6mQZhLibhdNw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUiaDpveIDgV9p2R7UW7huTEZAo92nzQYbtOvnMpTib7fmaWBODiaYla6XQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUiaDpveIDgV9p2R7UW7huTEZAo92nzQYbtOvnMpTib7fmaWBODiaYla6XQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUTFhuK8icwRmWTxBn1EgvGicicZTmfeXHbAxyRsTNt5kohzuL8fibajC1Kg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUTFhuK8icwRmWTxBn1EgvGicicZTmfeXHbAxyRsTNt5kohzuL8fibajC1Kg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUAYxzuf77yOZhEKOLhCcFBQexgVCaG2dibuvTYVibLicFSAqLVibxyg4Yng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUAYxzuf77yOZhEKOLhCcFBQexgVCaG2dibuvTYVibLicFSAqLVibxyg4Yng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU1h0VZtBNicuNO2QicUeNwvXXAITY1RjIrOq1uxSSNa5dojHOfb0ABJRA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU1h0VZtBNicuNO2QicUeNwvXXAITY1RjIrOq1uxSSNa5dojHOfb0ABJRA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUZlLaZOkpUyR7N9dicRDvLOOXCicttujRvLb3icpSpiaXrUb2I1ziaZ7EnBw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUZlLaZOkpUyR7N9dicRDvLOOXCicttujRvLb3icpSpiaXrUb2I1ziaZ7EnBw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUNRtD68jbBQu8wp33Z5zbNo1pVHbic7kmKMStolVk3XN7PF0cgKy43iaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibUNRtD68jbBQu8wp33Z5zbNo1pVHbic7kmKMStolVk3XN7PF0cgKy43iaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU2j1fBNQXjQjpAxBX4z1t384mwuAL4ebHrYnWmTAxooFK3CicNRIexGg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnY7ModibCk7f2YbDCYpVdkibU2j1fBNQXjQjpAxBX4z1t384mwuAL4ebHrYnWmTAxooFK3CicNRIexGg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)