import { renderer } from '../utils/renderer';

var is_show_guide = true;
var input_value = '';

export function show_guide() {
  if (is_show_guide) {
    input_value = document.getElementById('input').value;
    document.getElementById('input').value = INSTRCUTION;
  } else {
    document.getElementById('input').value = input_value;
    renderer(document.getElementById('input'), document.getElementById('output'));
  }
  is_show_guide = !is_show_guide;
}

const INSTRCUTION =  `可以实时预览数学公式(先输入数学环境)，创建列表和矩阵
处理Maple生成的latex代码等。

双击： 左侧收起/恢复，
    
注：
    1. 个人用，不具有普适性，不保证完全正确。 不过一直在用, 经常更新修复bug.
    2. 仅支持latex数学公式，其它命令不支持。
    3. 如出现错误， 可以把相应的tex代码和错误描述
       发送至: jiaminxin@outlook.com.
    4. mma: Mathematics, szce: stationary zero-curvature equation.
    
latex2maple:
      将mathpix-snipping-tool通过图片识别生成的latex代码
      转化成maple的表达式。 目前对共轭还有问题.
      注意, 如果tex代码不是通过mathpix-snipping-tool生成, 可能会转换失败.
      因为每个人书写习惯不同, 情况太多, 不好处理.

maple2mma:
      将复制的maple表达式转换为mathematics的表达式。
      目前支持以下函数：
      exp, log, abs, sqrt, conjugate, Re, Im,
      sin, cos, tan, sinh, cosh, tanh, sech, csch,

DT-gT: 
      指将gauge变换T代入T_x+TU=U_hatT.
    
DT-coe:
      指将gauge变换T代入T_x+TU=U_hatT后比较各式中
      lambda各次幂系数所得等式 
  
连续公式格式化：
      格式化maple生成的latex代码，去除冗余
      将latex代码粘贴在输入框，点击格式化即可。
    
连续szce格式化：
      连续静态零曲率方程格式化，并且输出各未知量
      的依赖关系。
  
离散公式格式化：
      格式化maple生成的latex代码，去除冗余
      将latex代码粘贴在输入框，点击格式化即可。

离散szce格式化：
      离散静态零曲率方程格式化，并且输出各未知量
      的依赖关系。
 
grammarly:
      使用Grammarly网站检查论文(英语)小错误。
      将tex内容中的数学公式等关键信息删除。

Tex格式化：
      格式化.tex文本。 提供断句，缩进。 
      (目前存在的bug: 以某一环境结束的段落会与下一个段落合并.)

`