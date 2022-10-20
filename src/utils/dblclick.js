// 双击左侧输入区收起

export function dblclick() {
  let is_show = document.getElementById('left').style.display !== 'none';
  document.getElementById('left').style.display = is_show ? 'none' : 'block';
  document.getElementById('sider').style.minWidth = is_show ? '99%' : '50%';
  document.getElementById('sider').style.maxWidth = is_show ? '99%' : '50%';
  document.getElementById('sider').style.width = is_show ? '99%' : '50%';
}