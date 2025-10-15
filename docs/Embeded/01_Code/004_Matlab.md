---
lang: zh-CN
title: Matlab
description: 这是一个C语言基础页面
---

# 官方资料
[matlab官网](https://ww2.mathworks.cn/?s_tid=user_nav_logo)  
[Matlab官方文档](https://ww2.mathworks.cn/help/releases/R2024a/index.html)

# Matlab
## MATLAB 快速入门
- 界面包括 菜单栏、当前文件夹（可添加文件夹到路径）、命令行窗口、工作区、编辑器。命令行可以浏览历史命令；工作区显示变量，变量可以在工作区中直接编辑，who和whos可查看工作区内容，退出软件工作区变量不会保留，使用save命令保存为mat数据文件，使用load将mat还原到工作区。  
- 矩阵就是多维数组，对矩阵的操作有创建（直接创建、函数创建）、索引(行列下标、按序遍历，冒号和步长)、修改、运算（单一的算术运算符或函数可以处理矩阵中的所有值）等。运算包括转置、加减乘除、矩阵乘法、矩阵幂、点乘、点除、点幂，还有针对矩阵元素级的运算。矩阵还可以串联。  
- MATLAB 将数字存储为浮点值，默认情况下为双精度（64 位）。使用 `format` 命令可以更改显示格式。  
- 复数使用i或j表示虚部。
- 字符串用双引号，字符中的双引号用两个双引号表示，字符串数组可以进行连接+、比较、拆分等操作。字符串可以是数组的元素，strlength 函数求数组中每个字符串的长度。字符数组用单引号表示，字符数组的每个元素是一个字符，使用方括号串联字符数组。
- matlab内置大量函数，例如最大值max()、最小值min()、打印disp()、清空clc、清理clean等基础函数和各领域函数。支持多返回值用方括号接。doc+函数名在单独窗口打开函数文档，help+函数名在在命令行窗口查看简明文档。
- 二维图形绘制plot()，添加标题title()、添加轴标题xlabel()、ylabel()，可以添加绘图参数plot(x,y,"r--")，"r--" 为线条设定。每个设定可包含表示线条颜色、样式和标记的字符。标记是在绘制的每个数据点上显示的符号，例如，+、o 或 *。例如，g:*" 请求绘制使用 * 标记的绿色点线。hold on将绘图添加到现有图窗中，在使用 hold off 或关闭窗口之前，当前图窗窗口中会显示所有绘图。三维图形绘制surf(x,y,z)。tiledlayout 或 subplot 在同一窗口的不同部分显示多个绘图。
- 使用 edit 命令新建一个空白脚本文件。%符号添加注释，请在命令行中键入脚本名称运行脚本。实时脚本中的格式设置选项可以增强代码，而不是以纯文本编写代码和注释。实时脚本有助于您查看代码和输出并与之交互，还可以包含格式化文本、方程和图像。
- 循环使用 for 或 while 关键字，条件语句使用 if 或 switch，都以end结尾。

## 语言基础知识
语法、数组索引和操作、数据类型、运算符。MATLAB 是“matrix laboratory”的缩写形式。其他编程语言通常一次只能处理一个数字，而 MATLAB® 则针对整个矩阵和数组进行运算处理。语言基础知识包括基本运算，例如创建变量、数组索引、算术运算和数据类型。

- 输入命令：编译和运行 MATLAB 语句
- 矩阵和数组：数组的创建、合并、重构、重新排列以及索引
- 数据类型：数值数组、字符和字符串、表格、结构体和元胞数组；数据类型转换
- 运算符和基本运算：算术、关系和逻辑运算符、特殊字符、舍入、集合函数
- 循环及条件语句：使用关键字控制流和分支，如 if、for 和 while

## 数据导入和分析
导入和导出数据，包括大文件；预处理数据、可视化和浏览，访问来自文本文件、电子表格、硬件、其他软件或 Web 的数据。探查数据以判别趋势、检验假设和估计不确定性。创建自定义的算法、可视化和模型。

- 数据导入和导出：文本文件、电子表格和其他文件格式；硬件；Web 访问
- 大型文件和大数据：访问和处理文件集合以及大型数据集
- 数据的预处理：数据的清洗、平滑处理和分组
- 描述性统计量：范围、集中趋势、标准差、方差、相关性
- 可视化探查：平移、缩放和旋转图形；修改和保存观测值
- 管理试验：设计试验以运行 MATLAB® 代码并可视化、过滤和比较结果

## 数学
线性代数、微积分、傅里叶变换和其他数学。数学函数为分析数据、开发算法和创建模型提供了一系列数值计算方法。核心函数使用经过处理器优化的库，可以快速进行向量和矩阵计算。

- 初等数学：三角学、指数和对数、复数值、舍入、余数、离散数学
- 线性代数：线性方程、特征值、奇异值、分解、矩阵运算、矩阵结构
- 随机数生成：种子、分布、算法
- 插值：网格和散点数据插值、数据网格化、分段多项式
- 优化：单变量和多变量函数的最小值、非负最小二乘、非线性函数的根
- 数值积分和微分方程：数值积分、常微分方程、时滞微分方程、边界值问题、偏微分方程
- 傅里叶分析和滤波：傅里叶变换、卷积、数字滤波
- 稀疏矩阵：初等稀疏矩阵、重新排序算法、迭代法、稀疏线性代数
- 图和网络算法：有向图和无向图、网络分析
- 计算几何学：三角剖分、边界区域、沃罗诺伊图、多边形
- 量子计算：基于门的量子计算和二次无约束二元优化

## 图形
二维和三维绘图、图像、动画。图形函数包括二维和三维绘图函数，用于以可视化形式呈现数据和通信的结果。以交互方式或编程方式自定义绘图。

- 二维图和三维图：绘制连续、离散、曲面以及三维体数据图
- 格式和注释：添加标签、调整颜色、定义坐标轴范围、应用光照或透明度、设置相机视图
- 图像：读取、写入、显示和修改图像
- 打印和保存：打印和导出为标准文件格式
- 图形对象：通过设置底层对象的属性自定义图形
- 图形性能：优化代码以改善性能

## 编程
脚本、函数和类。若您需要重复执行一系列命令或希望将其保存供以后引用，请将其存储在程序文件中。MATLAB® 程序的最简单类型是脚本，其中包含一组命令，这些命令与您在命令行中键入的命令完全相同。要获得更高的编程灵活性，可以创建接受输入并返回输出的函数。当您拥有专门的数据结构体或需要许多函数与特殊类型的数据进行交互时，请使用面向对象的编程方法创建类。

- 脚本：基本程序文件
- 函数：接受输入并返回输出的程序
- 实时脚本和函数：程序文件，其中可包括用于解释代码的格式化文本、图像和输出
- 类：使用面向对象编程创建可在 MATLAB 中使用的新对象类型
- 文件和文件夹：文件操作，MATLAB 搜索路径
- 代码执行：间接计算表达式或函数，设置计时器
- 异常处理：出现错误时捕获数据
- MATLAB 代码中的安全性：MATLAB 代码中敏感信息和知识产权的安全注意事项

## App 构建
创建自包含 App、嵌入式实时编辑器任务和自定义 UI 组件。MATLAB® 提供了构建交互式用户界面的函数和工具。您可以添加组件（如按钮和滑块）以实现用户交互，并在这些界面中包括用于数据可视化和探查的绘图。
要创建基于用户交互执行操作的自包含界面，请开发 App。要创建可嵌入到实时脚本中并在用户探查参数时生成代码的界面，请开发实时编辑器任务。有关详细信息，请参阅构建 App 的方法。
有大量的 UI 组件可用于在 MATLAB 中创建界面。您还可以通过创建自定义 UI 组件，用您自己的专用 UI 和可视化来扩展可用组件的列表。

- 使用 App 设计工具开发 App：使用 App 设计工具以交互方式开发 App
- 以编程方式开发 App：使用 MATLAB 函数以编程方式开发 App
- 开发实时编辑器任务：开发您自己的实时编辑器任务以用于实时脚本
- 创建自定义 UI 组件：创建您自己的可重用自定义 UI 组件，以在 App 中使用
- 打包和共享 App：直接与 MATLAB 用户共享 App 或打包并将其作为独立 App 共享
- 迁移使用 GUIDE 创建的 App：将使用 GUIDE 构建的 App 迁移到 App 设计工具，或将使用 GUIDE 创建的 App 导出到 MATLAB 文件

## 软件开发工具
调试和测试、组织大型工程、源代码管理集成、工具箱打包。随着工程规模和复杂性的增加，MATLAB® 提供了支持协作软件开发实践的功能。例如，您可以将您的 MATLAB 文件与 Git™ 或 Subversion® 源代码管理系统集成，或者测试您的代码的功能和性能。要与他人共享代码，请将工程或其他文件打包为一个工具箱。

- 调试和分析：诊断问题、检查语法及版本兼容性
- 性能和内存：探查代码、提高性能、减少内存需求
- 后台处理：在后台运行代码，同时运行其他代码
- 工程：通过管理和共享文件与设置、查找必需文件以及与源代码管理进行交互来组织大型工程
- 源代码管理集成：在 MATLAB 中使用源代码管理
- 测试框架：测试您的 MATLAB 代码的功能和性能
- 编译自动化：使用标准编程接口创建和运行编译任务
- 持续集成 (CI)：使用本地 CI 平台和云 CI 平台连续开发和集成软件
- 工具箱分发：创建和共享工具箱；添加文档
- 工具鉴定和认证：使用 IEC Certification Kit 对 MATLAB 进行鉴定

## 外部语言接口
外部语言和库接口，包括 Python、Java、C、C++、.NET 和 Web 服务。MATLAB® 可与其他编程语言进行灵活的双向集成，从而使您能够重用原有代码。要为您的应用程序选择适合的 MATLAB 功能，请参阅将 MATLAB 与外部编程语言和系统集成。

- 将 C++ 与 MATLAB 结合使用：从 MATLAB 中直接调用 C/C++ 库功能，或编写调用 MATLAB 功能的现代 C++ 程序
- 将 Java 与 MATLAB 结合使用：从 MATLAB 中直接调用 Java® 库功能，或编写可用于 MATLAB 的 Java 程序
- 将 Python 与 MATLAB 结合使用：从 MATLAB 中直接调用 Python® 库功能，或编写可用于 MATLAB 的 Python 程序
- 将 .NET 与 MATLAB 结合使用：从 MATLAB 中直接调用 .NET 库功能，或编写使用 MATLAB 的 .NET 程序
- 将 COM 与 MATLAB 结合使用：从 MATLAB 访问 COM 组件或编写可用于 MATLAB 的 COM 程序
- 将 Web 服务与 MATLAB 结合使用：使用 HTTP（超文本传输协议）或 WSDL（Web 服务描述语言）从 MATLAB 与 Web 服务通信
- 将 C 与 MATLAB 结合使用：使用 calllib 从 MATLAB 中直接调用 C 库功能，或使用 mxArray 编写调用 MATLAB 函数的 C 程序，以便在 C 语言中访问或创建 MATLAB 变量
- 将 Fortran 与 MATLAB 结合使用：编写可用于 MATLAB 的 Fortran 子例程

## 环境和设置
预设和设置、平台差异、添加硬件和可选功能。MATLAB® 桌面环境可帮助您运行命令、管理文件和查看结果。您可以更改桌面布局和设置预设，例如字体、键盘快捷方式和初始工作文件夹。

- 启动和关闭：启动命令行标志、启动和关闭文件
- 桌面：桌面外观、辅助功能、字体、颜色和键盘快捷方式
- 附加功能：查找、运行和安装附加功能，包括可选功能、App、工具箱和支持包
- 平台和许可证：使用其他平台并查询计算机、许可证和产品版本
- 系统命令：以编程方式与操作系统和 MATLAB 环境交互
- 国际化：区域设置和消息
- 帮助和支持：产品帮助，技术支持

# Simulink
## 基础概念
- 模块图
- 模块
	- 虚拟模块（Virtual Subsystem、Inport、Outport、Bus Creator、Bus Assignment、Bus Selector）
	- 非虚拟模块（Atomic Subsystem、Model、Enable、Trigger、Function、If、Switch、While、For）
	- 模块封装
	- 自定义模块
- 线
	- 信号线
	- 事件线
- 数据
- 参数
- 属性
- 状态变量
- 采样时间
- 单位
- 直接馈通
- 代数环
- 人为代数环
- 过零检测

## Simulink 快速入门
Simulink 基础知识学习

## 应用领域
说明特定功能和应用的示例模型

- 一般应用领域：说明一般应用的示例模型
- 汽车应用领域：使用 Simulink® 和其他 MathWorks® 产品对汽车系统进行建模和仿真
- 航空应用领域：使用 Simulink 和 Aerospace Blockset™ 软件进行航空航天系统建模
- 工业自动化应用领域：说明工业自动化应用的示例模型
- 协作建模：适用于大型模型和多用户开发团队的模型架构
- 信号处理：使用 DSP System Toolbox™ 软件对信号处理和通信系统建模
- 射频与混合信号：RF、SerDes 和混合信号系统建模和仿真
- 控制设计：使用 Simulink Control Design™ 软件对模型和设计控制系统进行线性化
- 物理建模：使用 Simscape™ 软件进行物理系统建模
- 复杂逻辑：使用 Stateflow® 图为复杂逻辑建模
- 离散事件仿真：进行离散事件系统建模和仿真
- 系统工程：使用 System Composer™ 软件设计和分析系统架构

## Simulink 环境基础知识
以交互方式或编程方式构建模块图，从模块库中选择模块

- Simulink 概念：Simulink 中有关动态系统建模和仿真的概念
- 交互式模型编辑：创建、格式化、导航和搜索 Simulink 模型
- 协作模型编辑：对模型的保密性内容进行注释、共享、重用、标准化、打印和保护
- 编程式模型编辑：以编程方式创建模型、在模型中添加和连接模块、设置参数和属性以及执行其他基本建模操作。
- Simulink 环境自定义：在菜单和对话框中添加或删除项目、更改显示方式和自动保存设置
- 模型升级：将模型升级到当前 Simulink 版本
- 模块库：代表方程和建模组件的模块

### Simulink 模块库
Simulink模块库包括标准Simulink模块库和专业模块库两大类。  
模块库的详细描述请参见[Simulink模块库详解](https://www.yuque.com/lizho/gniseg/gg1gptqllkrlpg2v?singleDoc#g1dv)。

| # | English Name | 中文名称 | Purpose / 用途 |
|---|---|---|---|
| 1 | Simulink | Simulink | 基于块的多域动态系统建模与仿真平台 |
| 2 | Aerospace Blockset | 航空航天模块集 | 航空航天飞行动力学、环境与执行机构建模 |
| 3 | Audio Toolbox | 音频工具箱 | 音频信号处理、I/O、算法与可视化 |
| 4 | Automated Driving Toolbox | 自动驾驶工具箱 | 传感器建模、场景仿真、感知/规划/控制 |
| 5 | AUTOSAR Blockset | AUTOSAR 模块集 | AUTOSAR 组件建模、映射与代码生成 |
| 6 | C2000 Microcontroller Blockset | C2000 微控制器模块集 | TI C2000 外设建模、驱动与代码生成 |
| 7 | Communications Toolbox | 通信工具箱 | 调制解调、信道、纠错与通信系统建模 |
| 8 | Communications Toolbox HDL Support | 通信工具箱 HDL 支持 | 通信算法的 HDL 实现与加速支持 |
| 9 | Computer Vision Toolbox | 计算机视觉工具箱 | 视觉算法、特征、对象检测与跟踪 |
| 10 | Control System Toolbox | 控制系统工具箱 | 线性控制分析、设计与调参 |
| 11 | Data Acquisition Toolbox | 数据采集工具箱 | 硬件数据采集与实时数据流 |
| 12 | DDS Blockset | DDS 模块集 | 基于 DDS（数据分发服务）的通信建模 |
| 13 | Deep Learning Toolbox | 深度学习工具箱 | 深度学习网络设计、训练与推理 |
| 14 | DSP HDL Toolbox | DSP HDL 工具箱 | DSP 算法的可综合 HDL 参考实现与优化 |
| 15 | DSP System Toolbox | DSP 系统工具箱 | 滤波、变换、时频分析与流处理 |
| 16 | DSP System Toolbox HDL Support | DSP 系统工具箱 HDL 支持 | 将 DSPST 算法映射到 HDL 的支持 |
| 17 | Embedded Coder | 嵌入式代码生成器 | 生成可读性高的生产级 C/C++ 代码 |
| 18 | Fixed-Point Designer | 定点设计器 | 定点数据类型设计、仿真与转换 |
| 19 | Fixed-Point Designer HDL Support | 定点设计器 HDL 支持 | 定点设计在 HDL 流程中的支持 |
| 20 | Fuzzy Logic Toolbox | 模糊逻辑工具箱 | 模糊推理系统设计与仿真 |
| 21 | HDL Coder | HDL 代码生成器 | 从模型/算法生成可综合 Verilog/VHDL |
| 22 | HDL Verifier | HDL 验证器 | MATLAB/Simulink 与 HDL 仿真器协同验证 |
| 23 | Image Acquisition Toolbox | 图像采集工具箱 | 相机/帧采集卡视频采集与接口 |
| 24 | Industrial Communication Toolbox | 工业通信工具箱 | OPC、Modbus、PROFINET 等工业协议 |
| 25 | Instrument Control Toolbox | 仪器控制工具箱 | VISA、TCP/IP、UDP、GPIB 等仪器通信 |
| 26 | Lidar Toolbox | 激光雷达工具箱 | 激光雷达点云处理与仿真 |
| 27 | Mixed-Signal Blockset | 模拟混合信号模块集 | 混合信号系统与数据转换器建模 |
| 28 | Model Predictive Control Toolbox | 模型预测控制工具箱 | MPC 控制器设计、仿真与部署 |
| 29 | Motor Control Blockset | 电机控制模块集 | 电机/逆变器模型与控制算法参考 |
| 30 | Motor Control Blockset HDL Support | 电机控制模块集 HDL 支持 | 电机控制算法的 HDL 参考与加速 |
| 31 | Navigation Toolbox | 导航工具箱 | 路径规划、定位、地图与轨迹规划 |
| 32 | Phased Array System Toolbox | 相控阵系统工具箱 | 阵列建模、波束形成与雷达/声呐处理 |
| 33 | Powertrain Blockset | 动力总成模块集 | 发动机、变速箱与传动系系统级模型 |
| 34 | Radar Toolbox | 雷达工具箱 | 雷达信号处理、波形、目标检测与仿真 |
| 35 | Reinforcement Learning Toolbox | 强化学习工具箱 | RL 代理、环境与策略训练 |
| 36 | Report Generator | 报告生成器 | 自动生成模型与结果报告（DOC/PDF/HTML） |
| 37 | Requirements Toolbox | 需求工具箱 | 需求管理、追踪与一致性检查 |
| 38 | RF Blockset | 射频模块集 | 射频电路包络仿真与系统级建模 |
| 39 | Robotics System Toolbox | 机器人系统工具箱 | 机器人算法、运动学、SLAM 与 ROS 接口 |
| 40 | Robust Control Toolbox | 鲁棒控制工具箱 | H∞/μ 综合、鲁棒分析与设计 |
| 41 | ROS Toolbox | ROS 工具箱 | ROS/ROS 2 通信、节点与仿真接口 |
| 42 | Sensor Fusion and Tracking Toolbox | 传感器融合与跟踪工具箱 | 多传感器融合、滤波与多目标跟踪 |
| 43 | SerDes Toolbox | SerDes 工具箱 | 高速串行链路建模、均衡与 IBIS-AMI |
| 44 | SimEvents | 离散事件仿真 | 事件驱动队列网络与离散事件系统建模 |
| 45 | Simscape | Simscape | 多物理域（电、机、热、液等）物理建模 |
| 46 | Simulink 3D Animation | Simulink 三维动画 | 3D 场景可视化与虚拟现实交互 |
| 47 | Simulink Coder | Simulink 代码生成器 | 从模型生成通用 C/C++ 代码 |
| 48 | Simulink Control Design | Simulink 控制设计 | 模型线性化、控制器整定与频域分析 |
| 49 | Simulink Design Optimization | Simulink 设计优化 | 参数估计、灵敏度与最优化 |
| 50 | Simulink Design Verifier | Simulink 设计验证器 | 形式化验证、测试生成与覆盖 |
| 51 | Simulink Desktop Real-Time | Simulink 桌面实时 | PC 上实时仿真与 I/O |
| 52 | Simulink Extras | Simulink 扩展 | 附加示例、实用工具与兼容模块 |
| 53 | Simulink Fault Analyzer | Simulink 故障分析器 | 故障植入、诊断与安全分析 |
| 54 | Simulink Real-Time | Simulink 实时 | 目标机实时仿真与硬件在环 (HIL) |
| 55 | Simulink Test | Simulink 测试 | 测试管理、评估、覆盖与自动化 |
| 56 | SoC Blockset | SoC 模块集 | 处理器+FPGA SoC 系统建模与 I/O |
| 57 | Stateflow | Stateflow | 状态图、流程图与事件驱动逻辑 |
| 58 | Statistics and Machine Learning Toolbox | 统计与机器学习工具箱 | 统计建模、回归/分类与特征工程 |
| 59 | System Identification Toolbox | 系统辨识工具箱 | 从数据构建动态模型与验证 |
| 60 | UAV Toolbox | 无人机工具箱 | 无人机算法、传感器与仿真场景 |
| 61 | Vehicle Dynamics Blockset | 车辆动力学模块集 | 车辆 3D 动力学与驾驶工况仿真 |
| 62 | Vehicle Network Toolbox | 车载网络工具箱 | CAN、LIN、FlexRay、J1939 通信 |
| 63 | Vision HDL Toolbox | 视觉 HDL 工具箱 | 视觉算法的 HDL 实现与硬件加速 |
| 64 | Wireless HDL Toolbox | 无线 HDL 工具箱 | 无线通信算法的 HDL 参考实现 |

### Simulink 标准模块库
标准Simulink模块库在Libraries窗口中名为Simulink，单击该选项，在模块窗口中展开该模块库。标准Simulink模块库共含19个子库。

| # | English (Library) | 中文（库） | Brief Description / 用途简介 |
|---|---|---|---|
| 1 | Commonly Used Blocks | 常用模块库 | 汇集各库中最常用的模块，便于快速搭建模型 |
| 2 | Continuous | 连续系统模块库 | 构建连续时间控制系统的仿真模块（积分、导数、传递函数、状态空间等） |
| 3 | Dashboard | 仪表盘模块库 | 可视化控件与仪器（开关、滑块、旋钮、仪表、指示灯等）用于交互与监视 |
| 4 | Discontinuities | 非连续系统模块库 | 各类非线性/非连续环节（饱和、死区、限幅、斜坡限速、反饱和等） |
| 5 | Discrete | 离散系统模块库 | 离散时间信号处理与控制（单位延时、ZOH、离散传函/状态空间等） |
| 6 | Logic and Bit Operations | 逻辑和位操作模块库 | 逻辑与/或/非、关系比较、位运算、位设置/提取等 |
| 7 | Lookup Tables | 查表模块库 | 1D/2D/ND 查表、分段插值，用于函数逼近与线性化 |
| 8 | Math Operations | 数学运算模块库 | 加减乘除、绝对值、三角函数、指数/对数、函数运算等 |
| 9 | Matrix Operations | 矩阵运算模块库 | 矩阵加减乘、转置、求逆、分块拼接、重塑、求秩等 |
| 10 | Message & Events | 消息与事件模块库 | 消息传递、队列、触发/事件管理，用于事件驱动模型 |
| 11 | Model Verification | 模型声明/验证模块库 | 断言、范围检查、动态范围检查与模型一致性验证 |
| 12 | Model-Wide Utilities | 模型全局/扩充功能库 | 文档块、注释、模型环境设置、诊断与辅助工具 |
| 13 | Ports & Subsystems | 端口和子系统模块库 | Inport/Outport、启用/触发子系统、模型引用与接口端口 |
| 14 | Signal Attributes | 信号属性模块库 | 数据类型转换、速率转换、维度/复杂度/采样时间属性设置 |
| 15 | Signal Routing | 信号路由模块库 | Mux/Demux、Switch/Multiport、Bus 创建/选择/赋值、Goto/From、数据存储 |
| 16 | Sinks | 接收器模块库 | 示波器、显示器、到工作区/文件、终端器等记录与可视化模块 |
| 17 | Sources | 信号源模块库 | 常数、阶跃、斜坡、正弦、脉冲、随机序列、来自工作区/文件等激励信号 |
| 18 | String | 字符串函数库 | 字符串创建、拼接、格式化、转换与比较等函数 |
| 19 | User-Defined Functions | 用户自定义函数库 | MATLAB Function、S-Function、Fcn 等自定义算法集成 |
| 20 | Additional Math & Discrete | 附加数学与离散函数库 | 额外数学/离散与定点相关模块（如 Fixed-Point State-Space 等） |
| 21 | Quick Insert | 快速插入函数库 | 常用分类的快捷入口（如离散、逻辑等）以加速放置模块 |

### Commonly Used Blocks | 常用模块库
| # | English Block | 中文名称 | 说明 |
|---|---|---|---|
| 1 | Bus Creator | 总线信号发生器 | 将多个输入信号合并成一个总线信号 |
| 2 | Bus Selector | 总线信号选择器 | 用来选择总线信号中的一个或多个元素 |
| 3 | Constant | 常数模块 | 输出常量信号 |
| 4 | Data Type Conversion | 数据类型转换模块 | 将信号转换成其他数据类型 |
| 5 | Delay | 延迟模块 | 对输入信号引入指定采样的延迟 |
| 6 | Demux | 信号分离器 | 将输入向量转换成多个标量/子向量输出 |
| 7 | Discrete-Time Integrator | 离散时间积分器模块 | 对离散信号进行积分运算 |
| 8 | Gain | 增益模块 | 对输入信号乘以指定增益 |
| 9 | Ground | 信号接地模块 | 提供零值参考信号，接未连接输入 |
| 10 | In1 | 输入接口模块 | 模型/子系统的输入端口 |
| 11 | Integrator | 积分器模块 | 连续时间积分运算 |
| 12 | Logical Operator | 逻辑操作模块 | 与/或/非等逻辑运算 |
| 13 | Mux | 信号合成器模块 | 将标量/向量/矩阵合成为一个向量 |
| 14 | Out1 | 输出接口模块 | 模型/子系统的输出端口 |
| 15 | Product | 乘法模块 | 执行标量、向量和矩阵的乘法 |
| 16 | Relational Operator | 关系操作模块 | 比较关系，输出布尔类型 |
| 17 | Saturation | 饱和度模块 | 定义输入信号的最大和最小值 |
| 18 | Scope | 输出示波器模块 | 显示信号波形 |
| 19 | Subsystem | 创建子系统模块 | 将模块封装为子系统 |
| 20 | Sum | 求和模块 | 加法器，对信号求和/求差 |
| 21 | Switch | 开关切换模块 | 由第二输入控制在第一与第三输入间切换 |
| 22 | Terminator | 信号终端模块 | 连接未使用的输出端，避免警告 |
| 23 | Vector Concatenate | 向量串联模块 | 将相同数据类型的向量输入按维度串联 |



Derivative	计算连续输入信号关于时间的逼近连续导数
Descriptor State-Space	Model linear implicit systems
Entity Transport Delay	Introduce a delay in propagation of a SimEvents message (自 R2019b 起)
First Order Hold	在输入信号上实现线性外插一阶保持 (自 R2019b 起)
Integrator	对信号求积分
Integrator Limited	对信号求积分
PID Controller	连续时间或离散时间 PID 控制器
PID Controller (2DOF)	连续时间或离散时间二自由度 PID 控制器
Second-Order Integrator	输入信号的二阶积分
Second-Order Integrator Limited	输入信号的二阶积分
State-Space	实现线性状态空间系统
Transfer Fcn	将线性系统建模为传递函数
Transport Delay	按给定的时间量延迟输入
Variable Time Delay	按可变时间量延迟输入
Variable Transport Delay	按可变时间量延迟输入
Zero-Pole	使用零极点增益传递函数进行系统建模

## 建模
设计动态系统的模型

## 仿真
运行模型、查看结果并验证系统行为

## 工程管理
创建工程、管理共享的模型组件、与源代码管理进行交互

## 模块和模块集创建
创建可重用的模块、模块集和模块封装以扩展 Simulink 的建模功能

## 仿真集成
执行系统集成；组合、编译和仿真大型模型

## Simulink 支持的硬件
支持第三方硬件，例如 Arduino® 和 Raspberry Pi®
