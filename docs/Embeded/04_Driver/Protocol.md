---
lang: zh-CN
description: 这是一个C语言基础页面
sidebarDepth: 5
---
<!-- markdownlint-disable MD033 -->

# 通讯协议

## 简介

## 概述

### OSI七层模型

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

### UART简介

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

<img src="./assets_Protocol/串口数据帧格式.png" alt="示例图片" width="350" style="display: block; margin: 0 auto;">

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

## AT

## RS485/RS232/RS422

### RS485/RS232/RS422简介

RS485是一种串口接口标准，为了长距离传输采用差分方式传输，传输的是差分信号，抗干扰能力比RS232强很多。两线压差为-2~-6V表示0，两线压差为+2~+6V表示1

### 特性及区别

| 协议    | 双工  | 物理特性 | 线制               | 逻辑1                        | 逻辑0                        | 传输距离       | 传输速率          | 优点  | 缺点  |
| ----- | --- | ---- | ---------------- | -------------------------- | -------------------------- | ---------- | ------------- | --- | --- |
| TTL   | 全双工 | 单端信号 | 三线制(TX/RX/GND)   | 0V~5V(信号线对GND)             | 0V~0.8V                    | 短距离(15米)   | 中速(115200bps) |     |     |
| RS232 | 全双工 | 单端信号 | 三线制(TX/RX/GND)   | -3V~-15V(信号线对GND)          | +3V~+15V                   | 中距离(50米)   | 中速(20Kbps)    |     |     |
| RS422 | 全双工 | 差分信号 | 四线制(T+/T-/R+/R-) | +2V~+6V(发送)<br/>>200mV(接收) | -2V~-6V(发送）<br/><200mV(接收) | 长距离(4000米) | 高速(10Mbps)    |     |     |
| RS485 | 半双工 | 差分信号 | 两线制(A/B)         | +2V~+6V(AB间电压差)            | -2V~-6V                    | 长距离(1200米) | 高速(10Mbps)    |     |     |

## Modbus

### Modbus简介

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

- Modbus RTU是一种紧凑的，十六进制表示数据的方式，Modbus ASCII是一种采用Ascii码表示数据，并且每个8Bit 字节都作为两个ASCII字符发送的表示方式。
- 如果我们需要发送一个数字10 那么RTU模式下，只需要发送 0x0A 总线上传输数据形式为： 0000 1010
- 而ASCII码模式则将数据1和0转为’1’和’0’,需要发送0x31(1) 0x30(0)两个字节数据。总线上传输数据形式为： 0011 0001 0011 0000

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

- [RT-Thread官方移植freemodbus](https://github.com/RT-Thread-packages/freemodbus/blob/master/README_ZH.md)
- [FreeModbus官网](https://www.embedded-experts.at/en/freemodbus/about/)
- [详解Modbus通信协议---清晰易懂-CSDN博客](https://blog.csdn.net/as480133937/article/details/123197782)

### Modebus其他资料

## I2C

### I2C简介

[一文搞懂I2C通信总线_i2c通信的详细讲解-CSDN博客](https://blog.csdn.net/m0_38106923/article/details/123673285?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171066245616800182126176%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=171066245616800182126176&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-123673285-null-null.142^v99^pc_search_result_base7&utm_term=I2C&spm=1018.2226.3001.4187)
[I2C通信协议详解和通信流程分析_i2c通信的详细讲解-CSDN博客](https://blog.csdn.net/weixin_42031299/article/details/123602636?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171066529816800226524854%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=171066529816800226524854&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-4-123602636-null-null.142^v99^pc_search_result_base7&utm_term=I2C&spm=1018.2226.3001.4187)

### I2C物理特性

SCL/SDA

### I2C通讯特性

开始和停止条件
地址传送
数据传送
总线应答
总线仲裁
空闲态
时钟同步/时钟延展

## SPI

### SPI简介

SPI,全称（Serial Peripheral interface）是由摩托罗拉公司首先定义的协议，中文名为串型外围设备接口。SPI是一种高速全双工的总线协议
Serial（串型）：与并型相对应，单向数据通路只需要一根线，而同样常见的AMBA则为并型总线
Peripheral（外围）：指此总线多用来连接如“AD转换、EEPROM、PWM”等外围设备，即对应于AMBA的APB部分
Interface（总线接口）：很好理解，不再赘述。

[【总线】SPI 通信协议_spi协议-CSDN博客](https://blog.csdn.net/m0_61298445/article/details/124181396?ops_request_misc=&request_id=&biz_id=102&utm_term=SPI%E5%8D%8F%E8%AE%AE&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-124181396.142^v99^pc_search_result_base7&spm=1018.2226.3001.4187)

### SPI物理特性

### SPI通讯特性

*开始和停止条件*
*地址传送*
*数据传送*
*总线应答*
*总线仲裁*
*空闲态*
*时钟同步/时钟延展*

## USB

## CAN

### CAN协议

#### CAN链路层

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

#### CAN协议层

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

![CAN1](.\assets\CAN1.png)

起始帧SOF是1位显性0

RTR在数据帧中必须为显性0，在远程帧里为隐形1；因此数据帧优先于远程帧。SRR是是隐形位。因此标准格式优先于扩展格式。

IDE在标准格式中为显性0，在扩展格式下位隐形1；标准格式下IDE属于控制场，扩展格式下IDE属于仲裁场。

控制场有6个位，其中4位长度数据；表示0-8个字节；保留位r0和r1必须为显性0。

CRC场有16位，其中15位CRC序列和1位CRC界定符

应答场有2位，发送位发送2位隐形1，接收器正确接收有效报文后，在第一位时发送1位显性0以示应答

帧结尾EOF在数据帧和远程帧中都是由7位隐形1组成

![CAN2](.\assets\CAN2.png)

### CAN-FD

### CANopen

CANopen官网

[CANopen官网](https://www.can-cia.org/)

开源协议栈

- [canfestival](http://www.canfestival.org/)
- [CanopenNode](https://github.com/CANopenNode/CANopenNode)
- [CANopen Stack](https://github.com/embedded-office/canopen-stack)
- [uC/CANopen](https://www.armbbs.cn/forum.php?mod=viewthread&tid=96706)
- [Lely CANopen](https://gitlab.com/lely_industries/lely-core)

#### 学习资料

- [CANopen是什么？ CANopen通讯基础（上）](https://www.bilibili.com/video/BV1NZ4y1z7zu/)
- [最清晰的CANOPEN 入门介绍](https://www.bilibili.com/video/BV1dX4y157ot/)
- [CanOpen学习笔记5-- CanFestival使用提示](https://blog.csdn.net/choujize1282/article/details/100809233)
- [SDO](https://blog.csdn.net/qq_40104597/article/details/105773842)
- [canOpen学习二之canOpen应用实现请求节点状态、改变节点状态、写字典、读字典](https://blog.csdn.net/qq_15181569/article/details/105812295)
- [CanOpen学习笔记4-- 建立SDO通信](https://blog.csdn.net/choujize1282/article/details/100809232)
- [CANopen开源协议栈 Canfestival源代码中文注释.rar](https://download.csdn.net/download/lingdianhao/12697541)
- [基于STM32的Can_Festival调试问题3 -- SDO修改心跳时间过很久才有反应](https://blog.csdn.net/qq_43259179/article/details/106500111)
- [CANopen使用方法与对象字典主要参数](https://blog.csdn.net/qq_27620407/article/details/109214157)
- [canopen主站功能测试](https://blog.csdn.net/qq_42860269/article/details/126189812)
- [CANopen补充--主站检测节点是否在线](https://blog.csdn.net/qq_37662088/article/details/123566073)
- [canOpen学习九之canOpen应用实现主机自动发送同步帧](https://blog.csdn.net/qq_15181569/article/details/106190676)
- [canOpen学习四之canOpen应用实现主机检测从机丢失](https://blog.csdn.net/qq_15181569/article/details/105855756)
- [CanFestival字典生成](https://blog.csdn.net/lushoumin/article/details/92841982)
- [基于STM32F4的CANopen快速SDO通信（超级详细）](https://blog.csdn.net/qq_37662088/article/details/123263133)
- [嵌入式CANopen协议从入门到落地产品（更新2021.9.8）](https://blog.csdn.net/wallace89/article/details/119190305)
- [STM32H743+CubeIDE-CanFestival实现两个CANopen Master同时独立运行](https://blog.csdn.net/wallace89/article/details/111020289)
- [canfestival源代码注释](https://blog.csdn.net/bmliupan/article/details/98055255)
- [STM32F103C8T6 CanFestival 心跳监测.rar](https://download.csdn.net/download/feng5200yu5/19765264)
- [canFestival移植（3）-----SDO快速收发函数应用分析](https://blog.csdn.net/agony_isolate/article/details/106738590)
- [CanFestival应用](https://blog.csdn.net/lushoumin/article/details/93051433)
- [CANopen：移植CANFestival以及应用（基于CUBEMX HAL库）大礼包](https://blog.csdn.net/weixin_44118217/article/details/121265571)
- [CANFestival简介](https://blog.csdn.net/weixin_44161807/article/details/123923680)
- [CANFestival简介](https://blog.csdn.net/iamplane/article/details/49944491)
- [CANOpen协议详解（二）：协议具体内容](https://blog.csdn.net/u012846795/article/details/121008306)
- [CANOpen协议详解（一）：CANfestival源码分析](https://blog.csdn.net/u012846795/article/details/121008265)
- [CanFestival协议栈从站实现和源码简析](https://blog.csdn.net/sinat_19440229/article/details/86712013)
- [CANOpen系列教程11_深度分析CanFestival_3架构](https://blog.csdn.net/ybhuangfugui/article/details/99826257)
- [CanFestival移植中的心跳问题](https://blog.csdn.net/zdc1122/article/details/81220580)
- [canFestival移植（2）](https://blog.csdn.net/agony_isolate/article/details/106736726)
- [(111条消息) 基于ZYNQ的开源CANopen协议栈CANFestival移植_MmikerR的博客-CSDN博客_canfestival 节点守护](https://blog.csdn.net/MmikerR/article/details/106487947?spm=1001.2014.3001.5506)
- [CANOpen服务数据对象报文 - 百度文库](https://wenku.baidu.com/view/63617379383567ec102de2bd960590c69ec3d800?pcf=2&bfetype=new&bfetype=new)
- [(109条消息) canFestival移植（3）-----SDO快速收发函数应用分析_agony_isolate的博客-CSDN博客_canfestival sdo](https://blog.csdn.net/agony_isolate/article/details/106738590?spm=1001.2014.3001.5506)
- [CANOpen服务数据对象报文 - it610.com](https://www.it610.com/article/1290517464798535680.htm)
- [(111条消息) SDO_史蒂芬_丁的博客-CSDN博客](https://blog.csdn.net/qq_40104597/article/details/105773842?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166597385916800184145136%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166597385916800184145136&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-1-105773842-null-null.142%5Ev57%5Econtrol_1,201%5Ev3%5Eadd_ask&utm_term=SDOlineToObjdict&spm=1018.2226.3001.4187)
- [CanOpen学习笔记4-- 建立SDO通信 - bo_zhang的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/3583648/blog/1488473)

### 其他未整理

- [秀！靠这篇我竟然2天理解了CAN协议！实战STM32F4 CAN！_Wireless_Link-松山湖开发者村综合服务平台 (sslcode.com.cn)](https://community.sslcode.com.cn/648674ef55c3e102e65f8efe.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMwMDg3NSwiZXhwIjoxNjkyODcyMzY3LCJpYXQiOjE2OTIyNjc1NjcsInVzZXJuYW1lIjoid2VpeGluXzQwMzEwOTg2In0.XsgDwTpKdUVqNuqddgKSE0LmjxJkfAKR2TcDRZ0_N-c)
- [CAN总线原理-精华整理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/346696648)
- [车载网络结构（车内）-基础概念_车内网_picoasis的博客-CSDN博客](https://blog.csdn.net/lamanchas/article/details/121880449?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-121880449-blog-80568338.235%5Ev38%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-121880449-blog-80568338.235%5Ev38%5Epc_relevant_anti_t3&utm_relevant_index=14)
- [汽车CAN总线 - 知乎 (zhihu.com)](https://www.zhihu.com/column/c_194389050)
- [串口转CAN模块-广州致远电子股份有限公司 (zlg.cn)](https://www.zlg.cn/index.php/can/down/down/id/37.html)
- [CAN总线学习资源汇总 (zhihu.com)](https://www.zhihu.com/tardis/zm/art/180515614?source_id=1005)
- [如何学习CAN总线？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/30247549)
- [上海大众帕萨特CAN数据总线的结构原理 - 百度文库 (baidu.com)](https://wenku.baidu.com/view/9ed0b9adbf23482fb4daa58da0116c175f0e1eae?aggId=c99397ec551810a6f52486a1&fr=catalogMain_text_ernie_recall_backup_new%3Awk_recommend_main3&_wkts_=1686674309930)
- [(191条消息) 手把手教会你CAN原理和电路设计_can电路_硬件工程师老刘的博客-CSDN博客](https://blog.csdn.net/weixin_49336610/article/details/128882788)
- [CAN总线电路设计原理图 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/611858237)
- [CAN总线通信典型电路原理图（四款CAN总线通信电路原理图分享） - 接口/总线/驱动 - 电子发烧友网 (elecfans.com)](https://www.elecfans.com/emb/jiekou/20180507673487.html)
- [【技术分享】CAN总线接口保护电路设计指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/589383877)
- [【技术分享】CAN总线接口保护电路设计指南 (qq.com)](https://mp.weixin.qq.com/s/GeGLQKnx_gXebGBIDuZIkA)
- [CAN总线标准接口与布线规范](https://zhuanlan.zhihu.com/p/34333969)
- [如何进行汽车 CAN 总线开发？](https://www.zhihu.com/question/35630289/answer/650086824)
- [CAN通讯系列--CAN通讯简介1](https://zhuanlan.zhihu.com/p/268498263)
- [如何进行汽车 CAN 总线开发？](https://www.zhihu.com/question/35630289/answer/1475265732)
- [从CAN Transceiver角度，理解两帧网络管理报文唤醒网络的原理](https://zhuanlan.zhihu.com/p/625621861)
- [商用车网络设计利器—SAE J1939协议](https://zhuanlan.zhihu.com/p/234694992)
- [CAN 系统在国防与农业上的应用](https://zhuanlan.zhihu.com/p/43802975)
- [如何学习CAN总线](https://zhuanlan.zhihu.com/p/30247549)
- [CAN协议 实战STM32F4 CAN](https://zhuanlan.zhihu.com/p/618265492)
- [一篇易懂的CAN通讯协议指南](https://zhuanlan.zhihu.com/p/447272040)
- [汽车CAN解析过程中，PGN这一块如何理解，如何使用？](https://www.zhihu.com/question/57714760/answer/975529350)
- [如何学习汽车 CAN-BUS 系统](https://www.zhihu.com/question/24085250/answer/38829244)
- [搞嵌入式必懂的 CAN 总线知识](https://zhuanlan.zhihu.com/p/651301139)
- [【吸口冷知识】CAN总线保卫战中，TDK力推什么ESD防护元件？](https://www.bilibili.com/video/BV1Lw411n7ik/)
- [CANOpen服务数据对象报文](https://blog.csdn.net/android_lover2014/article/details/80009098)
- [学习CANopen --- [8] 多主机同时运行时的问题](https://blog.csdn.net/whahu1989/article/details/127192507)
- [【金橙智能】手把手教你学习CAN通信](https://www.bilibili.com/video/BV1214y1c7Ut/)
- [细数基于can之上的应用层协议](https://blog.csdn.net/HandsomeHong/article/details/123307202)
- [Tbox在整车CAN网络的位置与作用--远程控制和远程诊断](https://blog.csdn.net/Cheatscat/article/details/108151542)
- [车载网络结构（车内）-基础概念](https://blog.csdn.net/lamanchas/article/details/121880449)
- [整车CAN网络拓扑图](https://blog.csdn.net/ChenGuiGan/article/details/88060299)
- [CAN(FD)收发器选型及替换指南(二)](https://blog.csdn.net/bjxdbz/article/details/124435792)
- [TJA1050T CAN总线通信硬件原理](https://blog.csdn.net/passerbyyuan/article/details/51671563)
- [拖拉机控制关键协议 ISO-11783 协议解析](https://blog.csdn.net/zvvzxzko2006/article/details/109050242)
- [SAE J1939协议（一）](https://blog.csdn.net/Bruce_Qee/article/details/117608885)
- [通信总线-现场总线-CAN](https://blog.csdn.net/qq_28514991/article/details/101350628)
- [canopen协议详解_汽车CAN总线详解](https://blog.csdn.net/weixin_39940714/article/details/110596986)
- [can总线短距离不用双绞线_电磁干扰很严重，如何提高CAN总线电磁兼容性](https://blog.csdn.net/weixin_39527292/article/details/111486998)
- [汽车CAN总线关闭故障的诊断与恢复](https://blog.csdn.net/bonson2004/article/details/68924343)
- [CAN Busoff原理/快慢恢复介绍以及利用Vector VH6501 CAN干扰仪经典CAN2.0/CANFD帧触发Busoff](https://blog.csdn.net/qfmzhu/article/details/107335763)
- [CAN通信物理容错测试CAN_H与CAN_L、与GND、与电源短路，busoff](https://blog.csdn.net/weixin_44283390/article/details/128398383)
- [CAN网络开路和短路带来的影响](https://blog.csdn.net/meteorite91/article/details/69153531)
- [CAN、485隔离电路分享](https://blog.csdn.net/qq_15181569/article/details/111028147)

### CAN唤醒

- [CAN(FD)收发器选型及替换指南(一)_常见的多通道can收发器_Auto](https://blog.csdn.net/bjxdbz/article/details/124435638?ops_request_misc=%7B%22request%5Fid%22%3A%22169206830916800192241737%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fblog.%22%7D&request_id=169206830916800192241737&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-124435638-null-null.268^v1^koosearch&utm_term=CAN&spm=1018.2226.3001.4450)
- [CAN(FD)收发器选型及替换指南(二)_tja1443_Auto](https://blog.csdn.net/bjxdbz/article/details/124435792?ops_request_misc=&request_id=&biz_id=102&utm_term=CAN收发器选型&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-124435792.142^v92^controlT0_2&spm=1018.2226.3001.4187)
- [TJA1043高速CAN收发器](https://www.nxp.com.cn/products/interfaces/can-transceivers/can-with-flexible-data-rate/high-speed-can-transceiver-with-standby-and-sleep-mode:TJA1043)  
- [车载通信——CAN收发器选型（低功耗）](https://blog.csdn.net/weixin_64064747/article/details/128076259?ops_request_misc=%7B%22request%5Fid%22%3A%22169206723316800188584636%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169206723316800188584636&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-128076259-null-null.142^v92^controlT0_2&utm_term=CAN收发器选型&spm=1018.2226.3001.4187)
- [CAN收发器几种典型工作模式简介](https://blog.csdn.net/weixin_39196333/article/details/131381994?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169206886016800225585553%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169206886016800225585553&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-131381994-null-null.142^v92^controlT0_2&utm_term=CAN%E6%94%B6%E5%8F%91%E5%99%A8%20%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F&spm=1018.2226.3001.4187)  
- [TJA1403状态模式_tja1043 休眠唤醒的原理](https://blog.csdn.net/weixin_37798622/article/details/104258830)  
- [TJA1043收发器信息梳理](https://zhuanlan.zhihu.com/p/620626396)  
- [电子技术（二十四）——CAN唤醒](https://zhuanlan.zhihu.com/p/531443584)  
- [基于CAN的ECU唤醒流程](https://mp.weixin.qq.com/s/5DqBGi6NbsWTT5p4eAm0fg)  
- [车载控制器CAN唤醒以及休眠机制](https://mp.weixin.qq.com/s/ALI4jGBRtHYjQVCV7HmrVQ)

TJA1145除了支持以上两种Can Transceiver的主要功能外还支持设定唤醒CAN报文，即只有设定的合法CAN报文才可以唤醒收发器。

### CAN厂商

- [珠海创芯科技有限公司](https://www.zhcxgd.com/)  

底层协议

上层协议

- [canopen官网](https://www.can-cia.org/)
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

## LIN

## TLV

## 近场

### WIFI

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
  
### BLE
  
### NFC
  
[手机NFC到底如何使用？怎么才可以复制加密门禁卡？为什么不能直接复制？](https://www.bilibili.com/medialist/play/watchlater/BV17341187iE)
  
### UWB
  
### ZigBee

## IOT

### 4G/5G

### NB-IOT

### Lora

[Lora无线技术原理及优缺点](https://zhuanlan.zhihu.com/p/313035354)
[物联网Lora技术应用有哪些？Lora无线通讯模块有什么优缺点](https://zhuanlan.zhihu.com/p/390261421)  

### ETH

[LWIP以太网芯片手册阅读](https://www.bilibili.com/video/BV1f54y117E1)

### 电力电子

## 其他

### 传感器

DHT11
SHT11
DS18B20

### 红外线

NEC

### 音频

I2S

### 存储

SD_SPI
SD_SD

### 航模

SBUS
sbus和PWM相比，SBUS在使用多个多级时有利于布线，但是响应速度比不过PWM，SBUS响应速度3ms，而PWM可以做到1MS

## 待整理

[如何从0设计一个通信协议（协议边界问题、协议序列化、工程实践） |](https://www.bilibili.com/video/BV1sa411H7Hy/)
[SPI、I2C、UART、I2S、GPIO、SDIO、CAN，你能分清楚吗？ (qq.com)](https://mp.weixin.qq.com/s/H9AI4z_f-KDeGD1XWMWgEA)
[常见硬件通信(SPI、I2C、CAN、USB、UART)协议介绍](https://zhuanlan.zhihu.com/p/452881964)
[【蛋饼嵌入式】嵌入式通信的底层逻辑（上）—— 弄懂UART I2C SPI CAN LIN 和 ETH的内在联系](https://www.bilibili.com/video/BV1ju411W7Q3/)
