import React from 'react';
import { Button, Input, Col, Row, Card } from 'antd';
import { maple2mma, func_map, get_maple_func } from '../js/maple2mma';

const ButtonGroup = Button.Group;

function FunctionConvertList({ display, setdisplay }) {
    const create_list = () => {
        const maple_func = get_maple_func();
        if (maple_func.length < 1) return;
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