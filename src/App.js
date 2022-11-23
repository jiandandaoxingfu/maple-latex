import React from 'react';
import './App.css';
import { renderer } from './utils/renderer';
import { styles } from './utils/styles';
import Table from './components/Table';
import TimeLine from './components/TimeLine';
import ButtonContainer from './components/ButtonContainer';
import { dblclick } from './utils/dblclick'

function App() {
  document.body.addEventListener('dblclick', dblclick);
  const inputOnchange = () => { renderer(document.getElementById('input'), document.getElementById('output')) };

  return (
    <div id="app" style={ styles.app }>
      <div id='left' style={ styles.left }>
        <div style={ styles.header }>
          <ButtonContainer />
        </div>
        <textarea id='input' style={ styles.textarea } onInput={ inputOnchange }>
        </textarea>
        <div style={ styles.footer }>  
          ©2018-2022 <strong>Maple-Latex</strong> v2.6 By 
          <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://github.com/jiandandaoxingfu/maple-latex">
            <strong>  JMx </strong>
          </a>
          &nbsp;&nbsp;
          <a rel="noreferrer" target="_blank" href="https://jiandandaoxingfu.github.io/myblog/post/maple-latex/">
            文档
          </a>
        </div>
      </div>
      <div id='output' style={ styles.output }></div>       
      <Table />
      <TimeLine />        
      <div id='buffer' style={{ display: 'none' }}></div>
    </div>
  );
}

export default App;