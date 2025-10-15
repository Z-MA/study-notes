# 目录
- [目录](#目录)
  - [简介](#简介)
- [概述](#概述)
  - [OSI七层模型](#osi七层模型)
    - [OSI的基本概念及原则](#osi的基本概念及原则)
    - [OSI七层模型功能介绍](#osi七层模型功能介绍)
- [上层协议](#上层协议)
  - [AT](#at)
  - [TLV](#tlv)
  - [Modbus](#modbus)
    - [简介](#简介-1)
    - [Modbus存储区](#modbus存储区)
    - [Modbus协议类型](#modbus协议类型)
    - [Modbus功能码](#modbus功能码)
    - [Modbus报文格式](#modbus报文格式)
    - [Modbus读写过程](#modbus读写过程)
    - [Modbus协议开发](#modbus协议开发)
- [物理层协议](#物理层协议)
  - [通讯分类](#通讯分类)
  - [UART](#uart)
    - [简介](#简介-2)
    - [物理特性](#物理特性)
    - [数据帧格式](#数据帧格式)
    - [接收模式](#接收模式)
    - [发送模式](#发送模式)
  - [I2C](#i2c)
    - [简介](#简介-3)
    - [物理特性](#物理特性-1)
    - [通讯特性](#通讯特性)
  - [SPI](#spi)
    - [简介](#简介-4)
    - [物理特性](#物理特性-2)
    - [通讯特性](#通讯特性-1)
  - [USB](#usb)
  - [RS485/RS232/RS422](#rs485rs232rs422)
    - [简介](#简介-5)
    - [特性及区别](#特性及区别)
    - [简介](#简介-6)
    - [物理特性](#物理特性-3)
  - [RS232](#rs232)
  - [LIN](#lin)
  - [CAN](#can)
    - [CAN-FD](#can-fd)
    - [上层协议](#上层协议-1)
      - [CANopen](#canopen)
        - [开源协议栈](#开源协议栈)
    - [学习资料](#学习资料)
    - [其他未整理](#其他未整理)
      - [CAN通讯学习](#can通讯学习)
      - [深入浅出讲解CAN总线](#深入浅出讲解can总线)
      - [CANopen学习](#canopen学习)
        - [NMT网络管理](#nmt网络管理)
        - [CANopen主站设备](#canopen主站设备)
        - [过程数据对象PDO（Process data object）](#过程数据对象pdoprocess-data-object)
        - [服务数据对象 SDO（Service data object）](#服务数据对象-sdoservice-data-object)
        - [特殊协议（Special protocols）](#特殊协议special-protocols)
      - [CAN收发器选型](#can收发器选型)
    - [CAN设备及服务提供商](#can设备及服务提供商)
- [近场](#近场)
  - [WIFI](#wifi)
  - [BLE](#ble)
  - [NFC](#nfc)
  - [UWB](#uwb)
  - [ZigBee](#zigbee)
- [IOT](#iot)
  - [4G/5G](#4g5g)
  - [NB-IOT](#nb-iot)
  - [Lora](#lora)
  - [ETH](#eth)
  - [电力电子](#电力电子)
- [其他](#其他)
  - [传感器](#传感器)
  - [红外线](#红外线)
  - [音频](#音频)
  - [存储](#存储)
  - [航模](#航模)
- [待整理](#待整理)


## 简介

本文主要介绍
https://www.bilibili.com/video/BV1SK4y1X7jp/

# 概述

## OSI七层模型

### OSI的基本概念及原则

OSI是Open System Interconnect的缩写，意为开放式系统互联。其各个层次的划分遵循下列原则：

1. 同一层中的各网络节点都有相同的层次结构，具有同样的功能。
2. 同一节点内相邻层之间通过接口进行通信。
3. 七层结构中的每一层使用下一层提供的服务，并且向其上层提供服务。
4. 不同节点的同等层按照协议实现对等层之间的通信。

### OSI七层模型功能介绍

| OSI七层网络模型              | TCP/IP四层概念模型 | 对应网络协议                                                                                                                                                                                                                                                                                                                                                                                 |
|:----------------------:|:------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 应用层<br/>(Application)  | 应用层          | HTTP、TFTP、FTP、NFS、WAIS、SMTP                                                                                                                                                                                                                                                                                                                                                            |
| 表示层<br/>(Presentation) | 应用层          | Telnet、Rlogin、SNMP、Gopher                                                                                                                                                                                                                                                                                                                                                              |
| 会话层<br/>(Session)      | 应用层          | SMTP、DNS <br/> 会话层是OSI模型的第5层，是用户应用程序和网络之间的接口，该层的主要功能是：组织和协调两个会话进程之间的通信  ，并对数据交换进行管理。当建立会话时，用户必须提供他们想要连接的远程地址。而这些地址与MAC地址或网络层的逻辑地址不同，它们是为用户专门设计的，更便于用户记忆。域名就是一种网络上使用的远程地址。会话层的具体功能如下：                                                                                                                                                                                                   |
| 传输层<br/>(Transport)    | 传输层          | TCP、UDP<br/> OSI下3层的任务是数据通信，上3层的任务是数据处理。而传输层（Transport Layer）是OSI模型的第4层。该层提供建立、维护和拆除传输连接的功能，起到承上启下的作用。该层的主要功能是：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输，同时向高层屏蔽下层数据通信的细节，即向用户透明地传送报文。<br/>                                                                                                                                                                                                        |
| 网络层<br/>(Network)      | 网络层          | IP、ICMP、ARP、RARP、AKP、UUCP<br />网络层（Network Layer）是OSI模型的第三层，它是OSI参考模型中最复杂的一层，也是通信子网的最高一层，它在下两层的基础上向资源子网提供服务。其主要功能是：在数据链路层提供的两个相邻端点之间的数据帧的传送功能上，进一步管理网络中的数据通信，控制数据链路层与传输层之间的信息转发，建立、维持和终止网络的连接，将数据设法从源端经过若干个中间节点传送到目的端（点到点），从而向传输层提供最基本的端到端的数据传输服务。具体地说，数据链路层的数据在这一层被转换为数据包，然后通过路径选择、分段组合、顺序、进/出路由等控制，将信息从一个网络设备传送到另一个网络设备。数据链路层和网络层的区别为：数据链路层的目的是解决同一网络内节点之间的通信，而网络层主要解决不同子网间的通信。<br/> |
| 数据链路层<br/>(Data Link)  | 数据链路层        | FDDI、Ethernet、Arpanet、PDN、SLIP、PPP<br /> 数据链路层（Data Link Layer）是OSI模型的第二层，负责建立和管理节点间的链路。在计算机网络中由于各种干扰的存在，导致物理链路是不可靠的。因此这一层的主要功能是：在物理层提供的比特流的基础上，通过差错控制、流量控制方法，使有差错的物理线路变为无差错的数据链路，即提供可靠的通过物理介质传输数据的方法。<br/>                                                                                                                                                                            |
| 物理层<br/>(Physical)     | 数据链路层        | IEEE 802.1A、IEEE 802.2到IEEE 802.11<br />在OSI参考模型中，物理层是参考模型的最低层，也是OSI模型的第一层。物理层的主要功能是：利用传输介质为数据链路层提供物理连接，实现比特流的透明传输。物理层的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异，使其上面的数据链路层不必考虑网络的具体传输介质是什么。<br/>                                                                                                                                                                                    |

# 上层协议

## AT

[GSM/GPRS模块 AT指令集C语言编程——基于有方M660+和MSP430单片机](https://blog.csdn.net/liming0931/article/details/102966539)

[stm32f4WiFi模块代码调试过程](https://blog.csdn.net/m0_64445185/article/details/126794216)

[基于C语言的AT指令代码实现](https://download.csdn.net/download/hnxyxiaomeng/10815656)

[AT指令代码与实现方法（基于C语言）](https://blog.csdn.net/hnxyxiaomeng/article/details/84613712)

[at指令代码 stm32f030_AT命令简介](https://blog.csdn.net/weixin_39949413/article/details/112127788)

[AT指令的一种解析想法](https://blog.csdn.net/wuhenyouyuyouyu/article/details/83010935)

[STM32--ESP8266--AT指令使用例程](https://liefyuan.blog.csdn.net/article/details/80428059)

[(128条消息) c语言-自用的通用AT框架（修改了一些错误）_at命令框架,at框架-嵌入式文档类资源-CSDN文库](https://download.csdn.net/download/ylc0919/13606978?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-download-2%7Edefault%7ECTRLIST%7EPaid-1-13606978-blog-111478925.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant_t0.none-task-download-2%7Edefault%7ECTRLIST%7EPaid-1-13606978-blog-111478925.pc_relevant_aa&utm_relevant_index=1)

## TLV

## Modbus

### 简介

 Modbus协议是一种应用层协议，最初是Modicon公司在1979年为其PLC产品开发的。它是一种开放的、基于主从结构的通信协议，广泛应用于工业自动化和控制系统中。Modbus协议定义了数据传输的格式和规则，使得不同厂商的设备能够互相通信。

协议本身并没有定义物理层，定义了控制器能够认识和使用的消息结构，不管它们是经过何种网络进行通信的。 所以能够适应多种电气接口，因此使用非常广泛。

| 特点     | 说明                                                                                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 一主多从   | 主机在同一时间内只能向一个从机发送请求，总线上每次只有一个数据进行传输,即主机发送,从机应答，主机不发送,总线上就没有数据通信。<br/>从机地址:：每个从机都有唯一地址，占用一个字节,范围0-255，其中有效范围是1-247，其中255是广播地址(广播就是对所有从机发送应答)。                                                                                                            |
| 无忙机制判断 | 比方说主机给从机发送命令， 从机没有收到或者正在处理其他东西，这时候就不能响应主机，因为modbus的总线只是传输数据，没有其他仲裁机制，所以需要通过软件的方式来判断是否正常接收。<br/>主机发送数据，首先需要从机的电话号码(区分每个从机，每个地址必须唯一)，告诉从机打电话要干什么事情，然后是需要发送的内容，最后再问问从机，我说的话你都听清楚了没有呀，没有听错吧？<br/> 然后从机这里，得到了主机打过来的电话，从机回复主机需要的内容，主机得到从机数据，这样就是一个主机到从机的通信过程。 |

### Modbus存储区

存储区是Modbus协议的核心概念之一，它定义了从机存储数据的方式和结构。Modbus协议将从机的存储空间划分为不同的存储区，每个存储区有不同的读写权限和数据类型。这些存储区用于存储从机的状态、配置参数和传感器数据等信息。

存储区的数据类型可以分为：

- 布尔量（Boolean）：表示开关状态或数字的高低电平，比如IO口的电平高低、灯的开关状态等。
- 16位寄存器（16-bit Register）：用于存储整数或其他数值数据，比如传感器的温度数据、存储的密码等。

Modbus协议规定了四个存储区，分别是0区、1区、3区和4区。其中0区和4区是可读可写的，1区和3区是只读的。
| 区号 | 名称       | 读写           | 地址范围    |
| ---- | ---------- | -------------- | ----------- |
| 0区  | 输出线圈   | 可读可写布尔量 | 00001-09999 |
| 1区  | 输入线圈   | 只读布尔量     | 10001-19999 |
| 3区  | 输入寄存器 | 只读寄存器     | 30001-39999 |
| 4区  | 保持寄存器 | 可读可写寄存器 | 40001-49999 |

### Modbus协议类型

Modbus可以在各种物理层介质上传输，它的传输模式也分为三种，包括RTU(远程终端控制系统)、ASCII、TCP三种报文类型，区别如下：

| 传输类型 | Modbus RTU     | Modbus ASCII | Modbus TCP |
|:----:|:--------------:|:------------:|:----------:|
| 数据格式 | 二进制            | ASCII        | 二进制        |
| 数据长度 | 8位             | 7位           | 8位         |
| 校验方式 | CRC(循环冗余校验和校验) | LRC(纵向冗余和校验) | 无(TCP可靠)   |
| 传输速率 | 较高             | 较低           | 较高         |
| 传输介质 | 串口             | 串口           | TCP/IP     |
| 使用频率 | 较高             | 较低           | 较高         |
| 适用场景 | 工业自动化、PLC等     | 低速设备、简单通信    | 网络通信、远程监控  |

> Modbus RTU是一种紧凑的，十六进制表示数据的方式，Modbus ASCII是一种采用Ascii码表示数据，并且每个8Bit 字节都作为两个ASCII字符发送的表示方式。
> 
> 如果我们需要发送一个数字10 那么RTU模式下，只需要发送 0x0A 总线上传输数据形式为： 0000 1010
> 
> 而ASCII码模式则将数据1和0转为’1’和’0’,需要发送0x31(1) 0x30(0)两个字节数据。总线上传输数据形式为： 0011 0001 0011 0000

### Modbus功能码

功能码是Modbus协议中用于标识不同功能的代码。Modbus协议定义了多个功能码，每个功能码对应一个特定的操作或请求。功能码的使用使得Modbus协议能够支持多种不同的操作，如读取数据、写入数据等。

Modbus协议同时规定了二十几种功能码，但是常用的只有8种，用于对存储区的读写，如下表所示：

| 功能码 | 功能说明    |
| --- | ------- |
| 01H | 读取输出线圈  |
| 02H | 读取输入线圈  |
| 03H | 读取保持寄存器 |
| 04H | 读取输入寄存器 |
| 05H | 写入单线圈   |
| 06H | 写入单寄存器  |
| 0FH | 写入多线圈   |
| 10H | 写入多寄存器  |

### Modbus报文格式

Modbus协议的报文格式根据不同的传输类型有所不同。以下是Modbus RTU、Modbus ASCII和Modbus TCP的报文格式。

Modbus RTU报文格式如下：
| 从站地址 | 功能码 | 数据（可变） | CRC校验 |
| -------- | ------ | ------------ | ------- |
| 0x01     | 0x03   | 0x00 0x01 0x00 0x01 | 0xD5 0xCA |

Modbus ASCII帧结构如下：
| 起始符 | 从站地址 | 功能码 | 数据（可变） | LRC校验 | 结束符 |
| ------- | -------- | ------ | ------------ | ------- | ------- |
| 0x3A   | 0x01     | 0x03   | 0x00 0x01 0x00 0x01 | 0xD5 0xCA | 0x0D 0x0A |

Modbus TCP帧结构如下：
| 事务ID | 协议ID | 长度 | 单元ID | 功能码 | 数据（可变） |
| ------ | ------ | ---- | ------ | ------ | ------------ |
| 0x0001 | 0x0000 | 0x0006 | 0x01   | 0x03   | 0x00 0x01 0x00 0x01 |

### Modbus读写过程

**1. 主机对从机读数据操作**

主机发送报文格式如下：

| 从站地址 | 功能码  | 起始（高） | 起始（低） | 数量（高） | 数量（低） | 校验        |
| ---- | ---- | ----- | ----- | ----- | ----- | --------- |
| 0x01 | 0x03 | 0x00  | 0x01  | 0x00  | 0x01  | 0xD5 0xCA |

- 0x01：从机的地址
- 0x03：查询功能，读取从机寄存器的数据
- 0x00 0x01： 代表读取的起始寄存器地址.说明从0x0001开始读取.
- 0x00 0x01： 查询的寄存器数量为0x0001个 Modbus把数据存放在寄存器中,通过查询寄存器来得到不同变量的值,一个寄存器地址对应2字节数据; 寄存器地址对应着从机实际的存储地址
- 0xD5 0xCA： 循环冗余校验 CRC

从机回复报文格式如下：

| 从站地址 | 功能码  | 字节计数 | 字节1  | 字节2  | 校验        |
| ---- | ---- | ---- | ---- | ---- | --------- |
| 0x01 | 0x03 | 0x02 | 0x00 | 0x17 | 0xF8 0x4A |

- 0x01：从机的地址
- 0x03：查询功能，读取从机寄存器的数据
- 0x02： 返回字节数为2个 一个寄存器2个字节
- 0x00 0x17：寄存器的值是0017
- 0xF8 0x4A： 循环冗余校验 CRC

**2.主机对从机写数据操作**

主机发送报文格式如下：

| 从站地址 | 功能码  | 数据地址（高） | 数据地址（低） | 数据（高） | 数据（低） | 校验        |
| ---- | ---- | ------- | ------- | ----- | ----- | --------- |
| 0x01 | 0x06 | 0x00    | 0x01    | 0x00  | 0x17  | 0x98 0x04 |

- 0x01：从机的地址
- 0x06：修改功能，修改从机寄存器的数据
- 0x00 0x01： 代表修改的起始寄存器地址.说明修改0x0000-0x0001的存储内容
- 0x00 0x17： 要修改的数据值为0017
- 0x98 0x04： 循环冗余校验 CRC

从机回复报文格式如下：

| 从站地址 | 功能码  | 数据地址（高） | 数据地址（低） | 数据（高） | 数据（低） | 校验        |
| ---- | ---- | ------- | ------- | ----- | ----- | --------- |
| 0x01 | 0x06 | 0x00    | 0x01    | 0x00  | 0x17  | 0x98 0x04 |

- 0x01：从机的地址
- 0x06：修改功能，修改从机寄存器的数据
- 0x00 0x01： 代表修改的起始寄存器地址.说明是0x0000
- 0x00 0x17：修改的值为0017
- 0x98 0x04： 循环冗余校验 CRC

> **从机的回复和主机的发送是一样的，如果不一样说明出现了错误**

### Modbus协议开发

**调试工具**

modbus slave：一个Modbus从机模拟器，可以模拟Modbus从机的行为，方便开发和调试Modbus主机程序。它支持Modbus RTU、ASCII和TCP协议，并提供了图形化界面，便于用户进行配置和操作。
modbus poll：一个Modbus主机模拟器，可以模拟Modbus主机的行为，方便开发和调试Modbus从机程序。它支持Modbus RTU、ASCII和TCP协议，并提供了图形化界面，便于用户进行配置和操作。

**开发框架**

freemodbus：一个开源的Modbus协议栈，支持Modbus RTU、ASCII和TCP协议。它提供了丰富的API接口，方便用户进行Modbus协议的开发和调试。freemodbus可以在多种操作系统上运行，包括Linux、Windows和RT-Thread等嵌入式操作系统。

**参考资料**

[RT-Thread官方移植freemodbus](https://github.com/RT-Thread-packages/freemodbus/blob/master/README_ZH.md)

[FreeModbus官网](https://www.embedded-experts.at/en/freemodbus/about/)

[详解Modbus通信协议---清晰易懂-CSDN博客](https://blog.csdn.net/as480133937/article/details/123197782)

# 物理层协议

## 通讯分类

| 通信方式  | 工作方式/定义                 | 优点                 | 缺点                      | 典型应用/例子              |
| ----- | ----------------------- | ------------------ | ----------------------- | -------------------- |
| 串行通信  | 数据位按顺序依次传输，每一位数据依次发送或接收 | 结构简单，布线简单，不易数据冲突   | 速度较慢，不适合大量数据快速传输        | USB，UART，光纤通信        |
| 并行通信  | 多个数据位同时传输，每个位有独立通道      | 速度快，适合大量数据快速传输     | 复杂度高，占用引脚多，易同步问题        | 短距离传输，长距离成本高         |
| 同步通信  | 发送和接收依赖共享时钟信号，时钟同步      | 时序清晰，易管理，适合实时和精确同步 | 高频时钟衰减快，易信号畸变，相位偏移，距离受限 | I2C，HDMI，CPU与内存接口    |
| 异步通信  | 不依赖共享时钟，靠起始位和停止位标识数据块   | 灵活，无需精确时钟，媒介简单，距离长 | 高速/长距离时易失真，解码复杂，可靠性降低   | UART，USB1.1/2.0，光纤通信 |
| 单工通信  | 单向通信，一个设备发送，另一个接收       | 结构简单               | 只能单向传输                  | 无线电广播、电视广播           |
| 半双工通信 | 双向但不能同时传输，需切换方向         | 双向传输               | 不能同时收发，需切换              | 对讲机、传统无线电通信          |
| 全双工通信 | 双向且可同时传输，双方可同时发送和接收     | 可同时收发，实现真正双向通信     | 结构相对复杂                  | 电话通话、互联网语音、计算机网络通    |

## UART

### 简介

UART是通用异步收发传输器（Universal Asynchronous Receiver/Transmitter）的缩写，是一种串行通信协议。它用于在计算机和外部设备之间进行数据传输。UART协议的特点是简单、易于实现，广泛应用于嵌入式系统、单片机和其他电子设备中。

### 物理特性

UART通信通常使用两根信号线：TX（发送）和RX（接收）。数据以串行方式传输，通常为8位数据位，1位起始位和1位停止位。波特率（Baud Rate）是UART通信的一个重要参数，表示每秒传输的比特数。

| 电平标准    | 信号类型      | 逻辑0      | 逻辑1      | 传输距离 | 传输速率 |
|:-------:|:---------:|:--------:|:--------:|:----:|:----:|
| TTL电平   | 0-5V      | 0V       | 5V       | 短距离  | 低速   |
| RS232电平 | -15V到+15V | -3V到-15V | +3V到+15V | 中距离  | 中速   |
| RS485电平 | 差分信号      | -2V到-6V  | +2V到+6V  | 长距离  | 高速   |
| RS422电平 | 差分信号      | -2V到-6V  | +2V到+6V  | 长距离  | 高速   |

### 数据帧格式

<img src="./assets_Protocol/串口数据帧格式.png" width="600" >

**关键参数如下**：

- **波特率**：UART通信是异步的，不需要时钟信号。发送方和接收方必须在波特率上保持一致，以确保数据正确传输。波特率是UART通信中数据传输的速率，通常以比特每秒（bps）表示。常见的波特率有9600、115200等。

- **空闲状态**：UART通信在没有数据传输时处于空闲状态，通常为逻辑1（高电平）。当数据传输开始时，发送方将信号线拉低（逻辑0）以表示起始位。

- **数据位**：UART通信通常使用8位数据位，但也可以使用5、6、7或9位数据位。低位(LSB)在前，高位(MSB)在后。

- **起始位**：每个数据帧以一个起始位开始，表示数据传输的开始。起始位通常为逻辑0。

- **停止位**：每个数据帧以0.5、1、1.5、2个停止位结束，表示数据传输的结束。停止位通常为逻辑1。

- **奇偶校验**：UART通信可以选择使用奇偶校验位来检测数据传输中的错误。奇偶校验位(1的个数为奇)可以是奇校验或偶校验。可省略。

### 接收模式

| 接收模式       | 实现方法                                                                                      | 优点   | 缺点                             |
|:----------:| ----------------------------------------------------------------------------------------- |:----:|:------------------------------:|
| 固定格式       | 约定数据包的开始和结束标志，在中断函数中逐字符进行判断                                                               | 简单高效 | 需要每个字符都进行判断，浪费 CPU 资源          |
| 接收中断+超时判断  | 接收中断+超时判断完成不定长数据的接收，通常来讲，两帧数据之间，会有个时间间隔。因此，我们可以使用一个计时器，如果在一个固定的时间点里没接收到新的字符，则认为一帧数据接收完成了。 | 高效   | 需要配置中断处理程序                     |
| 空闲中断+DMA接收 | 和接收中断+超时判断类似，不过空闲中断是硬件自带，但超时判断需要我们自己实现。一旦接收到空闲中断，可以认为接收到一帧完整的数据。并使用DMA自动接收，释放CPU          | 效率最高 | 需要额外硬件支持，高端MCU有空闲中断，低端MCU可能没有。 |

### 发送模式

| 发送模式  | 实现方法                 | 优点          | 缺点            |
|:-----:| -------------------- |:-----------:|:-------------:|
| 直接发送  | 直接将数据写入发送寄存器，等待发送完成  | 简单高效        | 需要等待发送完成，可能阻塞 |
| DMA发送 | 使用DMA控制器自动发送数据，释放CPU | 高效，适合大数据量传输 | 需要额外硬件支持，配置复杂 |

## I2C

[一文搞懂I2C通信总线_i2c通信的详细讲解-CSDN博客](https://blog.csdn.net/m0_38106923/article/details/123673285?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171066245616800182126176%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=171066245616800182126176&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-123673285-null-null.142^v99^pc_search_result_base7&utm_term=I2C&spm=1018.2226.3001.4187)
[I2C通信协议详解和通信流程分析_i2c通信的详细讲解-CSDN博客](https://blog.csdn.net/weixin_42031299/article/details/123602636?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171066529816800226524854%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=171066529816800226524854&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-4-123602636-null-null.142^v99^pc_search_result_base7&utm_term=I2C&spm=1018.2226.3001.4187)

### 简介

### 物理特性

### 通讯特性

开始和停止条件
地址传送
数据传送
总线应答
总线仲裁
空闲态
时钟同步/时钟延展

## SPI

[【总线】SPI 通信协议_spi协议-CSDN博客](https://blog.csdn.net/m0_61298445/article/details/124181396?ops_request_misc=&request_id=&biz_id=102&utm_term=SPI%E5%8D%8F%E8%AE%AE&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-124181396.142^v99^pc_search_result_base7&spm=1018.2226.3001.4187)

### 简介

SPI,全称（Serial Peripheral interface）是由摩托罗拉公司首先定义的协议，中文名为串型外围设备接口。SPI是一种高速全双工的总线协议
Serial（串型）：与并型相对应，单向数据通路只需要一根线，而同样常见的AMBA则为并型总线
Peripheral（外围）：指此总线多用来连接如“AD转换、EEPROM、PWM”等外围设备，即对应于AMBA的APB部分
Interface（总线接口）：很好理解，不再赘述。

### 物理特性

### 通讯特性

*开始和停止条件*
*地址传送*
*数据传送*
*总线应答*
*总线仲裁*
*空闲态*
*时钟同步/时钟延展*

## USB

## RS485/RS232/RS422

### 简介

RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，抗干扰能力比RS232强很多。两线压差为-2~-6V表示0，两线压差为+2~+6V表示1

### 特性及区别

| 协议    | 双工  | 物理特性 | 线制               | 逻辑1                        | 逻辑0                        | 传输距离       | 传输速率          | 优点  | 缺点  |
| ----- | --- | ---- | ---------------- | -------------------------- | -------------------------- | ---------- | ------------- | --- | --- |
| TTL   | 全双工 | 单端信号 | 三线制(TX/RX/GND)   | 0V~5V(信号线对GND)             | 0V~0.8V                    | 短距离(15米)   | 中速(115200bps) |     |     |
| RS232 | 全双工 | 单端信号 | 三线制(TX/RX/GND)   | -3V~-15V(信号线对GND)          | +3V~+15V                   | 中距离(50米)   | 中速(20Kbps)    |     |     |
| RS422 | 全双工 | 差分信号 | 四线制(T+/T-/R+/R-) | +2V~+6V(发送)<br/>>200mV(接收) | -2V~-6V(发送）<br/><200mV(接收) | 长距离(4000米) | 高速(10Mbps)    |     |     |
| RS485 | 半双工 | 差分信号 | 两线制(A/B)         | +2V~+6V(AB间电压差)            | -2V~-6V                    | 长距离(1200米) | 高速(10Mbps)    |     |     |

### 简介

RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，抗干扰能力比RS232强很多。两线压差为-2~-6V表示0，两线压差为+2~+6V表示1

### 物理特性

半双工

逻辑1：+2V~+6V
逻辑0： -2V~ -6V
注意485的电平指的是485-A和485-B两根传输线，两线间的电压差。而不是传输线上的电压

## RS232

RS232：是电子工业协会(Electronic Industries Association，EIA) 制定的异步传输标准接口，同时对应着电平标准和通信协议（时序），其电平标准：+3V～+15V对应0，-3V～-15V对应1。

全双工
逻辑1：-15V–5V
逻辑0：+3V–+15V

## LIN

## CAN

### CAN-FD

### 上层协议

#### CANopen

##### 开源协议栈

[canfestival](http://www.canfestival.org/)  
[CanopenNode](https://github.com/CANopenNode/CANopenNode)  
[CANopen Stack](https://github.com/embedded-office/canopen-stack)   
[uC/CANopen](https://www.armbbs.cn/forum.php?mod=viewthread&tid=96706)  
[Lely CANopen](https://gitlab.com/lely_industries/lely-core)

### 学习资料

[CanOpen学习笔记5-- CanFestival使用提示](https://blog.csdn.net/choujize1282/article/details/100809233)
[SDO](https://blog.csdn.net/qq_40104597/article/details/105773842)
[canOpen学习二之canOpen应用实现请求节点状态、改变节点状态、写字典、读字典](https://blog.csdn.net/qq_15181569/article/details/105812295)
[CanOpen学习笔记4-- 建立SDO通信](https://blog.csdn.net/choujize1282/article/details/100809232)
[CANopen开源协议栈 Canfestival源代码中文注释.rar](https://download.csdn.net/download/lingdianhao/12697541)
[基于STM32的Can_Festival调试问题3 -- SDO修改心跳时间过很久才有反应](https://blog.csdn.net/qq_43259179/article/details/106500111)
[CANopen使用方法与对象字典主要参数](https://blog.csdn.net/qq_27620407/article/details/109214157)
[canopen主站功能测试](https://blog.csdn.net/qq_42860269/article/details/126189812)
[CANopen补充--主站检测节点是否在线](https://blog.csdn.net/qq_37662088/article/details/123566073)
[canOpen学习九之canOpen应用实现主机自动发送同步帧](https://blog.csdn.net/qq_15181569/article/details/106190676)
[canOpen学习四之canOpen应用实现主机检测从机丢失](https://blog.csdn.net/qq_15181569/article/details/105855756)
[CanFestival字典生成](https://blog.csdn.net/lushoumin/article/details/92841982)
[基于STM32F4的CANopen快速SDO通信（超级详细）](https://blog.csdn.net/qq_37662088/article/details/123263133)
[嵌入式CANopen协议从入门到落地产品（更新2021.9.8）](https://blog.csdn.net/wallace89/article/details/119190305)
[STM32H743+CubeIDE-CanFestival实现两个CANopen Master同时独立运行](https://blog.csdn.net/wallace89/article/details/111020289)
[canfestival源代码注释](https://blog.csdn.net/bmliupan/article/details/98055255)
[STM32F103C8T6 CanFestival 心跳监测.rar](https://download.csdn.net/download/feng5200yu5/19765264)
[canFestival移植（3）-----SDO快速收发函数应用分析](https://blog.csdn.net/agony_isolate/article/details/106738590)
[CanFestival应用](https://blog.csdn.net/lushoumin/article/details/93051433)
[CANopen：移植CANFestival以及应用（基于CUBEMX HAL库）大礼包](https://blog.csdn.net/weixin_44118217/article/details/121265571)
[CANFestival简介](https://blog.csdn.net/weixin_44161807/article/details/123923680)
[CANFestival简介](https://blog.csdn.net/iamplane/article/details/49944491)
[CANOpen协议详解（二）：协议具体内容](https://blog.csdn.net/u012846795/article/details/121008306)
[CANOpen协议详解（一）：CANfestival源码分析](https://blog.csdn.net/u012846795/article/details/121008265)
[CanFestival协议栈从站实现和源码简析](https://blog.csdn.net/sinat_19440229/article/details/86712013)
[CANOpen系列教程11_深度分析CanFestival_3架构](https://blog.csdn.net/ybhuangfugui/article/details/99826257)
[CanFestival移植中的心跳问题](https://blog.csdn.net/zdc1122/article/details/81220580)
[canFestival移植（2）](https://blog.csdn.net/agony_isolate/article/details/106736726)
[(111条消息) 基于ZYNQ的开源CANopen协议栈CANFestival移植_MmikerR的博客-CSDN博客_canfestival 节点守护](https://blog.csdn.net/MmikerR/article/details/106487947?spm=1001.2014.3001.5506)
[CANOpen服务数据对象报文 - 百度文库](https://wenku.baidu.com/view/63617379383567ec102de2bd960590c69ec3d800?pcf=2&bfetype=new&bfetype=new)
[(109条消息) canFestival移植（3）-----SDO快速收发函数应用分析_agony_isolate的博客-CSDN博客_canfestival sdo](https://blog.csdn.net/agony_isolate/article/details/106738590?spm=1001.2014.3001.5506)
[CANOpen服务数据对象报文 - it610.com](https://www.it610.com/article/1290517464798535680.htm)
[(111条消息) SDO_史蒂芬_丁的博客-CSDN博客](https://blog.csdn.net/qq_40104597/article/details/105773842?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166597385916800184145136%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166597385916800184145136&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-1-105773842-null-null.142%5Ev57%5Econtrol_1,201%5Ev3%5Eadd_ask&utm_term=SDOlineToObjdict&spm=1018.2226.3001.4187)
[CanOpen学习笔记4-- 建立SDO通信 - bo_zhang的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/3583648/blog/1488473)

### 其他未整理

[【技术分享】CAN总线接口保护电路设计指南 (qq.com)](https://mp.weixin.qq.com/s/GeGLQKnx_gXebGBIDuZIkA)
[CAN总线标准接口与布线规范](https://zhuanlan.zhihu.com/p/34333969)
[如何进行汽车 CAN 总线开发？](https://www.zhihu.com/question/35630289/answer/650086824)
[CAN通讯系列--CAN通讯简介1](https://zhuanlan.zhihu.com/p/268498263)
[如何进行汽车 CAN 总线开发？](https://www.zhihu.com/question/35630289/answer/1475265732)
[从CAN Transceiver角度，理解两帧网络管理报文唤醒网络的原理](https://zhuanlan.zhihu.com/p/625621861)
[商用车网络设计利器—SAE J1939协议](https://zhuanlan.zhihu.com/p/234694992)
[CAN 系统在国防与农业上的应用](https://zhuanlan.zhihu.com/p/43802975)
[如何学习CAN总线](https://zhuanlan.zhihu.com/p/30247549)
[CAN协议 实战STM32F4 CAN](https://zhuanlan.zhihu.com/p/618265492)
[一篇易懂的CAN通讯协议指南](https://zhuanlan.zhihu.com/p/447272040)
[汽车CAN解析过程中，PGN这一块如何理解，如何使用？](https://www.zhihu.com/question/57714760/answer/975529350)
[如何学习汽车 CAN-BUS 系统](https://www.zhihu.com/question/24085250/answer/38829244)
[搞嵌入式必懂的 CAN 总线知识](https://zhuanlan.zhihu.com/p/651301139)
[【吸口冷知识】CAN总线保卫战中，TDK力推什么ESD防护元件？](https://www.bilibili.com/video/BV1Lw411n7ik/)
[CANOpen服务数据对象报文](https://blog.csdn.net/android_lover2014/article/details/80009098)
[学习CANopen --- [8] 多主机同时运行时的问题](https://blog.csdn.net/whahu1989/article/details/127192507)
[【金橙智能】手把手教你学习CAN通信](https://www.bilibili.com/video/BV1214y1c7Ut/) 
[细数基于can之上的应用层协议](https://blog.csdn.net/HandsomeHong/article/details/123307202)
[Tbox在整车CAN网络的位置与作用--远程控制和远程诊断](https://blog.csdn.net/Cheatscat/article/details/108151542)
[车载网络结构（车内）-基础概念](https://blog.csdn.net/lamanchas/article/details/121880449)
[整车CAN网络拓扑图](https://blog.csdn.net/ChenGuiGan/article/details/88060299)
[CAN(FD)收发器选型及替换指南(二)](https://blog.csdn.net/bjxdbz/article/details/124435792)
[TJA1050T CAN总线通信硬件原理](https://blog.csdn.net/passerbyyuan/article/details/51671563)
[拖拉机控制关键协议 ISO-11783 协议解析](https://blog.csdn.net/zvvzxzko2006/article/details/109050242)
[SAE J1939协议（一）](https://blog.csdn.net/Bruce_Qee/article/details/117608885)
[通信总线-现场总线-CAN](https://blog.csdn.net/qq_28514991/article/details/101350628)
[canopen协议详解_汽车CAN总线详解](https://blog.csdn.net/weixin_39940714/article/details/110596986)
[can总线短距离不用双绞线_电磁干扰很严重，如何提高CAN总线电磁兼容性](https://blog.csdn.net/weixin_39527292/article/details/111486998)
[汽车CAN总线关闭故障的诊断与恢复](https://blog.csdn.net/bonson2004/article/details/68924343)
[CAN Busoff原理/快慢恢复介绍以及利用Vector VH6501 CAN干扰仪经典CAN2.0/CANFD帧触发Busoff](https://blog.csdn.net/qfmzhu/article/details/107335763)
[CAN通信物理容错测试CAN_H与CAN_L、与GND、与电源短路，busoff](https://blog.csdn.net/weixin_44283390/article/details/128398383)
[CAN网络开路和短路带来的影响](https://blog.csdn.net/meteorite91/article/details/69153531)
[CAN、485隔离电路分享](https://blog.csdn.net/qq_15181569/article/details/111028147)

#### CAN通讯学习

CAN协议的特点：

1. 多主控制，利用ID标识符来分辨
2. 系统柔软性，没有类似地址的信息
3. 速度快，距离远
4. 具有错误检测、错误通知和错误恢复功能
5. 故障封闭功能
6. 连接节点多

电平定义：

- 显性电平：逻辑0；CAN_High=3.5V，CAN_Low=1.5V
- 隐形电平：逻辑1；CAN_High=2.5V，CAN_Low=2.5V
- 总线上显性电平优先

帧类型

1. 数据帧：用于发送单元向接收单元传送数据的帧
2. 远程帧：用于接收单元向具有相同ID的发送单元请求数据的帧
3. 错误帧：用于当检测出错误时向其它单元通知错误的帧
4. 过载帧：用于接收单元通知其尚未做好接收准备的帧
5. 间隔帧：用于将数据帧及遥控帧与前面的帧分离开来的帧

数据帧和远程帧有标准格式（11位标识符ID）和扩展格式（29位ID）

数据帧由7各段组成

1. 帧起始：表示数据帧开始的段

2. 仲裁段：表示该帧优先级的段

3. 控制段：表示数据的字节数及保留位的段

4. 数据段：数据的内容，一帧可发送0-8字节个字节的数据

5. CRC段：检查帧的传输错误的段

6. ACK段：表示确认正常接收的段

7. 帧结束：表示数据帧结束的段

![CAN1](.\assets\CAN1.png]

起始帧SOF是1位显性0

RTR在数据帧中必须为显性0，在远程帧里为隐形1；因此数据帧优先于远程帧。SRR是是隐形位。因此标准格式优先于扩展格式。

IDE在标准格式中为显性0，在扩展格式下位隐形1；标准格式下IDE属于控制场，扩展格式下IDE属于仲裁场。

控制场有6个位，其中4位长度数据；表示0-8个字节；保留位r0和r1必须为显性0。

CRC场有16位，其中15位CRC序列和1位CRC界定符

应答场有2位，发送位发送2位隐形1，接收器正确接收有效报文后，在第一位时发送1位显性0以示应答

帧结尾EOF在数据帧和远程帧中都是由7位隐形1组成

![CAN2](.\assets\CAN2.png)

#### 深入浅出讲解CAN总线

伺服与运动控制 _2020-06-04 17:10_

点击**蓝字**  **关注****伺服与运动控制**

现场总线是当今自动化领域技术发展的热点之一，被誉为自动化领域的计算机局域网。CAN是控制器局域网络(Controller Area Network, CAN)的简称，是国际上应用最广泛的现场总线之一。CAN 的高性能和可靠性已被认同，并被广泛地应用于工业自动化、船舶、医疗设备、工业设备等方面。

**先看看工作原理**

当 CAN 总线上的一个节点（站）发送数据时，它以报文的形式广播给网络中所有节点，对每个节点来说，无论数据是否是发给自己的，都对其接收。

每组报文开头的11 位字符为标识符，定义了报文的优先级，这种报文格式成为面向内容的编制方案。同一系统中标识符是唯一的，不可能有两个站发送具有相同标识符的报文，当几个站同时竞争总线读取时，这种配置十分重要。

大体的工作原理我们搞清了，但是根本的协议我们还要花一番功夫。下面介绍一个重要的名词，“显性”和“隐性”：

在我看到的很多文章里，有很多显性和隐性的地方，为此我头痛不已，最终我把它们彻底弄明白了。

首先 CAN 数据总线有两条导线，一条是黄色的，一条是绿色的------分别是CAN_High 线和CAN_Low 线，当静止状态时，这两条导线上的电平一样，这个电平称为静电平，大约为2.5 伏。

这个静电平状态就是隐形状态，也称隐性电平，也就是没有任何干扰的时候的状态称为隐性状态。当有信号修改时，CAN_High 线上的电压值变高了，一般来说会升高至少1V；而CAN_Low 线上的电压值会降低一个同样值，也是1v。

那么这时候，CAN_High 就是 2.5v+1v=3.5v，它就处于激活状态了。而CAN_Low 降为2.5v-1v=1.5v。可以看看这个图

**由此我们得到**

在隐性状态下，CAN_High 线与CAN_Low 没有电压差，这样我们看到没有任何变化也就检测不到信号。但是在显性状态时，改值最低为2V，我们就可以利用这种变化才传输数据了。所以出现了那些帧，那些帧中的场，那些场中的位，云云。

在总线上通常逻辑1 表示隐性。而0 表示显性。这些1 啊，0 啊，就可以利用起来为我们传数据了。利用这种电压差，我们可以接收信号。

一般来说，控制单元通过收发器连接到 CAN 驱动总线上，这个收发器（顾名思义，可发送，可接收）内有一个接收器，该接收器是安装在接收一侧的差动信号放大器。然后，这个放大器很自然地就放大了CAN_High 和CAN_Low 线的电平差，然后传到接收区。如下图

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbVykSnRPkIicZLibcVg6GIwXAWxhm6vEEicVdvyicyT6DAdGgvFxMp2YHTQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbVykSnRPkIicZLibcVg6GIwXAWxhm6vEEicVdvyicyT6DAdGgvFxMp2YHTQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

由上图可知，当有电压差，差动信号放大器放大传输，将相应的数据位转化为0。

**下面我们进入重点难点-----报文**

所谓报文，就是CAN 总线上要传输的数据报，为了安全，我们要给我们传输的数据报编码定一下协议，这样才能不容易出错，所以出现了很多的帧，以及仲裁啊，CRC 效验。这些都是难点。

**识别符的概念**

识别符顾名思义，就是为了区分不同报文的可以鉴别的好多字符位。有标准的，和扩展的。标准的是11 位，扩展的是29 位。他有一个功能就是可以提供优先级，也就是决定哪个报文优先被传输，报文标识符的值越小，报文具有越高的优先权。

CAN 的报文格式有两种，不同之处其实就是识别符长度不同，具有11 位识别符的帧称为标准帧，而还有29 位识别符的帧为扩展帧，CAN 报文有以下4 个不同的帧类型。分别是：

（1） 数据帧：数据帧将数据从发送器传输到接收器；

（2） 远程帧：总线节点发出远程帧，请求发送具有同一标识符的数据帧；

（3） 错误帧：任何节点检测到总线错误就发出错误帧；

（4） 过载帧：过载帧用已在先行的后续的数据帧（或远程帧）之间提供一附加的延时。

**我们先研究数据帧吧。**

**一，数据帧由 7 个不同位场组成**（帧起始、仲裁场、控制场、数据场、CRC场、应答场、帧结尾）。

这里的位场，就是不同位的组合，这名字起的很烂，让人看了感觉很抽象。我们来看看这些个不同的位场吧。一开始是一位帧起始，也叫SOF。它用显性位表示，也就是0；它告诉我们，两个线上有电压差了，也就是有数据了。

这个帧起始看起来只有一位，其实不简单了。为了让所有的分站都同步于发送报文的发送站，好接收数据，有很多要考虑的地方。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbAhQSFiav2DVL3ibPCZZa1AxoK5ibtK2rqiaJK3KeibTrvj6W5fdIIwh189Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbAhQSFiav2DVL3ibPCZZa1AxoK5ibtK2rqiaJK3KeibTrvj6W5fdIIwh189Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**报文的数据帧结构**

然后下一个场是仲裁场。这个仲裁很抽象，其实在这里就是为了解决一个问题。如果2 个或2 个以上的单元同时开始传送报文，那么就会有总线访问冲突，那么仲裁机制就是用来根据标识符优先级来一个一个的去掉低级别的数据。我们可以详细的描述这场生动的争抢总线的战斗。

当总线处于空闲状态时呈隐性电平，此时任何节点都可以向总线发送显性电平作为帧的开始。2 个或2 个以上的节点同时发送开始争抢总线，但是总线只能被一个人抢走。这时候到底怎么决定谁留下，谁滚蛋呢。我们开始思索，我们以前定义了标识符，标识符有优先级，它越小，它优先级越高。那么怎么实现的呢。看下面图：

首先搞明白两点，

一、下图中， 低波形代表0（显性），高波形代表1（隐性）；

二、当隐性碰到显性，就变为显性。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbbmhORsaKrMBkZwZKk8ocl9jcTMtBCFbIwHoIUz2R6INJSu6x9picFzQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbbmhORsaKrMBkZwZKk8ocl9jcTMtBCFbIwHoIUz2R6INJSu6x9picFzQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

如图所示，节点 A 和节点B 的标识符的第10、9、8 位电平相同，因此两个节点侦听到的信息和它们发出的信息相同。第7位节点B发出一个“1”，但从节点上接收到的消息却是“0”。

为什么呢，因为A 节点同时发出显性位，让总线也变成显性了，也就是0。节点B 会退出发送处于单纯监听方式而不发送数据；节点A 成功发送仲裁位从而获得总线的控制权，继而发送全部消息。

总线中的信号持续跟踪最后获得总线控制权发出的报文，本例中节点A的报文将被跟踪。这种非破坏性位仲裁方法的优点在于，在网络最终确定哪个节点被传送前，报文的起始部分已经在网络中传输了，因此具有高优先级的节点的数据传输没有任何延时。

在获得总线控制权的节点发送数据过程中，其他节点成为报文的接收节点，并且不会在总线再次空闲之前发送报文，在这逐位的比较中，最终节点B 因为第七位的偏差丢掉了总线。从此单纯监听，江山就拱手让给了节点A 了。这就是仲裁机制。

上面我们说过，报文有两种格式，标准和扩展。这里，不同的格式仲裁场是不一样的。标准格式下，仲裁场由11 位识别符和RTR 位组成。

但在扩展格式里，包括29 位识别符、SRR 位、IDE 位、RTR 位。

RTR 位，Remote Tranmission Request BIT 全称为远程发送请求位。它在数据帧里必须为显性0 ，但在远程帧里为隐性1。

我晕，为什么这么搞呢，不急，先留着这个问题。

SRR 位，替代远程请求位，SRR 是一隐性位，也就是1，它在扩展格式的标准帧RTR 位位置，那么标准帧怪不得优先于扩展帧了，因为在传输完11 位标识符之后（扩展帧的后18 位在最后发送，先发送11 位标识符），轮到标准帧的RTR 位和扩展帧的SRR 位了。

这时候，标准帧的RTR 为显性，而扩展帧SRR 为隐性，这样，总线自然就被标准帧占据。

同时上面那个问题，也一目了然了，CAN 总线协议设计者，肯定是设计了数据帧优先于远程帧。所以IDE(Identifier Extension Bit)，全称识别符扩展位，它属于扩展格式的仲裁场。

对于扩展格式，IDE位属于仲裁场；对于标准格式，IDE位属于控制场。标准格式的IDE位为“显性”，而扩展格式的IDE位为“隐性”。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPb67HibfxyfMib5QhRx0ZjyYKGXB5rjd5akGOFI8MEJiaWNUakj16jaibROw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPb67HibfxyfMib5QhRx0ZjyYKGXB5rjd5akGOFI8MEJiaWNUakj16jaibROw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

标准格式中的数据帧

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbRCCPQP22Pcib6tg5NzdF67ttFOlQfuXzKahnovYgWIF1aWXKoE7bibjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbRCCPQP22Pcib6tg5NzdF67ttFOlQfuXzKahnovYgWIF1aWXKoE7bibjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

拓展格式中的数据帧

**控制场**

控制场由6个位组成，标准格式和扩展格式的控制场格式不同。标准格式里的帧包括数据长度代码、IDE位（为显性位）及保留位r0。扩展格式里的帧包括数据长度代码和两个保留位：r1和r0。其保留位必须发送为显性，但是接收器认可“显性”和“隐性”位的任何组合。其结构如图所示：

**控制场结构**

数据长度代码（标准格式以及扩展格式）DLC，如下表所示

**数据帧长度代码DLC**

数据长度代码指示了数据场里的字节数量。其中：d—“显性”， r—“隐性”，数据帧允许的数据字节数为{0，1，...，7，8}。其他的数值不允许使用。

**数据场**

数据场由数据帧里的发送数据组成。它可以为0~8个字节，每字节包含了8个位，首先发送最高有效位（MSB）。

循环冗余码CRC场是数据通信领域中最常用的一种差错校验码，其特征是信息字段和校验字段的长度可以任意选定。

CRC场包括CRC序列（CRC Sequence），其后是CRC界定符（CRC Delimiter），结构如图：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPb0ibl1LBWI6LxiaTglwdO7jXq7TU9BrWfSmmWYP0RLlCQDr3hZcjnrgoQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPb0ibl1LBWI6LxiaTglwdO7jXq7TU9BrWfSmmWYP0RLlCQDr3hZcjnrgoQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**生成 CRC 码的基本原理：**

任意一个由二进制位串组成的代码都可以和一个系数仅为‘0’和‘1’取值的多项式一一对应。例如：代码1010111 对应的多项式为x6+x4+x2+x+1，而多项式为x5+x3+x2+x+1 对应的代码101111。

参考一下下面的例题，自已再领悟一下吧！已知信息位为1101，生成多项式G(x)= x3+x+1，求CRC 码。

要传输的信息序列为1101，在末尾添加所给多项式的最高次阶个0，如本题为x^3，则添加3个0,变为：1101000；

由多项式G(X)=X3+X+1，得其阶数为1的二进制编码为：1011；1101000对1011进行模二除法，所得到的余数即为校验码，把校验码添加在原数据尾部即为所求的编码,则实际发送的数据序列为1101001。校验码计算过程如图所示：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tP4ibBCAEYYDTeicCJeVkLQU9MiaHWLthHRpVRg9b1GquWqXDGLp34YkSXR0HkRDJpgcX8GfT4gnrudg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tP4ibBCAEYYDTeicCJeVkLQU9MiaHWLthHRpVRg9b1GquWqXDGLp34YkSXR0HkRDJpgcX8GfT4gnrudg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

模二除法

**应答场（ACK Field）**

应答场长度为2个位，包含应答间隙（ACK Slot）和应答界定符（ACK Delimiter），如图所示。在ACK场（应答场）里，发送节点发送两个“隐性”位。

当接收器正确地接收到有效的报文，接收器就会在应答间隙（ACK Slot）期间向发送器发送一“显性”位以示应答。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbXI3qlIZWqFPoxfsRLfQNWw6zbnkXTRhBsxx88yT9HuGGBoOANgebYg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbXI3qlIZWqFPoxfsRLfQNWw6zbnkXTRhBsxx88yT9HuGGBoOANgebYg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**帧结尾**

每一个数据帧和远程帧均由一标志序列界定。这个标志序列由7个“隐性”位组成。

**二、远程帧**

通过发送远程帧，总线的节点发出远程帧，请求以前发送给它数据帧的节点再发送一遍。具体发送哪个数据帧，由远程帧的标识符决定。

与数据帧类似，远程帧也有标准格式和扩展格式，而且都由6个不同的位场组成：帧起始、仲裁场、控制场、CRC场、应答场、帧结尾。

与数据帧相反，远程帧的RTR位是“隐性”的。它没有数据场，数据长度代码DLC的数值是不受制约的（可以标注为容许范围０~8里的任何数值），此数值是相应于数据帧的数据长度代码。远程帧结构如图所示：

远程帧结构

**三、错误帧**

错误帧由两个不同的场组成，第一个场是不同节点提供的错误标志（Error Flag）的叠加，第二个场是错误界定符。

为了能正确地终止错误帧，“错误认可”的节点要求总线至少有长度为3个位时间的总线空闲。因此，总线的载荷不应为100%。错误帧结构如图：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbicsLS7s2KuakjN4AURYZLUelPHQZs8gQjbswNB7lcmDRYQN2YwakpVg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbicsLS7s2KuakjN4AURYZLUelPHQZs8gQjbswNB7lcmDRYQN2YwakpVg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

错误帧结构（图中统一起见出错帧改为错误帧）

(1) 错误标志，有两种形式的错误标志：激活错误标志 和 认可错误标志

“激活错误”标志由6个连续的“显性”位组成；“认可错误”标志由6个连续的“隐性”的位组成，除非被其他节点的“显性”位重写。

(2) 错误界定符，错误界定符包括8个“隐性”的位。

错误标志传送了以后，每一个节点就发送一个“隐性”的位，并一直监视总线直到检测出一个“隐性”的位为止，然后就开始发送其余7个“隐性”位。

**四、过载帧**

过载帧（Overload Frame）包括两个位场：过载标志 和 过载界定符，其结构如图：

过载帧结构图

有三种过载的情况会引发过载标志的传送：接收器的内部情况，需要延迟下一个数据帧和远程帧。

在间歇（Intermission）的第1和第2字节检测到一个“显性”位。这里有个间歇的概念。我们可以讲讲。间歇属于帧间空间的一部分。它包含三个隐性位。间歇期间，所有的站不允许传送数据帧或远程帧。它唯一要做的就是标示一个过载条件。

如果CAN节点在错误界定符或过载界定符的第8位（最后一位）采样到一个显性位，节点会发送一个过载帧。该帧不是错误帧，错误计数器不会增加。

（1）过载标志（Overload Flag）

过载标志由6个“显性”的位组成。过载标志的所有形式和“激活错误”标志的一样。

（2）过载界定符（Overload Delimiter）

过载界定符包括8个“隐性”的位。

**五、帧间空间**

数据帧（或远程帧）与先行帧的隔离是通过帧间空间实现的，无论此先行帧类型如何（数据帧、远程帧、错误帧、过载帧）。

帧间空间包括间歇、总线空闲的位场。如果“错误认可”的节点已作为前一报文的发送器，则其帧间空间除了间歇、总线空闲外，还包括称作“挂起传送”（暂停发送）（Suspend Transmission）的位场。

对于不是“错误认可”的节点，或作为前一报文的接收器的节点，其帧间空间如图：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbia3lgoZic3l2QzkHaibVSSUUbLsYCOaiavaF2MQgriauNs0GCxSYKToAz0w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbia3lgoZic3l2QzkHaibVSSUUbLsYCOaiavaF2MQgriauNs0GCxSYKToAz0w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

非 “错误认可”帧间空间

对于作为前一报文发送器的“错误认可”的节点，其帧间空间如图：

“错误激活”帧间空间

（1）总线空闲（Bus Idle）

总线空闲的时间是任意的。只要总线被认定为空闲，任何等待发送报文的节点就会访问总线。在发送其他报文期间，有报文被挂起，对于这样的报文，其传送起始于间歇之后的第一个位。总线上检测到的“显性”的位可被解释为帧的起始。

（2）挂起传送（Suspend Transmission）

“错误认可”的节点发送报文后，节点就在下一报文开始传送之前或总线空闲之前发出8个“隐性”的位跟随在间歇的后面。如果与此同时另一节点开始发送报文（由另一节点引起），则此节点就作为这个报文的接收器。

最后用脑图总结：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbquia1BsHl7SPnZf4nhT53XYPiaavlwUBy5KQ77rwKdw5fFz59icLHnAkA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbquia1BsHl7SPnZf4nhT53XYPiaavlwUBy5KQ77rwKdw5fFz59icLHnAkA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

再来几张实物图：

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbqJaz5t6DIibjP4XJ9wHdqvqdvFq1jeXwzDjeyDxOIGSsn9hQevo6UfQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbqJaz5t6DIibjP4XJ9wHdqvqdvFq1jeXwzDjeyDxOIGSsn9hQevo6UfQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

CAN总线接收芯片

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbXbDZm70Aaib2AOZOYicufpLdOiboQcHMkka4OsklvHaxz1AialOGPyuZVg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbXbDZm70Aaib2AOZOYicufpLdOiboQcHMkka4OsklvHaxz1AialOGPyuZVg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

CAN总线控制器芯片

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbMsSIDT1V3Fc4SC0QsenmLMtiazQBBv6TwMjGPlK4CmmTuEHPR5AKWUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbMsSIDT1V3Fc4SC0QsenmLMtiazQBBv6TwMjGPlK4CmmTuEHPR5AKWUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

标准数据帧波形捕获

[![](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbM2BvYzFQSZOODdYxyvdB1kmhibD1jibd0JTS5P2yUsiajbBVZ0YiaibUvjA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/XM55D4pxMhDibEKlictwHltg8A7cmU3wPbM2BvYzFQSZOODdYxyvdB1kmhibD1jibd0JTS5P2yUsiajbBVZ0YiaibUvjA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)

扩展数据帧波形捕获

- END -

#### CANopen学习

Object Dictionary（OD对象词典），对设备的操作基于OD dict；所有的参数、参数值和功能都是通过16位的index和8位sub-index组成的地址来访问和存取。通俗理解为CANopen通讯的地址

![[assets/Untitled.png|Untitled.png]]

CANopen网络中每个节点都有一个对象字典。对象字典包含了描述这个设备和它的网络行为的所有参数。  
一个节点的对象字典（包含通讯功能、通讯对象、与设备相关的对象以及对象的缺省值等）是在电子数据文档（EDS:Electronic Data Sheet）中描述或者记录在纸上。

CANopen对象词典的通用结构  
对象字典中描述通讯参数部分对所有CANopen设备（例如在OD中的对象是相同的，对象值不必一定相同）都是一样的。

COB-ID：只采用标准格式，包括Function ID和Node-ID

PDO：生产消费型

SDO：服务器客户端型；只有NMT主机能发起SDO通信

NMT

##### NMT网络管理

每个CANopen从节点的协议栈中，必须具备NMT管理的响应代码，这是节点具备CANopen协议的最基本的要素

NMT节点状态

1. **初始化**（Initializing）：节点上电后对功能部件包括 CAN 控制器进行初始化；
2. **应用层复**位（Application Reset）：节点中的应用程序复位（开始），比如开关量输出、模拟量输出的初始值；
3. **通讯复位**（Communication reset）：节点中的CANopen通讯复位（开始），从这个时刻起，此节点就可以进行CANopen通讯了。
4. **预操作状态**（Pre-operational）：节点的CANopen通讯处于操作就绪状态，此时此节点不能进行PDO通信，而可以进行SDO进行参数配置和NMT网络管理的操作；
5. **操作状态**（operational）：节点收到NMT主机发来的启动命令后，CANopen通讯被激活，PDO通信启动后，按照对象字典里面规定的规则进行传输，同样SDO也可以对节点进行数据传输和参数修改；
6. **停止状态**（Stopped）：节点收到NMT主机发来的停止命令后，节点的PDO通信被停止，但SDO和NMT网络管理依然可以对节点进行操作；

CANopen从站上线后，必须给NMT发送节点上线报文，ID为700h+Node-ID，数据为1个字节0

心跳报文为700h+Node-ID，数据为1个字节，代表节点目前的状态，04h为停止状态，05h为操作状态，7Fh为预操作状态；从站心跳时间存在EDS的1017h；主站按EDS的1006h的心跳时间进行检查。

节点守护和心跳报文二者不能并存，节点守护是问询式，且采用了远程帧发问，所以节点守护CIA不建议使用了

NMT节点状态切换命令：对网络进行管理CANID均为000h，具备最高的CAN优先级。数据为2个字节

第一字节代表命令类型

1. **01****h**为启动命令（让节点进入操作状态）；
2. **02****h**为停止命令（让节点进入停止状态）；
3. **80****h**为进入预操作状态（让节点进入预操作状态）；
4. **81****h**为复位节点应用层（让节点的应用恢复初始状态，比如列车门都恢复打开状态）；
5. **82h**为复位节点通讯（让节点的 CAN 和 CANopen 通讯重新初始化，一般用于总线收到干扰，导致节点总线错误被动，或者总线关闭时）。

第二个字节代表被控制的节点Node-ID，如果要对整个网络的所有节点同时控制，则这个数值为0即可

##### CANopen主站设备

为了满足管理整个CANopen网络的从站设备，需要具备一下功能

1. 支持 PDO、SDO 发送与接收；
2. 支持 NMT 网络管理；
3. 支持 PDO 通信类型并能够支持监控每一个 PDO 目标；
4. LSS 层设置功能：从站波特率设置、从站节点编号设置；
5. 支持从站管理功能：类型与名称读取、对象字典读写；
6. 紧急报文发送功能；
7. 扩展 CANopen 标准指示灯功能。

##### 过程数据对象PDO（Process data object）

PDO 属于过程数据用来传输实时数据，即单向传输，无需接收节点回应CAN 报文来确认，从通讯术语上来说是属于“生产消费”模型 PDO；

数据长度被限制为 1~8 字节。最多只要 1 帧就可以把一条信息或者一个变量传递结束。

而在 PDO 预定义中，人为规定了 TPDO 和 RPDO，规定了 Node-ID 在 PDO 中的位置，规定了 PDO 的编号。

![[assets/Untitled 1.png|Untitled 1.png]]

PDO的通信参数，定义了该设备所使用的 COB-ID、传输类型、定时周期等。RPDO 通讯参数位于对象字典索引的 1400h to 15FFh，TPDO 通讯参数位于对象字典索引的 1800h to19FFh。每条索引代表一个 PDO 的通信参数集，其中的子索引分别指向具体的各种参数。如表 7.2 所示。

![[assets/Untitled 2.png|Untitled 2.png]]

1. Number of entries 参数条目数量：即本索引中有几条参数；
2. COB-ID：即这个 PDO 发出或者接收的对应 CAN 帧 ID；
3. 发送类型：即这个 PDO 发送或者接收的传输形式，通常使用循环同步和异步制造商特定事件较多；
4. Inhibit time 生产禁止约束时间(1/10ms)：约束 PDO 发送的最小间隔，避免导致总线负载剧烈增加，比如数字量输入过快，导致状态改变发送的 TPDO 频繁发送，总线负载加大，所以需要一个约束时间来进行“滤波”，这个时间单位为 0.1ms；
5. Event timer 事件定时器触发的时间(单位 ms)：定时发送的 PDO，它的定时时间，如果这个时间为 0，则这个 PDO 为事件改变发送。
6. SYNC start value 同步起始值：同步传输的 PDO，收到诺干个同步包后，才进行发送，这个同步起始值就是同步包数量。比如设置为 2，即收到 2 个同步包后才进行发送。

PDO 映射参数是初学者学习 CANopen 时的一个难点，它包含了一个对象字典中的对象列表，这些对象映射到相应的 PDO，其中包括数据的长度（单位，位），对于生产者和消费者都必须要知道这个映射参数，才能够正确的解释 PDO 内容。就是将通信参数、应用数据和具体 CAN 报文中数据联系起来。

RPDO 通讯参数 1400h to 15FFh，映射参数 1600h to 17FFh，数据存放为 2000h 之后厂商自定义区域；TPDO 通讯参数 1800h to 19FFh，映射参数 1A00h to 1BFFh，数据存放为 2000h 之后厂商自定义区域。

##### 服务数据对象 SDO（Service data object）

SDO主要用于CANopen主站对从节点的参数配置。==服务确认==是SDO的最大的特点，为每个消息都生成一个应答，确保数据传输的准确性。

在一个CANopen系统中，通常CANopen从节点作为SDO服务器，CANopen主节点作为客户端。SDO客户端通过所以和子索引，能够访问SDO服务器上的对象字典。这样CANopen主节点可以访问从节点的任意对象字典项的参数，并且SDO也可以传输任何长度的数据（当数据长度 超过4个字节时就拆分成多个报文来传输）。

SDO 的通讯原则非常单一，发送方（客户端）发送 CAN-ID 为 600h+Node-ID 的报文，其中 Node-ID 为接收方（服务器）的节点地址，数据长度均为 8 字节；

接收方（服务器）成功接收后，回应 CAN-ID 为 580h+Node-ID 的报文。这里的 Node-ID依然是接收方（服务器）的节点地址，数据长度均为 8 字节。

==**快速SDO协议（Expedited SDO protocol）**==是最常见的SDO协议，所谓快速，就是1个来回就搞定。前提是读取和写入的值不能大于32位。命令中直接包含了要读写的索引、子索引、数据。可谓直接命中。

![[assets/Untitled 3.png|Untitled 3.png]]

通过快速 SDO，可以直接对 CANopen 节点的对象字典中的值进行读取和修改，所以在 做参数配置之外，也经常作为关键性数据传输之用。比如 CANopen 控制机器人的电机转动  
角度时，就使用 SDO 来传输，保证可靠到达。

==**普通SDO协议（Normal SDO protocol）**==，当需要传输的值==超过 32 位==时，就不能使用快速 SDO 传输。必须使用普通 SDO 进行分帧传输。在应用中==较少用到==，==一般用于 CANopen 节点的程序固件升级==，或者做网关转换MVB 总线之类数据最大可达 256 位的应用。

普通SDO协议难点在于分包逻辑与CS命令符的变化（具体见图）。普通SDO的CAN帧ID与快速SDO相同，依然发送方（客户端）发送的报文CAN-ID为600h+Node-ID，接收方（服务器）成功接收后，回应CAN-ID为580h+Node-ID的报文。

##### 特殊协议（Special protocols）

==**同步协议（Sync protocol）**==：主要实现整个网络的同步传输，每个节点都以该同步报文作为 PDO 触发参数，因此该同步报文的 COB-ID 具有比较高的优先级以及最短的传输时间。 一般选用 80h作为同步报文的 CAN-ID，

一般同步报文由 NMT 主机发出，CAN 报文的数据为 0 字节。但如果一个网络内有 2 个同步机制，就需要设置不同的同步节拍，比如某些节点按 1 个同步帧发送 1 次 PDO，其 他的节点收到2个同步帧才发送1此PDO，所以这里PDO参数中的同步起始值就起了作用。

在同步协议中，有 2 个约束条件：

- **同步窗口时间**：索引 1007h约束了同步帧发送后，从节点发送 PDO 的时效，即在这个时间内发送的 PDO 才有效，超过时间的 PDO 将被丢弃；
- **通讯循环周期**：索引 1006h规定了同步帧的循环周期。

==**时间戳协议（Time-stamp protocol）**==：NMT主机发送自身的时钟，为网络各个节点提供公共的时间参考，即网络对时，这在故障诊断中非常需要，比如列车中火灾报警，检修人员需要朱雀获知报警的时刻，然后关联查看其他设备在这个时刻的工作状态。

时间戳协议采用广播方式，无需节点应答，CAN-ID 为 100h，数据长度为 6，数据为当 前时刻与 1984 年 1 月 1 日 0 时的时间差。如图 9.4 所示。节点将此时间存储在对象字典 1012h 的索引中。

==**紧急报文协议（Emergency protocol）**==：

紧急事件对象（Emergency），是当设备内部发生错误，触发该对象，发送设备内部错误代码，提示 NMT 主站。紧急报文属于诊断性报文，一般不会影响 CANopen 通讯，其 CAN-ID存储在 1014h的索引中，一般会定义为 080h +node-ID，数据包含 8 个字节。其中包括 EEC：紧急时间错误代码，ER：错误寄存器，MEF：厂商自定义的错误代码。

#### CAN收发器选型

CAN唤醒域诊断

> [!info] CAN(FD)收发器选型及替换指南(一)_常见的多通道can收发器_Auto FAE进阶之路的博客-CSDN博客  
> 本文主要介绍了主流厂家的CAN收发器及其相关特点_常见的多通道can收发器  
> [https://blog.csdn.net/bjxdbz/article/details/124435638?ops_request_misc=%7B%22request%5Fid%22%3A%22169206830916800192241737%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fblog.%22%7D&request_id=169206830916800192241737&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-124435638-null-null.268^v1^koosearch&utm_term=CAN&spm=1018.2226.3001.4450](https://blog.csdn.net/bjxdbz/article/details/124435638?ops_request_misc=%7B%22request%5Fid%22%3A%22169206830916800192241737%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fblog.%22%7D&request_id=169206830916800192241737&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-124435638-null-null.268^v1^koosearch&utm_term=CAN&spm=1018.2226.3001.4450)  

> [!info] CAN(FD)收发器选型及替换指南(二)_tja1443_Auto FAE进阶之路的博客-CSDN博客  
> 本文主要介绍了几家主流CAN收发器的替换注意事项_tja1443  
> [https://blog.csdn.net/bjxdbz/article/details/124435792?ops_request_misc=&request_id=&biz_id=102&utm_term=CAN收发器选型&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-124435792.142^v92^controlT0_2&spm=1018.2226.3001.4187](https://blog.csdn.net/bjxdbz/article/details/124435792?ops_request_misc=&request_id=&biz_id=102&utm_term=CAN收发器选型&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-124435792.142^v92^controlT0_2&spm=1018.2226.3001.4187)  

> [!info] TJA1043高速CAN收发器  
> 恩智浦的TJA1043是一款具有故障安全和诊断功能的高速CAN收发器，可提供增强的系统可靠性和高级电源管理。  
> [https://www.nxp.com.cn/products/interfaces/can-transceivers/can-with-flexible-data-rate/high-speed-can-transceiver-with-standby-and-sleep-mode:TJA1043](https://www.nxp.com.cn/products/interfaces/can-transceivers/can-with-flexible-data-rate/high-speed-can-transceiver-with-standby-and-sleep-mode:TJA1043)  

> [!info] 车载通信——CAN收发器选型（低功耗）_汽车人——EEA的博客-CSDN博客  
> 车载通信——CAN收发器选型（低功耗）  
> [https://blog.csdn.net/weixin_64064747/article/details/128076259?ops_request_misc=%7B%22request%5Fid%22%3A%22169206723316800188584636%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169206723316800188584636&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-128076259-null-null.142^v92^controlT0_2&utm_term=CAN收发器选型&spm=1018.2226.3001.4187](https://blog.csdn.net/weixin_64064747/article/details/128076259?ops_request_misc=%7B%22request%5Fid%22%3A%22169206723316800188584636%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169206723316800188584636&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-128076259-null-null.142^v92^controlT0_2&utm_term=CAN收发器选型&spm=1018.2226.3001.4187)  

> [!info] CAN收发器几种典型工作模式简介_碉堡大叔的博客-CSDN博客  
> 如上图1所示，当CAN总线的两个差分线重合于1/2VCC时，此处以5V供电的CAN收发器为例说明，这个状态对应着逻辑数据的1，这称之为隐性状态电平，与此相反，当两个差分线的电压分离开来时，如上图中所示，CANH为3.5V,CANL为1.5V时，则逻辑数据为0，这称之为显性状态电平。第三种工作模式，是静默模式，当STBY和NSIL这两个pin都是低电平时，芯片进入静默模式，在此模式下，CAN收发器只能接收数据，不能发送数据。总线电压是偏置在1/2VCC电压上的，它同时具有欠压检测的功能，我们后续会进行分析。_can收发器  
> [https://blog.csdn.net/weixin_39196333/article/details/131381994?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169206886016800225585553%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169206886016800225585553&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-131381994-null-null.142^v92^controlT0_2&utm_term=CAN%E6%94%B6%E5%8F%91%E5%99%A8%20%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F&spm=1018.2226.3001.4187](https://blog.csdn.net/weixin_39196333/article/details/131381994?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169206886016800225585553%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169206886016800225585553&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-131381994-null-null.142^v92^controlT0_2&utm_term=CAN%E6%94%B6%E5%8F%91%E5%99%A8%20%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F&spm=1018.2226.3001.4187)  

> [!info] TJA1403状态模式_tja1043 休眠唤醒的原理_西北风加冰棍的博客-CSDN博客  
> 正常模式在正常模式下，收发器可以通过总线CANH和CANL发送和接收数据。 差分接收器将总线上的模拟数据转换为数字数据，然后输出到RXD引脚。 控制和优化总线上的输出信号的斜率，以确保最低的EME。 总线引脚偏置到0.5VCC（通过Ri）。 INH引脚有效，因此由INH引脚控制的稳压器（见图7）也将处于活动状态。监听模式在监听模式下，收发器的发送器被禁用，收发器提供了有效的监听功能。 接收..._tja1043 休眠唤醒的原理  
> [https://blog.csdn.net/weixin_37798622/article/details/104258830](https://blog.csdn.net/weixin_37798622/article/details/104258830)  

> [!info] TJA1043收发器信息梳理  
> TJA1043收发器信息梳理对于汽车控制器开发工程师来说，CAN收发器是一个常用的芯片，之前分享过一篇TJA1145的文章，今天来分享一篇TJA1043。 01. TJA1043简介 TJA1043是NXP的第三代高速CAN收发器，与第二代相比，改…  
> [https://zhuanlan.zhihu.com/p/620626396](https://zhuanlan.zhihu.com/p/620626396)  

> [!info] 电子技术（二十四）——CAN唤醒  
> 一、简介汽车上有许多的ECU节点，如果ignition On时所有ECU都正常工作会导致电池的无用消耗。为了更好的去利用整车的能源，防止出现不必要的电池浪费，网络管理（Network Management，以下简称NM）便可以很好的解…  
> [https://zhuanlan.zhihu.com/p/531443584](https://zhuanlan.zhihu.com/p/531443584)  

TJA1145除了支持以上两种Can Transceiver的主要功能外还支持设定唤醒CAN报文，即只有设定的合法CAN报文才可以唤醒收发器。

> [!info] 基于CAN的ECU唤醒流程  
> 本文主要介绍ECU从睡眠状态，如何被CAN报文唤醒。  
> [https://mp.weixin.qq.com/s/5DqBGi6NbsWTT5p4eAm0fg](https://mp.weixin.qq.com/s/5DqBGi6NbsWTT5p4eAm0fg)  

> [!info] 车载控制器CAN唤醒以及休眠机制  
> undefined  
> [https://mp.weixin.qq.com/s/ALI4jGBRtHYjQVCV7HmrVQ](https://mp.weixin.qq.com/s/ALI4jGBRtHYjQVCV7HmrVQ)

[[CAN收发器选型]]

[[深入浅出讲解CAN总线]]

### CAN设备及服务提供商

> [!info] 珠海创芯科技有限公司  
> 专业提供CAN总线解决方案  
> [https://www.zhcxgd.com/](https://www.zhcxgd.com/)  

[CANopen是什么？ CANopen通讯基础（上）](https://www.bilibili.com/video/BV1NZ4y1z7zu/)

[最清晰的CANOPEN 入门介绍](https://www.bilibili.com/video/BV1dX4y157ot/)

[**找到CAN总线（故障）节点的三种办法**](https://www.eefocus.com/article/449975.html#:~:text=CAN%20%E6%80%BB%E7%BA%BF%E7%9A%84%E5%87%BA%E7%8E%B0%E4%B8%BA%E5%88%86%E5%B8%83%E5%BC%8F%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F%E5%AE%9E%E7%8E%B0%E5%90%84%E8%8A%82%E7%82%B9%E4%B9%8B%E9%97%B4%E5%AE%9E%E6%97%B6%E3%80%81%E5%8F%AF%E9%9D%A0%E7%9A%84%20%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%20%E6%8F%90%E4%BE%9B%E4%BA%86%E5%BC%BA%E6%9C%89%E5%8A%9B%E7%9A%84%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%8C%E5%9C%A8%E5%B8%A6%E6%9D%A5%E4%BE%BF%E5%88%A9%E7%9A%84%E5%90%8C%E6%97%B6%EF%BC%8C%E4%B9%9F%E4%B8%BA%E5%B7%A5%E7%A8%8B%E5%B8%88%E4%BB%AC%E6%95%85%E9%9A%9C%E6%8E%92%E6%9F%A5%E5%A2%9E%E5%8A%A0%E4%BA%86%E9%9A%BE%E5%BA%A6%EF%BC%8C%E6%89%80%E4%BB%A5%E6%9C%AC%E6%96%87%E4%B8%BB%E8%A6%81%E7%BB%99%E5%A4%A7%E5%AE%B6%E4%BB%8B%E7%BB%8D%E4%BA%86%E6%89%BE%E5%88%B0%20CAN%20%E6%80%BB%E7%BA%BF%EF%BC%88%E6%95%85%E9%9A%9C%EF%BC%89%E8%8A%82%E7%82%B9%E7%9A%84%E4%B8%89%E7%A7%8D%E5%8A%9E%E6%B3%95%E3%80%82%201%E3%80%81%20%E5%B0%86%E6%89%80%E6%9C%89%E8%8A%82%E7%82%B9%E9%83%BD%E6%8B%94%E6%8E%89%EF%BC%8C%E4%BE%9D%E6%AC%A1%E5%BE%80%E4%B8%8A%E6%8E%A5%E3%80%82,%E5%BD%93%20CAN%20%E6%80%BB%E7%BA%BF%E5%87%BA%E7%8E%B0%E6%95%85%E9%9A%9C%E5%90%8E%E5%B0%86%E6%89%80%E6%9C%89%E8%8A%82%E7%82%B9%E9%83%BD%E6%8B%94%E6%8E%89%EF%BC%8C%E4%B9%8B%E5%90%8E%E4%B8%80%E4%B8%AA%E4%B8%80%E4%B8%AA%E8%8A%82%E7%82%B9%E5%BE%80%E4%B8%8A%E6%8E%A5%EF%BC%8C%E6%8E%A5%E5%88%B0%E7%B3%BB%E7%BB%9F%E5%87%BA%E9%94%99%E6%97%B6%EF%BC%8C%E5%8D%B3%E6%89%BE%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E6%8F%92%E5%85%A5%E8%8A%82%E7%82%B9%E4%B8%BA%E6%95%85%E9%9A%9C%E8%8A%82%E7%82%B9%E3%80%82%20%E5%A6%82%E4%B8%8B%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%EF%BC%8C%E5%9B%BE%201%20%E4%B8%BA%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%20%E6%8E%A7%E5%88%B6%E6%80%BB%E7%BA%BF%20%EF%BC%8C%E8%BD%A6%E8%BE%86%E5%90%AF%E5%8A%A8%E5%90%8E%E4%BB%AA%E8%A1%A8%E6%98%BE%E7%A4%BA%E6%BB%9E%E5%90%8E%EF%BC%8C%E6%98%BE%E7%A4%BA%E9%94%99%E8%AF%AF%E3%80%82)

[秀！靠这篇我竟然2天理解了CAN协议！实战STM32F4 CAN！_Wireless_Link-松山湖开发者村综合服务平台 (sslcode.com.cn)](https://community.sslcode.com.cn/648674ef55c3e102e65f8efe.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMwMDg3NSwiZXhwIjoxNjkyODcyMzY3LCJpYXQiOjE2OTIyNjc1NjcsInVzZXJuYW1lIjoid2VpeGluXzQwMzEwOTg2In0.XsgDwTpKdUVqNuqddgKSE0LmjxJkfAKR2TcDRZ0_N-c)

[CAN总线原理-精华整理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/346696648)

[车载网络结构（车内）-基础概念_车内网_picoasis的博客-CSDN博客](https://blog.csdn.net/lamanchas/article/details/121880449?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-121880449-blog-80568338.235%5Ev38%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-121880449-blog-80568338.235%5Ev38%5Epc_relevant_anti_t3&utm_relevant_index=14)

[汽车CAN总线 - 知乎 (zhihu.com)](https://www.zhihu.com/column/c_194389050)

[串口转CAN模块-广州致远电子股份有限公司 (zlg.cn)](https://www.zlg.cn/index.php/can/down/down/id/37.html)

[CAN总线学习资源汇总 (zhihu.com)](https://www.zhihu.com/tardis/zm/art/180515614?source_id=1005)

[如何学习CAN总线？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/30247549)

[上海大众帕萨特CAN数据总线的结构原理 - 百度文库 (baidu.com)](https://wenku.baidu.com/view/9ed0b9adbf23482fb4daa58da0116c175f0e1eae?aggId=c99397ec551810a6f52486a1&fr=catalogMain_text_ernie_recall_backup_new%3Awk_recommend_main3&_wkts_=1686674309930)

[(191条消息) 手把手教会你CAN原理和电路设计_can电路_硬件工程师老刘的博客-CSDN博客](https://blog.csdn.net/weixin_49336610/article/details/128882788)

[CAN总线电路设计原理图 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/611858237)

[CAN总线通信典型电路原理图（四款CAN总线通信电路原理图分享） - 接口/总线/驱动 - 电子发烧友网 (elecfans.com)](https://www.elecfans.com/emb/jiekou/20180507673487.html)

[【技术分享】CAN总线接口保护电路设计指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/589383877)

底层协议

上层协议

[canopen官网](https://www.can-cia.org/)

- [CANfestival](https://canfestival.org/)
  
    SAE J1939/ISO11783、CANOpen、CANaerospace、DeviceNet、NMEA 2000等。

CAN 系统除了广泛应用于民用车辆外，CAN 系统也广泛应用在军用车辆上。

在 1999 年，MilCAN 工作组开始筹划一个高层协议以便在 CANbus 总线的基础上扩展其应用，同时注重规范 CAN 系统在军用系统内的应用。

MilCAN 最初是在军事陆用系统中使用，这个工作组建议该系统可用于 ‘任何需要确定性数据传输的地方’，即装甲车辆。

军用需求在一些方面与民用需求有所不同。首先，数据传输需要更确定，错误处理和适应性更重要。军用车辆常常在恶劣的运行环境中操作，而军用车辆的使用寿命通常远远长于类似的民用车辆（20 年到 30 年的保养、改装和升级都是常态）。

MilCAN 作为一个软件产品，可被装入任何支持标准 CAN 的设备上而无需特别的硬件。 Kvaser 的标准产品在多数情况下适合军事/防务应用，同时它们坚固耐用的特性尤其适用于军事领域常见的恶劣运行环境。

CAN系统在农林车辆上的应用

成立于 2008 年的农业电器协会（AEF）在各种农业车辆设备通讯适配器标准化方面发挥了关键作用。AEF 主要贡献是在 ISO 11783 标准上，此标准又名为 ‘拖拉机和农林业车辆 — 系列控制和通讯数据网’, 常常被称为 ISO Bus 或者 ISOBUS。

在SAE J1939协议的基础上，ISO 11783 定义了农业车辆操作和控制的通讯协议，而 SAE J1939 协议是基于 CAN（控制器局域网）总线协议。支持ISOBUS 协议的机械设备可直接联接到拖拉机的控制网上，从而可以由驾驶舱的单一控制终端操作控制。这提供了与车载系统更佳的协同合作，如 GPS 和精准的农用数据。

与 CAN 系统辅助汽车技师读取诊断错误报文相似，现在农用车辆技师可以在拖拉机上做同样的操作。除了这个基本应用，这项技术还能让用户监测、捕捉和分析各种数据，如有关燃料消耗、里程读数、待机和运行时间比，以及很多其他效率参数和功能。这些数据可用来扩展车辆的应用能力，改善车辆功能、效率，以及为农场主降低运行费用。

J1939 接头在农业车辆中使用普遍。J1939-13车载诊断接头用来与各种农业车辆机器接入通讯。 Kvaser’s Leaf Light HS v2 J1939-13 Type II 诊断接头尤其适合农业环境，因为它的绝缘安装能抵御电压上升和电击。

# 近场

## WIFI

通讯
一次把WiFi原理、WiFi芯片和开源芯片openwifi说透！
项目网址：[https://github.com/open-sdr/openwifi](https://github.com/open-sdr/openwifi)  
完整会议录像：[https://meetings.feishu.cn/minutes/obcn5ifc436pci1ntd1o5u9q](https://meetings.feishu.cn/minutes/obcn5ifc436pci1ntd1o5u9q)

- WiFi基本概念

- openwifi总体架构以及组成模块介绍

- openwifi的诞生、定位以及横向对比

- openwifi科研应用:无线感知、无线通信、无线安全

- openwifi开发进展和路线图

- openwifi开源License选择与可持续发展

- 回应质疑
  
## BLE
  
## NFC
  
  [手机NFC到底如何使用？怎么才可以复制加密门禁卡？为什么不能直接复制？](https://www.bilibili.com/medialist/play/watchlater/BV17341187iE)
  
## UWB
  
## ZigBee

# IOT

## 4G/5G

## NB-IOT

## Lora

[Lora无线技术原理及优缺点](https://zhuanlan.zhihu.com/p/313035354)
[物联网Lora技术应用有哪些？Lora无线通讯模块有什么优缺点](https://zhuanlan.zhihu.com/p/390261421)  

## ETH

[LWIP以太网芯片手册阅读](https://www.bilibili.com/video/BV1f54y117E1)

## 电力电子

# 其他

## 传感器

DHT11
SHT11
DS18B20

## 红外线

NEC

## 音频

I2S

## 存储

SD_SPI
SD_SD

## 航模

SBUS
sbus和PWM相比，SBUS在使用多个多级时有利于布线，但是响应速度比不过PWM，SBUS响应速度3ms，而PWM可以做到1MS

# 待整理

[如何从0设计一个通信协议（协议边界问题、协议序列化、工程实践） |](https://www.bilibili.com/video/BV1sa411H7Hy/)
[SPI、I2C、UART、I2S、GPIO、SDIO、CAN，你能分清楚吗？ (qq.com)](https://mp.weixin.qq.com/s/H9AI4z_f-KDeGD1XWMWgEA)
[常见硬件通信(SPI、I2C、CAN、USB、UART)协议介绍](https://zhuanlan.zhihu.com/p/452881964)
[【蛋饼嵌入式】嵌入式通信的底层逻辑（上）—— 弄懂UART I2C SPI CAN LIN 和 ETH的内在联系](https://www.bilibili.com/video/BV1ju411W7Q3/)
[SPI、UART、RS232、RS485、IIC 5种嵌入式经典通信总线协议精讲](