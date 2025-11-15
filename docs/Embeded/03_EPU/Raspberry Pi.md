[pigpio library](http://abyz.me.uk/rpi/pigpio/python.html#offset)
[gpio-使用PIGPIO的软件串行发送发送垃圾-Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/62578/software-serial-send-with-pigpio-sending-garbage)
### 树莓派
[frps dashboard](http://106.14.161.147:8000/static/#/proxies/tcp)
[发布一个基于face++的人脸识别程序 - 树莓派2代论坛 - 树莓派论坛 - Powered by Shumeipai net!](http://www.shumeipai.net/thread-27793-1-1.html?_dsign=0b98ee10)
[在树莓派上实现face++人脸识别 - CSDN博客](http://blog.csdn.net/obuzuopiqi/article/details/54428433)
[树莓派（Raspberry Pi）中PiCamera+OpenCV的使用 - u012005313的专栏 - CSDN博客](http://blog.csdn.net/u012005313/article/details/70244747)
[用树莓派官方摄像头做丝滑般流畅的监控！_树莓派吧_百度贴吧](http://tieba.baidu.com/p/3981484977)
[【方法】树莓派GPIO控制使用教程_crazyang的博客-CSDN博客](https://blog.csdn.net/yzy_1996/article/details/83756357)

##### 树莓派GPIO
树莓派和普通电脑不一样的地方在于它还带了17个可编程的[GPIO](http://en.wikipedia.org/wiki/General_Purpose_Input/Output)（General Purpose Input/Output），可以用来驱动各种外设（如传感器，步进电机等）。但GPIO的编号方法有些混乱，不同的API（如wiringPi，RPi.GPIO等）对GPIO的端口号编号并不一样，下面则用图表标明了对应的叫法，这样在看程序例子的时候可以确定物理是哪个接口。

  
|Untitled.png
![[assets/Untitled.png]]

###### GPIO库

1. [wiringPi](https://github.com/WiringPi/WiringPi) C，有Perl, PHP, Ruby, Node.JS和[**Golang**](http://github.com/hugozhu/rpi)的扩展，支持wiringPi Pin和BCM GPIO两种编号
2. [RPi.GPIO](https://pypi.python.org/pypi/RPi.GPIO) Python，支持Board Pin和BCM GPIO两种编号
3. [Webiopi](http://code.google.com/p/webiopi/)，Python, 使用BCM GPIO编号
4. [WiringPi-Go](http://github.com/hugozhu/rpi), Go语言，支持以上三种编号

###### 编号规范

1. 第一列是wiringPi API中的缺省编号，wiringPiSetup()采用这列编号
2. 第二列（Name）往往是转接板的编号
3. 第三列是树莓派板子上的自然编号（左边引脚为1-15，右边引脚为2-26），RPi.GPIO.setmode(GPIO.BOARD)采用这列编号
4. 树莓派主芯片提供商Broadcom的编号方法，相当于调用了WiringPiSetupGpio()或RPi.GPIO.setmode(GPIO.BCM)采用这列编号

##### 串口相关
树莓派串口缓冲区大小：4095个字节



##### 树莓派根目录介绍
/bin 标准Linux系统应用程序  
/sbin 供超级用户使用的标准Linux系统应用程序  
/etc 设置和配置文件（类似于偏好设置）  
/var 实时信息，包括日志文件  
/var/log 记录运行软件的信息，以便日后检查错误  
/var/www 在完成设置一个网页服务器前，网页中的文件都存储于此（设置后，失效。如：nginx、apache）  
/home 为所有用户开放的根目录  
/home/pi 树莓派 pi 用户的根目录  
/root 超级用户使用的文件夹  
/usr 所有用户使用的文件  
/usr/bin 对于所有用户标准的使用应用程序  
/usr/sbin 对于超级用户标准的使用应用程序  
/usr/local 只在本计算机上有用的应用程序及其他信息  
/dev 硬件设置（慎动！！！）  
/lib 软件、附件软件及特殊选项  
/proc 关于正在运行的应用程序的信息  
/sys 正在运行的硬件（慎动！慎动！！）

### 树莓派
[gpio-使用PIGPIO的软件串行发送发送垃圾-Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/62578/software-serial-send-with-pigpio-sending-garbage)
[【方法】树莓派GPIO控制使用教程_crazyang的博客-CSDN博客](https://blog.csdn.net/yzy_1996/article/details/83756357)
[树莓派zero的扩展接口定义【raspberrypizero吧】_百度贴吧](https://tieba.baidu.com/p/4324911207?red_tag=3582476326)
[如何优雅地食用树莓派 zero w - 少数派](https://sspai.com/post/40086)
[树莓派3代B+型开发板](https://www.yahboom.com/study/raspberry3B+)
[使用VNCviewer远程访问树莓派的HDMI输出桌面 | 大专栏](https://www.dazhuanlan.com/2020/03/20/5e74864103211/)
##### 其他未整理

[[树莓派根目录介绍]]

[树莓派的常用命令 | 树莓派中文文档](https://www.lxx1.com/pi/basis/commmand.html#sudo-%E4%BB%A5root%E6%9D%83%E9%99%90%E6%89%A7%E8%A1%8C)

[树莓派4B3D模型_SolidWorks设计_Sldprt/Sldasm/SLDDRW文件下载_3D模型下载_开拔网/三维模型网www.sanweimoxing.com](http://www.sanweimoxing.com/tuzhi/201912/36935.html#ad-image-0)

[(131条消息) 3、树莓派 RPI.GPIO 使用手册_fhqlongteng的博客-CSDN博客](https://blog.csdn.net/fhqlongteng/article/details/80395059)

[教程：Raspberry Pi树莓派上的自定义动态开机画面 – 有啥事哟](http://www.soxitoday.com/hardware/raspberrypi/0ed49e937c/)

[树莓派磨制“魔镜”全记录 | 树莓派实验室](https://shumeipai.nxez.com/2015/04/08/make-magic-mirror-with-raspberry-pi.html)

[(132条消息) 树莓派-一不小心把树莓派的任务栏删了，如何恢复_清山博客-CSDN博客_树莓派菜单栏消失怎么恢复](https://blog.csdn.net/a497785609/article/details/77817714)

[(142条消息) 树莓派4b启用UART串口_xinluosiding的博客-CSDN博客](https://blog.csdn.net/xinluosiding/article/details/109786923)

[树莓派|如何在树莓派上搭建 WordPress](https://linux.cn/article-10208-1.html?pr)

[树莓派4使用OTG功能变身有线网卡 - 轶哥](https://www.wyr.me/post/620)

[透过树莓派 ZeroW 的 RNDIS 实现一个无线网卡 | 树莓派实验室](https://shumeipai.nxez.com/2019/12/03/wireless-network-card-with-raspberry-pi-zerow-rndis.html?variant=zh-tw)

[树莓派实验室](http://shumeipai.nxez.com/)

[树莓派使用外接ENC28J60网卡(spi接口)上网](http://www.tongxinmao.com/Article/Detail/id/248)

[[raspberryp]]

[树莓派 40Pin 引脚对照表 | 树莓派实验室](http://shumeipai.nxez.com/raspberry-pi-pins-version-40)

[FRP内网穿透工具 - 简书](https://www.jianshu.com/p/c0d7cb4cb00f)

- 树莓派摄像头
    
    [首頁 | Read the Docs](https://readthedocs.org/)
    
    [picamera模块 - Google 搜索](https://www.google.com.hk/search?newwindow=1&safe=strict&ei=H4egW7NQjLrxBZLanrAJ&q=picamera%E6%A8%A1%E5%9D%97&oq=picamera%E6%A8%A1%E5%9D%97&gs_l=psy-ab.3...67679.71691.0.73433.14.13.0.0.0.0.562.1830.0j4j1j0j1j1.7.0....0...1c.1j4.64.psy-ab..7.6.1266...0j0i67k1j0i30k1j0i12k1.0.Jptrl63F8sk)
    
    [picamera — Picamera 1.10 文档](https://picamera-zh-cn.readthedocs.io/zh/latest/)
    
    [1. Installation — Picamera 1.13 Documentation](https://picamera.readthedocs.io/en/release-1.13/install.html)
    
    [使用树莓派摄像头Picamera（预览和抓拍）与Opencv交互 - 程序园](http://www.voidcn.com/article/p-agezingc-dw.html)
    
    [用树莓派从零开始做一个家庭监控 - 唯心不易 - 博客园](https://www.cnblogs.com/chuxiuhong/p/6196268.html)
    
    [python3.6.3+opencv3.3.0学习笔记六--存储视频和图像 - CSDN博客](https://blog.csdn.net/m0_37606112/article/details/78289802)
    
    [OpenCV视频操作 · OpenCV-Python中文教程 · 看云](https://www.kancloud.cn/aollo/aolloopencv/260405)
    
    [树莓派3B+ 源码方式安装opencv3（基于3.4.1） - CSDN博客](https://blog.csdn.net/Fighting_Boom/article/details/82215362)
    
    [（树莓派、linux通用）OpenCV3源码方式安装教程（最新3.4.1） - CSDN博客](https://blog.csdn.net/leaves_joe/article/details/67656340)
    
    [Linux或树莓派3——挂载U盘、移动硬盘并设置rwx权限 - jack_Meng - 博客园](http://www.cnblogs.com/mq0036/p/9343862.html)
    
    [基于树莓派3B+Python3.5的OpenCV3.4的配置教程 - Pyrokine - 博客园](https://www.cnblogs.com/Pyrokine/p/8921285.html)
    
    [树莓派安装opencv（简易版本） - CSDN博客](https://blog.csdn.net/weixin_33974429/article/details/82145202)
    
    [在树莓派上实现usb摄像头监控的几种方案 - CSDN博客](https://blog.csdn.net/secho1997/article/details/53495336)
    
    [树莓派3-摄像头-视频软件fswebcam的安装使用 - 创客智造](https://www.ncnynl.com/archives/201607/266.html)
    
    [树莓派|Linux有问必答：如何在树莓派上安装USB网络摄像头](https://linux.cn/article-5312-1.html)
    
    [如何使用百度云人脸识别服务（V3版接口python语言）（一）创建应用 - CSDN博客](https://blog.csdn.net/qq_40821981/article/details/81625004)
    

[电脑通过USB连接树莓派ZeroW - u010396127的博客 - CSDN博客](https://blog.csdn.net/u010396127/article/details/82943258)

[pigpio library](http://abyz.me.uk/rpi/pigpio/python.html#offset)

[(19条消息) 树莓派报错Kernel panic-not syncing: VFS: unable to mount root fs on unknown-block(179,2)_多年以后ls的博客-CSDN博客](https://blog.csdn.net/qq_37082966/article/details/110231836)

[蓝牙使用小记 - 树莓派3_幻河_新浪博客](http://blog.sina.com.cn/s/blog_6b2252130102wqi7.html)