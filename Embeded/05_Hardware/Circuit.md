

[两片74HC595级联驱动两个四连体数码管_蓝莓_新浪博客](http://blog.sina.com.cn/s/blog_4ca9659e0101pkt2.html)
[初识有源滤波电路](https://www.bilibili.com/video/BV1AY4y167Cn)

##### 共模干扰和差模干扰
**共模信号和差模信号**
通常电源线有三根线：火线L、零线N和地线PE。
电压和电流的变化通过导线传输时有两种形态。
一种是两根导线，分别作为往返线路传输，我们称之为**差模**。
另一种是两根导线做去路，地线做返回传输, 我们称之为**共模**。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjH0apicerUDrIqlPZbxWxIRGqBlcSQFJInK6V7feVUviafnRy2uoKu9Fg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjH0apicerUDrIqlPZbxWxIRGqBlcSQFJInK6V7feVUviafnRy2uoKu9Fg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
如上图，蓝色信号是在两根导线内部作往返传输，我们称之为差模。
黄色信号是在信号与地线之间传输，我们称之为共模。
**共模干扰与差模干扰**
任何两根电源线上所存在的干扰，均可用共模干扰和差模干扰来表示。
共模干扰在导线与地（机壳）之间传输，属于非对称性干扰，它定义为任何载流导体与参考地之间的不希望存在的电位差。
差模干扰在两导线之间传输，属于对称性干扰，它定义为任何两个载流导体之间的不希望存在的电位差。
在一般情况下，共模干扰幅度大、频率高，还可以通过导线产生辐射，所造成的干扰较大。差模干扰幅度小、频率低、所造成的干扰较小。
**共模干扰信号**
共模干扰的电流大小不一定相等，但是方向（相位）相同的。
电气设备对外的干扰多以共模干扰为主，外来的干扰也多以共模干扰为主，共模干扰本身一般不会对设备产生危害，但是如果共模干扰转变为差模干扰，干扰就严重了，因为有用信号都是差模信号。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjBKNo2wBPvVTKYKibbUUicJibBZjJgwrJQeCHpdJOskz7JySU70Z51iaS3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjBKNo2wBPvVTKYKibbUUicJibBZjJgwrJQeCHpdJOskz7JySU70Z51iaS3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
**差模干扰信号**
差模干扰的电流大小相等，方向（相位）相反。
由于走线的分布电容、电感、信号走线阻抗不连续，以及信号回流路径流过了意料之外的通路等，差模电流会转换成共模电流。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjACpSnmLjjj7SvDZl55n5C19RXq6L6w4JwgzodgyBuw4otpMK62LMicQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjACpSnmLjjj7SvDZl55n5C19RXq6L6w4JwgzodgyBuw4otpMK62LMicQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
**共模干扰产生原因**
主要有以下几种：
1、电网串入共模干扰电压。
2、辐射干扰（如雷电，设备电弧，附近电台，大功率辐射源）在信号线上感应出共模干扰，原因是交变的磁场产生交变的电流，地线—零线回路面积与地线—火线回路面积不相同，两个回路阻抗不同等原因造成电流大小不同。
3、接地电压不一样，简单的说就电位差而造就了共模干扰。
4、设备内部的线路对电源线造成的共模干扰。
**共模干扰电流**
共模干扰一般是以共模干扰电流存在的形式出现的，一般情况下，共模干扰电流产生的原因有三个方面：
1、外界电磁场在电路走线中的所有导线上感应出来电压（这个电压相对于大地是等幅和同相的），由这个电压产生的电流。
2、由于电路走线两端的器件所接的地电位不同，在这个地电位差的驱动下产生的电流。
3、器件上的电路走线与大地之间有电位差，这样电路走线上会产生共模干扰电流。
**注意事项**
1、器件如果在其电路走线上产生共模干扰电流，则电路走线会产生强烈的电磁辐射，对电子、电气产品元器件产生电磁干扰，影响产品的性能指标。
2、当电路不平衡时，共模干扰电流会转变为差模干扰电流，差模干扰电流对电路直接产生干扰影响。
对于电子、电气产品电路中的信号线及其回路而言：差模干扰电流流过电路中的导线环路时，将引起差模干扰辐射，这种环路相当于小环天线，能向空间辐射磁场，或接收磁场。
3、共模干扰主要集中在1MHz以上。这是由于共模干扰是通过空间感应到电缆上的，这种感应只有在较高频率时才容易发生。但有一种例外，当电缆从很强的磁场辐射源（如开关电源）旁边通过时，也会感应到频率较低的共模干扰。
**如何抑制共模干扰**
共模干扰作为EMC干扰中最为常见且危害较大的干扰，我们抑制它最直接的方法就是滤波。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjeJDibDYhtsr4GnKeSvQWE7ULbDAp9jStrfFNRnfWPBVVYHOfqhFz1sg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjeJDibDYhtsr4GnKeSvQWE7ULbDAp9jStrfFNRnfWPBVVYHOfqhFz1sg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
在电路中串入共模电感，当有共模干扰电流流经线圈时，由于共模干扰电流的同向性，会在线圈内产生同向的磁场而增大线圈的感抗，使线圈表现为高阻抗，产生较强的阻尼效果，以此衰减共模干扰电流，达到滤波的目的.
当电路中的正常差模电流流经共模电感时，电流在同相绕制的共模电感线圈中产生反向的磁场而相互抵消，因而对正常的差模电流基本没有衰减作用。
USB信号上的共模干扰抑制方法，一般会在端口加一个共模电感。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjia7WQTwtD8BduuTUa14mJ2ib2TW8dIZfSh47I3dpJ1TNspeEfKVDrD3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjia7WQTwtD8BduuTUa14mJ2ib2TW8dIZfSh47I3dpJ1TNspeEfKVDrD3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
USB传输信号是差分信号，而干扰源是共模干扰信号，在传输线上串上共模电感能较好的抑制共模干扰，而对有用的差分信号没有任何衰减。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjDNHoGnia2B1micQFR0fkmNqqtoHOZfsbkSYv2VwibxyhrnbthVGAtiahQw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjDNHoGnia2B1micQFR0fkmNqqtoHOZfsbkSYv2VwibxyhrnbthVGAtiahQw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
USB高速运行DM和DP上产生很强的共模干扰
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldj2aXpht6zMDGn4wJjlcecO5Cib0wynBJceyIiaq7TJLVMvLiaMktCJ2SkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldj2aXpht6zMDGn4wJjlcecO5Cib0wynBJceyIiaq7TJLVMvLiaMktCJ2SkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
加入共模电感，共模干扰信号得到有效抑制
如果共模干扰源是在电源回路，可使用共模电容来抑制干扰信号。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjuhGE8PBCT9PTSNxRtChXhYRlQTSIib9R8scYJUXCaTtgRkQYkLl9Hvw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjuhGE8PBCT9PTSNxRtChXhYRlQTSIib9R8scYJUXCaTtgRkQYkLl9Hvw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
在电路中引入共模电容，则共模电容提供最短的路径使共模干扰信号被旁路，从而抑制共模干扰的产生。
如果电源回路同时还存在差模干扰，使用差模电容来抑制干扰。
[![](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjSJ07picZdTYCXejT7q2j9qKj7b02Xc5XwodlcDvVU1bSub27iadicFYkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/CDf1ZtD1JUeN8phh3BC6P2PEATIztldjSJ07picZdTYCXejT7q2j9qKj7b02Xc5XwodlcDvVU1bSub27iadicFYkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
在电路中引入差模电容，则差模电容提供最短的路径，使差模干扰信号被旁路，从而抑制差模干扰的产生。
共模干扰作为EMC干扰中，最为常见且危害很大的干扰，抑制它的方法除了滤波外，还可以通过对信号线路进行屏蔽，在PCB 板上大面积铺地降低地线阻抗，来减少共模信号强度等。
##### 33个单片机IO接口电路
**可靠的逻辑高电平I/O电路（输入）**

微控制器I/O端口线能承受的最大电压不超过5V（不同微控制器有所区别），否则有可能烧坏I/O端口。本电路中，即使使用较大的电源电压，分压网络也会送一个安全的（5V）逻辑电平给I/O端口。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1nw6XNJvQpWAodh8BXC2R5BTSmWgOwJ30OmOTz0ibdrqYyCnKPG0tXtA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1nw6XNJvQpWAodh8BXC2R5BTSmWgOwJ30OmOTz0ibdrqYyCnKPG0tXtA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**2、基本输入开关网络（输入）**

A.低电平有效网络：如果P0端口是0，则开关闭合；

B.高电平有效网络：如果P0端口是1，则开关闭合；

C.高电平有效网络：如果P0端口是1，则开关闭合；

D.低电平有效网络：如果P0端口是0，则开关闭合；

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw11BCxwA0NXAyVKqMiajduib6fgibvtF08iaTBTibkXibkUibRbZgJhSpKyViacg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw11BCxwA0NXAyVKqMiajduib6fgibvtF08iaTBTibkXibkUibRbZgJhSpKyViacg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**3、开关防抖和延时电路（输入）**

本电路有两方面用途：用做开关防抖，可消除由于抖动造成错误的高/低状态输入；用作延时，当开关按下后，控制器还可以兼顾到其它任务，555构成单稳态触发器，RC时间常数决定了延时时间。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1XicduxSuwrQ8MAWT7GFibJqDJDkUNQ958YEFgGD40yyqfL5BWQI3iaIPw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1XicduxSuwrQ8MAWT7GFibJqDJDkUNQ958YEFgGD40yyqfL5BWQI3iaIPw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**4、输入电压调节电路（输入）**

如果某较高电压源产生的开关信号超过了微控制器的安全电压，微控制器可以通过稳压二极管将电压稳定在安全范围内。本电路使用的是5.1V的稳压二极管。

**5、低电平触发电路（输入）**

微控制器无法将一些很微弱的电压信号当做高电平直接接收，利用本电路则可检测这些微弱的电压信号。电路使用了一个比较器，其参考电压可由上面的分压公式计算。

**6、光线开关检测电路（输入）**

无光照时，R1的电阻很大，使得P0处电位值接近零，微控制器将其当做逻辑0接收；有光照时，R1电阻下降，且P0电压升高（逻辑1）。可用作灵敏度检验。

**7、光照检测电路（输入）**

光照检测电路使用了光电晶体管，当有光线时，晶体管中产生电流，这个装置可用来检测光敏度。采用施密特触发器，可消除由于振荡产生的错误输入信号。

**8、太阳能电源电路（电源）**

本电路采用太阳能电池给微控制器供电，每块电池接受太阳光照产生0.5V电压，串联16快可获得8V电压，经7805调压器进行降压和稳压，电容器用来消除电源耦合。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw16QyDJuepq4HVANkROD6ZG78Y9AD4RDM4fupNkhXqOULdPr8DmDdm9A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw16QyDJuepq4HVANkROD6ZG78Y9AD4RDM4fupNkhXqOULdPr8DmDdm9A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**9、感光检测电路（输入）**

太阳能电池属于光敏元件，其产生的电压经过LM324运算放大器同相放大后，输入到微控制器，此电路通常被用于光波通信接收器。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1n9NSB9picpR3Gzg0mPpAHKkEA1RajBD7UWicpJ3TLZYfRIIbd7MRWwqQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1n9NSB9picpR3Gzg0mPpAHKkEA1RajBD7UWicpJ3TLZYfRIIbd7MRWwqQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**10、数字光强检测电路（输入）**

电路使用AD0831模/数转换器检测光强，转换器的参考电压为0.5V，等于一块太阳能电池的最大输出电压。AD0831是8位逐次逼近式模数转换器，只需要使用3根线与微控制器相连。片选信号（CS）低电平有效，有效时启动转换过程。DO是数据线，CLK端口每触发一次，DO端口就串行输出一位数据。转换时，CLK端口必须先触发一次，启动转换，之后每触发一次，产生一位数据。

**11、霍尔效应数字传感器电路（输入）**

图示为UGN3142霍尔效应数字传感器（带施密特触发器），当检测到给定的磁场强度时，输出状态发生改变，有很多不同种类的霍尔效应传感器，一些是线性的（输出电压与磁场呈线性关系），另一些具有类似触发器的特征（必须用相反磁场来切换回原态）。

**12、测温电路（输入）**

电路使用AD0831模/数转换器检测光强，将热敏电阻分压器送来的输入电压转换成一组二进制数据流。温度改变时，热敏电阻的阻值改变。片选信号CS低电平有效，有效时启动转换过程，DO是数据线，CLK端口每触发一次，DO端口就串行的输出一位数据，转换时，CLK端口必须先触发一次，启动转换，之后每触发一次，产生一位数据。

**13、温度切换电路（输入）**

此电路采用LM324温度传感器，图中由变阻器为比较器提供参考电压，经过校准，当LM324达到预设电压/温度值时，可切换状态。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1whBqNWiabxqENrs8z5lweeGNibuObjEFO50TPmmsw65YXGf4J3RJefLg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1whBqNWiabxqENrs8z5lweeGNibuObjEFO50TPmmsw65YXGf4J3RJefLg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**14、温度测量电路（输入）**

此处采用A/D转换将LM324送来的电压转换成数字量，然后由微控制器以预定的速率采样。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1xhn3XoWugDczoBtlGGBn0zrqmxr7D4xx3OJrjMCphm1Cjf0fcXiaHmQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1xhn3XoWugDczoBtlGGBn0zrqmxr7D4xx3OJrjMCphm1Cjf0fcXiaHmQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**15、声控开关检测电路（输入）**

此电路采用LM324比较器集成电路，连接到动圈式麦克风或扬声器上。通过设置，当达到所需声音电平（由变阻器决定），输出突变，送出高电平到微控制器。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw139KzqXibF0ibBLSFUrpHlEWcp436FE1C3kDRNT6icsic2uPrQicKo96qU8w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw139KzqXibF0ibBLSFUrpHlEWcp436FE1C3kDRNT6icsic2uPrQicKo96qU8w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**16、最大吸收\释放电流（输出）**

典型的微控制器I/O端口线单个能吸收和释放的电流值仅约20毫安（不同微控制器有所区别），如下图所示，该电流足够驱动一个普通的LED。当P0端口为低电平时，上方的LED被点亮（电流穿过微控制器流入大地）。当P0端口为高电平时，下方的LED被点亮（电流从微控制器的P1端口流出，经过LED和电阻，流入大地）。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1cagDWMK22PqL8SkYRQnicO7dWiayNfD4JoickOr9rPRygfBoKp7p60obg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1cagDWMK22PqL8SkYRQnicO7dWiayNfD4JoickOr9rPRygfBoKp7p60obg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**17、扩大输出吸收能力（输出）**

单个典型的微控制器I/O端口线在正常情况下，只能承受约20毫安电流（不同微控制器有所区别），该电流值足以驱动一个普通的LED，但是当驱动一个红外LED时，需要的是100毫安甚至更大的电流，本电路利用一个反向缓冲器处理大的吸收电流，当通过P0端口将它的输入设为高电平时，它的输出变为低电平，电流就会通过它流入大地，另外，也可以使用集电极开路输出的74HC05反相缓冲器，将多路输出连接在一起。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1nfLAibq93qAkoMpFh9TTUJiaCOFHLvgGzQ6f3vHjjEnedJydTIUWqtow/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1nfLAibq93qAkoMpFh9TTUJiaCOFHLvgGzQ6f3vHjjEnedJydTIUWqtow/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**18、双极驱动器电路（输出）**

双极晶体管常用来接通或者断开负载，在左边的电路中，当P0端口为高电平时，NPN型晶体管导通-C和E极间为低阻状态。在右边的电路中，当P0端口为低电平时，PNP晶体管导通，微控制器I/O端口可以给双极晶体管提供足够的基极电流。选择晶体管时，要注意电压/电流等级是否与负载匹配。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1vk991GMqWnVIbAicwWUcic689KIuA1fDbVlrcU7x1nCYtIiaYfcia2hsVQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1vk991GMqWnVIbAicwWUcic689KIuA1fDbVlrcU7x1nCYtIiaYfcia2hsVQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**19、MOS场效应管驱动器（输出）**

MOS场效应管的导通电阻值（毫欧级）要远小于双极晶体管的导通电阻（10~100倍的毫欧），这意味着MOS场效应管驱动器的压降小，可以承受更大的电流。此外，它具有高输入阻抗，几乎不从微控制器的I/O吸收电流。有些MOS场效应管可以承受60安培甚至更大的电流。而左边的电路中，P0端口为高电平时，N沟道场效应管导通；而在右边的电路中，P0口为低电平时，P沟道的MOS场效应管导通。可以使用分离负载，在电路中有感性负载时，尤其值得推荐。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1WibIu8Jn033L2CGRVshDAzZHxO4BdwlmaGwpAticz5aIYSOiaXkXU8MiaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1WibIu8Jn033L2CGRVshDAzZHxO4BdwlmaGwpAticz5aIYSOiaXkXU8MiaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**20、专用闪光电路（输出）**

通过编程可以实现灯和LED的闪烁，但是它会占用微控制器的时间和代码存储空间。所以可以选择图示的专用555闪光电路。555可以被设定在一个稳定模式，控制灯按某个频率闪烁，这个频率由变阻器设定。当P0端口为低电平时，闪光器不工作。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1vxBw8zsicxeLy7zRFvbTY6PPKBMmovoEKeKxGHI7ictDGULssHCCJ7LQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1vxBw8zsicxeLy7zRFvbTY6PPKBMmovoEKeKxGHI7ictDGULssHCCJ7LQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**21、负载驱动（输出）**

由低直流电压控制动作的固态继电器，可被用来接通知和切断120V的交流负载，除了本图所示的类型外，还有许多其它类型的、不同构造的固态继电器，大多数都使用内置光隔离电路，将数字边与高压边隔离开。下图中，P0端口为高电平时，正逻辑继电器接通。

**22、螺线管驱动（输出）**

螺线管电磁装置由螺线管（缠绕着磁芯的线圈）和一块可移动的铁或铜块组成。当线圈内有电流时，螺线管被磁化，吸引衔铁朝它移动。这种装置可用做机械开关，液压和气压螺旋管。阀门就是利用螺线管控制阀门的开启和闭合。本电路中，使用了MOSFET驱动，74HC07缓冲器（用来保护控制器和扩大电路的驱动力）为螺线管供电。二极管可以消除瞬变电压。P0端口为高电平时，MOSFET导通，螺线管激活。

**23、120V交流螺线管驱动（输出）**

由低直流电压控制动作的固态继电器，可用来被接通和切断120V的交流负载。除了本图所示的类型外，还有许多其它类型的、不同构造的固态继电器，大多数都使用内置光隔离电路，将数字边与高压边隔离开。下图中，P0端口为高电平时，正逻辑继电器接通。

**24、继电气控制（低电流）（输出）**

当P0端口为高电平时，双极型NPN晶体管导通，电流流过继电器线圈，继电器发生动作。二极管可消除继电器线圈动作时产生的高压感应尖峰。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1AQL6QVJwkcdlVd92iaR5abk93BYvXNic6Cgk5ISkeHKibxOItkw2es7Uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1AQL6QVJwkcdlVd92iaR5abk93BYvXNic6Cgk5ISkeHKibxOItkw2es7Uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**25、继电气控制（大电流）（输出）**

在应用大电流时，比如一个12V的继电器，MOSFET晶体管要比双极性晶体管更适合，本图中，微控制器通过74HC07缓冲器驱动N沟道MOSFET。二极管用来消除继电器线圈动作时产生的高压感应尖峰，P0端口为高电平时，MOSFET导通，继电器动作。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1hBcKvfOxIh40xwHPHoXvFW10SqhtJDsar8d2IRTiakgXkiccGmFrVGZA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1hBcKvfOxIh40xwHPHoXvFW10SqhtJDsar8d2IRTiakgXkiccGmFrVGZA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**26、直流电机控制（输出）**

P0端口为高电平时，MOSFET导通，使电流流过电机。缓冲器和二极管起到保护微控制器的作用，可消除电机产生瞬变感应尖峰。通过脉宽调制PWM可控制电机的速度。100%占空比，50%占空比和25%占空比的波形，还有加速状态的波形，均在图中给出。

**27、电机转向控制（输出）**

由MOSFET组成的H型桥式电路可提供直流电机的正转和反转控制，H桥形式电路可采取内置的动力制动行为，更有效的控制电机。为了使电机固定在同一转向，需将P0端口设为低电平，P1端口设为高低平。可用光隔离器取代缓冲器74HC07，达到更好的电气隔离效果，将电路中的电机部分隔离开。

**28、基本的伺服控制器（输出）**

本图中，使用控制器控制一个电流值相对较小的伺服控制器，P0端口发送控制信息，间隔10毫秒，持续1毫秒的脉冲流，可驱动伺服器的轴转向极限。持续2毫秒的控制脉冲（间隔同前）可驱使伺服器的轴转向相反的极限方向。介于两者之间的任意持续时间，可驱动转轴转向介于两个极限方向之间的任意方向。当脉冲消失后，伺服器回到原位。

**29、带有555定时器的优化伺服控制器（输出）**

伺服器需要接收连续的、速度为10毫秒的脉冲来保持转轴的位置。脉冲的持续时间决定了转轴的位置。通常情况下，1毫秒和2毫秒分别使转轴达到两个极限位置。前面介绍的电路使用微控制器产生脉冲流，但是这样会占用处理器的时间，如果微处理器正在处理其他任务，伺服器的动作就无法被顾及到，采用专用555定时器产生脉冲可以优化电路，变阻器可用来设置脉冲的持续时间。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1W1eOwzeUZoiazhHssXtvznwsoJD2fAvibyj5TCg4umIbCEkCtUktNzDw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1W1eOwzeUZoiazhHssXtvznwsoJD2fAvibyj5TCg4umIbCEkCtUktNzDw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**30、步进电机控制（输出）**

图示电路中，微控制器通过集电极开路TTL驱动集成电路，控制一台12V的步进电机。图中列出了旋转电机的步进顺序。除本电路外，不少新型的步进电机驱动电路都带有许多必要的附属配件。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw18g3btSrnqKQhECiabdHp7TJaHgPcAF5vI5ISI8m8lRS2t7XSjbnUm2A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw18g3btSrnqKQhECiabdHp7TJaHgPcAF5vI5ISI8m8lRS2t7XSjbnUm2A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**31、扩音器音量驱动（输出）**

本电路使用555作为音频振荡发生器。P0端口送一个高电平给555的引脚4（复位端），555会产生一串脉冲，频率由RC电路决定。P0端口仅用作使能端，以便控制器可完成其他任务。数字变阻器可用来控制音调的高低。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw12NmZaBRw7ic9jUnrkFTGnDeN8ia6pjH53doia9KGo3nUor1gplSYicsShA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw12NmZaBRw7ic9jUnrkFTGnDeN8ia6pjH53doia9KGo3nUor1gplSYicsShA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**32、4线8输出（输出）**

本电路使用3-8线的74HCT138译码器。它由A0、A1、A2三根地址线选择输出端，其中A0是最低有效位，。E1端必须被置为高电平，以便译码器工作。例如，当地址端为010时，输出端2为低电平，E1端每触发一次，输出端2跟着变动一次状态（相反的状态）。因此，通过设定正确的地址，可以将串行数据从任意期望的端口输出。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1jUJicEy2gPEzdI7hia4O2kAyt34lENDSrc74993rfUayEtPdmZdmwibPA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1jUJicEy2gPEzdI7hia4O2kAyt34lENDSrc74993rfUayEtPdmZdmwibPA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**33、数控增益电路（输出）**

本图中，微控制器通过数字变阻器控制运算放大器的增益。

[![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1mzUoF6CtpXoOaYlX0fayCPReQdOJeJUvtic9uiaUBwlIYC58bmvXdzpw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfm14uv96IFIp7lf1xZIDXw1mzUoF6CtpXoOaYlX0fayCPReQdOJeJUvtic9uiaUBwlIYC58bmvXdzpw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

来源：头条号/老马识途单片机


##### 智能车电机驱动模块使用详解
智能车电机驱动模块使用详解智能车的驱动系统一般由控制器、电机驱动模块及电机三个主要部分组成。智能车的驱动不但要求电机驱动系统具有高转矩重量比、宽调速范围、高可靠性，而且电机的转矩‐转速特性受电源功率的影响，这就要求驱动具有尽可能宽的高效率区。

控制器采用飞思卡尔 16 位单片机 PWM 功能完成，智能车电机一般每一届都有主委会提供，而 且型号指定，参数固定。一般提供的为直流电机。其控制简单、性能出众、供电方便。直流电机驱动模块一般使用 H 型全桥式电路实现电机驱动功能。

H 桥驱动工作原理

H 桥驱动电路是为了直流电机而设计的一种常见电路，它主要实现直流电机的正反向驱动，其典型电路形式如下。从图中可以看出，其形状类似于字母“H”，而作为负载的直流电机是像“桥”一样架在上面的，所以称之为“ H 桥驱动”。4 个开关所在位置就称为“桥臂”。

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5jVVEraic6mwTxEqk3nFiaJU4HL5iaQ1MFmZgwlpcR19NvrJJkZFIct5Mg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5jVVEraic6mwTxEqk3nFiaJU4HL5iaQ1MFmZgwlpcR19NvrJJkZFIct5Mg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

从电路中不难看出，假设开关QA、QD 接通，电机为正向转动，则开关 QB、QC 接通时，直流电机将反向转动。从而实现了电机的正反向驱动。电流的大小，决定了电机的转速，通过 PWM 的占空比（电流通断比）来决定电流的大小，从而间接控制了电机的转速。

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5IBvEGBibCmlBUakxWmsUWrR4SicPYia007wBAViarW1sNQZGmZL64AfLzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5IBvEGBibCmlBUakxWmsUWrR4SicPYia007wBAViarW1sNQZGmZL64AfLzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**H** **桥驱动选型分析**

H 桥驱动的主要性能包括：

1、效率，驱动效率高就是要将输入的能量尽量多的输出给负载，而驱动电路本身最好不消耗或少消耗能量。具体到 H 桥上，也就是四个桥臂在导通时最好没有压降，越小越好。

2、安全性，不能同一侧的桥臂同时导通；

3、电压，电压是指能够承受的驱动电压；

4、电流，电压是指能够通过的驱动电流。

根据 H 桥驱动的主要特性分析，安全性主要由控制部分决定。在智能车设计中，电机是固定型号的（一般组委会会提供车模和电机），所以所需的电流和电压时有限的，所以 H 桥驱动的选型会重点关注 H 桥驱动的效率，即关注 MOS 管的压降上。因此我们选择 H 桥驱动遵循以下原则：

(1)由于驱动电路是功率输出，要求开关管输出功率较大；

(2)开关管的开通和关断时间应尽可能小；

(3)小车使用的电源电压不高，因此开关管的饱和压降应该尽量低。

在智能车电机驱动设计中，可以采用大功率达林顿管或场效应管搭建全桥电路，同时也可以使用桥式专用集成驱动芯片，例 L298、MC33886,BTS7960,集成芯片的性能稳定可靠。

**BTS7960****驱动电路**

BTS7960 是应用于电机驱动的大电流半桥高集成芯片，它带有一个 P 沟道的高边 MOSFET、

一个 N 沟道的低边 MOSFET 和一个驱动 IC。P 沟道高边开关省去了电荷泵的需求, 因而减小了 EMI。集成的驱动 IC 具有逻辑电平输入、电流诊断、斜率调节、死区时间产生和过温、过压、欠压、过流及短路保护的功能。BTS7960 通态电阻典型值为 16mΩ，驱动电流可达 43A。系统框图如下，采用两片 BTS7960 组成全 H 桥驱动电路，完成控制电机正反转的功能。

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr53KNZq5Naapb078nibHWic3kfLjROGl5fPib35PTUayagJ5UqCGPXVqkhg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr53KNZq5Naapb078nibHWic3kfLjROGl5fPib35PTUayagJ5UqCGPXVqkhg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

BTS7960 的芯片内部为一个半桥。INH 引脚为高电平，使能BTS7960。IN 引脚用于确定哪

个 MOSFET 导通。IN=1 且 INH=1 时，高边 MOSFET 导通，OUT 引脚输出高电平；IN=0 且 INH=1时，低边 MOSFET 导通，OUT 引脚输出低电平。SR 引脚外接电阻的大小，可以调节 MOS 管导通和关断的时间，具有防电磁干扰的功能。IS 引脚是电流检测输出引脚。

主要电气参数如下：

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5JOnn1OmjtjS7YvDlPh6nN5IJWVkSlyONficf19HrFAK9utmoDdg0DUA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5JOnn1OmjtjS7YvDlPh6nN5IJWVkSlyONficf19HrFAK9utmoDdg0DUA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

由于电机在正常工作时对电源的干扰很大，所以在智能车电源设计中，采用双电源供电方式，单片机及控制电路采用单独 5V 供电，电机驱动部分采用 7.2V 供电。

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr57HBshNxwpY1abHmhjYA2EfUiaibA3ktUXqLPPPnpVRsLE0hwq9srk4Aw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr57HBshNxwpY1abHmhjYA2EfUiaibA3ktUXqLPPPnpVRsLE0hwq9srk4Aw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

控制部分采用 PWM 控制电机的正反转，改变PWM 的占空比调节电机的转速。控制部分和电机驱动部分之间采用缓冲器隔开，有效的保护单片机的 IO 口。

[![](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5ELriclSicPoXkydBIM0rfzsYF2I5QIVUAzvdym5LrmHuyicoYnMpRMxPQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/YxCUkxhROtLAVHTNSzHLMvQc211G0wr5ELriclSicPoXkydBIM0rfzsYF2I5QIVUAzvdym5LrmHuyicoYnMpRMxPQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**PWM** **控制电机**

PWM（脉冲宽度调制）控制通常配合桥式驱动电路实现直流电机调速，电机的转速与电机两端的电压成比例，而电机两端的电压与控制波形的占空比成正比，因此电机的速度与占空比成比例，占空比越大，电机转得越快，当占空比α＝1 时，电机转速最大。智能车使用的单片机一般都有 PWM 直接输出接口，频率可调。BTS7960 的 INH 引脚为高电平，使能 BTS7960。IN 引脚用于确定哪个 MOSFET 导通。IN=1 且 INH=1 时，高边 MOSFET

导通，OUT 引脚输出高电平；IN=0 且 INH=1 时，低边 MOSFET 导通，OUT 引脚输出低电平。在BTS7960使能的情况下，控制系统只要使用单片机的的 PWM 输出口即可完成电机的正反转和调速功能。
##### 实例讲解电机驱动电路应该如何设计
伺服与运动控制 _2019-05-15 18:00_
↑ 点击上方“伺服与运动控制”关注我们
针对不同的电机，我们应该选择与之相对应的驱动。简单地来说，功率大的电机应该选用内阻小、电流容许大的驱动，功率小的电机就可以选用较低功率的驱动。电机驱动较常规的方法是采用 PWM 控制。
常见的电机驱动有两种方式：
1. 采用集成电机驱动芯片；
2. 采用MOSFET和专用栅极驱动芯片。
方案一
采用集成电机驱动芯片
通过电机驱动模块控制驱动电机两端电压来对电机进行制动，我们可以采用飞思卡尔半导体公司的集成桥式驱动芯片 MC33886。MC33886 最大驱动电流为 5A，导通电阻为 140 毫欧姆，PWM 频率小于 10KHz，具有短路保护、欠压保护、过温保护等功能。体积小巧，使用简单，但由于是贴片的封装，散热面积比较小，长时间大电流工作时，温升较高，如果长时间工作必须外加散热器，而且 MC33886的工作内阻比较大，又有高温保护回路，使用不方便。
[![](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMryuIAWR9GTInmymdNlRzW1EfwakFfEAzCQCAWMbqyp2tN8gQt4RlyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMryuIAWR9GTInmymdNlRzW1EfwakFfEAzCQCAWMbqyp2tN8gQt4RlyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
下面，着重介绍我们在平时设计驱动电路时最常用的驱动电路。我们普遍使用的是英飞凌公司的半桥驱动芯片 BTS7960 搭成全桥驱动。其驱动电流约 43A，而其升级产品 BTS7970 驱动电流能够达到 70 几安培！而且也有其可替代产品 BTN7970，它的驱动电流最大也能达七十几安！
其内部结构基本相同如下：
[![](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMVH6stP2gicd98KcqbYAAlo0DenC34wGhVYxuu4S7nIBRhLgdrTf2MuQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMVH6stP2gicd98KcqbYAAlo0DenC34wGhVYxuu4S7nIBRhLgdrTf2MuQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
每片芯片的内部有两个 MOS 管，当 IN 输入高电平时上边的 MOS 管导通，常称为高边 MOS 管，当 IN 输入低电平时，下边的 MOS 管导通，常称为低边 MOS管；当 INH 为高电平时使能整个芯片，芯片工作；当 INH 为低电平时，芯片不工作。
其典型运用电路图如下图所示：
[![](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYM3vKzA1SGOyWssicibeGwCgchC95ftRWIVgNFiacv7lhyv8cPWwB2LOmBw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYM3vKzA1SGOyWssicibeGwCgchC95ftRWIVgNFiacv7lhyv8cPWwB2LOmBw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
INH一般使用时,我们直接接高电平，使整个电路始终处于工作状态。
下面就是怎么样用该电路使得电机正反转。假如当PWM1端输入PWM波，PWM2端置0,电机正转；那么当 PWM1端为0,PWM2端输入PWM 波时电机将反转！使用此方法需要两路PWM信号来控制一个电机！其实可以只用一路 PWM 接 PWM1 端，另外 PWM2 端可以接在 IO 端口上，用于控制方向！假如 PWM2=0，PWM1 输入信号时电机正转；那么当 PWM2=1是，PWM1 输入信号电机反转（必须注意：此时PWM信号输入的是其对应的负占空比）！
以上的电路，对于普通功率的底盘，其驱动电流已经能够满足，但是对于更大功率的底盘，可能有点吃力。尤其是当我们加的底盘在不停的加减速时，这就需要电机不停的正反转，此时的电流很大，还用以上的驱动电路，芯片会很烫！！这个时候就需要我们自己用 MOSFET 和栅极驱动芯片自己设计 H 桥！
方案二
大功率 MOS 管组成电机驱动电路
由于本人对这一部分的研究还不过深入，以下内容主要参考了“337实验室团队”对大功率MOS管组成的电机驱动电路的分析与设计。
用这个方法电路非常简单，控制只需要一路PWM，在管子上消耗的电能也比较少，可以有效地避免多片MC33886 并联时由于芯片分散性导致的驱动芯片某些片发热某些不发热的现象。但是缺点是不能控制电机的电流方向，在小车的刹车的性能的提升上明显有弱势，而且电流允许值也比较小。
当我们按照下图接线时，也就是两路PWM输入组成H桥，则可以通过控制PWM1和PWM2的相对大小控制电流的方向，从而控制电机的转向。
[![](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMYHDJ1qlia8J7GoMpBIKA2b5icrRZGrk613mIN7amQl8a75AWZ6fbLhMA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMYHDJ1qlia8J7GoMpBIKA2b5icrRZGrk613mIN7amQl8a75AWZ6fbLhMA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
在这里给大家介绍的是 IR 公司的 IR2104，因为 IR 公司号称功率半导体领袖，当然 2104 也相对比较便宜！IR2104 可以驱动可以驱动高端和低端两个 N 沟道MOSFET，能提供较大的栅极驱动电流使用两片 IR2104 型半桥驱动芯片可以组成完整的直流电机 H 桥式驱动电路。但是需要 12V 驱动！
关键参数的选择：
[![](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMyLBc4Jlk2uDA1QnKyG0yYwmU1g7vXHe1Lm5dvgr9tcDeqWLeKXicboQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/sPecMp1Ej3LIXy5f7rhialqahys37IYYMyLBc4Jlk2uDA1QnKyG0yYwmU1g7vXHe1Lm5dvgr9tcDeqWLeKXicboQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
这个驱动设计单从信号逻辑上分析比较容易理解，但要深入的理解和更好的应用，就需要对电路做较深入的分析，对一些外围元件的参数确定做理论分析计算。
图中IC是一个高压驱动芯片,驱动 1 个半桥 MOSFET。Vb,Vs 为高压端供电;Ho为高压端驱动输出;COM为低压端驱动供电,Lo为低压端驱动输出;Vss 为数字电路供电.此半桥电路的上下桥臂是交替导通的,每当下桥臂开通,上桥臂关断时Vs脚的电位为下桥臂功率管Q2的饱和导通压降,基本上接近地电位,此时Vcc通过自举二极管D对自举电容C2充电使其接近 Vcc 电压。当Q2关断时 Vs端的电压就会升高,由于电容两端的电压不能突变,因此Vb端的电平接近于Vs和Vcc端电压之和,而Vb和Vs之间的电压还是接近Vcc电压。当Q2开通时,C2作为一个浮动的电压源驱动 Q2;而C2在Q2开通其间损失的电荷在下一个周期又会得到补充,这种自举供电方式就是利用Vs端的电平在高低电平之间不停地摆动来实现的.由于自举电路无需浮动电源,因此是最便宜的，如图所示自举电路给一只电容器充电，电容器上的电压基于高端输出晶体管源极电压上下浮动。图中的D和C2是IR2104在PWM应用时应严格挑选和设计的元器件,根据一定的规则进行计算分析;并在电路实验时进行调整,使电路工作处于最佳状态，其中D 是一个重要的自举器件,应能阻断直流干线上的高压,其承受的电流是栅极电荷与开关频率之积,为了减少电荷损失,应选择反向漏电流小的快恢复二极管，芯片内高压部分的供电都来自图中自举电容C2上的电荷;为保证高压部分电路有足够的能量供给，应适当选取C2的大小。
有关电机驱动电路的设计就介绍到这里。