import React from 'react';
import { Button, Input, Col, Row, Card } from 'antd';
import { maple2mma } from '../js/maple2mma';

const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

const func_map = {
  arctan: 'ArcTan',
  arcsin: 'ArcSin',
  arccos: 'ArcCos',
  arcsinh: 'ArcSinh',
  arccot: 'ArcCot',
  arccosh: 'ArcCosh',
  arctanh: 'ArcTanh',
  arccoth: 'ArcCoth',
  arcsec: 'ArcSec',
  arccsc: 'ArcCsc',
  arccsch: 'ArcCsch',
  arcsech: 'ArcSech',
  exp: 'Exp',
  log: 'Log',
  ln: 'Log',
  sinh: 'Sinh',
  cosh: 'Cosh',
  sech: 'Sech',
  csch: 'Csch',
  coth: 'Coth',
  tanh: 'Tanh',
  sin: 'Sin',
  cos: 'Cos',
  tan: 'Tan',
  sqrt: 'Sqrt',
  abs: 'Abs',
  conjugate: 'Conjugate',
  diff: 'D',
  JacobiTheta1: 'EllipticTheta1',
  JacobiTheta2: 'EllipticTheta2',
  JacobiTheta3: 'EllipticTheta3',
  JacobiTheta4: 'EllipticTheta4',
}

const get_maple_func = (maple_expr) => {
  let maple_func = maple_expr.match(/[^a-zA-Z]?[a-zA-Z\d]+\(/g)?.map( func => {
      if (['*', '+', '-', ' '].includes(func[0]) ) {
          func = func.slice(1);
      }
      return func.slice(0, -1);
  })
  maple_func = [ ...new Set(maple_func) ];
  maple_func.sort( (a, b) => (a.length < b.length) - 1 );
  return maple_func;
}

function FunctionConvertList({ display, setdisplay }) {
    const create_list = () => {
        const maple_func = get_maple_func(document.getElementById('input').value);
        if (!maple_func?.[0]) return;
        let input_rows = [];
        for(let i=0; i<maple_func.length; i++) {
            input_rows.push(
                <Row key={ Math.random() }>
                    <Col key={ Math.random() } style={{ overflow: 'hidden', width: '150px', marginRight: '20px', marginBottom: '7px'  }} >
                        <Input className='ele maple-func' value={maple_func[i]}/>
                    </Col>
                    <Col><label style={{ marginRight: '15px', paddingTop: '5px', display: 'inline-block' }}>⟶</label></Col>
                    <Col key={ Math.random() } style={{ overflow: 'hidden', width: '150px', marginBottom: '7px' }} >
                        <Input className='ele mma-func' defaultValue={func_map[maple_func[i]] ?? maple_func[i]}/>
                    </Col>
                </Row>
            )
        }
        return ( 
            <div>
                { input_rows }
            </div> 
        );
    }

    const close_table = () => {
        setdisplay('none');
    }

    let styles = {
        table: {
            position: 'absolute',
            width: '405px',
            maxHeight: '410px',
            top: '150px',
            left: '0',
            right: '0',
            margin: '0 auto',
            display: display, 
            background: 'white',
            overflow: 'hidden',
            textAlign: 'center'
        },
        inputs: {
            position: 'relative',
            width: '405px',
            margin: 'auto',
            maxHeight: '300px',
            overflowY: 'auto',
            marginBottom: '10px'
        }
    } 
 
    return (
        <Card id="func_convert" style={ styles.table }>
            <Row key={ Math.random() } >
                <Col key={ Math.random() } style={{ overflow: 'hidden', width: '150px', marginRight: '20px', marginBottom: '7px' }} >
                    <b>Maple</b>
                </Col>
                <Col><label style={{ marginRight: '34px', display: 'inline-block' }}></label></Col>
                <Col key={ Math.random() } style={{ overflow: 'hidden', width: '150px', marginBottom: '7px' }} >
                    <b>Mathematica</b>
                </Col>
            </Row>
            <div id='inputs' style={ styles.inputs }>
                { display === "block" && create_list() }
            </div>
            <ButtonGroup style={{ marginBottom: '10px' }}>
                <Button onClick={ () => { close_table(); maple2mma() } } type='primary'>转换</Button>
                <Button onClick={ close_table } type='danger' style={{ marginLeft: '25px' }}>取消</Button>
            </ButtonGroup>
        </Card>
    )
}

export default FunctionConvertList;