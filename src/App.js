import React from 'react';
import './App.css';
import { Layout, Divider } from 'antd';
import { renderer } from './utils/renderer';
import { styles } from './utils/styles';
import Table from './components/Table';
import TimeLine from './components/TimeLine';
import ButtonContainer from './components/ButtonContainer';
import { dblclick } from './utils/dblclick'

const { Sider, Header, Content, Footer } = Layout;

function App() {
  document.body.addEventListener('dblclick', dblclick);
  const inputOnchange = () => { renderer(document.getElementById('input'), document.getElementById('output')) };

  return (
    <div>
      <Layout>
        <Layout id='left' style={ styles.left }>
          <Header style={ styles.header }>
            <ButtonContainer />
          </Header>
          <Divider dashed style={{ margin: '2px 0' }}/>
          <Content style={ styles.content }>
            <textarea id='input' style={ styles.textarea } onInput={ inputOnchange }>
            </textarea>
          </Content>
          <Footer style={ styles.footer }>  
            Maple-Latex v2.6 ©2018-2022 Created by <a rel="noreferrer" target="_blank" href="https://github.com/jiandandaoxingfu/maple-latex">JMx</a>
            &nbsp;&nbsp;
            <a rel="noreferrer" target="_blank" href="https://jiandandaoxingfu.github.io/myblog/post/maple-latex/">文档</a>
          </Footer>
        </Layout>
        <Divider dashed style={{ margin: '0 2px' }} type='vertical' />
        <Sider id='sider' width='50%' style={{ height: document.documentElement.clientHeight + 'px' }}>
          <div id='output' style={ styles.output }></div>
        </Sider>
      </Layout>        
      <Table />
      <TimeLine />        
      <div id='buffer' style={{ display: 'none' }}></div>
    </div>
  );
}

export default App;