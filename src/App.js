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
          ©2018-2022 
          <a style={{ color: 'black' }} href="https://github.com/jiandandaoxingfu/maple-latex"><strong> Maple-Latex</strong></a> v2.6 &nbsp;
          <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://jiandandaoxingfu.github.io/myblog/post/maple-latex/">
            <strong>文档</strong>
          </a>
          <br/>
          Created by 
          <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://github.com/jiandandaoxingfu">
            <strong>  JMx  </strong>
          </a>
          with ❤️ and 
          <a style={{ color: 'black' }} rel="noreferrer" target="_blank" href="https://reactjs.org/">
            <strong>  React  </strong>
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