# CAD设计工具
Computer-Aided Design，
## solidowrks

- [solidworks2016官方帮助文档](http://help.solidworks.com/2016/chinese-simplified/SolidWorks/sldworks/c_solidworks_fundamentals_overview.htm?id=7f54751b73104f1483e5986ab9a1b137#Pg0)

#### solidworks装配体有退回无法插入情况的解决
[装配体中的一个零部件正处于退回状态无法插入](https://www.bilibili.com/video/av931030027)  

主要参考上面的视频

下载宏并运行：[https://github.com/terryzhangsw/asmrollbackerr](https://github.com/terryzhangsw/asmrollbackerr)粘贴相应装配体路径并修复

#### solidworks工程图转换成autoCAD后字体出错

参考文章：[https://zhidao.baidu.com/question/315338638.html](https://zhidao.baidu.com/question/315338638.html)

保存DWG时有个“选项”，点开，字体选择TRUE TYPE，不要选择CAD字体。。。

![[assets/solidworks工程图转换成autoCAD后字体出错.png|solidworks工程图转换成autoCAD后字体出错.png]]

  #### solidworks visualize材质库翻译

- Automotive 自动的
- Emissives 放射的
- fasbric 织物
- Gems 宝石
- Glass 玻璃
- Leather 皮革
- Liquid 液体
- Mesh 网状物
- Metal 金属
- Metallic Paint金属漆
- Other 其他
- Paint 油漆
- PBR Materials PBR材料
- Plastic 塑料
- Precious Metal 贵金属
- Rubber 橡胶
- SOLIDWORKS Appearances
- Transparent Plastic 透明塑料
- Vivid Metallic Paint 明亮的金属漆
- Wood 木材

## AutoCAD

## Freecad

## Blender

## 3DMax

## Maya

# CAE
(Computer-Aided Engineering)： 计算机辅助工程，用于仿真分析（如应力、流体、热学），例如 ANSYS。

## Adams

## 以步兵机器人为实力介绍Adams建模流程

### 第一步：简化模型
1. 自由度要相同，保证高副抵副相同
2. 保证质心重心相同

### 第二部：建立约束
约束是建立在零件与零件之间的关系

### 第三步：建立力/力矩以及驱动

### 第四步：仿真及后处理

### 推荐书籍
Adams在机械设计中的应用

# CAM
(Computer-Aided Manufacturing)： 计算机辅助制造，用于将CAD模型生成数控机床 (CNC) 的加工代码，例如 Mastercam。


Maya

magics

LDD 乐高

草图大师

FreeCAD

studio

CADExchangeFree

Geomagic Design

Geomagic Wrap

Proe

3Ds Max

AutoCAD

Adams

SISUMI



##### magic

**Magics教程内容**

- Magics进行数据准备的流程
- Magics修复工具
- Magics编辑工具
- 添加平台，优化摆放零件
- 支撑编辑
- 打印前的分析
- 自动支撑工具E-stage和金属仿真模块

###### **3D打印流程**

- 设计想法->CAD文件设计->数据准备->3D打印
- 输入文件：CAD数据、网络数据、扫描数据
- 数据准备降低打印错误率，节省时间，材料和成本
- 数据准备能够帮助你生成水密性的STL文件，并令STL模型符合打印标准，

###### 3D打印中常见的挑战

- 从客户除获取正确的设计文件
- 文件格式转换
- STL文件修复
- 保证STL文件水密性
- 保证模型能被打印
- 优化零件摆放角度
- 支撑生成和优化

###### Materialise Magics基本使用流程

导入，修复，编辑，打印准备，输出、质量控制

###### STL文件产生错误成因

- CAD文件转换至STL文件时产生的错误
- 原设计文件缺陷

###### STL文件错误定义

- 反向三角面片：三角面片方向定义错误
- 坏边
    - 缝隙：被缝合
    - 空洞
- 壳体
    - 干扰壳体：有小的三角面片分布在周围在切片时影响打印质量
    - 重叠壳体：两壳体形成重叠，形成过固化
- 重叠三角面片：三角面片之间的距离或者角度少于给定的阈值
- 交叉三角面片：有交叉壳体的时候容易出现
- 零件在编辑之前一定要先修复完成，否则由于编辑可能会造成更多的错误

###### 支撑

- 坚固及方便去除
- 支撑类型
    - 面支撑：没有厚度的支撑，打印时仅仅只有有个光斑的厚度
    - 实体支撑
    - 锥支撑
    - 树支撑

##### Geomagic Wrap2017教程

###### 介绍

扫描数据处理和3D模型数据转换应用工具，其强大的功能可以在几分钟内即可完成三维扫描、面片处理、屈米艾尼出啊u女鬼剑等工作流程，支持WRP、IGES、X_T,SAT、PRC、STEP等多种主流的文件导出格式。


【Blender3.0教程】人工翻译 甜甜圈零基础入门教程
https://www.bilibili.com/video/BV1LS4y197SC/
ABAQUS教程   仿真软件
unity软件
fusion机械设计
[比较 Fusion 360 与面向个人用途的 Fusion 360 - Autodesk 欧特克官网](https://www.autodesk.com.cn/products/fusion-360/personal)

- 逆向工具

[完整扫描过程（详细教程）- MobileScan 手机3D扫描仪 工业设计 原型设计 自制娃娃 3D建模 学生党福音 使用超简单](https://www.bilibili.com/medialist/play/watchlater/BV1pf4y1u7b6)
    