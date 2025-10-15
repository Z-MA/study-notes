[TCP/IP让“掌机”成为智能中控中心，详解Wio Terminal联网](https://www.bilibili.com/video/BV1qr4y1w7y9)
[STM32CUBEMX-TCP服务器搭建](https://www.bilibili.com/video/BV19p4y1a7Kb)


[Luat社区](https://doc.openluat.com/wiki/21?wiki_page_id=2595)


#### 物联网
[【全部开源】微信小程序连接阿里云物联网平台控制esp8266驱动](https://www.bilibili.com/video/BV1CJ411w7bQ/)

[不要被手机信号格骗了！看信号强弱的正确方法是……](https://zhuanlan.zhihu.com/p/27348768)
[蟒实现FTP常用操作[FTPLIB]](http://www.wklken.me/posts/2011/12/10/python-ftp-ftplib.html)

[【小熊派Cat-1网卡】掏出抽屉里吃灰的cat-1裹上面包糠......](https://www.bilibili.com/video/BV1j54y117nC)
[【硬核】公网访问？内网穿透！零经验上手](https://www.bilibili.com/medialist/play/watchlater/BV1Qq4y1w7F5)
[【FreeRTOS】基于STM32移植LWIP 2.1.2详细步骤](https://blog.csdn.net/ZHONGCAI0901/article/details/109579940)  
[Yeelink 论坛 - Yeelink交流 开源硬件 Arduino 树莓派 物联网 BBS](http://bbs.yeelink.net/forum.php?mod=viewthread&tid=173&page=1&extra=)
[【太极创客】零基础入门学用物联网 - MQTT篇 1-2 MQTT基本原理](https://www.bilibili.com/video/BV1pv411r7Cv/)
[doc/README.md · 合宙Luat/820开发板 - Gitee.com](https://gitee.com/openLuat/X-MagicBox-820/blob/master/doc/README.md)


##### MQTT
MQTT通信有两个最为重要的角色：MQTT服务端、MQTT客户端；信息发布者、信息订阅者，两个可重叠

MQTT主题 是 信息的标签

**MQTT 发布/订阅 特性：相互可独立、空间可分离、时间可异步**

  

###### MQTT客户端连接服务器的两步：

1. MQTT客户端将会向服务端发送连接请求，该请求实际上是一个包含有连接请求信息的数据包。这个数据包的官方名称为**CONNECT**
    
    CONNECT报文内容：
    
    1. **clientId – 客户端ID-用该标识来识别客户端**
    2. **cleanSession – 清除会话-发送失败后是否保存未成功接收的报文，设置为False的同时QOS级别应大于0**
    3. **keepAlive – 心跳时间间隔-判断是否与服务器连接正常**
    
2. MQTT服务端收到客户端连接请求后，会向客户端发送连接确认。同样的，该确认也是一个数据包。这个数据包官方名称为**CONNACK**。
    1. **returnCode – 连接返回码-如果客户端与服务端成功连接，则返回数字“0”。如果未能成功连接，连接返回码将会是一个非零的数值**
    2. **sessionPresent – 当前会话-cleanSession设置为false时，如果服务端的确保存了没有收到客户端接收确认的报文信息，那么cleanSession为true，否则为false。其作用是客户端发送连接请求时，服务端告知客户端有没有保存报文信息。这个被服务端保存的报文信息是来自于上一次客户端连接时，服务端曾经发送此报文给客户端，但是发送后没有收到客户端接收确认。**

###### 发布、订阅和取消订阅

1. **PUBLISH – 发布消息，客户端连接到服务器后，便可发布消息，每个发布的消息必须包含一个主题**
    1. **topicName – 主题名**
    2. **QoS – 服务质量等级，QoS有三个级别：0、1和2**
    3. **packetId – 报文标识符--MQTT设备可以通过该标识符对MQTT报文进行甄别和管理。**
    4. **retainFlag – 保留标志**
    5. **Payload – 有效载荷—通过MQTT所发送的实际内容，文本，图像等格式**
    6. **dupFlag – 重发标志**
2. **SUBSCRIBE – 订阅主题—一个SUBSCRIBE报文可以用于订阅一个或者多个主题**
3. **SUBACK – 订阅确认—returnCode – 订阅返回码，客户端可通过一个SUBSCRIBE报文发送多个主题的订阅请求。服务端会针对SUBSCRIBE报文中的所有订阅主题来逐一回复给客户端一个返回码。**
4. **UNSUBSCRIBE – 取消订阅**
##### 互联网基础知识

互联网协议簇（Iternet Protocal Suite）是 全球互联网通用协议标准。

互联网协议包含了上百种标准，其中最重要的两个协议是TCP和IP协议。所以，大家把互联网的协议简称为TCP/IP协议。

互联网上每个计算机的唯一标识就是IP地址，如果一台计算机同时接入到两个或更多的网络，比如路由器，它就会有两个或多个IP地址，所以，IP地址对应的实际上是计算机的网络接口，通常是网卡。

IP协议负责把数据从一台计算机通过网络发送到另一台计算机。数据被分割成一小块一小块，然后通过IP包发送出去。由于互联网链路复杂，两台计算机之间经常有多条线路，因此，路由器就负责决定如何把一个IP包转发出去。IP包的特点是按块发送，途径多个路由，但不保证能到达，也不保证顺序到达。

TCP协议则是建立在IP协议之上的。TCP协议负责在两台计算机之间建立可靠连接，保证数据包按顺序到达。TCP协议会通过握手建立连接，然后，对每个IP包编号，确保对方按顺序收到，如果包丢掉了，就自动重发。

许多常用的更高级的协议都是建立在TCP协议基础上的，比如用于浏览器的HTTP协议、发送邮件的SMTP协议等。

一个TCP报文除了包含要传输的数据外，还包含源IP地址和目标IP地址，源端口和目标端口。

一个进程也可能同时与多个计算机建立链接，因此它会申请很多端口。

Socket是网络编程的一个抽象概念。通常我们用一个Socket表示“打开了一个网络链接”，而打开一个Socket需要知道目标计算机的IP地址和端口号，再指定协议类型即可。

主动发起连接的叫客户端，被动响应连接的叫服务器。

###### TCP编程

```
#客户端编程

# 导入socket库:
import socket

# 创建一个socket:
# 创建Socket时，AF_INET指定使用IPv4协议，如果要用更先进的IPv6，就指定为AF_INET6。SOCK_STREAM指定使用面向流的TCP协议，这样，一个Socket对象就创建成功，但是还没有建立连接。
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 建立连接:
# 80端口是Web服务的标准端口。其他服务都有对应的标准端口号，例如SMTP服务是25端口，FTP服务是21端口，等等。端口号小于1024的是Internet标准服务的端口，端口号大于1024的，可以任意使用
s.connect(('www.sina.com.cn', 80)) # 注意参数是一个tuple，包含地址和端口号。
# 发送数据:
s.send(b'GET / HTTP/1.1\r\nHost: www.sina.com.cn\r\nConnection: close\r\n\r\n')
# 接收数据:
buffer = []
while True:
    # 每次最多接收1k字节:
    d = s.recv(1024)
    if d:
        buffer.append(d)
    else:
        break
data = b''.join(buffer)
# 关闭连接:
s.close()

header, html = data.split(b'\r\n\r\n', 1)
print(header.decode('utf-8'))
# 把接收的数据写入文件:
with open('sina.html', 'wb') as f:
    f.write(html)
# 现在，只需要在浏览器中打开这个sina.html文件，就可以看到新浪的首页了。
```

  

```
# 服务器编程

# 导入socket库:
import socket

# 创建一个基于IPv4和TCP协议的Socket：
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 监听端口:
s.bind(('127.0.0.1', 9999))
# 调用listen()方法开始监听端口，传入的参数指定等待连接的最大数量：
s.listen(5)
print('Waiting for connection...')

# 服务器程序通过一个永久循环来接受来自客户端的连接，accept()会等待并返回一个客户端的连接
while True:
    # 接受一个新连接:
    sock, addr = s.accept()
    # 创建新线程来处理TCP连接:
    t = threading.Thread(target=tcplink, args=(sock, addr))
    t.start()

# 每个连接都必须创建新线程（或进程）来处理，否则，单线程在处理连接的过程中，无法接受其他客户端的连接
def tcplink(sock, addr):
    print('Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            break
        sock.send(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
    sock.close()
    print('Connection from %s:%s closed.' % addr)


# 用于测试服务器的客户端程序
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 建立连接:
s.connect(('127.0.0.1', 9999))
# 接收欢迎消息:
print(s.recv(1024).decode('utf-8'))
for data in [b'Michael', b'Tracy', b'Sarah']:
    # 发送数据:
    s.send(data)
    print(s.recv(1024).decode('utf-8'))
s.send(b'exit')
s.close()
```

  

###### UDP编程

TCP是建立可靠连接，并且通信双方都可以以流的形式发送数据。相对TCP，UDP则是面向无连接的协议。

使用UDP协议时，不需要建立连接，只需要知道对方的IP地址和端口号，就可以直接发数据包，能不能到达就不知道了。虽然用UDP传输数据不可靠，但它的优点是和TCP比，速度快，对于不要求可靠到达的数据，就可以使用UDP协议。

  

```
# 服务器端编程
import socket

# UDP的通信双方也分为客户端和服务器。服务器首先需要绑定端口
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# 绑定端口:
s.bind(('127.0.0.1', 9999))

# 创建Socket时，SOCK_DGRAM指定了这个Socket的类型是UDP。绑定端口和TCP一样，但是不需要调用listen()方法，而是直接接收来自任何客户端的数据
print('Bind UDP on 9999...')
while True:
    # 接收数据:
    data, addr = s.recvfrom(1024)
    print('Received from %s:%s.' % addr)
    s.sendto(b'Hello, %s!' % data, addr)
# recvfrom()方法返回数据和客户端的地址与端口，这样，服务器收到数据后，直接调用sendto()就可以把数据用UDP发给客户端。
# 注意这里省掉了多线程，因为这个例子很简单。

# 客户端编程
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
for data in [b'Michael', b'Tracy', b'Sarah']:
    # 发送数据:
    s.sendto(data, ('127.0.0.1', 9999))
    # 接收数据:
    print(s.recv(1024).decode('utf-8'))
s.close()
```

  

单连接和多连接，个人理解为

多连接的情况下可以选择是否自动分配Link ID

数据模式和命令模式，数据模式用于透传