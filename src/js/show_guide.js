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
    1. 个人用，不具有普适性，不保证完全正确。 
    2. 仅支持latex数学公式，其它命令不支持。
    
欢迎使用， 如出现错误， 希望可以把相应的tex代码和错误描述
发送至: jiaminxin@outlook.com.

excel数据转列表：  
      输入框清空，将excel数据复制到输入框，点击转换按钮
      即可. 要求不同行要换行，数据中无空格, 
      不同数据间有空格(或tab键)隔开.
      
连续公式格式化：
      格式化maple生成的latex代码，去除冗余
      将latex代码粘贴在输入框，点击格式化即可。
    
展示系数格式化：
      主要针对无穷展开同次幂系数。
    
szce格式化：
      连续静态零曲率方程格式化，并且输出各未知量
      的依赖关系。
    
离散szce格式化：
      离散静态零曲率方程格式化，并且输出各未知量
      的依赖关系。
    
DT-gT: 
      指将gauge变换T代入T_x+TU=U_hatT.
    
DT-coe:
      指将gauge变换T代入T_x+TU=U_hatT后比较各式中
      lambda各次幂系数所得等式

latex2maple:
      将mathpix-snipping-tool通过图片识别生成的latex代码
      转化成maple的表达式。 支持单个公式(可以多行)
      或者多个公式逗号隔开。 

maple2mma:
      将复制的maple表达式转换为mathematics的表达式。
      目前支持以下函数：
      exp, log, abs, sqrt, conjugate, Re, Im,
      sin, cos, tan, sinh, cosh, tanh, sech, csch, 

grammarly:
      使用Grammarly网站检查论文(英语)小错误。
      将tex内容中的数学公式等关键信息删除。

Tex格式化：
      格式化.tex文本。 支持断句，缩进。 
      (目前存在的bug: 以某一环境结束的段落会与下一个段落合并.)
      
typora:
      读取typora生成的markdown文档并解析。
      目前仅支持标题，数学公式解析。    
`