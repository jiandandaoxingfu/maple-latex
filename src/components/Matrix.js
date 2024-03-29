import React, { useState } from 'react';
import { Button, Input, Col, Row, Card, Switch } from 'antd';
import { renderer } from '../utils/renderer';

const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

function Matrix({ display, setdisplay }) {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);

    const onTextChange = (event) => {
      let value = Math.min( parseInt(event.target.value), 10 );
        if( event.target.id === 'row' ) {
           setRows(value);
        } else {
           setCols(value);
        }
    }

    const eleOnInput = (event) => {
      renderer( event.target, document.getElementById('tip') );
    }

    const eleOnBlur = (event) => {
      event.target.innerHTML = '';
    }

    const eleOnFocus = (event) => {
      renderer( event.target, document.getElementById('tip') );
    }

    const create_inputs = () => {
      let input_rows = [];
      for(let i=0; i<rows; i++) {
          let input_columns = [];
          for(let j=0; j<cols; j++) {
              input_columns.push(
                  <Col style={{ flex: '1' }} key={ Math.random() }>
                      <Input className='ele' style={{ margin: '5px' }} onInput={ eleOnInput } onBlur={ eleOnBlur } onFocus={ eleOnFocus }/>
                  </Col> )
          }
          input_rows.push( <Row style={{ display: 'flex', flexDirection: 'row' }} key={ Math.random() }>{ input_columns }</Row> )
      }
      return ( <InputGroup style={{ width: '98%' }}>{ input_rows }</InputGroup> );
    }
    

    // 格式化数据
    const data_format = (str_arr) => {
        // input: str_arr = ['1', '22', '333', '2222'];
        // output: 1    & 22   \\
        //         333  & 2222 \\
        let n = Math.max( ...str_arr.map( str => str.length ) ); // 数组中字符串最大长度
        let data = '';
        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols - 1; j++) {
                data += str_arr[i*cols + j].padEnd(n, ' ') + ' & ';
            }
            data += (str_arr[i*cols + cols - 1].padEnd(n, ' ') + ' \\\\\r\n');
        }
        return data;
    }

    // 根据输入框中内容，生成矩阵或列表
    const table2matrix = () => {
        let eles = document.getElementsByClassName('ele');
        let str_arr = [];
        let pandend_str = document.getElementById('padend').getElementsByTagName('span')[0].innerText === '补零' ? '0' : '';
        for(let ele of eles) {
            str_arr.push(ele.value || pandend_str);
        }
        let data = data_format(str_arr);
        if( window.event.target.innerText === '生成矩阵' ) {
            document.getElementById('input').value += ('\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n' + data + '\\end{matrix}\r\n\\right)\r\n$$');
            renderer(document.getElementById('input'), document.getElementById('output'));
        }else {
            let str = ''.padEnd(2 * cols, '|l');
            document.getElementById('input').value += ('\r\n\\begin{tabular}{' + str + '|}\r\n\\hline\r\n' + data + '\\hline\r\n\\end{tabular}');
        }
    }
    
    const close_table = () => {
        setdisplay('none');
        document.getElementById('tip').style.display = 'none';
    }

    const styles = {
        table: {
            position: 'absolute',
            width: '600px',
            top: '150px',
            left: '0',
            right: '0',
            margin: '0 auto',
            display: display, 
            background: 'white'
        },
        InputGroup: { float: 'left', maxWidth: '200px', top: '4px', left: '10px'}, 
        Button: { margin: '4px', padding: '5px 10px' },
        Switch: { top: '10px', transform: 'scale(1.25)', left: '-10px' },
    }

    return (
        <Card id='table' style={ styles.table }>
            <div id='button_container' style={{ position: 'relative', left: '0', top: '0', textAlign: 'center'}}>
                <InputGroup style={ styles.InputGroup }>
                    <Row gutter={6}>
                        <Col span={12}>
                            <Input id='row' addonBefore='行' onChange={ onTextChange } value={ rows } key='100'/>
                        </Col>
                        <Col span={12}>
                            <Input id='column' addonBefore='列' onChange={ onTextChange } value={ cols } key='101'/>
                        </Col>
                    </Row>
                </InputGroup>
                <ButtonGroup style={{ left: '25px' }}>
                    <Switch style={ styles.Switch } checkedChildren="补零" unCheckedChildren="不补" defaultChecked id="padend"/>
                    <Button style={ styles.Button } onClick={ table2matrix } type='danger'>生成矩阵</Button>
                    <Button style={ styles.Button } onClick={ table2matrix } type='default'>生成列表</Button>
                    <Button style={ styles.Button } onClick={ close_table }  type='primary'>关闭</Button>
                </ButtonGroup>
            </div>
            <div id='inputs'>
                { create_inputs() }
            </div>
            <div id='tip' style={ styles.tip }></div>
        </Card>
    )
}

export default Matrix;