
# ST

## 官网

- [官网](https://www.st.com/)
- [国内官网](https://www.stmcu.com.cn/)
- [最新选型手册](https://www.stmcu.com.cn/upload/Selection_Guide.pdf)

## 开发

### 开发方式

1. 直接配置寄存器：STM32的寄存器数量太多，通过汇编语言直接操作寄存器实现功能的方法，开发时需要经常的翻查芯片的数据手册，开发比较费力。
2. 标准库：由于寄存器开发比较费力，ST为每个系列的芯片都编写了一份库文件，即工程文件里stm32F1xx.c/.h文件，包括一些常用量的宏定义，把一些外设寄存器封装为结构体，如GPIO口时钟等。所以我们只需要配置结构体变量成员就可以修改外设的配置寄存器，从而选择不同的功能。
3. HAL库：HAL库是ST公司目前主力推的开发方式，全称就是Hardware Abstraction Layer（抽象印象层）。HAL库比标准库出现的晚一些，但其实和标准库一样，都是为了节省程序开发的时期，而且HAL库尤其的有效，如果说标准库把实现功能需要配置的寄存器集成了，那么HAL库的一些函数甚至可以做到某些特定功能的集成。也就是说，同样的功能，标准库可能要用几句话，HAL库只需用一句话就够了。

### 工具链

[DFU](https://www.stmcu.com.cn/Search/index?csrf_token=a8491f226c67041e87fa3af646b38e2f&search_keywords=AN3156&type=design_resource&page=1)

[Arm Community](https://community.arm.com/)
[Arm Developer](https://developer.arm.com/)
[ST中文论坛](https://shequ.stmicroelectronics.cn/portal.php)

[STM32CubeMX](https://www.st.com.cn/zh/development-tools/stm32cubemx.html#get-software)
[Arm Keil | CMSIS Packs](https://www.keil.arm.com/packs/)

## 解读

### 编译信息解读

Program size: Code, RO-data , RW-data, ZI-data具体代表什么？

1. Code 是代码占用的空间。
2. RO-data是 Read Only 只读常量的大小，如const型。
3. RW-data是（Read Write） RW是可读可写变量，就是初始化时候就已经赋值了的，RW + ZI就是你的程序总共使用的RAM字节数。
4. ZI-data是（Zero Initialize） 没有初始化的可读写变量的大小，就是程序中用到的变量并且被系统初始化为0的变量的字节数，keil编译器默认是把你没有初始化的变量都赋值一个0，这些变量在程序运行时是保存在RAM中的。

Total ROM Size (Code + RO Data + RW Data)这样所写的程序占用的ROM的字节总数，也就是说程序所下载到ROM flash 中的大小。为什么Rom中还要存RW，因为掉电后RAM中所有数据都丢失了，每次上电RAM中的数据是被重新赋值的，每次这些固定的值就是存储在Rom中的，为什么不包含ZI段呢，是因为ZI数据都是0，没必要包含，只要程序运行之前将ZI数据所在的区域一律清零即可。包含进去反而浪费存储空间。

MCU执行过程是先将RW从ROM中搬到RAM中，因为RW是变量，变量不能存在ROM中。然后将ZI所在的RAM区域全部清零，因为ZI区域并不在Image中，所以需要程序根据编译器给出的ZI地址及大小来将相应得RAM区域清零。ZI中也是变量，同理：变量不能存在ROM中。ROM中的指令完成了这两项工作后C程序才能正常访问变量。否则只能运行不含变量的代码。


##### STM32Cube是什么？

##### 为什么要选择STM32Cube？

STM32Cube 生态系统包括嵌入式软件和软件工具两大部分。

**嵌入式软件**

包括各个 STM32 系列 MCU 的固件库和一些扩展库，固件库包含 STM32 MCU 的 HAL 驱动库和移植好的各种中间件，例如嵌入式操作系统 FreeRTOS、文件系统FatFS等。

[![](https://mmbiz.qpic.cn/mmbiz_png/iaibvmyz4605MWppa2RDMD0mJkTtc4Lj3YOvibHIMVLUAglhqEOckicRbxL40JDrK1f5YmvT0Mng6p9VaZLKc50wvQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/iaibvmyz4605MWppa2RDMD0mJkTtc4Lj3YOvibHIMVLUAglhqEOckicRbxL40JDrK1f5YmvT0Mng6p9VaZLKc50wvQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲ STM32Cube生态系统的工具软件及其作用

## 教程

[波特率动教程](https://www.baud-dance.com/)

## 其他

[STM32F DAC最大输出的电流是多少 - STM32 - 论坛-意法半导体STM32/STM8技术社区](http://www.stmcu.org.cn/module/forum/thread-600310-1-1.html)
[KEIL 5 pack离线包 Stm32f1/f2/f3/f4_网络_junyilao的博客-CSDN博客](https://blog.csdn.net/junyilao/article/details/77679702)
[STM32CubeMX系列教程](https://www.waveshare.net/study/portal.php?mod=list&catid=40)
[[STM32编译结果分析/STM32编译结果分析]]
[STM32单片机OTA升级，如何自制BootLoader程序，wifi模块连接阿](https://www.bilibili.com/video/BV1Fd4y1r7sY/)
[STM32单片机 OTA升级 IAP下载 BootLoader程序设计流程图](https://www.bilibili.com/video/BV1BB4y1E74J/)
[Keil的使用方法（汇总） - strongerHuang - 博客园](http://www.cnblogs.com/strongerHuang/p/5839141.html)
[如何优雅的使用Keil？Keil MDK软件使用小技巧、快捷键、插件使用](https://www.bilibili.com/video/BV1Xd4y1q7RJ/)
[STM32黑客松24小时挑战赛&嵌入式界有后浪——可爱的工程师们](https://www.bilibili.com/video/BV1W64y1C7nH)
[VSCode开发STM32快速搭建开发环境零基础教程！](https://www.bilibili.com/video/BV1Gt4y1D74k)
[N32替换STM32，这些细节别忽略！ (qq.com)](https://mp.weixin.qq.com/s/-IW1D0dzF9y2gutlSOucXA)

[STM32单片机最小系统详解 (qq.com)](https://mp.weixin.qq.com/s/rruSs2XHrndVgDlAr3IvEA)
[居然还不会使用STM32开发神器？ (qq.com)](https://mp.weixin.qq.com/s/_d0EJX0yLyV3sRHpCC6HBQ)
[STM32之SD卡 (qq.com)](https://mp.weixin.qq.com/s/HQE-va7rK6WnacqIQJkzYQ)
[干货 | 嵌入式OTA升级实现原理](https://zhuanlan.zhihu.com/p/470231537)
[VSCode+EIDE开发STM32，支持标准库、HAL库、LL库，可以在VSCode里进行调试，编译以及下载，代码编辑更舒适，环境搭建超简单。](https://www.bilibili.com/video/BV1nr4y1R7Jb/)

[基于STM32的差分升级代码实现｜拖拉机里塞了保时捷的方向盘](https://www.bilibili.com/video/BV1ka4y1V7ke/)
[都什么年代了还在用Keil？快来试试VSCode与GCC开发STM32！](https://www.bilibili.com/video/BV1r84y1b7kV/)
[STM32 ARM裸机程序框架的优缺点和对策](https://www.bilibili.com/video/BV1xX4y167Qp/)
[【2023年】STM32 HAL库精讲 手把手写程序 入门教程_——持续更新中](https://www.bilibili.com/video/BV1kL411Y7Uf/)
[【STM32·番外】使用VS Code开发STM32~](https://www.bilibili.com/video/BV1uP411U7Qj/)
[RM嵌入式-STM32/GD32-CAN&调度器](https://www.bilibili.com/video/BV1wy4y1X7qk/)
[STM32启动文件你知道多少](https://www.bilibili.com/video/BV14B4y1477k/)
[STM32进阶（内核、汇编、芯片架构、指令集）](https://www.bilibili.com/video/BV1UR4y1b7mL/?spm_id_from=333.999.0.0)
[STM32F4串口IAP学习笔记](https://blog.csdn.net/qq_38966786/article/details/89879975)
[利用 MDK的RTE（run-time environment）功能添加自己的pack](https://blog.csdn.net/kiti1013/article/details/45668243)
[解决STM32F0/F1内部FLASH写操作导致中断程序无法响应的问题](https://blog.csdn.net/weixin_42518229/article/details/108131700)
[对stm32程序（HEX）的读取和烧录（使用JLink和JFlash）](https://blog.csdn.net/m0_46511220/article/details/121315065)
[STM32读写内部Flash（介绍+附代码）](https://blog.csdn.net/qq_36075612/article/details/124087574)
[1.STM32F429简介](https://blog.csdn.net/weixin_41898804/article/details/105042287)
[STM32关于我遇到的HardFault_Handler的处理](https://blog.csdn.net/qq_37828873/article/details/113102640)
[基于STM32的MD5校验](https://blog.csdn.net/qq_44629109/article/details/125338345)
[(14条消息) 四年嵌入式技术沉淀，处女作《STM32CubeMX系列实战教程》诞生_Mculover666的博客-CSDN博客](https://mculover666.blog.csdn.net/article/details/100578516)

[Keil Product Downloads](http://www.keil.com/download/product/)
[STM32](http://forum.eepw.com.cn/forum/372/1)
[Jlink命令行烧录](https://blog.csdn.net/weixin_44131108/article/details/125263631)
[深度掌握bin、hex、axf和elf文件格式](https://strongerhuang.blog.csdn.net/article/details/113100808)
[不用工具，合并 bootloader 和 APP 文件就是这么简单！](https://blog.csdn.net/DP29syM41zyGndVF/article/details/121942982)
[【Tools】一个高效的BootLoader和App固件的合并方法](https://acuity.blog.csdn.net/article/details/106724373)
[Ymodem协议详解](https://blog.csdn.net/qq_45562008/article/details/117752092)
[STM32学习笔记之Bootloader升级Ymodem协议简介](https://blog.csdn.net/xinghuanmeiying/article/details/79582716)
[4.STM32在应用更新程序IAP](https://blog.csdn.net/chouye5700/article/details/111475050)
[STM32+IAP方案 实现网络升级应用固件](https://blog.csdn.net/guozhongwei1/article/details/50233039)
[STM32学习之IAP](https://blog.csdn.net/qq_42370291/article/details/97611497)
[MCU OTA升级流程](https://blog.csdn.net/Duan_zhang_/article/details/115821969)
[OTA分类 & OTA升级方式（乒乓、压缩、差分）](https://blog.csdn.net/Duan_zhang_/article/details/121282325)
[stm32从A程序跳转到B程序的做法](https://blog.csdn.net/qq_31860135/article/details/87929903)
[【STM32】BootLoader介绍、编写 以及 OTA常见方案分析（差分升级 全量升级 AB面升级）](https://blog.csdn.net/zDavid_2018/article/details/109490846)
[STM32 之八 在线升级（IAP）超详细图解 及 需要注意的问题解决](https://blog.csdn.net/ZCShouCSDN/article/details/83793309)
[STM32F103的I/O口输入、输出电流的大小，I/O口注入电流](https://blog.csdn.net/wuhuijun165/article/details/85686864)
[TimX_Ch1与TimX_Ch1N的差异](https://blog.csdn.net/forlifefor/article/details/119795000)
[STM32 HAL ADC多通道](https://blog.csdn.net/qq_24426625/article/details/123835461)

[STM32F103x学习笔记（1）—— IAP应用编程 - 灰信网（软件开发博客聚合）](https://www.freesion.com/article/12851076231/)
[STM32F429VET6_STM32F429VET6采购信息-立创电子元器件商城](https://so.szlcsc.com/global.html?k=STM32F429VET6&hot-key=)
[Keil的使用方法（汇总） - strongerHuang - 博客园](http://www.cnblogs.com/strongerHuang/p/5839141.html)
[STM32F DAC最大输出的电流是多少 - STM32 - 论坛-意法半导体STM32/STM8技术社区](http://www.stmcu.org.cn/module/forum/thread-600310-1-1.html)
[KEIL 5 pack离线包 Stm32f1/f2/f3/f4_网络_junyilao的博客-CSDN博客](https://blog.csdn.net/junyilao/article/details/77679702)

[VSCode+Keil5+STM32CubeMX开发环境搭建，一步不跳，一刀不剪，奶奶都能学会版。主要是配置插件Keil assistant，介绍相关使用方法。](https://www.bilibili.com/video/BV19V411g7gD/)
