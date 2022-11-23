import React from 'react';
import { Button } from 'antd';
import { show_guide } from '../js/show_guide';
import { latex2maple } from '../js/latex2maple';
import { maple2mma } from '../js/maple2mma';
import {
  DT_gauge, DT_coe, continuous_formula, 
  continuous_szce_formula, discrete_formula, discrete_szce_formula
} from '../js/maple2latex';
import { grammarly } from '../js/grammarly';
import { tex_format } from '../js/tex_format';
import { styles } from '../utils/styles'

const show_table = () => {
  document.getElementById('table').style.display = 'block';
  document.getElementById('tip').style.display = 'block';
};

const timeline = () => {
  document.getElementById('timeline').click();
};

const btn_name = ['使用说明', '时间轴', 
                  '创建矩阵',
                  'latex2maple', 'maple2mma',
                  'DT-gT', 'DT-coe', 
                  '连续公式格式化', '连续szce格式化', 
                  '离散公式格式化', '离散szce格式化',
                  'grammarly', 'latex格式化'];
const btn_click = [show_guide, timeline,
                   show_table,
                   latex2maple, maple2mma,
                   DT_gauge, DT_coe, 
                   continuous_formula, continuous_szce_formula,
                   discrete_formula, discrete_szce_formula,
                   grammarly, tex_format];
const btn_type = ["danger", "danger",
                  "primary",
                  "default", "default",
                  "primary", "primary",
                  "default", "default",
                  "primary", "primary",
                  "default", "default"
                ];

function ButtonContainer() {
  const btn_arr = () => {
    let n = btn_name.length;
    let arr = [];
    for( let i=0; i<n; i++ ) {
      arr.push( 
        <Button
          style={ styles.button } 
          onClick={ btn_click[i] }
          type={ btn_type[i] } 
          key={ i }
        >
          { btn_name[i] }
        </Button> 
      );
    }

    return arr;
  }
  
  return (
    <div>
      { btn_arr() }
    </div>
  )
}

export default ButtonContainer;