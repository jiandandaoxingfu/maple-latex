import React from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { show_guide } from '../js/show_guide';
import { excel2table } from '../js/excel2table';
import { latex2maple } from '../js/latex2maple';
import { maple2mma } from '../js/maple2mma';
import {
  DT_gauge, DT_coe, continuous_formula, coeff_formula, 
  continuous_szce_formula, discrete_formula, discrete_szce_formula
} from '../js/maple2latex';
import { grammarly } from '../js/grammarly';
import { tex_format } from '../js/tex_format';
import { typora } from '../js/typora';
import { styles } from '../utils/styles'

const show_table = () => {
  document.getElementById('table').style.display = 'block';
  document.getElementById('tip').style.display = 'block';
};

const timeline = () => {
  document.getElementById('timeline').click();
};

const btn_name = ['使用说明', '时间轴', '创建矩阵', 'Excel转列表', 'latex2maple', 'maple2mma', 
                    'DT-gT', 'DT-coe', '连续公式格式化', '展式系数格式化', '连续szce格式化', 
                    '离散公式格式化', '离散szce格式化', 'grammarly', 'Tex格式化', 'typora'];
const btn_click = [show_guide, timeline, show_table, excel2table, latex2maple, maple2mma, 
                     DT_gauge, DT_coe, continuous_formula, coeff_formula, continuous_szce_formula, 
                     discrete_formula, discrete_szce_formula, grammarly, tex_format, typora];
const btn_type = ["danger", "danger", "primary", "primary", "default", "default", 
                    "primary", "primary", "default", "default", "default", 
                    "primary", "primary", "default", "default", "default"];

function ButtonContainer() {
  const btn_arr = () => {
    let n = btn_name.length;
    let arr = [];
    for( let i=0; i<n-1; i++ ) {
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

    arr.push(
      <Upload 
        beforeUpload = {btn_click[n-1]}
        id="typora-upload" >
              <Button
                style={ styles.button } 
                type={ btn_type[n-1] } 
                key={ n-1 }
                icon={ <UploadOutlined /> }
              >
                {  btn_name[n - 1]   }
              </Button>
      </Upload> 
    );

    return arr;
  }
  
  return (
    <div>
      { btn_arr() }
    </div>
  )
}

export default ButtonContainer;