# 磁路
## 基础物理量
### 安倍环路定理 $\oint$
$$\oint_i H \cdot dl = \sum_{k=1}^N i_k \quad\Rarr\quad Hl=Ni$$

$$\sum_{k=1}^N H_kl_k=Ni（H_kl_k是第k段磁位降，磁路基尔霍夫第二定律）$$

### 磁场强度 $H$
$$H=\frac{Ni}{l}$$

### 相对磁导率 $\mu$
$$\mu>>\mu_0\quad(真空磁导率\mu_0=4\pi \times10^{-7}H/m)$$

### 磁感应强度 $B$
$$B=\mu H（磁场强度推导）$$

$$\vec{dB}=\frac{Idl \vec{a_{R}}}{R^2}$$  

$$B=\frac{F}{IL} \quad(电磁力推导，1T=1\frac{N}{A\cdot m})$$

$$B=\frac{\phi}{S}(B又被称为磁通密度)$$

### 磁动势 $F$
$$F=Ni=Hl$$

### 电磁力 $F$
毕奥-萨伐尔电磁力定律
$$F=i\int dl\times B \quad\Rarr\quad F=Bil$$

### 磁阻 $R_m$
$$Hl=\frac{B}{\mu}\cdot l=\phi \frac{l}{\mu A}=\phi R_m  \quad\Rarr\quad R_m=\frac{l}{\mu A}= \frac{1}{\Lambda_m} \\（R_m磁阻：A/Wb或1/H，铁磁材料磁阻非线性，\Lambda_m，磁导：Wb/A或H）$$

### 磁通量 $\phi$
$$\phi=\int_AB \cdot dA \quad\Rarr\quad \phi=B\cdot S(1Wb=1T\cdot m^2)$$

$$\phi_1=\phi_2+\phi_3+\cdots+\phi_n(磁路基尔霍夫第一定律)$$

### 磁链 $\psi$
$$\psi=N\phi\quad(单位：Wb·turn 或 V·s)$$

$$\psi=Li \quad\Rarr\quad e=-L\frac{di}{dt}\\(线性磁路中的自感关系，L为自感系数，单位：H)$$

$$\psi_1=L_1i_1+M_{12}i_2 \quad \quad \psi_2=M_{21}i_1 \\ (多绕组或互感情况，M为互感，M_{12}=M_{21})$$

### 电感 $L$
$$L=\frac{N^2}{R_m}=\frac{N^2\mu A}{l} \quad\Rarr\quad e=-L\frac{di}{dt}$$
### 感应电动势 $e$
感应电动势依据法拉第电磁感应定律表达。
$$e=-N\frac{d\phi}{dt}=-\frac{d\psi}{dt}\\(螺旋管；e回路感应电动势；\psi交链回路的磁链)$$

$$e= \frac{B\cdot dS}{dt}=\int (\nu \times B) \cdot dl=Blv\\(导体在磁场中运动；\nu:导体速度)$$

$$\phi= \phi_m sin(\omega t)(正弦磁通)\Rarr  e_t=N\omega \phi_m sin(\omega t-\frac{\pi}{2})(瞬时值) \Rarr e_{rms} = 4.44fN\phi_m(有效值)$$

### 磁能

### 磁共能

## 基础概念
### 磁化

- 磁畴
- 起始段、直线段（起始点：膝点）、饱和段
- 磁滞回线（顽磁性，剩磁）
- 基本磁化曲线（用于磁路计算）

### 铁磁材料

软磁材料：磁滞损耗小，磁导率高，常用来制造变压器和电机的铁芯。（铸铁、铸钢、硅钢片、坡莫合金）

硬磁材料（永磁材料）：磁滞回线宽，剩磁和矫顽力都大，常用来制造永磁铁。（铝镍钴合金和稀土合金）

### 磁滞损耗
$$P_h=C_hfB_m^nV\\(n取决于材料，硅钢片n=1.6\sim 2.3;V铁磁材料体积；C_h磁滞损耗系数，取决于材料)$$

### 涡流损耗
$$P_e=C_e\Delta^2f^2B_m^2V\\(C^e涡流损耗系数，反比于材料电阻率；\Delta硅钢片厚度)$$

### 铁芯损耗
$$P_{Fe}\approx C_{Fe}f^{1.3}B_m^2G\\(C_{Fe}铁芯损耗系数；G铁芯质量)$$

### 能量守恒
**能量守恒**

$$
输入/输出电能=磁场储存在增量+转换为热能的能量损耗+输出的机械能
$$
## 示例分析
<img src="assets_01%20电机基础/2025-05-12-15-14-57-image.png" title="" alt="" width="301"> 

**磁动势**

$$
f_A=N_Ai_A 
=H_ml_m+H_{\delta}\delta 
= \frac{B_m}{{\mu}_{Fe}}l_m+\frac{B_{\delta}}{\mu_0}\delta 
=B_mS\frac{l_m}{{\mu}_{Fe}S}+B_{\delta}\frac{\delta}{\mu_0S} \\
=\phi_{mA}R_m+\phi_\delta R_\delta
=\frac{\phi_{mA}}{\Lambda_m}+\frac{\phi_{\delta}}{\Lambda_\delta}
=\phi_{\delta}(\frac{1}{\Lambda_m}+\frac{1}{\Lambda_\delta})
=\phi_{\delta}(\frac{\Lambda_m \Lambda_\delta}{\Lambda_m +\Lambda_\delta})
=\phi_{\delta} \Lambda_{m\delta}\\
=\phi_{mA}R_{m\delta}
$$

**磁链**

$$
\psi_{AA}=\psi_{\sigma A}+\psi_{mA}
=\psi_{\sigma A}+\phi_{mA}N_A
=\psi_{\sigma A}+\frac{N^2_A}{R_{m\delta}}i_A
=\psi_{\sigma A}+N_A^2\Lambda_{m\delta}i_A\\
=L_{\sigma A}i_A+L_{mA}i_A
=L_Ai_A
$$

**电磁**

$$
u_A=R_Ai_A-e_{AA}=R_Ai_A+\frac{d\psi_{AA}}{dt}
$$

$$
dW_{eAA}=dW_m=u_Ai_Adt-R_Ai_A^2dt=-e_{AA}i_Adt=i_Ad\psi_{AA}=i_Ad\psi_{mA}\
(忽略漏磁)
$$

**磁能**

$$
W_m=\omega_mV_\delta=\frac{1}{2}BHV_\delta=\frac{1}{2}\frac{B^2}{\mu}V_\delta\
(忽略铁心储能)
$$

$$
W_m=\int_0^{mA(\psi)}i_Ad\psi
=\int_0^{ma(\psi)}i_Ad(\frac{N_A^2}{R_{m\delta}})
=\int_0^{ma(\psi)}i_Ad(\frac{N_A^2}{R_{\delta}})(忽略铁心磁阻)
$$

**磁共能**

$$
W'_m=\int_0^{A(i)}=\psi_{mA}di
$$

$$
W_m+W'_m=i_A\psi_{mA}
$$

若忽略铁心磁阻，磁场能量全部储存在气隙中

$$
W_m=W'_m=\frac{1}{2}i_A\psi_{mA}=\frac{1}{2}L_{mA}i_A^2=\frac{1}{2}f_AB_\delta S
=\frac{1}{2}H_\delta B_\delta V_\delta=\frac{1}{2}\frac{B_\delta^2}{\mu_0}V_\delta
$$

<img src="assets_01%20电机基础/2025-05-12-16-18-08-image.png" title="" alt="" width="357">

### 变压器

**一次绕组电压方程**

$$
u_1=R_1i_{10}-e_{1\sigma}-e_1=R1i_{10}+L_{1\sigma} \frac{di_{10}}{dt}-e_1\approx -e_1（e_{1\sigma}一次漏磁通）
$$

$$
e_2=e_2
$$

**一次主磁通**

$$
\phi=\Phi_m sin(\omega t)（\Phi_m主磁通幅值；\omega磁通交变的角频率；\omega=2\pi f）
$$

**感应电动势**

$$
e_1=-N_1\frac{d\phi}{dt}=\omega N_1\Phi_m sin(\omega t-\frac{\pi}{2})=\sqrt{2}E_1sin(\omega t-\frac{\pi}{2})（E_1感应电动势有效值）
$$

$$
E_1=\frac{\omega N_1\Phi_m}{\sqrt{2}}=\frac{2\pi}{\sqrt{2}}fN_1\Phi_m=4.44fN_1\Phi_m
$$

$$
\Phi_m=\frac{E_1}{4.44fN_1}\approx \frac{U_1}{4.44fN_1}
$$

$$
E_2=4.44fN_2\Phi_m
$$
# 电机
好的，我们来详细探讨永磁同步电机（PMSM）的几个核心公式及其推导过程。这些公式是理解PMSM工作原理、控制策略（如矢量控制FOC）和性能分析的基础。

我们将重点关注在转子同步旋转坐标系（d-q轴系）下的模型，因为它是最常用且最强大的分析工具。

---

### 1. 核心假设与坐标变换

在开始推导前，有两个关键前提：

1.  **理想电机假设**：忽略磁路饱和、涡流和磁滞损耗，认为三相绕组对称，气隙磁场正弦分布。
2.  **坐标变换（Clark & Park变换）**：这是将复杂的三相交流量（ABC坐标系）转换为相对简单的直流量（d-q坐标系）的数学工具。
    *   **Clark变换**：将三相静止坐标系（ABC）转换为两相静止坐标系（α-β）。
    *   **Park变换**：将两相静止坐标系（α-β）转换为随转子同步旋转的坐标系（d-q）。
    *   在d-q坐标系中，所有交流量（如电压、电流、磁链）都表现为直流量，极大地简化了分析和控制。

**d轴**：始终与转子永磁体磁场的方向对齐（直轴）。
**q轴**：超前d轴90度电角度（交轴）。

---

### 2. 重要公式及推导

#### 公式一：d-q轴电压方程

这是PMSM最核心的动态方程。

**公式：**
\[
\begin{cases}
u_d = R_s i_d + \frac{d\psi_d}{dt} - \omega_e \psi_q \\
u_q = R_s i_q + \frac{d\psi_q}{dt} + \omega_e \psi_d
\end{cases}
\]

**参数说明：**
*   \( u_d, u_q \)：d轴和q轴定子电压
*   \( i_d, i_q \)：d轴和q轴定子电流
*   \( R_s \)：定子相电阻
*   \( \psi_d, \psi_q \)：d轴和q轴磁链
*   \( \omega_e \)：转子电角速度 (\( \omega_e = P \cdot \omega_m \))，其中 \( P \) 为极对数，\( \omega_m \) 为机械角速度。

**推导过程：**

1.  **物理基础 - 法拉第电磁感应定律**：定子绕组的总电压由电阻压降和感应电动势两部分组成。感应电动势来源于两部分磁链的变化：
    *   **变压器电动势**：由磁链大小随时间变化产生 (\( \frac{d\psi}{dt} \))。
    *   **运动电动势（反电动势）**：由绕组与磁场有相对运动产生。

2.  **在旋转坐标系下的表达**：对于一个在d-q坐标系中以角速度 \( \omega_e \) 旋转的线圈，其磁链变化率不仅包含自身的时变部分，还包含由于坐标系旋转导致的交叉耦合部分。这需要用**矢量的物质导数**来表达。

3.  **数学推导**：
    定子磁链矢量 \( \vec{\psi_s} \) 在旋转坐标系中可表示为 \( \vec{\psi_s} = \psi_d \vec{i} + \psi_q \vec{j} \)，其中 \( \vec{i} \) 和 \( \vec{j} \) 是d轴和q轴的单位矢量。
    根据电磁感应定律，定子电压矢量 \( \vec{u_s} \) 为：
    \[
    \vec{u_s} = R_s \vec{i_s} + \frac{d\vec{\psi_s}}{dt}
    \]
    关键步骤在于对 \( \frac{d\vec{\psi_s}}{dt} \) 的求解。由于坐标系本身在旋转，单位矢量 \( \vec{i} \) 和 \( \vec{j} \) 也在变化。其导数关系为 \( \frac{d\vec{i}}{dt} = \omega_e \vec{j} \)， \( \frac{d\vec{j}}{dt} = -\omega_e \vec{i} \)。
    因此：
    \[
    \frac{d\vec{\psi_s}}{dt} = \frac{d(\psi_d \vec{i} + \psi_q \vec{j})}{dt} = \frac{d\psi_d}{dt}\vec{i} + \psi_d \frac{d\vec{i}}{dt} + \frac{d\psi_q}{dt}\vec{j} + \psi_q \frac{d\vec{j}}{dt}
    \]
    \[
    = \frac{d\psi_d}{dt}\vec{i} + \psi_d (\omega_e \vec{j}) + \frac{d\psi_q}{dt}\vec{j} + \psi_q (-\omega_e \vec{i})
    \]
    \[
    = \left( \frac{d\psi_d}{dt} - \omega_e \psi_q \right) \vec{i} + \left( \frac{d\psi_q}{dt} + \omega_e \psi_d \right) \vec{j}
    \]

4.  **得到分量式**：将上述结果代回电压方程，并分别提取d轴和q轴分量，即可得到最终的d-q轴电压方程。
    *   d轴电压 \( u_d \) 包含：电阻压降 \( R_s i_d \)、d轴变压器电动势 \( \frac{d\psi_d}{dt} \)、以及由于q轴磁链在旋转时切割d轴绕组产生的运动电动势 \( -\omega_e \psi_q \)。
    *   q轴电压 \( u_q \) 包含：电阻压降 \( R_s i_q \)、q轴变压器电动势 \( \frac{d\psi_q}{dt} \)、以及由于d轴磁链在旋转时切割q轴绕组产生的运动电动势 \( +\omega_e \psi_d \)。

---

#### 公式二：d-q轴磁链方程

**公式：**
\[
\begin{cases}
\psi_d = L_d i_d + \psi_f \\
\psi_q = L_q i_q
\end{cases}
\]

**参数说明：**
*   \( L_d, L_q \)：d轴和q轴定子电感
*   \( \psi_f \)：永磁体产生的磁链，恒定不变

**推导过程：**

1.  **磁链的线性叠加原理**：在理想电机假设下，d轴和q轴的总磁链由两部分线性叠加而成：
    *   **电枢反应磁链**：由定子电流 \( i_d \) 和 \( i_q \) 产生。根据电感定义，这部分磁链为 \( L_d i_d \) 和 \( L_q i_q \)。
    *   **永磁体磁链**：转子永磁体产生的主磁场。由于d轴与永磁体磁场方向一致，所以永磁体磁链 \( \psi_f \) 只贡献给d轴磁链，q轴永磁体磁链为0。

2.  **为什么 \( L_d \) 和 \( L_q \) 不同？**
    *   对于内置式永磁同步电机（IPMSM），d轴磁路因为要穿过磁阻很大的永磁体（其磁导率接近空气），所以磁阻大，电感 \( L_d \) 较小。
    *   q轴磁路主要穿过硅钢片，磁阻小，电感 \( L_q \) 较大。即 \( L_q > L_d \)。
    *   对于表贴式永磁同步电机（SPMSM），永磁体磁导率与气隙相近，可以认为 \( L_d \approx L_q \)。

将电枢反应磁链和永磁体磁链相加，就得到了上述磁链方程。

---

#### 公式三：电磁转矩方程

这是电机产生驱动力的核心公式。

**公式（通用形式）：**
\[
T_e = \frac{3}{2} P (\psi_d i_q - \psi_q i_d)
\]

**将磁链方程代入，得到两种常见形式：**
1.  **基于磁链和电流的形式**：
    \[
    T_e = \frac{3}{2} P [\psi_f i_q + (L_d - L_q) i_d i_q]
    \]
2.  **对于SPMSM (\( L_d = L_q \))**：
    \[
    T_e = \frac{3}{2} P \psi_f i_q
    \]

**推导过程：**

电磁转矩的推导基于**机电能量转换原理**。系统的磁场共能 \( W_{co} \) 对机械角位移 \( \theta_m \) 的偏导数，即为电磁转矩。
\[
T_e = \frac{\partial W_{co}}{\partial \theta_m}
\]

1.  **磁场共能**：在d-q坐标系下，磁链是电流的线性函数，磁场共能 \( W_{co} \) 可以表示为：
    \[
    W_{co} = \frac{1}{2} (L_d i_d^2 + L_q i_q^2) + \psi_f i_d + \frac{1}{2} \text{(永磁体自能，常数)}
    \]
    注意：永磁体贡献的磁共能项是 \( \psi_f i_d \)。

2.  **求偏导数**：机械角位移 \( \theta_m \) 与电角度 \( \theta_e \) 的关系为 \( \theta_e = P \theta_m \)。我们需要求 \( W_{co} \) 对 \( \theta_m \) 的偏导。但 \( W_{co} \) 是 \( i_d, i_q \) 的函数，而 \( i_d, i_q \) 本身也是 \( \theta_m \) 的函数（通过坐标变换与转子位置关联）。这里需要运用**多元复合函数求导法则（链式法则）**。

    实际上，在恒定的 \( i_d \) 和 \( i_q \) 下（即在稳态矢量控制中），对 \( \theta_m \) 求导时，只有磁链方程中与位置相关的部分（主要是永磁体磁链 \( \psi_f \) 的方向）会变化。经过严谨的数学推导（此处省略繁琐的中间步骤），最终结果为：
    \[
    T_e = \frac{3}{2} P (\psi_d i_q - \psi_q i_d)
    \]
    系数 \( \frac{3}{2} \) 是为了保证变换前后的功率守恒。

3.  **物理意义**：
    *   将磁链方程 \( \psi_d = L_d i_d + \psi_f \)， \( \psi_q = L_q i_q \) 代入上式：
        \[
        T_e = \frac{3}{2} P [(L_d i_d + \psi_f) i_q - (L_q i_q) i_d] = \frac{3}{2} P [\psi_f i_q + (L_d - L_q) i_d i_q]
        \]
    *   **第一项 \( \psi_f i_q \)**：称为**永磁转矩**或**励磁转矩**。是由永磁体磁场与q轴电流（转矩电流）相互作用产生的。这是SPMSM和IPMSM的主要转矩来源。
    *   **第二项 \( (L_d - L_q) i_d i_q \)**：称为**磁阻转矩**。是由于d轴和q轴磁路磁阻不相等（即 \( L_d \neq L_q \)）而产生的。只有IPMSM (\( L_q > L_d \)) 才存在此项，且为负值。通过合理控制 \( i_d \) 为负值（弱磁控制），可以使此项变为正值，从而增加总转矩。

---

#### 公式四：运动方程

**公式：**
\[
T_e - T_L = J \frac{d\omega_m}{dt} + B \omega_m
\]

**参数说明：**
*   \( T_e \)：电磁转矩
*   \( T_L \)：负载转矩
*   \( J \)：系统的转动惯量
*   \( B \)：粘性摩擦系数
*   \( \omega_m \)：转子机械角速度

**推导过程：**
这个公式直接来源于牛顿第二定律（旋转形式）。
*   \( T_e - T_L \) 是作用在转子上的净转矩。
*   净转矩用于两部分：
    1.  **产生角加速度**： \( J \frac{d\omega_m}{dt} \)（惯性项）
    2.  **克服摩擦**： \( B \omega_m \)（阻尼项）

这个方程描述了电机的机械动力学特性，是进行速度环控制器设计（如PI调节器）的基础。

### 总结

这四个公式构成了永磁同步电机矢量控制的理论核心：

1.  **电压方程** + **磁链方程** -> 描述了电机的**电气动态**，用于设计电流环控制器和状态观测器。
2.  **转矩方程** -> 连接了电气部分和机械部分，是实现转矩控制和解耦控制（\( i_d=0 \) 控制、最大转矩电流比控制等）的关键。
3.  **运动方程** -> 描述了电机的**机械动态**，用于设计速度环和位置环控制器。

理解这些公式的推导过程和物理意义，是深入掌握永磁同步电机高性能控制技术的基石。

# 算法

**CLARK**

**PARK**

**PID**

**反PARK**

**SVPWM**

# 电

**库仑定律**

$$
e=1.6\times 10^-19C
$$

$$
k=9\times 10^9 Nm^2/C^2
$$

$$
F=K\frac{Qq}{r^2}
$$

**场强**

$$
E=\frac{F}{q}(定义式)
$$

$$
E=\frac{KQ}{r^2}(真空点电荷)
$$

$$
E=\frac{U}{d}(匀强电场E、d共线)
$$

**电势**

$$
U_{AB}=\frac{W_{A \rightarrow B}}{q}
$$

$$
\varphi_A = \frac{W_{A\rightarrow 0}}{q}
$$

# 参考文档
[BH关系](https://zhuanlan.zhihu.com/p/57868125)
[高中数学](https://mp.weixin.qq.com/s/TqTkFqDkfi4g_OH8I-T64A?mpshare=1&scene=1&srcid=0424XSmeuh63kcVvwmaLM5tE&sharer_shareinfo=9e06fb0c2aea07cf17aebc92cc7548e3&sharer_shareinfo_first=9e06fb0c2aea07cf17aebc92cc7548e3&from=industrynews&color_scheme=light#rd)

[高中电磁学](https://mp.weixin.qq.com/s/AzVT87d--sKFoAk6RupNrQ?mpshare=1&scene=1&srcid=0425iEsLOTVJEYMIP9LokiDf&sharer_shareinfo=4d7ff84501ec73cb3d2130357b1012d3&sharer_shareinfo_first=4d7ff84501ec73cb3d2130357b1012d3&from=industrynews&color_scheme=light#rd)

[Markdown公式基础](https://blog.csdn.net/qq_16851599/article/details/131948628)

[Markdown公式详细](https://blog.csdn.net/wzk4869/article/details/126863936)

[FOC与SVPWM](https://zhuanlan.zhihu.com/p/147659820)