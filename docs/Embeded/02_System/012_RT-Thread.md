[RT-Thread简介 - RT-Thread 文档中心](https://www.rt-thread.org/document/site/tutorial/quick-start/introduction/introduction/)

《嵌入式实时操作系统：RT-Thread设计与实现》
### **了解 RT-Thread**

RT-Thread 是一款完全由国内团队开发维护的嵌入式实时操作系统（RTOS），具有完全的自主知识产权 。

RT-Thread，全称是 Real Time-Thread，它是一个嵌入式实时多线程操作系统，基本属性之一是支持多任务。在 RT-Thread 系统中，任务是通过线程实现的。

RT-Thread 主要采用 C 语言编写，浅显易懂，方便移植。它把面向对象的设计方法应用到实时系统设计中，使得代码风格优雅、架构清晰、系统模块化并且可裁剪性非常好。

RT-Thread 系统完全开源， 3.1.0 及以前的版本遵循 GPL V2 + 开源许可协议。从 3.1.0 以后的版本遵循 Apache License 2.0 开源许可协议，可以免费在商业产品中使用，并且不需要公开私有代码。

RT-Thread 目前分为三个版本：标准版本、Nano 版本、Smart 版本。

详细了解 RT-Thread，可以访问官方网站：

`https://www.rt-thread.org`

RT-Thread 在线文档网址为：

`https://www.rt-thread.org/document/site/#/`

[![](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUDLiaI1IHcGQ1TOa4Sak32mGtOkXF8vtu2O47NolDOaQNc4ItuJFWsFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUDLiaI1IHcGQ1TOa4Sak32mGtOkXF8vtu2O47NolDOaQNc4ItuJFWsFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**1. 标准版**

标准版 RT-Thread 与其他很多 RTOS 如 FreeRTOS、uC/OS 的主要区别之一是，它**不仅仅是一个实时内核，还具备丰富的中间层组件**。

详细介绍可参考官方网站：

`https://www.rt-thread.org/document/site/#/rt-thread-version/rt-thread-standard/README`

标准版软件架构如下图所示。

[![](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUlFef4KNjHbTxiabyaZBK1SoWJ3PGF4StfY7RcfFyia4aeib46icvEHibLvA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUlFef4KNjHbTxiabyaZBK1SoWJ3PGF4StfY7RcfFyia4aeib46icvEHibLvA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**物联网操作系统**是指以操作系统内核（可以是 RTOS、Linux 等）为基础，包括如文件系统、图形库等较为完整的中间件组件，具备低功耗、安全、通信协议支持和云端连接能力的软件平台，RT-Thread 就是一个 IoT OS。

**2. Nano版本**

RT-Thread Nano 是一个极简版的硬实时内核，是一款可裁剪的、抢占式实时多任务的 RTOS。

其内存资源占用极小，功能包括任务处理、软件定时器、信号量、邮箱和实时调度等相对完整的实时操作系统特性。

详细内容可参考官方在线文档网站：

`https://www.rt-thread.org/document/site/#/rt-thread-version/rt-thread-nano/an0038-nano-introduction`

Nano 版软件框图如下，包含支持的 CPU 架构与内核源码，还有可拆卸的 FinSH 组件：

[![](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUUD4E19Pzmtxo43h7tmiasG5FiaIpYZnYjPjHswPGXqNJ57Uy5xdXicb1g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUUD4E19Pzmtxo43h7tmiasG5FiaIpYZnYjPjHswPGXqNJ57Uy5xdXicb1g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**3. Smart 版本**

RT-Thread Smart 是基于 RT-Thread 操作系统上的混合操作系统，简称为 rt-smart，它把应用从内核中独立出来，形成独立的用户态应用程序，并具备独立的地址空间（32 位系统上是 4G 的独立地址空间）。

详细了解可以访问官方资料网站：

`https://www.rt-thread.org/document/site/#/rt-thread-version/rt-thread-standard/README`

rt-smart 的整体结构框图如下，在硬件平台的基础上通过 MMU、系统调用的方式把整个系统分成了内核态及用户态。

[![](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcU7uX1Ihp9seFbN1icyeeNOBl03fTkfqmJIHLqrthYFN9amq76g8436Xw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcU7uX1Ihp9seFbN1icyeeNOBl03fTkfqmJIHLqrthYFN9amq76g8436Xw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### **RT-Thread 内核**

内核是操作系统最基础也是最重要的部分。下图为 RT-Thread 内核架构图，内核处于硬件层之上，内核部分包括内核库、实时内核实现。

[![](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUG4sY8rhA3mrXe0TEzSkY78YH35108C91giav19bF0ucQickQoy6ZLgDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/1jhEC8rSoRqScXAnkdGO1XadVnKcclcUG4sY8rhA3mrXe0TEzSkY78YH35108C91giav19bF0ucQickQoy6ZLgDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

内核库是为了保证内核能够独立运行的一套小型的类似 C 库的函数实现子集。这部分根据编译器的不同自带 C 库的情况也会有些不同，当使用 GNU GCC 编译器时，会携带更多的标准 C 库实现。

实时内核的实现包括：对象管理、线程管理及调度器、线程间通信管理、时钟管理及内存管理等等。

内核最小的资源占用情况是 3KB ROM，1.2KB RAM。

**线程调度**

线程是 RT-Thread 操作系统中最小的调度单位，线程调度算法是基于优先级的全抢占式多线程调度算法。

在系统中除了中断处理函数、调度器上锁部分的代码和禁止中断的代码是不可抢占的之外，系统的其他部分都是可以抢占的，包括线程调度器自身。

支持 256 个线程优先级（也可通过配置文件更改为最大支持 32 个或 8 个线程优先级），0 优先级代表最高优先级，最低优先级留给空闲线程使用。

**时钟管理**

RT-Thread 的时钟管理以时钟节拍为基础，时钟节拍是 RT-Thread 操作系统中最小的时钟单位。

RT-Thread 的定时器提供两类定时器机制：单次触发定时器、周期触发定时器。

通常使用定时器定时回调函数（即超时函数），完成定时服务。用户根据自己对定时处理的实时性要求选择合适类型的定时器。

**线程同步**

RT-Thread 采用信号量、互斥量与事件集实现线程间同步。

线程通过对信号量、互斥量的获取与释放进行同步；互斥量采用优先级继承的方式解决了实时系统常见的优先级翻转问题。

线程通过对事件的发送与接收进行同步；事件集支持多事件的 “或触发” 和“与触发”，适合于线程等待多个事件的情况。

**线程通信**

RT-Thread 支持邮箱和消息队列等通信机制。

邮箱中一封邮件的长度固定为 4 字节大小；消息队列能够接收不固定长度的消息，并把消息缓存在自己的内存空间中。

**内存管理**

RT-Thread 支持静态内存池管理及动态内存堆管理。

动态内存堆管理模块在系统资源不同的情况下，分别提供了面向小内存系统的内存管理算法及面向大内存系统的 SLAB 内存管理算法。

还有一种动态内存堆管理叫做 memheap，适用于系统含有多个地址且不连续的内存堆。使用 memheap 可以将多个内存堆 “粘贴” 在一起，让用户操作起来像是在操作一个内存堆。

**I/O 设备管理**

RT-Thread 将 PIN、I2C、SPI、USB、UART 等作为外设设备，统一通过设备注册完成。实现了按名称访问的设备管理子系统，可按照统一的 API 界面访问硬件设备。

在设备驱动接口上，根据嵌入式系统的特点，对不同的设备可以挂接相应的事件。当设备事件触发时，由驱动程序通知给上层的应用程序。

### 参考文献
一文让你了解RT-Thread  嵌入式Linux _2022-01-07 08:08_