// 双击左侧输入区收起

export function dblclick() {
  let is_display = document.getElementById('left').style.display !== 'none';
  document.getElementById('left').style.display = is_display ? 'none' : 'flex';
}