

### 不会吧，你还在赤裸裸的使用printf?

哈喽，伙计们！

> 最近做了一些Linux应用开发方面的东西，感觉现在有点混乱，所以想将每个知识点模块化，并且能够搭建自己的API库，方便以后能够直接使用！

今天主要来讨论一下我们最常用的打印字符串，实现调试打印和颜色打印。

## **1、明确需求**

在`Linux`开发环境下，我们日常使用的打印字符串的主要需求可能有两种：

- **多级别打印**：我们调试打印信息可以分为多个级别，全局设置打印级别，来实现打印的全局管理！
- **多颜色打印**：不同的打印级别对应不同的打印色彩，方便快速吸引开发者的注意力，快速定位问题！

基于以上两个基本需求，我们来进行简单封装。

## **2、打印级别分类**

打印级别参考内核的分类，设置级别如下：

```
typedefenum {
  LOG_EMERG=0, /**< Emergency */
  LOG_ALERT,   /**< Alert */
  LOG_CRIT,    /**< Critical */
  LOG_ERR,     /**< Error */
  LOG_WARNING, /**< Warning */
  LOG_NOTICE,  /**< Notice */
  LOG_INFO,    /**< Information */
  LOG_DEBUG    /**< Debug */
}GLOBAL_LOG_LEVEL;
```

## **3、打印级别控制**

打印级别分类后，我们定义全局变量，来全局控制打印级别。

```
GLOBAL_LOG_LEVEL g_log_level = LOG_INFO;        //  default log level

/**
 * @brief 设置LOG打印等级
 *
 * @param log_level
 */

voidSet_Log_Lever(GLOBAL_LOG_LEVEL log_level) {

    g_log_level = log_level;

}
```

如果需要全局调整打印级别，我们可以调用`Set_Log_Lever`的接口，实现打印级别的适时调整。

## **4、打印信息添加**

在输出我们正常打印信息之前，我们也需要添加一些时间信息，打印级别信息等。

```
constchar global_log_level_string[8][10] = {"EMERG", "ALERT", "CRIT", "ERR", "WARNING", "NOTICE", "INFO", "DEBUG"};
staticchar str_tmp[512];

	// 增加时间信息
time_t now;
    time(&now);
    strftime(str_tmp,sizeof(str_tmp), "[%Y-%m-%d %H:%M:%S ", localtime(&now));

    //加入LOG后缀信息
    strcat(str_tmp,global_log_level_string[level]);
    strcat(str_tmp, "] ");
```

通过以上代码，将**时间和打印级别**信息都添加到字符串之前。

**输出效果如下**：

```
[2022-10-2109:13:54 INFO] log info output
```

## **5、颜色定义**

> 颜色控制如何做？

很简单，在输出字符串前，符合特定的颜色控制格式，就可以更改打印颜色了。

```
printf("\033[显示方式；字背景颜色;字体颜色m…\033[0m")
```

> 控制命令以\033[开头，以m结尾，而中间则是属性码，属性代码之间使用;分隔，如\033[1;34;42m，最后以默认颜色\033[0m结尾，以避免影响后面正常打印！

**显示方式**

|   |   |
|---|---|
|**意义**|**显示方式**|
|默认|0|
|高亮显示|1|
|下划线|4|
|闪烁|5|
|反白显示|7|
|不可见|8|

**前景颜色和背景颜色**

|   |   |   |
|---|---|---|
|**颜色**|**前景色**|**背景色**|
|黑色|30|40|
|红色|31|41|
|绿色|32|42|
|黄色|33|43|
|蓝色|34|44|
|紫红色|35|45|
|青蓝色|36|46|
|白色|37|47|

> 没有设置的话就是默认

**颜色定义**

> 下方定义一些常用颜色，方便打印调用。

```
\#define LOG_CLRSTR_NONE         "\033[0m"               // 默认显示
\#define LOG_CLRSTR_RED          "\033[0;42;31m"         // 绿红色
\#define LOG_CLRSTR_GREEN        "\033[0;32m"         	// 绿色
\#define LOG_CLRSTR_BLUE         "\033[0;32;34m"         // 蓝色
\#define LOG_CLRSTR_DARK_GRAY    "\033[1;30m"            // 灰色
\#define LOG_CLRSTR_CYAN         "\033[0;36m"            // 青色
\#define LOG_CLRSTR_PURPLE       "\033[0;35m"            // 紫色
\#define LOG_CLRSTR_BROWN        "\033[0;33m"            // 棕色
\#define LOG_CLRSTR_YELLOW       "\033[5;42;33m"         // 绿黄色
\#define LOG_CLRSTR_WHITE        "\033[1;37m"            // 白色
```

## **6、颜色控制**

定义完各类颜色后，我们要做的就是对于不同级别的打印，选择不同的颜色！

```
//LOG类型判断,选择不同打印颜色
switch (level)
    {
case LOG_EMERG:
        log_color = LOG_CLRSTR_RED;
break;
case LOG_ALERT:
        log_color = LOG_CLRSTR_BLUE;
break;
case LOG_CRIT:
        log_color = LOG_CLRSTR_CYAN;
break;
case LOG_ERR:
        log_color = LOG_CLRSTR_RED;
break;
case LOG_WARNING:
        log_color = LOG_CLRSTR_PURPLE;
break;
case LOG_NOTICE:
        log_color = LOG_CLRSTR_YELLOW;
break;
case LOG_INFO:
        log_color = LOG_CLRSTR_DARK_GRAY;
break;
case LOG_DEBUG:
        log_color = LOG_CLRSTR_BROWN;
break;
default:
        log_color = LOG_CLRSTR_GREEN;
break;
    }
```

## **7、颜色打印**

在选择对应颜色之后，我们要做的就是将这些颜色信息，放到正常打印信息的前方。

> 可以通过字符串拼接的函数实现。

```
//  重新设置标准输出
    sprintf(str_uart, "%s",log_color);
    strcat(str_uart, str_tmp);

	...

    strcat(str_uart,LOG_CLRSTR_NONE);
    strcat(str_uart, "\r\n");
    printf("%s",str_uart);
```

这里的颜色打印，说白了就是在我们要打印的字符串前方，加入打印颜色的信息即可，打印字符串结束之后，要加上`\033[0m`，来恢复默认！

## **8、打印预览**

设置完成之后，我们看一下打印预览：

[![](https://mmbiz.qpic.cn/mmbiz_png/JqvCQ8UmFgX5go54ia1QWHXLYoHpalrYTV2YaicSPfT99N5MPVubMIPDSSShXavkibDGiaMY55e0tqEH1nXR2SvKjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)](https://mmbiz.qpic.cn/mmbiz_png/JqvCQ8UmFgX5go54ia1QWHXLYoHpalrYTV2YaicSPfT99N5MPVubMIPDSSShXavkibDGiaMY55e0tqEH1nXR2SvKjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## **9、Demo获取**

多级别彩色打印这个功能，已经封装成了一个`API`，我们直接获取源码，将`.c`和`.h`文件加入到自己工程即可使用！

**来源：嵌入式艺术**