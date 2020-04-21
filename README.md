# latex toolbox

主要用于处理maple所生成的符号运算结果的latex代码(孤立子理论中的方程族推导，达布变换，代数几何解等)，使用<a href='https://jiandandaoxingfu.github.io/latex-toolbox'>点击这里</a>


## 功能: 
可以实时预览数学公式(先输入数学环境)，以及excel数据
或者文件中复制的列表转列表，创建列表和矩阵。 

### excel数据转列表：	 
输入框清空，将excel数据复制到输入框，点击转换按钮即可. 要求不同行要换行，数据中无空格, 不同数据间有空格(或tab键)隔开.

### 连续公式格式化：
格式化maple生成的latex代码，去除冗余将latex代码粘贴在输入框，点击格式化即可。

### 展示系数格式化：
主要针对无穷展开同次幂系数。

### szce格式化：
连续静态零曲率方程格式化，并且输出各未知量的依赖关系。

### 离散szce格式化：
离散静态零曲率方程格式化，并且输出各未知量的依赖关系。

### DT-gT: 
指将gauge变换T代入$T_x+TU=U\hat T$.

###	DT-coe:
指将gauge变换T代入$T_x+TU=U\hat T$后比较各式中$\lambda$
各次幂系数所得等式

###	latex2maple:
将mathpix-snipping-tool通过图片识别生成的矩阵的latex代码
转化成maple中矩阵输入表达式。
目前主要支持以下环境：
	矩阵：如

```latex
\begin{array}{cc}
	u  		 & 1 \\
	\lambda  & v
\end{array}
```

​	多行：如

```latex
\begin{aligned}{cc}
	&u + 1 \
	&\lambda + v
\end{aligned}
```

​	单个公式：如

```latex
x^2 + y^2
```

### 双击： 左侧收起/恢复，

**注： **

- 个人用，不具有普适性，不保证完全正确。上面是未格式化的结果，是正确的。
- 仅支持latex数学公式，其它命令不支持。

## 相关库

- create-react-app
- ant-design
- MathJax