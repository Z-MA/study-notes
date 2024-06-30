[韦东山freeRTOS系列教程：FreeRTOS的内部机制](https://www.bilibili.com/video/BV1Ar4y1C7En/?spm_id_from=333.999.0.0)  
[FreeRTOS的OS时钟与基准时钟](https://blog.csdn.net/weixin_41914372/article/details/118914256)
[FreeRTOS的学习（六）——系统时钟](https://blog.csdn.net/qq_39397153/article/details/124609008)
[STM32使用FREERTOS获取系统时间](https://blog.csdn.net/xian_z/article/details/113044362)
[FreeRTOS源码分析与应用开发03：时间管理](https://blog.csdn.net/chenchengwudi/article/details/112190508)
[FreeRTOS 的时间相关函数](https://blog.csdn.net/qq_42215863/article/details/92795587)

> 嵌入式系统不只是ARM+Linux，不是只有安卓，凡是电子产品都可称为嵌入式系统。物联网行业的兴起，也提升了FreeRTOS市场占有率。本文就是介绍FreeRTOS基础及其应用，只是个人整理，可能存在问题，其目的只是简要介绍系统的基础，只能作为入门资料。

**目录**

> 一、 为什么要学习RTOS
> 二、 操作系统基础
> 三、 初识 FreeRTOS
> 四、 任务
> 五、 队列
> 六、 软件定时器
> 七、 信号量
> 八、 事件
> 九、 任务通知
> 十、 内存管理
> 十一、 通用接口

# **一、 为什么要学习 RTOS**

进入嵌入式这个领域，入门首先接触的是单片机编程，尤其是C51 单片机来，基础的单片机编程通常都是指裸机编程，即不加入任何 RTOS（Real Time Operating System 实时操作系统）。常用的有国外的FreeRTOS、μC/OS、RTX 和国内的 RT-thread、Huawei LiteOS 和 AliOS-Things 等，其中开源且免费的 FreeRTOS 的市场占有率较高。

## **1.1 前后台系统**

在裸机系统中，所有的操作都是在一个无限的大循环里面实现,支持中断检测。外部中断紧急事件在中断里面标记或者响应，中断服务称为前台，main 函数里面的while(1)无限循环称为后台，按顺序处理业务功能，以及中断标记的可执行的事件。小型的电子产品用的都是裸机系统，而且也能够满足需求。

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQXVIy4bBdT3ccedVCHSO8o4Hl5CXcKPmRdDqRmlc1rvjGIMqNYmoGkg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQXVIy4bBdT3ccedVCHSO8o4Hl5CXcKPmRdDqRmlc1rvjGIMqNYmoGkg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## **1.2 多任务系统**

多任务系统的事件响应也是在中断中完成的，但是事件的处理是在任务中完成的。如果事件对应的任务的优先级足够高，中断对应的事件会立刻执行。相比前后台系统，多任务系统的实时性又被提高了。

在多任务系统中，根据程序的功能，把这个程序主体分割成一个个独立的，无限循环且不能返回的子程序，称之为任务。每个任务都是独立的，互不干扰的，且具备自身的优先级，它由操作系统调度管理。加入操作系统后，开发人员不需要关注每个功能模块之间的冲突，重心放在子程序的实现。缺点是整个系统随之带来的额外RAM开销，但对目前的单片机的来影响不大。

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQ8ZNOvBFiacZgmGNlmOJjr6uQq37HBrCic3zkiaNrkFRmDhLDoAxic1q1gw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQ8ZNOvBFiacZgmGNlmOJjr6uQq37HBrCic3zkiaNrkFRmDhLDoAxic1q1gw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## **1.3 学习RTOS的意义**

学习 RTOS，一是项目需要，随着产品要实现的功能越来越多，单纯的裸机系统已经不能完美地解决问题，反而会使编程变得更加复杂，如果想降低编程的难度，就必须引入 RTOS实现多任务管理。二是技能需要，掌握操作系统，和基于RTOS的编程，实现更好的职业规划，对个人发展尤其是钱途是必不可少的。

以前一直觉得学操作系统就必须是linux，实际每个系统都有其应用场景，对于物联网行业，杀鸡焉用牛刀，小而美，且应用广泛的FreeRTOS 是首选。有一个操作系统的基础，即使后续基于其他系统开发软件，也可触类旁通，对新技术快速入门。目前接触的几款芯片都是基于FreeRTOS。

如何学习RTOS？最简单的就是在别人移植好的系统之上，看看 RTOS 里面的 API 使用说明，然后调用这些 API 实现自己想要的功能即可。完全不用关心底层的移植，这是最简单快速的入门方法。这种学习方式，如果是做产品，可以快速的实现功能，弊端是当程序出现问题的时候，如果对RTOS不够了解，会导致调试困难，无从下手。

各种RTOS内核实现方式都差不多，我们只需要深入学习其中一款就行。万变不离其宗，正如掌握了C51基础，后续换其他型号或者更高级的ARM单片机，在原理和方法上，都是有借鉴意义，可以比较快的熟悉并掌握新单片机的使用。

# **二、 操作系统基础**

## **2.1 链表**

链表作为 C 语言中一种基础的数据结构，在平时写程序的时候用的并不多，但在操作系统里面使用的非常多。FreeRTOS 中存在着大量的基础数据结构链表和链表项的操作（list 和 list item）。FreeRTOS 中与链表相关的操作均在 list.h 和 list.c 这两个文件中实现。

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQIwWSLMWKibxbqgkZB6AfgeaPPK8n6cLucT3Yn1hrSJgmpNadPcGIQvQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQIwWSLMWKibxbqgkZB6AfgeaPPK8n6cLucT3Yn1hrSJgmpNadPcGIQvQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

链表比数组，最大优势是占用的内存空间可以随着需求扩大或缩小，动态调整。实际FreeRTOS中各种任务的记录都是依靠链表动态管理，具体的可以参考源码的任务控制块tskTCB。任务切换状态，就是将对应的链表进行操作，链表操作涉及创建和插入、删除和查找。

## **2.2 队列**

队列是一种只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。队尾放入数据，对头挤出。先进先出，称为FIFO

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQ1yibTtvrN8RH6uibAHOwzz6ia4bXerMQv2uaHCzArZDZBKEuHBfronibDA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQ1yibTtvrN8RH6uibAHOwzz6ia4bXerMQv2uaHCzArZDZBKEuHBfronibDA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## **2.3 任务**

在裸机系统中，系统的主体就是 main 函数里面顺序执行的无限循环，这个无限循环里面 CPU 按照顺序完成各种事情。在多任务系统中，根据功能的不同，把整个系统分割成一个个独立的且无法返回的函数，这个函数我们称为任务。系统中的每一任务都有多种运行状态。系统初始化完成后，创建的任务就可以在系统中竞争一定的资源，由内核进行调度。

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQroM2RB66FRA84ryYLq9yF1CnoqqHgfhkP7L4ukWNPXzibACftlUwBSQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQroM2RB66FRA84ryYLq9yF1CnoqqHgfhkP7L4ukWNPXzibACftlUwBSQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

 就绪（Ready）：该任务在就绪列表中，就绪的任务已经具备执行的能力，只等待调度器进行调度，新创建的任务会初始化为就绪态。

 运行（Running）：该状态表明任务正在执行，此时它占用处理器，调度器选择运行的永远是处于最高优先级的就绪态任务。

 阻塞（Blocked）：任务当前正在等待某个事件，比如信号量或外部中断。

 挂起态(Suspended)：处于挂起态的任务对调度器而言是不可见的。

挂起态与阻塞态的区别，当任务有较长的时间不允许运行的时候，我们可以挂起任务，这样子调度器就不会管这个任务的任何信息，直到调用恢复任务的 接口；而任务处于阻塞态的时候，系统还需要判断阻塞态的任务是否超时，是否可以解除阻塞。

各任务运行时使用消息、信号量等方式进行通信，不能是全局变量。任务通常会运行在一个死循环中，不会退出，如果不再需要，可以调用删除任务。

## **2.4 临界区**

临界区就是一段在执行的时候不能被中断的代码段。在多任务操作系统里面，对全局变量的操作不能被打断，不能执行到一半就被其他任务再次操作。一般被打断，原因就是系统调度或外部中断。对临界区的保护控制，归根到底就是对系统中断的使能控制。在使用临界区时，关闭中断响应，对部分优先级的中断进行屏蔽，因此临界区不允许运行时间过长。为了对临界区进行控制，就需要使用信号量通信，实现同步或互斥操作。

# **三、 初识 FreeRTOS**

## **3.1 FreeRTOS源码**

FreeRTOS 由美国的 Richard Barry 于 2003 年发布， 2018 年被亚马逊收购，改名为 AWS FreeRTOS，版本号升级为 V10，支持MIT开源协议，亚马逊收购 FreeRTOS 也是为了进入物联网和人工智能，新版本增加了物联网行业的网络协议等功能。

FreeRTOS 是开源免费的，可从官网 www.freertos.org 下载源码和说明手册。例如展锐的UIS8910使用的是V10。以FreeRTOSv10.4.1为例，包含 Demo 例程，Source内核的源码，License许可文件。

### **3.1.1 Source 文件夹**

FreeRTOS/ Source 文件夹下的文件：

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQYgusoicqKaLASmy12TzfxOSdcB1BeNnmibSwqTia8ncicpgV4qUwpH48oQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQYgusoicqKaLASmy12TzfxOSdcB1BeNnmibSwqTia8ncicpgV4qUwpH48oQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

包括FreeRTOS 的通用的头文件include和 C 文件，包括任务、队列、定时器等，适用于各种编译器和处理器，是通用的。

需要特殊处理适配的在portblle文件夹，其下内容与编译器和处理器相关， FreeRTOS 要想运行在一个单片机上面，它们就必须关联在一起，通常由汇编和 C 联合编写。通常难度比较高，不过一般芯片原厂提供移植好的接口文件。这里不介绍移植的方法，因为自己也不明白。

Portblle/MemMang 文件夹下存放的是跟内存管理相关的，总共有五个 heap 文件，有5种内存动态分配方式，一般物联网产品选用 heap4.c 。

### **3.1.2 Demo 文件夹**

里面包含了 FreeRTOS 官方为各个单片机移植好的工程代码，FreeRTOS 为了推广自己，会给针对不同半导体厂商的评估板实现基础功能范例， Demo下就是参考范例。

### **3.1.3 FreeRTOSConfig.h配置**

FreeRTOSConfig.h头文件对FreeRTOS 所需的功能的宏均做了定义，需要根据应用情况配置合适的参数，其作用类似MTK功能机平台的主mak文件，部分定义如下：

```
1. \#define configUSE_PREEMPTION            1
2. \#define configUSE_IDLE_HOOK             0
3. \#define configUSE_TICK_HOOK             0
4. \#define configCPU_CLOCK_HZ              ( SystemCoreClock )
5. \#define configTICK_RATE_HZ              ( ( TickType_t ) 1000 )
```

例如系统时钟tick等参数在就这个文件配置，具体作用可以看注释。一般情况下使用SDK不需要改动，特殊情况下咨询原厂再调整。

## **3.2 FreeRTOS 编码规范**

接触一个新平台或者SDK，明白它的编码规范，文件作用，可以提高源码阅读效率，快速熟悉其内部实现。

### **3.2.1 数据类型**

FreeRTOS针对不同的处理器，对标准C的数据类型进行了重定义。

```
1. \#define portCHAR        char
2. \#define portFLOAT       float
3. \#define portDOUBLE      double
4. \#define portLONG        long
5. \#define portSHORT       short
6. \#define portSTACK_TYPE  uint32_t
7. \#define portBASE_TYPE   long
```

应用编码中，推荐使用的是下面这种风格。

```
1. typedef int int32_t;
2. typedef short int16_t;
3. typedef char int8_t;
4. typedef unsigned int uint32_t;
5. typedef unsigned short uint16_t;
6. typedef unsigned char uint8_t;
```

### **3.2.2 变量名**

FreeRTOS 中，定义变量的时候往往会把变量的类型当作前缀，好处看到就知道其类型。

char 型变量的前缀是 c

short 型变量的前缀是 s

long 型变量的前缀是 l

复杂的结构体，句柄等定义的变量名的前缀是 x

变量是无符号型的再加前缀 u，是指针变量则加前缀 p

### **3.2.3 函数名**

函数名包含了函数返回值的类型、函数所在的文件名和函数的功能，如果是私有的函数则会加一个 prv（private）的前缀。

例如vTaskPrioritySet()函数的返回值为 void 型，在 task.c 这个文件中定义。

### **3.2.4 宏**

宏内容是由大写字母表示，前缀是小写字母，表示该宏在哪个头文件定义，如：

```
1. \#define taskYIELD()                 portYIELD()
```

表示该宏是在task.h。

### **3.2.5 个人解读**

1、编码不缺编码规范，但是实际使用中很难完全依照标准执行，即使freeRTOS源码也是如此。

2、关于函数或者宏定义中带文件名的作用，使用Source Insight 编辑代码，该前缀的意义不大。

3、规则是活的，只要所有人都按一个规则执行，它就是标准。

## **3.3 FreeRTOS应用开发**

关于freeRTOS的应用开发，主要是任务的创建和调度，任务间的通信与同步，涉及队列、信号量等操作系统通用接口。结合应用需求，涉及定时器、延时、中断控制等接口。

特别说明，有些功能的实现方式有多种形式，只针对常用方式进行说明，例如task的创建，只说明动态创建方式，因为很少使用静态方式。

# **四、 任务**

## **4.1 创建任务**

xTaskCreate()使用动态内存的方式创建一个任务。

```
1. ret = xTaskCreate((TaskFunction_t) master_task_main,/* 任务入口函数 */(1)
2.                   “MASTER”,/* 任务名字 */(2)
3.                   64*1024,/* 任务栈大小 */(3)
4.                   NULL,    ,/* 任务入口函数参数 */(4)
5.                   TASK_PRIORITY_NORMAL,/* 任务的优先级 */(5)
6.                   &task_master_handler);/* 任务控制块指针 */(6)
```

创建任务就是软件运行时的一个while（1）的入口，一般阅读其他代码，找到这个函数，再跟踪到任务入口函数，学习基于freeRTOS系统的代码，首先就是找到main和这个接口。

> (1)：任务入口函数，即任务函数的名称，需要我们自己定义并且实现。
> 
> (2)：任务名字，字符串形式，最大长度由 FreeRTOSConfig.h 中定义的 configMAX_TASK_NAME_LEN 宏指定，多余部分会被自动截掉，只是方便调试。
> 
> (3)：任务堆栈大小，单位为字， 4 个字节，这个要注意，否则系统内存紧缺。
> 
> (4)：任务入口函数形参，不用的时候配置为 0 或者NULL 即可。
> 
> (5) ：任务的优先级，在 FreeRTOS 中，数值越大优先级越高，0 代表最低优先级。基于其SDK开发，可将自定义的所有业务功能task设为同一个优先级，按时间片轮询调度。
> 
> (6)：任务控制块指针，使用动态内存的时候，任务创建函数 xTaskCreate()会返回一个指针指向任务控制块，也可以设为NULL，因为任务句柄后期可以不使用。

## **4.2 开启调度**

当任务创建成功后处于就绪状态（Ready），在就绪态的任务可以参与操作系统的调度。操作系统任务调度器只启动一次，之后就不会再次执行了，FreeRTOS 中启动任务调度器的函数是 vTaskStartScheduler()，并且启动任务调度器的时候就不会返回，从此任务管理都由FreeRTOS 管理，此时才是真正进入实时操作系统中的第一步。

vTaskStartScheduler开启调度时，顺便会创建空闲任务和定时器任务。

FreeRTOS 为了任务启动和任务切换使用了三个异常：SVC、PendSV 和SysTick。

SVC（系统服务调用，亦简称系统调用）用于任务启动。

PendSV（可挂起系统调用）用于完成任务切换，它是可以像普通的中断一样被挂起的，它的最大特性是如果当前有优先级比它高的中断在运行，PendSV会延迟执行，直到高优先级中断执行完毕，这样产生的PendSV 中断就不会打断其他中断的运行。

SysTick 用于产生系统节拍时钟，提供一个时间片，如果多个任务共享同一个优先级，则每次 SysTick 中断，下一个任务将获得一个时间片。

FreeRTOS 中的任务是抢占式调度机制，高优先级的任务可打断低优先级任务，低优先级任务必须在高优先级任务阻塞或结束后才能得到调度。相同优先级的任务采用时间片轮转方式进行调度（也就是分时调度），时间片轮转调度仅在当前系统中无更高优先级就绪任务存在的情况下才有效。

## **4.3 启动方式**

FreeRTOS有两种启动方式，效果一样，看个人喜好。

第一种：main 函数中将硬件初始化， RTOS 系统初始化，所有任务的创建完成，最后一步开启调度。目前看到的几个芯片SDK都是这种方式。

第二种：main 函数中将硬件和 RTOS 系统先初始化好，只创建一个任务后就启动调度器，然后在这个任务里面创建其它应用任务，当所有任务都创建成功后，启动任务再把自己删除。

## **4.4 任务创建源码分析**

xTaskCreate()创建任务。

```
1. BaseType_t xTaskCreate( TaskFunction_t pxTaskCode,
2.                         const char * const pcName,/*lint !e971 Unqualified char types are allowed for strings and single characters only. */
3.                         const configSTACK_DEPTH_TYPE usStackDepth,
4.                         void * const pvParameters,
5.                         UBaseType_t uxPriority,
6.                         TaskHandle_t * const pxCreatedTask )
7. {
8.     TCB_t * pxNewTCB;
9.     BaseType_t xReturn;
10.
11./* If the stack grows down then allocate the stack then the TCB so the stack
12.      * does not grow into the TCB.  Likewise if the stack grows up then allocate
13.      * the TCB then the stack. */
14.     \#if ( portSTACK_GROWTH > 0 )
15.         {
16./**/
17.         }
18.     \#else/* portSTACK_GROWTH */
19.         {
20.             StackType_t * pxStack;
21.
22./* Allocate space for the stack used by the task being created. */
23.             pxStack = pvPortMalloc( ( ( ( size_t ) usStackDepth ) * sizeof( StackType_t ) ) );/*lint !e9079 All values returned by pvPortMalloc() have at least the alignment required by the MCU's stack and this allocation is the stack. */
24.
25.             if( pxStack != NULL )
26.             {
27./* Allocate space for the TCB. */
28.                 pxNewTCB = ( TCB_t * ) pvPortMalloc( sizeof( TCB_t ) );/*lint !e9087 !e9079 All values returned by pvPortMalloc() have at least the alignment required by the MCU's stack, and the first member of TCB_t is always a pointer to the task's stack. */
29.
30.                 if( pxNewTCB != NULL )
31.                 {
32./* Store the stack location in the TCB. */
33.                     pxNewTCB->pxStack = pxStack;
34.                 }
35.                 else
36.                 {
37./* The stack cannot be used as the TCB was not created.  Free
38.                      * it again. */
39.                     vPortFree( pxStack );
40.                 }
41.             }
42.             else
43.             {
44.                 pxNewTCB = NULL;
45.             }
46.         }
47.     \#endif/* portSTACK_GROWTH */
48.
49.     if( pxNewTCB != NULL )
50.     {
51.         \#if ( tskSTATIC_AND_DYNAMIC_ALLOCATION_POSSIBLE != 0 )/*lint !e9029 !e731 Macro has been consolidated for readability reasons. */
52.             {
53./* Tasks can be created statically or dynamically, so note this
54.                  * task was created dynamically in case it is later deleted. */
55.                 pxNewTCB->ucStaticallyAllocated = tskDYNAMICALLY_ALLOCATED_STACK_AND_TCB;
56.             }
57.         \#endif/* tskSTATIC_AND_DYNAMIC_ALLOCATION_POSSIBLE */
58.
59.         prvInitialiseNewTask( pxTaskCode, pcName, ( uint32_t ) usStackDepth, pvParameters, uxPriority, pxCreatedTask, pxNewTCB, NULL );
60.         prvAddNewTaskToReadyList( pxNewTCB );//将新任务加入到就绪链表候着
61.         xReturn = pdPASS;
62.     }
63.     else
64.     {
65.         xReturn = errCOULD_NOT_ALLOCATE_REQUIRED_MEMORY;
66.     }
67.
68.     return xReturn;
69. }
```

申请任务控制块内存，检查配置参数，初始化，将任务信息加入到就绪链表，等待调度。前面链表部分提到，freeRTOS的任务信息都是使用链表记录，在task.c有

```
1. PRIVILEGED_DATA static List_t pxReadyTasksLists[configMAX_PRIORITIES];//就绪
2. PRIVILEGED_DATA static List_t xDelayedTaskList1;//延时
3. PRIVILEGED_DATA static List_t xDelayedTaskList2;
4. PRIVILEGED_DATA static List_t xPendingReadyList;//挂起
5. PRIVILEGED_DATA static List_t xSuspendedTaskList;//阻塞
```

分别记录就绪态、阻塞态和挂起的任务，其中阻塞态有2个，是因为特殊考虑，时间溢出 的问题，实际开发单片机项目计时超过24h的可以借鉴。其中pxReadyTasksLists链表数组，其下标就是任务的优先级。**4.5 任务调度源码分析**

创建完任务的时候，vTaskStartScheduler开启调度器，空闲任务、定时器任务也是在开启调度函数中实现的。

为什么要空闲任务？因为 FreeRTOS一旦启动，就必须要保证系统中每时每刻都有一个任务处于运行态（Runing），并且空闲任务不可以被挂起与删除，空闲任务的优先级是最低的，以便系统中其他任务能随时抢占空闲任务的 CPU 使用权。这些都是系统必要的东西，也无需自己实现。

```
1. void vTaskStartScheduler( void )
2. {
3.     BaseType_t xReturn;
4.
5./* Add the idle task at the lowest priority. */
6.     \#if ( configSUPPORT_STATIC_ALLOCATION == 1 )
7.         {
8./***/
9.         }
10.     \#else/* if ( configSUPPORT_STATIC_ALLOCATION == 1 ) */
11.         {
12./*创建空闲任务*/
13.             xReturn = xTaskCreate( prvIdleTask,
14.                                    configIDLE_TASK_NAME,
15.                                    configMINIMAL_STACK_SIZE,
16.                                    ( void * ) NULL,
17.                                    portPRIVILEGE_BIT,//优先级为0
18.                                    &xIdleTaskHandle );
19.         }
20.     \#endif/* configSUPPORT_STATIC_ALLOCATION */
21.
22.     \#if ( configUSE_TIMERS == 1 )
23.         {
24.             if( xReturn == pdPASS )
25.             {
26.//创建定时器task，接收开始、结束定时器等命令
27.                 xReturn = xTimerCreateTimerTask();
28.             }
29.             else
30.             {
31.                 mtCOVERAGE_TEST_MARKER();
32.             }
33.         }
34.     \#endif/* configUSE_TIMERS */
35.
36.     if( xReturn == pdPASS )
37.     {
38./* freertos_tasks_c_additions_init() should only be called if the user
39.          * definable macro FREERTOS_TASKS_C_ADDITIONS_INIT() is defined, as that is
40.          * the only macro called by the function. */
41.         \#ifdef FREERTOS_TASKS_C_ADDITIONS_INIT
42.             {
43.                 freertos_tasks_c_additions_init();
44.             }
45.         \#endif
46.
47.         portDISABLE_INTERRUPTS();
48.
49.         \#if ( configUSE_NEWLIB_REENTRANT == 1 )
50.             {
51.                 _impure_ptr = &( pxCurrentTCB->xNewLib_reent );
52.             }
53.         \#endif/* configUSE_NEWLIB_REENTRANT */
54.
55.         xNextTaskUnblockTime = portMAX_DELAY;
56.         xSchedulerRunning = pdTRUE;
57.         xTickCount = ( TickType_t ) configINITIAL_TICK_COUNT;
58.
59.         portCONFIGURE_TIMER_FOR_RUN_TIME_STATS();
60.
61.         traceTASK_SWITCHED_IN();
62.
63./* Setting up the timer tick is hardware specific and thus in the
64.          * portable interface. */
65.         if( xPortStartScheduler() != pdFALSE )
66.         {
67./* 系统开始运行 */
68.         }
69.         else
70.         {
71./* Should only reach here if a task calls xTaskEndScheduler(). */
72.         }
73.     }
74.     else
75.     {
76./*****/
77. }
```

## **4.6 任务状态切换**

FreeRTOS 系统中的每一个任务都有多种运行状态，具体如下：

 任务挂起函数

```
vTaskSuspend()
```

挂起指定任务，被挂起的任务绝不会得到 CPU 的使用权

```
vTaskSuspendAll()
```

将所有的任务都挂起  任务恢复函数

```
vTaskResume()
vTaskResume()
xTaskResumeFromISR()
```

任务恢复就是让挂起的任务重新进入就绪状态，恢复的任务会保留挂起前的状态信息，在恢复的时候根据挂起时的状态继续运行。xTaskResumeFromISR() 专门用在中断服务程序中。无论通过调用一次或多次vTaskSuspend()函数而被挂起的任务，也只需调用一次恢复即可解挂 。

 任务删除函数 vTaskDelete()用于删除任务。当一个任务可以删除另外一个任务，形参为要删除任 务创建时返回的任务句柄，如果是删除自身， 则形参为 NULL。

## **4.7 任务使用注意点**

1、中断服务函数是不允许调用任何会阻塞运行的接口。一般在中断服务函数中只做标记事件的发生，然后通知任务，让对应任务去执行相关处理 。

2、将紧急的处理事件的任务优先级设置偏高一些。

3、空闲任务（idle 任务）是 FreeRTOS 系统中没有其他工作进行时自动进入的系统任务，永远不会挂起空闲任务，不应该陷入死循环。

4、创建任务使用的内存不要过多，按需申请。如果浪费太多，后续应用申请大空间可能提示内存不足。

# **五、 队列**

## **5.1 队列的概念**

队列用于任务间通信的数据结构，通过消息队列服务，任务或中断服务将消息放入消息队列中。其他任务或者自身从消息队列中获得消息。实现队列可以在任务与任务间、中断和任务间传递信息。队列操作支持阻塞等待，向已经填满的队列发送数据或者从空队列读出数据，都会导致阻塞，时间自定义。消息队列的运作过程具如下：

## **5.2 队列创建**

xQueueCreate()用于创建一个新的队列并返回可用于访问这个队列的句柄。队列句柄其实就是一个指向队列数据结构类型的指针。

```
1. master_queue = xQueueCreate(50, sizeof(task_message_struct_t));
```

创建队列，占用50个单元，每个单元为sizeof(task_message_struct_t)字节，和 malloc比较类似。其最终使用的函数是 xQueueGenericCreate()，后续信号量等也是使用它创建，只是最后的队列类型不同。

申请内存后，xQueueGenericReset再对其进行初始化，队列的结构体xQUEUE成员：

```
1. typedef struct QueueDefinition /* The old naming convention is used to prevent breaking kernel aware debuggers. */
2. {
3.     int8_t * pcHead;/*< Points to the beginning of the queue storage area. */
4.     int8_t * pcWriteTo;/*< Points to the free next place in the storage area. */
5.//类型
6.     union
7.     {
8.         QueuePointers_t xQueue;/*< Data required exclusively when this structure is used as a queue. */
9.         SemaphoreData_t xSemaphore;/*< Data required exclusively when this structure is used as a semaphore. */
10.     } u;
11.
12.//当前向队列写数据阻塞的任务列表或者从队列取数阻塞的链表
13.     List_t xTasksWaitingToSend;
14.     List_t xTasksWaitingToReceive;
15.
16.//队列里有多少个单元被占用，应用中需要
17.     volatile UBaseType_t uxMessagesWaiting;
18.
19.     UBaseType_t uxLength;/*< The length of the queue defined as the number of items it will hold, not the number of bytes. */
20.     UBaseType_t uxItemSize;/*< The size of each items that the queue will hold. */
21.
22./******/
23. } xQUEUE;
```

## **5.3 队列删除**

队列删除函数 vQueueDelete()需传入要删除的消息队列的句柄即可，删除之后这个消息队列的所有信息都会被系统回收清空，而且不能再次使用这个消息队列了。实际应用中很少使用。

## **5.4 向队列发送消息**

任务或者中断服务程序都可以给消息队列发送消息，当发送消息时，如果队列未满或者允许覆盖入队，FreeRTOS 会将消息拷贝到消息队列队尾，否则，会根据用户指定的超时时间进行阻塞，消息发送接口很多，最简单的是 xQueueSend()，用于向队列尾部发送一个队列消息。消息以拷贝的形式入队，该函数绝对不能在中断服务程序里面被调用，中断中必须使用带有中断保护功能的 xQueueSendFromISR()来代替。

```
BaseType_t xQueueSend(QueueHandle_t xQueue,const void* pvItemToQueue, TickType_t xTicksToWait);
```

用于向队列尾部发送一个队列消息。

> 参数
> 
> xQueue 队列句柄
> 
> pvItemToQueue 指针，指向要发送到队列尾部的队列消息。
> 
> xTicksToWait 队列满时，等待队列空闲的最大超时时间。如果队列满并且xTicksToWait 被设置成 0，函数立刻返回。超时时间的单位为系统节拍周期 tick，延时为 portMAX_DELAY 将导致任务挂起（没有超时）。
> 
> **返回值**
> 
> 消息发送成功成功返回 pdTRUE，否则返回 errQUEUE_FULL。

xQueueSendToBack与xQueueSend完全相同， xQueueSendFromISR()与 xQueueSendToBackFromISR()，带FromISR表示只能在中断中使用，freeRTOS所以带这个后缀的都是这个含义。xQueueSendToFront()和QueueSendToFrontFromISR()用于向队列队首发送一个消息。这些在任务中发送消息的函数都是 xQueueGenericSend()展开的宏定义。

```
1. BaseType_t xQueueGenericSend( QueueHandle_t xQueue,
2.                  const void * const pvItemToQueue,
3.                          TickType_t xTicksToWait,
4.                  const BaseType_t xCopyPosition )//发送数据到消息队列的位置
```

一般使用xQueueSend和xQueueSendFromISR，如不确定当前运行的是系统服务，还是中断服务，一般ARM都支持查询中断状态寄存器判断，可以封装一层接口，只管发消息，内部判断是否使用支持中断嵌套的版本，UIS8910就是如此。特殊情况下，如发送网络数据包未收到服务器响应，期望立刻入队再次发送它，可以xQueueSendToFront向队头发消息。

## **5.5 从队列读取消息**

当任务试图读队列中的消息时，可以指定一个阻塞超时时间，当且仅当消息队列中有消息的时候，任务才能读取到消息。如果队列为空，该任务将保持阻塞状态以等待队列数据有效。当其它任务或中断服务程序往其等待的队列中写入了数据，该任务将自动由阻塞态转为就绪态。当任务等待的时间超过了指定的阻塞时间，即使队列中尚无有效数据，任务也会自动从阻塞态转移为就绪态。所有的task主入口while循环体都是按这个执行。例如：

```
1. static void track_master_task_main()
2. {
3.     track_task_message_struct_t queue_item = {0};
4./****/
5.
6.     while(1)
7.     {
8.         if(xQueueReceive(master_queue, &queue_item, portMAX_DELAY))//阻塞等待
9.         {
10.             track_master_task_msg_handler(&queue_item);
11.         }
12.     }
13. }
```

xQueueReceive()用于从一个队列中接收消息并把消息从队列中删除。如果不想删除消息的话，就调用 xQueuePeek()函数。xQueueReceiveFromISR()与xQueuePeekFromISR()是中断版本，用于在中断服务程序中接收一个队列消息并把消息。这两个函数只能用于中断，是不带有阻塞机制的，实际项目没有使用。

## **5.6 查询队列使用情况**

uxQueueMessagesWaiting()查询队列中存储的信息数目，具有中断保护的版本为uxQueueMessagesWaitingFromISR()。查询队列的空闲数目uxQueueSpacesAvailable()。

## **5.7 队列使用注意点**

使用队列函数需要注意以下几点：

1、中断中必须使用带FromISR后缀的接口；

2、发送或者是接收消息都是以拷贝的方式进行，如果消息内容过于庞大，可以将消息的地址作为消息进行发送、接收。

```
1. typedef struct
2. {
3.     TaskHandle_t src_mod_id;
4.     int message_id;
5.     int32_t param;
6.     union
7.     {
8.         int32_t result;
9.         int32_t socket_id;
10.     };
11.     void* pvdata;//大数据使用动态申请内存保存，队列只传递指针
12. } track_task_message_struct_t;
```

3、队列并不属于任何任务，所有任务都可以向同一队列写入和读出，一个队列可以由多任务或中断读写。

4、队列的深度要结合实际，可以多申请点，前提是每个队列单元尽可能小。

5、队列存在一定限制，在队头没有取出来之前，是无法取出第二个，和STL链表存在差异。

# **六、 软件定时器**

## **6.1 软件定时器的概念**

定时器有硬件定时器和软件定时器之分，硬件定时器是芯片本身提供的定时功能精度高，并且是中断触发方式。软件定时器是由操作系统封装的接口，它构建在硬件定时器基础之上，使系统能够提供不受硬件定时器资源限制，其实现的功能与硬件定时器也是类似的。

在操作系统中，通常软件定时器以系统节拍周期为计时单位。系统节拍配置为configTICK_RATE_HZ，该宏在 FreeRTOSConfig.h 中，一般是100或者1000。根据实际系统 CPU 的处理能力和实时性需求设置合适的数值，系统节拍周期的值越小，精度越高，但是系统开销也将越大，因为这代表在 1 秒中系统进入时钟中断的次数也就越多。

## **6.2 软件定时器创建**

软件定时器需先创建才允许使用，动态创建方式是xTimerCreate()，返回一个句柄。软件定时器在创建成功后是处于休眠状态的，没有开始计时运行。FreeRTOS的软件定时器支持单次模式和周期模式。

单次模式：当用户创建了定时器并启动了定时器后，定时时间到了，只执行一次回调函数，之后不再执行。周期模式：定时器会按照设置的定时时间循环执行回调函数，直到用户将定时器停止或删除。

实际项目中使用这种模式对单片机喂狗就比较省事。

```
1. TimerHandle_t xTimerCreate( const char * const pcTimerName,//定时器名称
2.                             const TickType_t xTimerPeriodInTicks,//定时时间
3.                             const UBaseType_t uxAutoReload,//是否自动重载
4.                             void * const pvTimerID,//回调函数的参数
5.                             TimerCallbackFunction_t pxCallbackFunction )//回调函数
```

## **6.3 软件定时器开启**

新创建的定时器没有开始计时启动，可以使用

```
xTimerStart()、
xTimerReset()、
xTimerStartFromISR() 、xTimerResetFromISR()
xTimerChangePeriod()、xTimerChangePeriodFromISR()
```

这些函数将其状态转换为活跃态，开始运行。区别：如果定时器设定60秒间隔，已经运行了30秒，reset是将定时器重置为原来设定的时间间隔，也就是重新开始延时60秒。ChangePeriod重新设置计时周期。

## **6.4 软件定时器停止**

xTimerStop() 用于停止一个已经启动的软件定时器，xTimerStopFromISR()是中断版本。

## **6.5 软件定时器删除**

xTimerDelete（）用于删除一个已经被创建成功的软件定时器，释放资源，删除之后不能再使用。实际项目中，任务和队列都是按需创建，一直使用，但是定时器不使用的就应该删除，并且删除后一定要将句柄置为NULL。

## **6.6 软件定时器源码分析**

软件定时器任务是在系统开始调度的时候就被创建：vTaskStartScheduler()—xTimerCreateTimerTask。

```
1. BaseType_t xTimerCreateTimerTask( void )
2. {
3.     BaseType_t xReturn = pdFAIL;
4.
5.     prvCheckForValidListAndQueue();//创建定时器任务的队列
6.
7.     if( xTimerQueue != NULL )
8.     {
9.         \#if ( configSUPPORT_STATIC_ALLOCATION == 1 )
10.             {
11./**/
12.             }
13.         \#else/* if ( configSUPPORT_STATIC_ALLOCATION == 1 ) */
14.             {
15.//创建定时器任务
16.                 xReturn = xTaskCreate( prvTimerTask,
17.                                        configTIMER_SERVICE_TASK_NAME,
18.                                        configTIMER_TASK_STACK_DEPTH,
19.                                        NULL,
20.                                        ( ( UBaseType_t ) configTIMER_TASK_PRIORITY ) | portPRIVILEGE_BIT,
21.                                        &xTimerTaskHandle );
22.             }
23.         \#endif/* configSUPPORT_STATIC_ALLOCATION */
24.     }
25./**/
26.     return xReturn;
27. }
```

任务创建后，等候命令执行

```
1.static portTASK_FUNCTION( prvTimerTask, pvParameters )
2. {
3./**/
4.
5.     for( ; ; )
6.     {
7.//最近即将超时的定时器还有多长时间溢出
8.         xNextExpireTime = prvGetNextExpireTime( &xListWasEmpty );
9.
10.//阻塞等待，定时器溢出或受到命令，进入下一步（原因不明）
11.         prvProcessTimerOrBlockTask( xNextExpireTime, xListWasEmpty );
12.
13.//接收命令并处理，见下面
14.         prvProcessReceivedCommands();
15.     }
16. }
```

所有定时器接口，都是使用xTimerGenericCommand向队列发送控制命令，命令如下：

```
1. \#define tmrCOMMAND_START_DONT_TRACE             ( ( BaseType_t ) 0 )
2. \#define tmrCOMMAND_START                        ( ( BaseType_t ) 1 )
3. \#define tmrCOMMAND_RESET                        ( ( BaseType_t ) 2 )
4. \#define tmrCOMMAND_STOP                         ( ( BaseType_t ) 3 )
5. \#define tmrCOMMAND_CHANGE_PERIOD                ( ( BaseType_t ) 4 )
6. \#define tmrCOMMAND_DELETE                       ( ( BaseType_t ) 5 )
```

## **6.7 软件定时器使用注意点**

1、查看其他开源代码，对定时器的使用并不多，但实际项目中过多依赖定时器，导致应用逻辑混乱。

2、freeRTOS 的定时器不是无限制的，其根源是接收定时器控制命令消息的队列，默认只有10个单元。

```
1. xTimerQueue = xQueueCreate( ( UBaseType_t ) configTIMER_QUEUE_LENGTH, sizeof( DaemonTaskMessage_t ) );
```

定时器过多，可能出现发起定时器命令失败，原因是队列已满。可以将默认的10扩大为15，后续尽量使用信号量来优化代码。

4、软件定时器的回调函数要快进快出，而且不能有任何阻塞任务运行的情况，不能有vTaskDelay() 以及其它能阻塞任务运行的函数。特别说明，其回调函数是在定时器任务执行的，并不是开启定时器的任务。

# **七、 信号量**

## **7.1 信号量的概念**

信号量（Semaphore）是一种实现任务间通信的机制，可以实现任务之间同步或临界资源的互斥访问，常用于协助一组相互竞争的任务来访问临界资源。在多任务系统中，各任务之间需要同步或互斥实现临界资源的保护，信号量功能可以为用户提供这方面的支持。可以简单认为是为支持多任务同时操作的全局变量（个人理解）。

### **7.1.1 二值信号量**

比如有一个停车位，多个人都想占用停车，这种情况就可以使用一个变量标记车位状态，它只有两种情况，被占用或者没被占用。在多任务中使用二值信号量表示，用于任务与任务、任务与中断的同步。在freeRTOS中，二值信号量看作只有一个消息的队列，因此这个队列只能为空或满。

### **7.1.2 计数信号量**

如果有100个停车位，可以停100辆车，每进去一辆车，车位的数量就要减一，当停车场停满了 100 辆车的时候，再来的车就不能停进去了。这种场景就需要计数信号量来表示多个状态。二进制信号量可以被认为是长度为 1 的队列，而计数信号量则可以被认为长度大于 1 的队列，信号量使用者依然不必关心存储在队列中的消息，只需关心队列是否有消息即可。

### **7.1.3 互斥信号量**

还是前面车位问题，只剩一个空车位，虽然员工车离得近，但是领导车来了，要优先安排给领导使用，这就是由地位决定。互斥信号量其实是特殊的二值信号量，由于其特有的优先级继承机制从而使它更适用于简单互锁，也就是保护临界资源。

优先级翻转问题：假设有任务H，任务M和任务L三个任务，优先级逐次降低。低优先级的任务L抢先占有资源，导致高优先级的任务H阻塞等待，此时再有中等优先级的任务M，它不需要该资源，且优先级高于任务L，它优先执行；之后再执行任务L，最后才执行任务H。看起来就是高优先级的任务反而不如低优先级的任务，即优先级翻转。

改进型的互斥信号量具有优先级继承机制，操作系统对获取到临界资源的任务提高其优先级为所有等待该资源的任务中的最高优先级。一旦任务释放了该资源，就恢复到原来的优先级。

任务L先占用资源，任务H申请不到资源会进入阻塞态，同时系统就会把当前正在使用资源的任务L的优先级临时提高到与任务H优先级相同，即使任务M被唤醒了，因为它的优先级比任务H低，所以无法打断任务L，因为任务L的优先级被临时提升到 H；任务L使用完该资源，任务H优先级最高，将接着抢占 CPU 的使用权，这样保证任务H在任务M前优先执行。

上面的这些就是为了说明，二值信号量因为优先级翻转，不能用于对临界区的访问。

### **7.1.4 递归互斥信号量**

信号量是每获取一次，可用信号量个数就会减少一个，释放一次就增加一个。但是递归信号量则不同。对于已经获取递归互斥量的任务可以重复获取该递归互斥量，该任务拥有递归信号量的所有权。任务成功获取几次递归互斥量，就要返还几次，在此之前递归互斥量都处于无效状态，其他任务无法获取，只有持有递归信号量的任务才能获取与释放。类似栈的效果。

## **7.2 二值信号量的应用**

二值信号量是任务与任务间、任务与中断间同步的重要手段。例如，任务A使用串口发出AT数据后，获取二值信号量无效进入阻塞；

某个时间后，任务B中串口收到正确的回复，释放二值信号量。

任务A就立即从阻塞态中解除，进入就绪态，等待运行。这种机制用在模块AT交互很合适。

## **7.3 计数信号量的应用**

计数信号量可以用于资源管理，允许多个任务获取信号量访问共享资源。例如有公共资源车位3个，但是有多个任务要使用，这种场景就必须使用计数信号量。三个资源最多支持 3 个任务访问，那么第 4 个任务访问的时候，会因为获取不到信号量而进入阻塞。也就是第4个人无法占用车位，必须前面有车离开。等到其中一个有任务（比如任务 1） 释放掉该资源的时候，第 4 个任务才能获取到信号量从而进行资源的访问。其运作的机制类似下图。

[![](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQKicEAClibHOP5NGLpP45meUmU3xHuuricaR7YkNxJL11qAOJnh5HDQWdQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/4W1T4tmuLNwFp6NM3jfrtUoFmTrvkeicQKicEAClibHOP5NGLpP45meUmU3xHuuricaR7YkNxJL11qAOJnh5HDQWdQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在这里插入图片描述

## **7.4 互斥信号量的应用**

多任务环境下往往存在多个任务竞争同一临界资源的应用场景，互斥量可被用于对临界资源的保护从而实现独占式访问。互斥量可以降低信号量存在的优先级翻转问题带来的影响。

比如有两个任务需要对串口进行发送数据，其硬件资源只有一个，那么两个任务肯定不能同时发送，不然导致数据错误，那么就可以用互斥量对串口资源进行保护，当一个任务正在使用串口的时候，另一个任务则无法使用串口，等到前一个任务使用串口完成后， 另外一个任务才能获得串口的使用权。

另外需要注意的是互斥量不能在中断服务函数中使用，因为其特有的优先级继承机制只在任务起作用，在中断的上下文环境毫无意义。

互斥信号量可以在多个任务之间进行资源保护，而临界区只能是在同一个任务进行，但是其速度快。（个人理解）

## **7.5 信号量接口**

所有信号量semaphore使用套路相近，都是创建creat、删除delete、释放give和获取take四种；释放和获取支持任务级和中断级FromISR，其中互斥量和递归互斥量不支持中断。使用对应的信号量，需要在FreeRTOSConfig.h开启对应的功能。

### **7.5.1 信号量创建**

xSemaphoreCreateBinary()用于创建一个二值信号量，并返回一个句柄，默认二值信号量为空，在使用函数 xSemaphoreTake()获取之前必须 先 调 用 函 数 xSemaphoreGive() 释放后才可以获取。

xSemaphoreCreateCounting()创建计数信号量。

```
1. \#define xSemaphoreCreateCounting( uxMaxCount, uxInitialCount )
```

> uxMaxCount 计数信号量的最大值，当达到这个值的时候，信号量不能再被释放。uxInitialCount 创建计数信号量的初始值。

xSemaphoreCreateMutex()用于创建一个互斥量，并返回一个互斥量句柄，只能被同一个任务获取一次，如果同一个任务想再次获取则会失败。

xSemaphoreCreateRecursiveMutex()用于创建一个递归互斥量，递归信号量可以被同一个任务获取很多次，获取多少次就需要释放多少次。递归信号量与互斥量一样，都实现了优先级继承机制，可以减少优先级反转的反生。

### **7.5.2 信号量删除**

vSemaphoreDelete()用于删除一个信号量，包括二值信号量，计数信号量，互斥量和递 归互斥量。如果有任务阻塞在该信号量上，暂时不要删除该信号量。传入的参数为创建时返回的句柄。

### **7.5.3 信号量释放**

当信号量有效的时候，任务才能获取信号量，信号量变得有效就是释放信号量。每调用一次该函数就释放一个信号量，注意释放的次数，尤其是计数信号量。

xSemaphoreGive()是任务中释放信号量的宏，可以用于二值信号量、计数信号量、互斥量的释放，但不能释放由函数xSemaphoreCreateRecursiveMutex()创建的递归互斥量，递归互斥信号量用xSemaphoreGiveRecursive()释放。xSemaphoreGiveFromISR()带中断保护释放一个信号量，被释放的信号量可以是二值信号量和计数信号量，不能释放互斥量和递归互斥量，因为互斥量和递归互斥量不可在中断中使用，互斥量的优先级继承机制只能在任务中起作用。

### **7.5.4 信号量获取**

与释放信号量对应的是获取信号量，当信号量有效的时候，任务才能获取信号量，当任务获取了某个信号量的时候，该信号量的可用个数就减一，当它减到0 的时候，任务就无法再获取了，并且获取的任务会进入阻塞态（如果设定了阻塞超时时间）。

xSemaphoreTake()函数用于获取信号量，不带中断保护。获取的信号量对象可以是二值信号量、计数信号量和互斥量，但是递归互斥量并不能使用它。

```
1. \#define xSemaphoreTake( xSemaphore, xBlockTime )
```

> xSemaphore 信号量句柄
> 
> xBlockTime 等待信号量可用的最大超时时间，单位为 tick
> 
> 获取 成 功 则 返 回 pdTRUE ，在 指定的 超时 时间 中 没 有 获 取 成 功 则 返 回errQUEUE_EMPTY。

使用xSemaphoreTakeRecursive()获取递归互斥量。xSemaphoreTakeFromISR()是获取信号量的中断版本，是一个不带阻塞机制获取信号量的函数，获取对象必须由是已经创建的信号量，信号量类型可以是二值信号量和计数信号量，它与 xSemaphoreTake()函数不同，它不能用于获取互斥量，因为互斥量不可以在中断中使用，并且互斥量特有的优先级继承机制只能在任务中起作用，而在中断中毫无意义。

## **7.6 信号量使用注意点**

1、建议合理使用信号量进行事件同步处理，减少对定时器的依赖。

2、使用前合理设定超时时间和依赖关系，避免多个任务互相等待对方释放的信号量而死锁。

# **八、 事件**

## **8.1 事件的概念**

信号量用于单个任务与任务或任务与中断之间的同步，但有些任务可能与多个任务由关联，此时信号量实现就比较麻烦，可以使用事件机制。

事件是一种实现任务间通信的机制，多任务环境下，任务、中断之间往往需要同步操作，一个事件发生会告知等待中的任务，即形成一个任务与任务、中断与任务间的同步。事件可以提供一对多、多对多的同步操作。一对多同步模型：一个任务等待多个事件的触发，这种情况是比较常见的。

任务可以通过设置事件位来实现事件的触发和等待操作。FreeRTOS 的事件仅用于同步，不提供数据传输功能。

## **8.2 事件的应用**

在某些场合，可能需要多个事件发生了才能进行下一步操作。各个事件可分别发送或一起操作事件标志组，而任务可以等待多个事件，任务仅对感兴趣的事件进行关注。当有感兴趣的事件发生时并且符合感兴趣的条件，任务将被唤醒并进行后续的处理动作。

其机制类似一个全局变量，子任务使用特殊的接口函数对指定的位进行写1或者清零，主任务阻塞等待该变量满足设定的规则，则返回运行。

例如项目中的喂狗机制，多个任务，只要有一个任务发生异常，则主任务停止喂狗，等待被重启。不使用事件机制，则3个任务定时向主master task发送消息，表明自身任务运行正常；同时master task定时查询，是否收到3个任务的消息，如果全都收到表示正常，清除进入下一个定时检查周期；如果其中一个未收到则表示对应任务异常，故意停止喂狗等待被重启。

使用事件机制，则相对容易，3个任务定时设置对应的标志位，master task只需要等待指定的事件位，超时就表示异常；不需要自身定时查询，也省去了定时发消息。当然缺点是master task只能阻塞等待事件不能执行其他业务逻辑。

## **8.3 事件接口**

xEventGroupCreate()用于创建一个事件组，vEventGroupDelete()删除事件对象控制块来释放系统资源。

**事件组置位**，任务中使用 xEventGroupSetBits()，中断中使用xEventGroupSetBitsFromISR()；

> xEventGroup 事件句柄。uxBitsToSet 指定事件中的事件标志位。如设置 uxBitsToSet 为 0x09 则位 3和位 0 都需要被置位。返回调用 xEventGroupSetBits() 时事件组中的值。

**事件组清除位**，任务中使用xEventGroupClearBits()，中断中使用 xEventGroupClearBitsFromISR()，都是用于清除事件组指定的位，如果在获取事件的时候没有将对应的标志位清除，那么就需要用这个函数来进行显式清除。

> xEventGroup 事件句柄。uxBitsToClear 指定事件组中的哪个位需要清除。如设置 uxBitsToSet 为 0x09则位 3和位 0 都需要被清除。

**读取事件标志**，任务中使用 xEventGroupGetBits()，中断中使用xEventGroupGetBitsFromISR()。

**重点是等待事件函数** xEventGroupWaitBits()，获取任务感兴趣的事件且支持等待超时机制，当且仅当任务等待的事件发生时，任务才能获取到事件信息。否则任务将保持阻塞状态以等待事件发生。当其它任务或中断服务程序往其等待的事件设置对应的标志位，该任务将自动由阻塞态转为就绪态。

EventGroupWaitBits()用于获取事件组中的一个或多个事件发生标志，当要读取的事件标志位没有被置位时，任务将进入阻塞等待状态。要想使用该函数必 须 把FreeRTOS/source/event_groups.c 这个 C 文件添加到工程中。

```
1. EventBits_t xEventGroupWaitBits( EventGroupHandle_t xEventGroup,
2.                                  const EventBits_t uxBitsToWaitFor,
3.                                  const BaseType_t xClearOnExit,
4.                                  const BaseType_t xWaitForAllBits,
5.                                  TickType_t xTicksToWait )
```

> 参数
> 
> xEventGroup 事件句柄。
> 
> uxBitsToWaitFor 一个按位或的值，指定需要等待事件组中的哪些位置1。如需要等待 bits 0 and/or bit 1 and/or bit 2则 uxBitsToWaitFor 配置为 0x07(0111b)。
> 
> xClearOnExit pdTRUE：xEventGroupWaitBits() 等待到满足任务唤醒的事件时，系统将清除由形参 uxBitsToWaitFor 指定的事件标志位。pdFALSE：不会清除由形参 uxBitsToWaitFor 指定的事件标志位。
> 
> xWaitForAllBits pdTRUE ：当形参 uxBitsToWaitFor 指定的位都置位的时候，xEventGroupWaitBits()才满足任务唤醒的条件，这也是“逻辑与”等待事件，并且在没有超时的情况下返回对应的事件标志位的值。pdFALSE：当形参 uxBitsToWaitFor 指定的位有其中任意一个置位的时候，这也是常说的“逻辑或”等待事件，在没有超时的情况下 函数返回对应的事件标志位的值。xTicksToWait 最大超时时间，单位为系统节拍周期
> 
> **返回值**
> 
> 返回事件中的哪些事件标志位被置位，返回值很可能并不是用户指定的事件位，需要对返回值进行 判断再处理 。

其应用类似某个全局变量，等待事件的任务在设定的时间内，监控该变量某些位的值；该值由其他任务或中断修改。

# **九、 任务通知**

FreeRTOS 从 V8.2.0 版本开始提供任务通知这个功能，可以在一定场合下替代 FreeRTOS 的信号量，队列、事件组等，但是使用也有局限性。将宏定义 configUSE_TASK_NOTIFICATIONS 设置为 1才能开启开功能。但该功能并不常用。

# **十、 内存管理**

## **10.1 内存管理的概念**

FreeRTOS 内存管理模块管理用于系统中内存资源，它是操作系统的核心模块之一。主要包括内存的初始化、分配以及释放。一般不同的平台移植代码，内存的动态申请和释放接口需要替换。嵌入式实时操作系统中，一般不支持标准C库中的 malloc()和 free()，其内存有限，随着内存不断被分配和释放，整个系统内存区域会产生越来越多的碎片。

FreeRTOS提供了 5 种内存管理算法，源文件在Source\portable\MemMang 路径下，使用的时候选择其中一个。heap_1.c、heap_2.c 和 heap_4.c 这三种内存管理方案，内存堆实际上是一个很大的 数 组ucHeap。

heap_1.c内存管理方案简单,它只能申请内存而不能进行内存释放。有些嵌入式系统并不会经常动态申请与释放内存，一般都是在系统启动后就一直使用下去，永不删除，适合这种方式。

heap_2.c 方案支持释放申请的内存，但是它不能把相邻的两个小的内存块合成一个大的内存块，对于每次申请内存大小都比较固定的；但每次申请并不是固定内存大小的则会造成内存碎片。如下图，随着不断的申请释放，空闲空间会变成很多小片段。

heap_3.c 方案只是封装了标准 C 库中的 malloc()和 free()函数，由编译器提供，需要通过编译器或者启动文件设置堆空间。

heap_4.c 方案是在heap_2.c 基础上，对内存碎片进行了改进，能把相邻的空闲的内存块合并成一个更大的块，这样可以减少内存碎片。

heap_5.c 方案在实现动态内存分配时与 heap4.c 方案一样，采用最佳匹配算法和合并算法，并且允许内存堆跨越多个非连续的内存区，也就是允许在不连续的内存堆中实现内存分配，比如做图形显示，可能芯片内部的 RAM 不足，额外扩展SDRAM，那这种内存管理方案则比较合适。

一般物联网平台使用的是heap_4.c。

## **10.2 内存管理接口**

不管其内部的管理如何实现的，对上层应用层的接口都是一样的。

```
1. void *pvPortMalloc( size_t xSize );//内存申请函数
2. void vPortFree( void *pv );//内存释放函数
3. void vPortInitialiseBlocks( void );//初始化内存堆函数
4. size_t xPortGetFreeHeapSize( void );//获取当前未分配的内存堆大小
5. size_t xPortGetMinimumEverFreeHeapSize( void );//获取未分配的内存堆历史最小值
```

一般主要是使用内存申请和释放两个接口，用法和注意事项同malloc/free一样，成对使用。内存释放后尽量将指针设为NULL。

# **十一、 通用接口**

一些常用接口进行说明。

## **11.1 临界段**

进入和退出临界段的宏在 task.h 中定义，进入和退出临界段的宏分中断保护版本和非中断版本，但最终都是通过开/关中断来实现。主要用于对全局变量的控制，系统使用非常多，但实际项目中没使用，因为全局变量的异常访问时小概率问题，只是测试没发现，理论上是存在问题的。

```
1./* 在中断场合*/  {
2.     uint32_t ulReturn;
3.
4.     ulReturn = taskENTER_CRITICAL_FROM_ISR();/* 进入临界段，临界段可以嵌套 */
5.
6./* 临界段代码 */
7.
8.     taskEXIT_CRITICAL_FROM_ISR( ulReturn );  }/* 退出临界段 */
```

```
1./* 在非中断场合 */  {
2.
3.     taskENTER_CRITICAL();/* 进入临界段 */
4.
5./* 临界段代码 */
6.
7.     taskEXIT_CRITICAL();  }/* 退出临界段*/
```

## **11.2 任务阻塞延时**

vTaskDelay ()阻塞延时，任务调用该延时函数后会被剥离 CPU 使用权，进入阻塞状态，直到延时结束。但是该函数不能用在中断服务和定时回调函数。延时单位是tick。

## **11.3 获取系统时钟计数值**

```
1. TickType_t xTaskGetTickCount( void )
2. TickType_t xTaskGetTickCountFromISR( void )
```

注意该接口分任务版和中断版，该接口获取的是tick计数值，需要结合系统时钟频率转换成时间。

## **11.4 中断回调函数**

和其它平台不同，中断回调中释放中断标记即可，freeRTOS中，中断触发后，可能某些阻塞的任务获取了相关信号，需要立刻执行，因此中断服务发送消息后，需要主动查询阻塞任务的情况，执行任务切换动作。

```
1. static uint32_t ulExampleInterruptHandler( void )
2. {
3.     BaseType_t xHigherPriorityTaskWoken;
4.
5.     xQueueSendToBackFromISR (xQueueRx,&cChar,&xHigherPriorityTaskWoken);
6.     portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
7. }
```
## 应用
[韦东山freeRTOS系列教程：【公开课】RTOS商业产品案例源码讲解_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Nq4y1r7KL/?vd_source=8628b70b8921792574747e076af0f11a)

## 参考文献
【FreeRTOS及其应用，万字长文，基础入门】原创 嵌入式系统 嵌入式系统 _2020-11-15 23:58_ 微信公众号：嵌入式系统