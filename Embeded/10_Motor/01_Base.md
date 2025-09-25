### 磁

**磁感应强度**（磁通密度）

$$
\vec{dB}=\frac{Idl \vec{a_{R}}}{R^2}
$$

$$
B=\frac{F}{IL}(1T=1\frac{N}{A\cdot m})
$$

**磁通量**

$$
\phi=\int_AB \cdot dA
$$

$$
\phi=B\cdot S(1Wb=1T\cdot m^2)
$$

**磁导率**

$$
\mu>>\mu_0（\mu_0=4\pi \times10^{-7}H/m）
$$

**磁场强度**（[B与H的关系](https://zhuanlan.zhihu.com/p/57868125)）

$$
H=\frac{B}{\mu}
$$

**安倍环路定理**

$$
\oint_i H \cdot dl = \sum_{k=1}^N i_k
$$

$$
Hl=Ni
$$

**磁动势**（**磁路欧姆定律**，安匝数）

$$
F=Ni=Hl=\frac{B}{\mu}\cdot l=\phi \frac{l}{\mu A}=\phi R_m=\frac{\phi}{\Lambda_m} （\Lambda_m磁导：Wb/A或H）
$$

**磁阻**

$$
R_m=\frac{l}{\mu A}（R_m磁阻：A/Wb或1/H，铁磁材料磁阻非线性）
$$

**磁路基尔霍夫第一定律**

$$
\phi_1=\phi_2+\phi_3+\cdots+\phi_n
$$

**磁路基尔霍夫第二定律**

$$
\sum_{k=1}^N H_kl_k=Ni（H_kl_k是第k段磁位降）
$$

**磁化**

- 磁畴
- 起始段、直线段（起始点：膝点）、饱和段
- 磁滞回线（顽磁性，剩磁）
- 基本磁化曲线（用于磁路计算）

**铁磁材料**

软磁材料：磁滞损耗小，磁导率高，常用来制造变压器和电机的铁芯。（铸铁、铸钢、硅钢片、坡莫合金）

硬磁材料（永磁材料）：磁滞回线宽，剩磁和矫顽力都大，常用来制造永磁铁。（铝镍钴合金和稀土合金）

**铁芯损耗（铁损）**

磁滞损耗：

$$
P_h=C_hfB_m^nV(n取决于材料，硅钢片n=1.6\sim 2.3;V铁磁材料体积；C_h磁滞损耗系数，取决于材料)
$$

涡流损耗：

$$
P_e=C_e\Delta^2f^2B_m^2V(C^e涡流损耗系数，反比于材料电阻率；\Delta硅钢片厚度)
$$

 铁芯损耗：

$$
P_{Fe}\approx C_{Fe}f^1.3B_m^2G(C_{Fe}铁芯损耗系数；G铁芯质量)
$$

**感应电动势**（法拉第电磁感应定律）

$$
e=-N\frac{d\phi}{dt}=-\frac{d\psi}{dt}(螺旋管；e回路感应电动势；\psi交链回路的磁链)
$$

$$
\psi=N\phi
$$

$$
e=\frac{d\phi}{dt}= \frac{B\cdot dS}{dt}=\int (\nu \times B) \cdot dl(导体在磁场中运动；\nu导体速度)
$$

**毕奥-萨伐尔电磁力定律**（电磁力）

$$
f=i\int dl\times B
$$

$$
f=Bil
$$

**能量守恒**

$$
输入/输出电能=磁场储存在增量+转换为热能的能量损耗+输出的机械能
$$

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

### 电机

### 算法

**CLARK**

**PARK**

**PID**

**反PARK**

**SVPWM**

### 电

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

[高中数学](https://mp.weixin.qq.com/s/TqTkFqDkfi4g_OH8I-T64A?mpshare=1&scene=1&srcid=0424XSmeuh63kcVvwmaLM5tE&sharer_shareinfo=9e06fb0c2aea07cf17aebc92cc7548e3&sharer_shareinfo_first=9e06fb0c2aea07cf17aebc92cc7548e3&from=industrynews&color_scheme=light#rd)

[高中电磁学](https://mp.weixin.qq.com/s/AzVT87d--sKFoAk6RupNrQ?mpshare=1&scene=1&srcid=0425iEsLOTVJEYMIP9LokiDf&sharer_shareinfo=4d7ff84501ec73cb3d2130357b1012d3&sharer_shareinfo_first=4d7ff84501ec73cb3d2130357b1012d3&from=industrynews&color_scheme=light#rd)

[Markdown公式基础](https://blog.csdn.net/qq_16851599/article/details/131948628)

[Markdown公式详细](https://blog.csdn.net/wzk4869/article/details/126863936)

[FOC与SVPWM](https://zhuanlan.zhihu.com/p/147659820)