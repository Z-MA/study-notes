
# 硬件设计

## 器件

### 资料查询

[芯片查询网-中国最大的IC资料查询网站,找datasheet资料，就上pdf啦](http://www.pdf.la/)

### 常见封装

![封装1](https://mmbiz.qpic.cn/mmbiz_png/9FT4EOoS5ciaNJdpqS1VseFS05jbqyeyRIXk1TG35Qz4jpEAficSvftIa4YHV7jXvbib2xPMEo0yCPjd2HzEic31XA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![封装2](https://mmbiz.qpic.cn/mmbiz_png/9FT4EOoS5ciaNJdpqS1VseFS05jbqyeyRia9HlqFTc31GbAsbwZe5YrtjoBAuSCLuU13SgpezVeXjezebunQFH0g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![封装3](https://mmbiz.qpic.cn/mmbiz_png/9FT4EOoS5ciaNJdpqS1VseFS05jbqyeyRaiaB0fZBzPAdIodc2c2g0av8kKRec1fBYf1YbvzmZsffJbmw0gA1icicA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## PCB工艺

### 半孔

[什么是半孔工艺？](https://www.bilibili.com/video/BV1KX4y1P7bY)

### 表面处理

由于铜长期与空气接触会使得铜氧化，所有我们在PCB表面需要做一些处理，这样才可以保证PCB板的可焊性和电性能。

- 喷锡
- 有机涂覆（OSP防氧化）
- 化学镀镍/沉金
- 沉银
- 沉锡
- 电镀硬金
- 化学镍钯金

### 制造工艺

[硬核科普 PCB工艺系列-电子发烧友网 (elecfans.com)](https://www.elecfans.com/v/32386/)

## 设计方法

### 布局

1. 弄清电路板物理限制
2. 弄清电路板制作工艺
3. 给集成芯片留下喘气空间
4. 相同器件方向一致
5. 减少引线交叉
6. 先摆放电路边缘器件
7. 避免器件之间冲突
8. 将器件尽量放在同一面
9. 保持芯片管脚和器件极性一致
10. 器件位置与原理图上相似

### 层含义

1. 信号层：分为Top Layer（顶层）、Bottom Layer（底层），这是具有电气连接的层，能放置元器件，也能布置走线。
2. 机械层（Mechanical），是定义整个PCB板的外观，之所以强调“机械”就是说它不带有电气属性，因此可以放心地用于勾画外形、勾画机械尺寸、放置文本等等工作，而不必担心对板子的电气特性造成任何改变。机械层最多可选择16层。
3. 丝印层：Top Overlay（顶层丝印层）、 Bottom Overlay（底层丝印层），用于定义顶层和底层的丝印字符，就是一般在阻焊层之上印的一些文字符号，比如元件名称、元件符号、元件管脚和版权等，方便以后的电路焊接和查错等。
4. 锡膏层：包括顶层锡膏层(Top Paste) 和底层锡膏层(Bottom Paste) ，指我们可以看到的露在外面的表面贴装焊盘，也就是在焊接前需要涂焊膏的部分。所以，这一层在焊盘进行热风整平和制作焊接钢网时也有用。
5. 阻焊层：也常说“开窗”，包括顶层阻焊层（Top Solder）和底层阻焊层（Bottom Solder），其作用与锡膏层相反，指的是要盖绿油的层。该层不粘焊锡，防止在焊接时相邻焊接点的多余焊锡短路。阻焊层将铜膜导线覆盖住，防铜膜过快在空气中氧化，但是在焊点处留出位置，并不覆盖焊点。常规的敷铜或者走线都是默认盖绿油的，如果我们相应的在阻焊层处理的话，就会阻止绿油来覆盖，会把铜露出来。
6. 钻孔层：钻孔层包括Drill Gride(钻孔指示图)和Drill Drawing(钻孔图)两个钻孔层，钻孔层用于提供电路板制造过程中的钻孔信息(如焊盘，过孔就需要钻孔)。
7. 禁止布线层（Keep Out Layer）用于定义布线层的边界，定义了禁止布线层后，在以后的布线过程中，具有电气特性的布线不可以超出禁止布线层的边界。
8. 多层(Multi layer)  ，电路板上焊盘和穿透式过孔要穿透整个电路板，与不同的导电图形层建立电气连接关系，因此系统专门设置了一个抽象的层—多层。一般，焊盘与过孔都要设置在多层上，如果关闭此层，焊盘与过孔就无法显示出来。

## 设计软件

### eplan

### Fritzing

#### Fritzing介绍

Fritzing是一个开源的“教学级”连接图绘制工具。支持面包板视图、电路图视图、PCB 视图，内置大量常见元器件（如 Arduino、传感器等）。

[官网](https://fritzing.org/)

### Kicad

#### Kicad介绍

KiCad 是一个开源软件套件，用于设计原理图 和 PCB。最大支持 32 层。

[官网](https://www.kicad.org/)

### Altium Designer

#### AD介绍

[官网](https://www.altium.com.cn/altium-designer)

#### 软件教程

[入门AD设计-杜洋工作室](https://www.bilibili.com/video/BV1pt411p7jg)

#### 常用元器件中英文对照表

| 英文名称                       | 中文名称               |
|-------------------------------|----------------------|
| buttons_switchs               | 按键开关              |
| buzzers                       | 蜂鸣器               |
| capacitors                    | 电容                 |
| capacitors_tantalum           | 钽电容               |
| connectors                    | 连接器               |
| converters_dcdc_acdc          | 转换器               |
| dc/dc                         | 直流电压转换         |
| ac/dc                         | 交流直流电压转换     |
| crystals                      | 晶振                 |
| diodes                        | 二极管               |
| discret                       | 分立元件             |
| diplays                       | 显示器               |
| display_7-segment             | 7段数码管            |
| divers                        | 驱动器               |
| fiducials                     | 基准点               |
| inductors                     | 电感器               |
| LEDS                          | 发光二极管           |
| lables                        | 标签                 |
| measurement_point             | 测量点               |
| measurement_scales            | 测量尺寸             |
| microwave                     | 微波                 |
| modules                       | 模块                 |
| mounting_holes                | 安装孔               |
| opto_devices                  | 光电子器件           |
| oscillators                   | 振荡器               |
| pin header                    | 排针                 |
| potentionmeters               | 电位器               |
| power_integrations            | 电源芯片             |
| rf_modules                    | 射频模块             |
| relays                        | 继电器               |
| resistors                     | 电阻                 |
| transistors                   | 三极管               |
| valves                        | 真空管               |
| varistors                     | 压敏电阻             |

### [Proteus](https://www.labcenter.com/proteus9/)

专业电路仿真平台

## 待整理

- [几张图，简单弄懂pcb生产工艺流程！](https://zhuanlan.zhihu.com/p/94462741)
- [不用光刻机也能得到芯片 芯片回收](https://www.bilibili.com/video/BV1Fs4y1N7uL/)
- [揭秘进入丝网印工厂，带你了解丝网印制工艺](https://www.bilibili.com/video/BV1H5411P7xi/)
- [STM32](http://forum.eepw.com.cn/forum/372/1)
- [论坛_电子工程师技术交流家园_电子产品世界](http://forum.eepw.com.cn/forum/index)
- [电子工程师的在线课堂 - Moore8摩尔吧](http://www.moore8.com/)
- [论坛 - Powered by Discuz!](http://bbs.misshelper.com/forum.php)
- [kicad,最全面的kicad论坛 - 电子工程世界网](http://www.eeworld.com.cn/tags/kicad/tiezi/)
- [kicad,最全面的kicad论坛 - 电子工程世界网](http://www.eeworld.com.cn/tags/kicad/tiezi/)
- [嘉立创电路板制作过程全流程详解(一)：MI、钻孔](https://blog.csdn.net/lyndon_li/article/details/116356686)
- [嘉立创电路板制作过程全流程详解(二)：沉铜、线路](https://blog.csdn.net/lyndon_li/article/details/116356817)
- [proteus 7 professional 中文版安装包_百度知道](https://zhidao.baidu.com/question/1644564813010934060.html)
- [KICAD教程](http://bbs.elecfans.com/home.php?mod=space&uid=2164708&do=thread&view=me&from=space)
- [proteus入门到精通_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/av21092330?from=search&seid=13902664895220773489)
- [proteus仿真软件与keil编程软件下载](https://mp.weixin.qq.com/s/hijL5-LWs14EeCyG4fzG6g)
- [CSP柔性灯带智能测试老化线](https://www.bilibili.com/video/BV1bY4y147qm/)
- [什么是产品的老化测试？](https://www.bilibili.com/video/BV1KV4y1M7TB/)
