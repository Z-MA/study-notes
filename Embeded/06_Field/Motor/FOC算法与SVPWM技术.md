## 前言 

最近想做一个机器人项目，设计中需要用到高性能超小体积的伺服电机。

电机这一块性能满足项目需求的基本上只有[无刷电机](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%A0%E5%88%B7%E7%94%B5%E6%9C%BA&zhida_source=entity)可以选了--又要大功率、大[扭矩](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%89%AD%E7%9F%A9&zhida_source=entity)，又要体积小，成本还最好不要太高，选择低KV值的无刷电机显然是最合适的。我预计的方案中计划把减速器也省略了，采用[扭矩无刷电机](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%89%AD%E7%9F%A9%E6%97%A0%E5%88%B7%E7%94%B5%E6%9C%BA&zhida_source=entity)直驱。那么作为机器人硬件三大核心部件（**电机**、**减速器**、**驱动器**）之一的驱动器，我感觉是有必要自己设计一下的，因此这里把我学习FOC过程中看到的一些有关无刷电机[矢量控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%9F%A2%E9%87%8F%E6%8E%A7%E5%88%B6&zhida_source=entity)的资料和个人理解整理分享出来。

> **本人非自控/电控专业，如文章有疏漏欢迎指出~**
>

### 什么是FOC？
**FOC（Field-Oriented Control）**，直译是[磁场定向控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%A3%81%E5%9C%BA%E5%AE%9A%E5%90%91%E6%8E%A7%E5%88%B6&zhida_source=entity)，也被称作矢量控制**（VC，Vector Control）**，是目前[无刷直流电机](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%A0%E5%88%B7%E7%9B%B4%E6%B5%81%E7%94%B5%E6%9C%BA&zhida_source=entity)（[BLDC](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=BLDC&zhida_source=entity)）和[永磁同步电机](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%B0%B8%E7%A3%81%E5%90%8C%E6%AD%A5%E7%94%B5%E6%9C%BA&zhida_source=entity)（PMSM）高效控制的最优方法之一。FOC旨在通过精确地控制磁场大小与方向，使得电机的运动[转矩](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E8%BD%AC%E7%9F%A9&zhida_source=entity)平稳、噪声小、效率高，并且具有高速的[动态响应](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%8A%A8%E6%80%81%E5%93%8D%E5%BA%94&zhida_source=entity)。

简单来说就是，FOC是一种对无刷电机的驱动控制方法，它可以让我们对无刷电机进行“**像素级”**控制，实现很多传统电机控制方法所无法达到的效果~

### FOC驱动器和无刷电调的区别

玩过航模的同学可能对无刷电机很熟悉，也应该知道航模中对于无刷电机的驱动使用的是**电子调速器（ESC）**也就是我们常说的电调，那么这个FOC驱动器和普通的电调有什么区别呢？

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346146-16f69c71-1117-48cf-b400-0070ea0a097f.jpeg)

航模中的无刷电调

**FOC的优势：**

1. **低转速下控制** 
由于控制原理的区别，无刷电调只能控制电机工作在高转速下，低速下很难控制；而[FOC控制器](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=FOC%E6%8E%A7%E5%88%B6%E5%99%A8&zhida_source=entity)则完全没有这个限制，不论在什么转速下都可以实现精确控制。
2. **电机换向** 
同上面的理由，由于无感电调无法反馈转子位置，因此很难实现[电机正反转](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%94%B5%E6%9C%BA%E6%AD%A3%E5%8F%8D%E8%BD%AC&zhida_source=entity)的换向；而FOC驱动器的换向性能极其优秀，最高转速下正反转切换可以非常顺畅；此外FOC还可以以能量回收的形式进行刹车控制。
3. [力矩](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%8A%9B%E7%9F%A9&zhida_source=entity)**控制** 
普通电调都只能控制电机转速，而FOC可以进行电流（力矩）、速度、位置三个闭环控制。
4. **噪音** 
FOC驱动器的噪音会比电调小很多，原因是普通电调采用方波驱动，而FOC是正弦波。

**电调的优势：**

1. **兼容性** 
电调驱动不同的BLDC不需要进行参数整定，而FOC需要。
2. **算法复杂度** 
电调的算法实现更简单，运算量少，很适合需要提高带宽的超高转速电机。
3. **成本** 
电调的成本比FOC低很多。

综上大家应该可以看出来，FOC驱动器在控制性能上是要比电调强大得多的，其优异的性能和**磁场定向控制**的原理是密不可分的，下面就会详细介绍FOC控制的实现方法。

## 1. 电机原理

### 1.1 一些基础知识
1. [左手定则](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%B7%A6%E6%89%8B%E5%AE%9A%E5%88%99&zhida_source=entity) 
用于判断导线在磁场中受力的方向：伸开左手，使拇指与其他四指垂直且在一个平面内，让磁感线从手心流入，四指指向电流方向，大拇指指向的就是[安培力](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%AE%89%E5%9F%B9%E5%8A%9B&zhida_source=entity)方向（即导体受力方向）。

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346197-0ec028de-64fa-422f-ae9a-d75228e00e41.jpeg)

1. [右手定则](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%8F%B3%E6%89%8B%E5%AE%9A%E5%88%99&zhida_source=entity) 
伸开右手，使大拇指跟其余四个手指垂直并且都跟手掌在一个平面内，把右手放入磁场中，让磁感线垂直穿入手心，大拇指指向导体运动方向，则其余四指指向[感生电动势](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%84%9F%E7%94%9F%E7%94%B5%E5%8A%A8%E5%8A%BF&zhida_source=entity)的方向。也就是[切割磁感线](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%88%87%E5%89%B2%E7%A3%81%E6%84%9F%E7%BA%BF&zhida_source=entity)的导体会产生[反电动势](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%8F%8D%E7%94%B5%E5%8A%A8%E5%8A%BF&zhida_source=entity)，实际上通过反电动势定位转子位置也是普通无感电调工作的基础原理之一

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346189-33799127-000c-44fc-be63-f171490e3b53.jpeg)

1. **右手螺旋定则（即**[安培定则](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%AE%89%E5%9F%B9%E5%AE%9A%E5%88%99&zhida_source=entity)**）**  
用于判断通电线圈判断极性：用右手握螺线管，让四指弯向螺线管中电流方向，大拇指所指的那端就是螺线管的N极。[直线电流](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%9B%B4%E7%BA%BF%E7%94%B5%E6%B5%81&zhida_source=entity)的磁场的话，大拇指指向电流方向，另外四指弯曲指的方向为磁感线的方向。

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346297-80958b30-d94e-4d91-ad43-023f44a1d3cd.jpeg)

1. **PWM（脉冲宽度调制）**

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346298-07cf6dcb-05a9-4e37-bdc8-ff223c3ac4af.jpeg)

不同占空比的PWM波形

本质是利用[面积等效原理](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%9D%A2%E7%A7%AF%E7%AD%89%E6%95%88%E5%8E%9F%E7%90%86&zhida_source=entity)来改变波形的有效值。举个例子，一个电灯只有**开**和**关**两个状态，那么要怎么让它实现**50%亮度**的效果的呢？只需要让它在一半时间**开**，一半时间**关**，交替执行这两个动作只要频率足够高，在人眼（[低通滤波器](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%BD%8E%E9%80%9A%E6%BB%A4%E6%B3%A2%E5%99%A8&zhida_source=entity)）看起来就是**50%亮度**的样子了。而其中高电平占一个开关周期的比例，就叫做**占空比**。利用PWM可以实现使用离散的开关量来模拟连续的电压值。

### 1.2 无刷电机原理
考察下图情况中的**直流电机基本模型**，根据磁极异性相吸同性相斥的原理，中间永磁体在两侧电磁铁的作用下会被施加一个力矩并发生旋转，这就是电机驱动的基本原理：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346498-ed011b4f-d9f6-4b6c-83af-e8eb3a7893bf.jpeg)

对于简化的无刷电机来说，以**三相二极内转子电机**为例，定子的[三相绕组](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%B8%89%E7%9B%B8%E7%BB%95%E7%BB%84&zhida_source=entity)有[星形联结](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%98%9F%E5%BD%A2%E8%81%94%E7%BB%93&zhida_source=entity)方式和**三角联结**方式，而**三相星形联结的**[二二导通](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%BA%8C%E4%BA%8C%E5%AF%BC%E9%80%9A&zhida_source=entity)**方式**最为常用，这里就用该模型来做个简单分析：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346490-ca2186e5-7af3-4412-81f8-1f54c887c1b6.jpeg)

如上图所示，无刷电机三相的连接方式是**每一相引出导线的一头，而另一头和其他相两两相连**。这个情况下假如我们对A、[B极](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=B%E6%9E%81&zhida_source=entity)分别施加正电压和负电压，那么由[右手螺旋定则](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=2&q=%E5%8F%B3%E6%89%8B%E8%9E%BA%E6%97%8B%E5%AE%9A%E5%88%99&zhida_source=entity)可以判断出线圈磁极的方向如下图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346505-48262c20-5dd8-4ef6-95f3-6448aa440d08.jpeg)

> **思考一下这时候中间的转子处于什么角度的时候收到的力矩最大呢？**
>

没错就是和CO（O为中心点）连线平行的时候，磁铁会受到A、B两个磁极一推一拉的作用，直到旋转到与AB连线平行的且磁铁**内部磁力线**方向和[AB间磁力线](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=AB%E9%97%B4%E7%A3%81%E5%8A%9B%E7%BA%BF&zhida_source=entity)方向一致的时候，受合力矩为0且稳定，也就是上图中右边的状态。换句话说，**AB相通电会让转子努力转到上图中右边的状态**。至于C这时暂时不起作用。

同理，我们下一阶段换成AC相通电，这时候转子会倾向于转到下图右边水平的角度：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346662-7e1bf7d3-d5fb-4219-9390-63b083566ca2.jpeg)

然后BC相通电：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346835-c2f4f5d3-13f5-47ca-8d12-f05680a295a3.jpeg)

**...**

以此类推，可以得到每个通电状态下转子的角度，就是下图中的6个状态，每个状态相隔60度，6个过程即完成了完整的转动，共进行了6次换相：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346828-426c20a5-86a3-4343-a1c9-b768fac018eb.jpeg)

整个过程就好像骑在毛驴上吊一根胡萝卜一样，旋转的磁场牵引着永磁体不断旋转：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346828-c7c1d067-b137-4489-903d-47c2a654b02b.jpeg)

**而这个换向的操作，就是需要驱动器去完成的**。

这也是**无刷电机**和[有刷电机](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%9C%89%E5%88%B7%E7%94%B5%E6%9C%BA&zhida_source=entity)最大的区别，即不像有刷电机的机械换向，无刷电机是通过电子换向来驱动转子不断地转动，电机的电压和KV值决定了电机转速，而电机的转速就决定了换向的频率。

**至于什么时候怎么知道该换到哪个供电相？如何产生更平滑的换向电压？如何提高电源的利用效率？这些都是FOC控制方法要探讨和解决的问题。**

### 1.3 关于BLDC和PMSM的区别
无刷电机其实可以分为**无刷直流电机（BLDC，我们航模上都是用这种）**和**永磁同步电机（PMSM）**，结构大同小异，主要区别在于制造方式（[线圈绕组](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%BA%BF%E5%9C%88%E7%BB%95%E7%BB%84&zhida_source=entity)方式）不同导致的一些特性差异（比如反电动势的波形）。

从上面分析的无刷电机模型其实可以看到，由于转子在磁场中只有6个稳定的状态，因此旋转过程其实是不平滑的，存在扭矩的抖动（没有通电的时候可以用手转一下无刷电机，会感受到这种“颗粒感”）。因此为了解决这个问题，从“硬件”和从“软件”出发有两个解决方案，这就衍生出了**BLDC**和**PMSM**的区别。

简单地说，BLDC由于反电动势接近梯形波，所以肯定是会有上面说的抖动问题的，但是转一圈抖6下太明显了，如果我增加电机槽、[极对数](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%9E%81%E5%AF%B9%E6%95%B0&zhida_source=entity)（也就是磁铁对数），那以前是360度里面抖6下，现在变成120度里面抖6下，甚至更小，这样“颗粒感”不就变得更小了嘛？实际中买到的BLDC电机基本都是**多极对**的（比如下图），原理跟之前的分析是一样的，出来的都是三相信号（图中的三根线），可以自己进行类推。BLDC也可以结合[抗齿槽算法](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%8A%97%E9%BD%BF%E6%A7%BD%E7%AE%97%E6%B3%95&zhida_source=entity)的FOC进行力矩补偿实现平滑控制。

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346902-a56b6271-38c0-4d15-88f9-d54780dce345.jpeg)

而另一方面，为什么我们非得用**方波**这种不平滑的波来驱动电机呢，用**正弦波**它不香吗？是的，这就是PMSM解决问题的方式，由于PMSM的反电动势被设计为**正弦波**的形状，我们用**软件和算法**结合**PWM技术**将方波转变成等效的[SPWM正弦波](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=SPWM%E6%AD%A3%E5%BC%A6%E6%B3%A2&zhida_source=entity)或者SVPWM马鞍波，再来驱动电机，结果美滋滋，控制效果很理想。当然为了产生更好的波形、更好的[旋转磁场](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%8B%E8%BD%AC%E7%A3%81%E5%9C%BA&zhida_source=entity)，驱动器、控制算法就变得非常复杂，**这也是FOC的实现原理，后面会进行详细介绍**。

### 1.3 驱动电路实现
无刷电机的驱动电路主要使用[三相逆变电路](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%B8%89%E7%9B%B8%E9%80%86%E5%8F%98%E7%94%B5%E8%B7%AF&zhida_source=entity)来实现，如下图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463346889-7f8a8791-c2ae-4ce7-a38f-1ad331a52609.jpeg)

所谓**逆变电路**，即把**直流电**变换为**交流电**，或者简单点说就是一个可以产生不同电流流向的电路，通过前面的电机模型分析我们也可以看出，对于无刷电机的驱动是需要在不同时刻施加不同方向的电压（电流）的，因此需要逆变电路。

而逆变电路具体的实现则一般是采用**半桥MOS电路**来制作的。半桥电路的原型如下，其实很简单，就是两个[MOS管](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=MOS%E7%AE%A1&zhida_source=entity)组成的**上桥臂**和**下桥臂**，中间引出一条输出线：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347245-2049662d-17d8-410b-8881-d9ae1624de93.jpeg)

用3个半桥电路就可以组合成三相逆变电路，每个半桥引出的一根输出线跟无刷电机的一根相线相连，就完成了最基本的[无刷驱动电路](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%A0%E5%88%B7%E9%A9%B1%E5%8A%A8%E7%94%B5%E8%B7%AF&zhida_source=entity)。

原理方面，MOS管可以看作电压控制的高速电子开关，在MOS管的栅极（上图中的[High Drive](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=High+Drive&zhida_source=entity)和Low Drive）施加高电平或者低电平，就可以控制MOS源极和漏极的导通或者关闭。比如在下图中，我们打开第一组半桥的上桥臂、第二组和第三组半桥的下桥臂（其余的关闭），那么就可以让电流**从电源正极流过电机的a相，流经b、c相，然后回到电源负极**：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347190-b33e77ae-bc06-43e1-b343-be7d2aabda8d.jpeg)

三相逆变驱动电路

于是通过控制三个半桥的不同开关状态，我们可以控制电流在电机中的不同流向了。

> **注意**，在这个电路中，每个状态下电机的三相线圈都会有电流；而在上一节的示例中我们同一时刻只会让两相线圈有电流，另一相不起作用。  
那么这么修改的原因是啥呢？当然是：**浪费可耻啊**~  
浪费一相不用那不就白白损失了一部分扭矩嘛？通过上图中的方式驱动原理也是和之前分析一致的，但是可以产生更大的扭矩，所以当然是更好的选择啦。
>

接下来我们将半桥电路的状态做一个编码，首先限定一个半桥只有两种状态：

+ 上桥开通下桥关断定义为状态**1**
+ 上桥关断下桥开通定义为状态**0**

这样，三组半桥就一共有8种组合方式，编码分别为：**000**、**001**、**010**、**011**、**100**、**101**、**110**、**111**，记住这点，后面会用上~

> **可能有人会问，为什么一个半桥只能上桥臂和下桥臂有一个导通呢？都关闭或者都导通不行？？**  
害，仔细想想就知道，**上下都导通**显然是不可能的，因为这就相当于把电源短路了啊...  
那**上下都断开**呢？也不需要，因为这样就回到前面提到的，这时候电机有一相不起作用，浪了个费。  
实际上半桥驱动电路的实现会比上面的分析要复杂一些，比如需要考虑开关管的[开关频率](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%BC%80%E5%85%B3%E9%A2%91%E7%8E%87&zhida_source=entity)
>
> 、开启和关断时间不对称、死区问题等等，我后面设计的FOC驱动使用的是专用的半桥MOS栅极驱动IC来实现的。
>

### 1.4 旋转的三相电机波形
按照前面的无刷电机基本模型，假设我们拿到这样一个电机，**手动匀速转动它的转子，然后用示波器观察它的三相输出电压（也就是反电动势产生的电压）**，会看到什么波形呢？

其实很自然可以想到，我们会得到**3根正弦曲线**，而且三根曲线两两相位差为120°：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347246-9ec5c49e-4f42-4849-a0f8-b86615e3744d.jpeg)

> 实际上三相发电机的发电原理就是这样的，输出的就是三相幅值为220V的交流电（线电压为380V，即 3∗220\sqrt3*220 V）。
>

**发电机反过来就是电动机啦**，所以假如反过来我们在三相无刷电机的三相线圈上输入上述三相正弦电压，那么就可以驱动无刷电机平稳高效地旋转了。

而这也是FOC驱动无刷电机的基本手段，**即通过计算所需**[电压矢量](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%94%B5%E5%8E%8B%E7%9F%A2%E9%87%8F&zhida_source=entity)**，使用 **_**SVPWM**_** 技术产生调试信号，驱动三相逆变电路，合成出等效的三相正弦电压驱动电机。**

这个会在后面进行详细介绍。

## 2.FOC控制原理
ok基础知识铺垫完毕，终于要进入正题啦~

大家刚开始接触FOC查阅相关资料文献的时候，可能都会感觉有点晕：

**为什么要做各种变换和反变换？**

**空间矢量到底代表了啥？？**

**不同扇区内为什么非得是这样的状态切换顺序？？？**

**...**

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347192-dca2b957-5025-42cf-ad2b-6df74b25e709.jpeg)

不要担心，**某奥力给曾经说过：战胜恐惧的最好方法就是面对恐惧。**

下面就由我尝试深入浅出为大家拆解一下FOC控制，带大家直面矢量控制的核心原理~

### 2.1 FOC算法的[Pipeline](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=Pipeline&zhida_source=entity)
我们先来看一下FOC控制的整个流程图景：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347187-1818ee78-1f92-4510-85f2-86278a9f62e8.jpeg)

稍微解释一下，这幅图是以[电流闭环控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%94%B5%E6%B5%81%E9%97%AD%E7%8E%AF%E6%8E%A7%E5%88%B6&zhida_source=entity)为例的，也就是让电机始终产生一个恒定的力矩（也就是恒定的电流，因为力矩和电流成正比）。

可以看到控制器的输入是最左边的$I_{q-ref}$和 $I_{d-ref}$，两个变量经过PID控制器进行反馈调节，其中还涉及到几个变换模块，有`Park变换`和`Clark变换`；最后通过前面提到的SVPWM模块作用到[三相逆变器](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%B8%89%E7%9B%B8%E9%80%86%E5%8F%98%E5%99%A8&zhida_source=entity)上进而控制电机；而PID控制器的反馈量，是对电机输出电流的采样值。

**上面的过程不好理解没关系，先概括一下，FOC控制的整个过程是这样的：**

1. 对电机三[相电流](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%9B%B8%E7%94%B5%E6%B5%81&zhida_source=entity)进行采样得到$I_a$ ,$I_b$ ,$I_c$
2. 将 $I_a$ ,$I_b$ ,$I_c$ 经过`Clark变换`得到 $I_\alpha$ ,$I_\beta$
3. 将  $I_\alpha$ ,$I_\beta$ 经过`Park变换`得到 $I_q$ ,$I_d$
4. 计算  $I_q$ ,$I_d$ 和其设定值 $I_{q-ref}$和 $I_{d-ref}$ 的误差
5. 将上述误差输入两个PID（只用到PI）控制器，得到输出的控制电压 $U_q$ ,$U_d$
6. 将  $U_q$ ,$U_d$ 进行`反Park变换`得到 $U_{\alpha}$ ,$U_{\beta}$
7. 用  $U_{\alpha}$ ,$U_{\beta}$ 合成电压空间矢量，输入`SVPWM模块`进行调制，输出该时刻三个半桥的状态编码值（前文有提到）
8. 按照前面输出的编码值控制三相逆变器的MOS管开关，驱动电机
9. 循环上述步骤

下面我们来分别介绍每一步的具体操作以及意义。

### 2.2 Clark变换与Park变换
前面分析了，如果要平稳地驱动三相电机转动，我们就需要生成三个相位相差120度的正弦波，但是**我们最终的控制对象是MOS管的开通和关断**，只有**电压最大值**和**0值**两个状态啊，怎么去生成连续变化的正弦波呢？

对了，用前面提到的PWM技术就可以做到，所谓**SPWM**就是这么干的，如下图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347549-99ce73d1-de13-4e16-93c5-1da2e1c8463e.jpeg)

大家观察一下上图的波形，我们用上面坐标系中的正弦波和[三角波](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%B8%89%E8%A7%92%E6%B3%A2&zhida_source=entity)的**交点**投影到下面的坐标轴，以此确定PWM的占空比变化规律，这样合成的PWM波，经过低通滤波器之后，其实就等效为了一个正弦波！所以SPWM就是在PWM的基础上用正弦波来调制合成的具有正弦波规律变化的方波。

**不过SPWM调试方式在FOC实现中并不常用，原因是SPWM要**比后面要说的**SVPWM**的[母线电压](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%AF%8D%E7%BA%BF%E7%94%B5%E5%8E%8B&zhida_source=entity)利用率要低15%。

**另一方面，从控制的角度来看，我们甚至根本就不想跟什么三个正弦波打交道！**

因为要对于非线性的信号进行准确控制就要使用复杂的[高阶控制器](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%AB%98%E9%98%B6%E6%8E%A7%E5%88%B6%E5%99%A8&zhida_source=entity)，这对于建模成本、处理器算力、控制实时性等都是不利的。简单地说就是，咱们控制器的反馈输入变量不是三个电流采样值嘛，你要我稳稳地跟踪三个正弦波太麻烦啦！**能不能简单点跟踪一条直线（常量）**啊？

**答案是可以的~只需应用一点数学小技巧**

#### Clark变换

我们回到上面**FOC控制过程9个步骤**的第1步，也就是对电机的三个相电流进行采样，这一步会使用串联的[采样电阻](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%87%87%E6%A0%B7%E7%94%B5%E9%98%BB&zhida_source=entity)（Shunt）进行电流采样。

> 由于电机工作的电流一般很大，所以采样电阻的阻值非常小，甚至和导线的电阻接近了，因而实际的[采样电路](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%87%87%E6%A0%B7%E7%94%B5%E8%B7%AF&zhida_source=entity)
>
> PCB设计的时候还有一些讲究，比如使用[开尔文接法](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%BC%80%E5%B0%94%E6%96%87%E6%8E%A5%E6%B3%95&zhida_source=entity)
>
> **(Kelvin connections)**。
>

但是我们实际电路设计时可以不使用三个采样器（实际有单采样电阻、双采样电阻和[三采样电阻接法](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%B8%89%E9%87%87%E6%A0%B7%E7%94%B5%E9%98%BB%E6%8E%A5%E6%B3%95&zhida_source=entity)），只需要两个就够了。因为由[基尔霍夫电流定律（KCL）](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%9F%BA%E5%B0%94%E9%9C%8D%E5%A4%AB%E7%94%B5%E6%B5%81%E5%AE%9A%E5%BE%8B%EF%BC%88KCL%EF%BC%89&zhida_source=entity)，在任一时刻，流入节点的电流之和等于流出节点的电流之和，也就是说 

$$I_a+I_b+I_c=0$$

只需要知道其中两个就可以计算出第三个了。

这三个电流基本上就是三个相位相差120度的正弦波，在把这些信号输入控制器反馈控制之前，我们先来做点数学游戏：

我们知道三相坐标系 (Ia,Ib,Ic)(I_a,I_b,I_c) 如下：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347555-3034d299-324d-4711-adb6-99ff49ce7989.jpeg)

**问题：这明明是一个二维平面内的坐标系，为啥要用3个坐标轴来表示呢？**

而且很明显$(I_a,I_b,I_c) $这三个基向量是非正交的，学过线性代数的同学可能会想到，我们可以做一个很简单的[基变换](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%9F%BA%E5%8F%98%E6%8D%A2&zhida_source=entity)将其正交化为一个直角坐标系，我们把新的直角坐标系命名为$\alpha-\beta$**坐标系**，变换公式如下：

$$\begin{cases}I_{\alpha}=I_a+cos(\frac{2\pi}3)I_b+cos(\frac{2\pi}3)I_c\\I_{\beta}=sin(\frac{2\pi}3)I_b-sin(\frac{2\pi}3)I_c\end{cases}$$

**其实就是个很简单的坐标轴投影计算**，写成矩阵形式如下：

$$\begin{bmatrix}I_{\alpha}\\I_{\beta} \end{bmatrix}=\begin{bmatrix}1 & -\frac12 & -\frac12 &\\ 0 & \frac{\sqrt3}2 & -\frac{\sqrt3}2 \end{bmatrix} \begin{bmatrix}I_a\\I_b\\I_c \end{bmatrix}$$

于是我们就回到直角坐标系啦，是不是很开心，变换前后的波形如下：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347568-be0761dc-34ad-4aeb-9fea-f83bde2ce7b7.jpeg)

可以看到变换后其实还是正弦波...只不过我们少了一个需要控制的变量了，现在只需要控制 Iα,IβI_{\alpha},I_{\beta} 这两个变量，让其满足上图的下面的波形变化规律就可以控制电机旋转 了，频率还是不变的。

> 注意这里的 $I_{\alpha},I_{\beta} $是我们虚拟出来的变量，所以在计算出一组 $I_{\alpha},I_{\beta}$ 后，我们通过上述公式的反向变换公式变换回去再应用到电机的三相上。
>

**就这？**

当然不是，如果只是为了减小一个控制变量那这个**变换/反变换**操作显然有点多此一举。

有趣的是我们还可以接着变换：虽然 $\alpha-\beta$**坐标系**下少了一维变量，但是新的变量还是非线性的（正弦），有没有办法把它们线性化呢？有的，`Park变换`就是做这个工作的。

#### Park变换
这一步中我们接着`Clark变换`将 $\alpha-\beta$**坐标系**旋转 $\theta$ 度，其中 $\theta$**是转子当前的角度**，如下图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347578-9c63dbe0-87f2-4e9b-9526-80799ddd89a8.jpeg)

变换公式如下：

$$\begin{cases}I_d=I_{\alpha}cos(\theta)+I_{\beta}sin(\theta)\\I_q=-I_{\alpha}sin(\theta)+I_{\beta}cos(\theta)\end{cases}$$

也很简单，就是作用了一个[旋转矩阵](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5&zhida_source=entity)，写成矩阵形式：

$$\begin{bmatrix}I_d\\I_q \end{bmatrix}=\begin{bmatrix}cos{\theta} & sin{\theta} &\\ -sin{\theta} & cos{\theta}\end{bmatrix} \begin{bmatrix}I_{\alpha}\\I_{\beta} \end{bmatrix}$$

也就是说，这个d−qd-q**坐标系**是始终跟着转子旋转的！

这个操作是可行的，因为我们会通过编码器输入转子的实时旋转角度，所以这个角度始终是一个已知数。经过这一步的变换，我们会发现，一个匀速旋转向量在这个坐标系下变成了一个定值！（显然的嘛，因为参考系相对于该向量静止了），这个坐标系下两个控制变量都被线性化了！

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347567-bb7e2f9d-a3ee-46f8-a497-8dac0e91410c.jpeg)

Park变换前后的波形

接下来如果我们以 $I_q,I_d$ 这两个值作为反馈控制的对象，那么显然就可以使用一些线性控制器来进行控制了，**比如PID**（是的，尽管学术界有很多炫酷的高级控制方法， 但是工业界还是偏爱PID）。

至此我们已经理解完上面**FOC控制过程9个步骤**的前3步了。

### 2.3 PID控制
**PID（比例、积分、微分）**控制是啥这篇文章就不多讲解了，基础中的基础，也有大把文章做介绍的，不熟悉的可以自行搜索相关资料。

在FOC控制中主要用到三个PID环，从内环到外环依次是：**电流环**、**速度环**、**位置环。**

也就是说：我们**通过电流反馈来控制电机电流（扭矩）** -> 然后**通过控制扭矩来控制电机的转速 **-> 再**通过控制电机的转速控制电机位置**。

其中最内环的[电流换控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%94%B5%E6%B5%81%E6%8D%A2%E6%8E%A7%E5%88%B6&zhida_source=entity)框图如下：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347895-973f6346-55cb-4d7c-9c0c-7500750f3c30.jpeg)

PID电流环

可以看出来，这也就是前面提到的FOC控制9个步骤所描述的过程。实际只用到了[PI控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=PI%E6%8E%A7%E5%88%B6&zhida_source=entity)，没有引入微分，因为如果推导一下电压和电流的[传递函数](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0&zhida_source=entity)会发现这其实就是一个一阶[惯性环节](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%83%AF%E6%80%A7%E7%8E%AF%E8%8A%82&zhida_source=entity)（而且实际上我们可以通过[零极点](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%9B%B6%E6%9E%81%E7%82%B9&zhida_source=entity)对消来简化掉[PI参数](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=PI%E5%8F%82%E6%95%B0&zhida_source=entity)，只需要控制一个参数即电流带宽即可）。

> 上图中的`Speed & Position`
>
> 模块可以是编码器，或者[霍尔传感器](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%9C%8D%E5%B0%94%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)
>
> 等能感应转子位置的传感器 。
>

特别说明一下其中的 $I_q,I_d,I_{q\_ref},I_{d\_ref}$ ，前两者大家知道是通过`Clark变换`和`Park变换`得到的，而后两者是我们预期希望前两者达到的值，这个值具体代表了什么物理量呢？参考一下下图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347898-88da9f10-deb8-4b0a-8b53-ecefdca65e6c.jpeg)

也就是说我们一通操作将[转子磁链](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E8%BD%AC%E5%AD%90%E7%A3%81%E9%93%BE&zhida_source=entity)进行了解耦，分解为了转子旋转的**径向**和**切向**这两个方向的变量：

+ 其中 $I_q$ 是我们需要的，代表了期望的力矩输出
+ 而 $I_d$  是我们不需要的，我们希望尽可能把它控制为0

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347889-ac95c503-3516-441a-943a-b7958c9b1919.jpeg)

FOC的控制目标

通过PID控制器使用上述输入（电流采样值、编码器位置）和输出（MOS管开关状态）完成对电机电流的闭环控制。

然后进入到下一层的速度环：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347901-00eb54e6-6927-47fa-83f3-a72c8d2faa4f.jpeg)

速度-电流双环控制

在上图中， $Speed_{ref}$ 是速度设定值， $\omega$ 是电机的转速反馈，可以通过电机编码器或者霍尔传感器等计算得到，依然是使用**PI控制**。

将计算得到的电机速度 $\omega$ 与速度设定值 $Speed_{ref}$ 进行误差值计算，代入速度PI环，计算的结果作为电流环的输入，就实现了速度-电流的双闭环控制。

最外一层是位置环，也就是可以控制电机旋转到某个精确的角度并保持，控制框图如下：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463347898-2df6ab47-7a43-4274-97c4-8602363f037f.jpeg)

位置-速度-电流三环控制

同理应该很简单可以理解，上图中位置控制PID只用了P项（也可以使用PI）。

在实际使用中，由于编码器无法直接返回电机转速 ω\omega ，因此可以通过计算一定时间内的编码值变化量来表示电机的转速（也即用**平均速度**代表**瞬时速度**）。当电机转速比较高的时候，这样的方式是可以的；但是在位置控制模式的时候，电机的转速会很慢（因为是要求转子固定在某个位置嘛），这时候用平均测速法会存在非常大的误差（转子不动或者动地很慢，编码器就没有输出或者只输出1、2个脉冲）。

所以为了避免速度环节带来的误差，在做位置控制的时候可以只使用位置和电流组成的双环进行控制，不过此时需要对位置环做一定的变化，控制框图如下：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348251-9692f2ce-d40b-4feb-afab-52d193b27fed.jpeg)

位置-电流双闭环控制

由于去掉了速度环，这里的位置环我们使用完整的**PID控制**，即把微分项加上（因为位置的微分就是速度，这样可以减小位置控制的震荡加快收敛；[积分项](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%A7%AF%E5%88%86%E9%A1%B9&zhida_source=entity)的作用是为了消除静态误差）。

**好了，至此整个控制回路基本上捋清楚了**，但是还有一些细节我们没讲到，就是上面框图中的`SVPWM模块`。

细心的同学可会发现，在整个控制流程图里面有`Park变换`和对应的`反Park变换 ` ，但是却没有`Clark变换`对应的`反Clark变换` ，取而代之的是一个`SVPWM模块`。 

下面会对SVPWM技术进行详细介绍。

### 2.4 空间电压矢量
什么是空间电压矢量？

空间电压矢量是我们在控制电机过程中虚拟出来的一个矢量，既然是矢量，自然是有大小和方向的，那么它的大小和方向是什么呢？

还是以前面**三相逆变驱动电路**那幅图中的状态为例，输入**100**的状态：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348195-932b6d26-25cd-42ac-9102-7fe9fb54a945.jpeg)

此时等效电路如图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348187-2feaa426-6ded-40c3-abb9-b092cf471a30.jpeg)

因此电机中三个[相电压](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%9B%B8%E7%94%B5%E5%8E%8B&zhida_source=entity)（相电压是每相相对于电机中间连接点的电压）可以表示为：

$$U_a=U_A-U_N=\frac 23U_{dc}\\ U_b=U_B-U_N=-\frac 13U_{dc}\\ U_c=U_C-U_N=-\frac 13U_{dc}$$

> 其实就是个最简单的[分压电路](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%88%86%E5%8E%8B%E7%94%B5%E8%B7%AF&zhida_source=entity)，其中 UdcU_{dc} 是母线电压，也就是电源电压。
>

如果我们规定指向中心的方向为正，反之为负，那么此时我们可以画出下图中的三个电压矢量 $\overrightarrow {U_a}、\overrightarrow {U_b}、\overrightarrow {U_c} $（左边），以及它们的合成电压矢量 $\overrightarrow {U} $（右边）：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348211-2559f2e2-5276-4175-a8ce-396c071f870f.jpeg)

也就是说，这个状态下我们可以认为电机中存在一个矢量 U→\overrightarrow {U} 表征的电压（电流）；然后根据右手螺旋定则，可以判断出磁场的磁力线方向，也是和矢量 U→\overrightarrow {U} 一致的。

再结合前面章节的分析，转子永磁体会努力旋转到内部磁力线和外部磁场方向一致，**所以这个矢量其实就可以表征我们希望转子旋转到的方向，也即所需要生成的磁场方向了**。而这个矢量是会不断在空间中旋转的，它的幅值不变，为相电压峰值 UdcU_{dc} ，且以角速度 ω=2πfω= 2πf 匀速旋转。

我们后面将会看到，SVPWM算法的目的，就是使用三相桥的开关状态把在空间中旋转的矢量表示出来，我们把这个矢量称为**空间电压矢量**。

用数学公式来表示的话就是：

$$\begin{cases}U_A(t)=U_{dc}cos(2\pi ft)\\\\\\U_B(t)=U_{dc}cos(2\pi ft-\frac23\pi)\\\\\\U_C(t)=U_{dc}cos(2\pi ft+\frac23\pi) \end{cases}$$

为了研究各相上下桥臂不同开关组合时逆变器输出的**空间电压矢量**，我们定义开关函数 $S_x (x\in a,b,c)$ 为：

$$S_x= \begin{cases} 1,\ 上桥臂导通\\ 0,\ 下桥臂导通 \end{cases}$$

上桥臂导通下桥臂导通

$(S_a,S_b,S_c)$ 的全部可能组合共有8个，包括 6个非零矢量 ：

$$U_1(001)、U_2(010)、U_3(011)、U_4(100)、U_5(101)、U_6(110)$$

和两个零矢量：

$$U_0(000)、U_7(111)$$

可以看出零矢量状态下电机三相间电压都为0不产生转矩（不考虑反电动势）。

下面以其中一种开关组合为例分析，假设 $S_x=U_4(100) $，也即这张图中的状态：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348279-ce564d06-6e6d-45b5-8d92-6c6591710cb1.jpeg)

如前文分析，此时的电压矢量为$AO$方向，大小为 $U_{dc}$ ，我们把这个矢量画在坐标轴中如图：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348561-202bdbe7-4a83-4555-b109-bd9fcd7068d3.jpeg)

ABC坐标系和αβ坐标系下的矢量表示

> 注意上图中的(100)矢量方向和AO方向是相反的（变成OA方向），这跟正方向的定义有关，这样的规定更直观一些。  
同时可以注意到两个零矢量其实和原点重合了，因为这两个状态下电机中产生力矩的磁场为0（不考虑旋转过程中的反电动势产生的阻力力矩）。
>

同理，上图中还可以看出其余5个空间电压矢量，它们的端点组成了一个正六边形，同时把平面划分成了六个扇区（也就是图中的Ⅰ、Ⅱ、Ⅲ、Ⅳ、Ⅴ、Ⅵ）。

**那么这里问题就来了：由这6个空间电压矢量只能产生6个方向的力矩啊，我们怎么产生任意方向的力矩呢？**

### 2.5 SVPWM技术
既然是“矢量控制”，当然是有办法的，答案就是：**使用这6个空间电压矢量作为基向量来合成任意矢量**。在每一个扇区，选择相邻两个电压矢量以及零矢量，按照[伏秒平衡](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E4%BC%8F%E7%A7%92%E5%B9%B3%E8%A1%A1&zhida_source=entity)**原则**来合成每个扇区内的任意电压矢量，即：

$$\int_{0}^{T}U_{ref}dt=\int_{0}^{T_x}U_xdt+\int_{T_x}^{T_x+T_y}U_ydt+\int_{T_x+T_y}^{T}U_{0}^{*}dt$$

离散化后等效为下式：

$$U_{ref}\cdot T=U_{x}\cdot T_x+U_{y}\cdot T_y+U_{0}^{*}\cdot T_{0}^{*}$$

式子中的 $U_{ref}$  是我们期望得到的电压矢量，T是一个[PWM周期](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=PWM%E5%91%A8%E6%9C%9F&zhida_source=entity)。

$U_x$ 和 $U_y$ 分别是用于合成 $U_{ref}$ 的两个空间电压矢量，也就是上面说的6个基向量中的两个，至于是哪两个？这跟 $U_{ref}$ 所在的扇区有关，比如 $U_{ref}$ 在Ⅰ扇区，那么 $U_x$ 和 $U_y$ 就是 $U_4$ 和 $U_6$ ； $T_x$ 和 $T_y$  就是在一个周期T中 $U_x$ 和 $U_y$ 所占的时间。

$U_{0}^{*}$ 指的是两个零矢量，可以是 $U_0$ 也可以是 $U_7$ ，零矢量的选择比较灵活，通过合理地配置零矢量可以让空间电压矢量的切换更平顺，后面会做说明。

所以上面公式的含义就是：**我们可以周期性地在不同空间电压矢量之间切换，只要合理地配置不同基向量在一个周期中的占空比，就可以合成出等效的任意空间电压矢量了。**

是不是跟**PWM**的思想完全一样呢，这也是为什么这个方法被成为**SVPWM**（空间电压矢量[脉宽调制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E8%84%89%E5%AE%BD%E8%B0%83%E5%88%B6&zhida_source=entity)）。

下面举一个栗子，假设我们要合成图中所示的 $U_{ref}$ ，在Ⅰ扇区：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348561-e6fad8d3-9569-4243-8227-67fe6b7dfc2c.jpeg)

显然我们可以通过 $U_4$ 和 $U_6$ 来合成 $U_{ref}$ ，那么如图将 $U_{ref}$ 投影分解到 $U_4$ 和 $U_6$ 的方向，由[正弦定理](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%AD%A3%E5%BC%A6%E5%AE%9A%E7%90%86&zhida_source=entity)有：

$$\frac{\left| U_{ref} \right|}{sin\frac{2\pi}3}=\frac{\left| \frac{T_6}T \cdot U_6 \right|}{sin\theta}=\frac{\left| \frac{T_4}T \cdot U_4 \right|}{sin(\frac {\pi}3-\theta)}$$

又因为 $$\left| U_4 \right|=\left| U_6 \right|=\frac{2}{3}U_{dc}$$ ，所以可以计算得到 T4T_4 和 T6T_6 ：

$$\begin{cases}T_4=mTsin(\frac{\pi}3-\theta)\\T_6=mTsin\theta\end{cases}$$

其中m为SVPWM的调制系数（即[调制比](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E8%B0%83%E5%88%B6%E6%AF%94&zhida_source=entity)）： m=3⋅|Uref|Udcm=\sqrt3 \cdot \frac{\left| U_{ref} \right|}{U_{dc}}

> 显然在电流环控制过程中m设置得越大代表了期望力矩越大。
>

而零矢量分配的时间为： $$T_0=T_7=\frac12(T-T_4-T_6)$$

> 为什么 $T_0=T_7$ ？这是我们将PWM波形设定为中央对齐模式对称配置零矢量的结果，后面会提到。
>

现在一个周期内所有状态的持续时间我们都得到了，还差一个顺序，也就是**各个状态切换的顺序**。

> **问题：难道不是任意顺序都可以嘛？反正是做积分，重要的是持续时间而不是顺序，一个周期内怎么切换都行啊。**
>

是的，理论上任何切换顺序都是ok的，但是实际中我们需要考虑更多限制，比如因为MOS管存在[开关损耗](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%BC%80%E5%85%B3%E6%8D%9F%E8%80%97&zhida_source=entity)，**我们希望能尽量减少MOS管的开关次数**，那么以最大限度减少开关损耗为目的，我们就可以设计出下面的切换顺序：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348558-e04ebaf0-ade4-4e3f-a349-acf356f918f5.jpeg)

上图中可以看出来，在每个状态切换的时候，都只有一个相发生了转变：**000**->**100**->**110**->**111**->**110**->**100**->**000，**这也是所谓的七段式SVPWM调制法。

同时我们通过在合理的位置插入两个零矢量，并且对零矢量在时间上进行了平均分配，以使产生的PWM对称，从而有效地降低了PWM的[谐波分量](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E8%B0%90%E6%B3%A2%E5%88%86%E9%87%8F&zhida_source=entity)。

同理，我们也可以列出在其他扇区时的切换顺序：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348567-330d0169-6bab-4d0b-a26b-e5c5b18a0850.jpeg)

至此，SVPWM的工作完成了，我们得到了每一时刻所需要的空间电压矢量以及它们持续的时间，在处理器中赋值给对应通道的捕获比较寄存器产生相应的三个PWM波形，控制MOS管的开关，进而产生我们期望的电压、电流、力矩。

## 总结
至此FOC的原理和整个控制链路都讲完了，回想一下整个过程，再尝试解答最开始提到的问题：**为什么在FOC控制中要做这么多变换和反变换？**

因为所谓的“矢量控制”其实就是在做**解耦**，把相互耦合的三相磁链解耦为容易控制的交轴 IqI_q 和直轴 IdI_d 。整个过程就好比我们在做信号处理的时候，通过FFT把信号变换到频域进行处理之后再IFFT反变换回时域是一个道理。

另外值得一提的是，本文介绍的是**有感**的FOC控制方法，其实FOC可以做到[无感控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E6%97%A0%E6%84%9F%E6%8E%A7%E5%88%B6&zhida_source=entity)（也就是不需要编码器等额外的传感器），当然控制算法也会更加复杂，需要引入[前馈控制](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%89%8D%E9%A6%88%E6%8E%A7%E5%88%B6&zhida_source=entity)、观测器等概念，无感的好处就是结构安装更简单，可以避免位置传感器失效的风险等等，当然这又是另外一个话题了。

FOC是个强大的控制方法，通过对电机的“像素级”控制，可以实现很多应用，因为可以做“力控”，FOC是很多机器人驱动单元的基础部件，比如：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348560-a3055523-9db5-4fe1-80ee-fce279afca1a.jpeg)

MIT Mini Cheetah四足机器人

又比如，因为可以做到力矩的精确控制，我们可以用FOC驱动器配合无刷电机来实现各种**力回馈装置，**这就好像iPhone的[Haptic Engine](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=Haptic+Engine&zhida_source=entity)一样，可以模拟出各种以假乱真的物理效果**：**

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463348928-c986ce64-61fe-4201-bddd-7dba96aefc4e.jpeg)

罗技的力回馈方向盘

最后顺便提一下，我最近也在设计一个FOC矢量驱动器，熟悉我的同学应该知道我做东西的风格就是--唯小不破，因此这次也是准备设计一个超迷你的高性能FOC驱动器。硬件已经基本完工了，电路设计如下图，分为上下叠板设计，将[逻辑单元](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E9%80%BB%E8%BE%91%E5%8D%95%E5%85%83&zhida_source=entity)和**功率单元**分开：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463349295-e5293583-37cb-49df-8e41-fec82e52e558.jpeg)

逻辑控制板

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463349260-c226b6f5-9a65-4478-97cb-797005bb527b.jpeg)

功率输出板

最后组装起来是这样的：

![](https://cdn.nlark.com/yuque/0/2025/jpeg/10388797/1737463349313-3764795c-a238-4e3b-9c5b-dc93a1a0eeb7.jpeg)

同时我也给驱动器设计了个外壳（毕竟颜值就是正义啊~）：

http://www.pengzhihui.xyz/ (二维码自动识别)

**关于这个驱动器的具体参数和功能呢，等我硬件加工好了再来更新~欢迎关注**

## 2020.9.5更新，FOC驱动器做好啦~
---

## 参考
[https://en.wikipedia.org/wiki/FOC](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/FOC)

[https://blog.csdn.net/hducollins/article/details/79260176](https://link.zhihu.com/?target=https%3A//blog.csdn.net/hducollins/article/details/79260176)

[https://blog.csdn.net/u010671230/article/details/79478648](https://link.zhihu.com/?target=https%3A//blog.csdn.net/u010671230/article/details/79478648) （文章公式有不少错误）

[Field Oriented Control of Permanent Magnet Motors](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DcdiZUszYLiA%26t%3D2256s) - TI

[https://zhuanlan.zhihu.com/p/72091265](https://zhuanlan.zhihu.com/p/72091265)

_《现代电机控制技术》-王成元_

_《_[小型交流伺服电机控制电路设计](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E5%B0%8F%E5%9E%8B%E4%BA%A4%E6%B5%81%E4%BC%BA%E6%9C%8D%E7%94%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E7%94%B5%E8%B7%AF%E8%AE%BE%E8%AE%A1&zhida_source=entity)_》-_[石岛胜](https://zhida.zhihu.com/search?content_id=120946183&content_type=Article&match_order=1&q=%E7%9F%B3%E5%B2%9B%E8%83%9C&zhida_source=entity)

_TMC4671-Datasheet_  


> 来自: [【自制FOC驱动器】深入浅出讲解FOC算法与SVPWM技术 - 知乎](https://zhuanlan.zhihu.com/p/147659820)
>

