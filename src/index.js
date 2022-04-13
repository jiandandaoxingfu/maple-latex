import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    tags: 'ams',
  },
};

var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
script.async = true;
document.head.appendChild(script)

// 双击左侧输入区收起
var is_left_hide = true;
document.body.addEventListener('dblclick', function() {
  if (is_left_hide) {
    document.getElementById('left').style.display = 'none';
    document.getElementById('sider').style.minWidth = '99%';
    document.getElementById('sider').style.maxWidth = '99%';
    document.getElementById('sider').style.width = '99%';
  } else {
    document.getElementById('left').style.display = 'block';
    document.getElementById('sider').style.minWidth = '50%';
    document.getElementById('sider').style.maxWidth = '50%';
    document.getElementById('sider').style.width = '50%';
  }
  is_left_hide = !is_left_hide;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
