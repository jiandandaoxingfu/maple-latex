import React, { useState } from 'react';
import './App.css';
import { renderer } from './utils/renderer';
import { styles } from './utils/styles';
import Matrix from './components/Matrix';
import TimeLine from './components/TimeLine';
import FunctionConvertList from './components/FunctionConvertList';
import ButtonContainer from './components/ButtonContainer';
import { dblclick } from './utils/dblclick'

function App() {
  const [matrix_display, setMatrix_display] = useState('none');
  const [list_display, setList_display] = useState('none');

  document.body.addEventListener('dblclick', dblclick);
  const inputOnchange = () => { renderer(document.getElementById('input'), document.getElementById('output')) };

  return (
    <div id="app" style={ styles.app }>
      <div id='left' style={ styles.left }>
        <div style={ styles.header }>
          <ButtonContainer setMatrix_display = { setMatrix_display } setList_display = { setList_display }/>
        </div>
        <textarea id='input' style={ styles.textarea } onInput={ inputOnchange }>
        </textarea>
        <div style={ styles.footer }>  
          <span style={{ margin: '0px 10px' }}>
            ©2018-2023 
            <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://github.com/jiandandaoxingfu/maple-latex"><strong> Maple-Latex</strong></a> v2.6 &nbsp;
          </span>
            <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://jiandandaoxingfu.github.io/myblog/post/maple-latex/">
              <strong>Document</strong>
            </a>
          <span></span>
          <span style={{ margin: '0 20px'}}>
            Created by 
            <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://github.com/jiandandaoxingfu">
            <strong>  JMx  </strong>
            </a>
            with 
            <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://reactjs.org/">
              <strong>  React  </strong>
            </a>
            and
            ❤️            
          </span>  
        </div>
      </div>
      <div id='output' style={ styles.output }></div>       
      <Matrix display = { matrix_display } setdisplay = { setMatrix_display }/>
      <FunctionConvertList display = { list_display } setdisplay = { setList_display }/>
      <TimeLine />        
      <div id='buffer' style={{ display: 'none' }}></div>
    </div>
  );
}

export default App;