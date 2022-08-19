// 根据输入区字符串生成表格
export function excel2table() {
  let data = document.getElementById('input').value;
  if (data === '') return;
  // 判断最后一个字符是否为换行符，以确定行数。
  let rows = data.match(/\r\n|\n/g).length + 1;
  let str_arr = data.split(/\s+|\t|\n|\r\n/g);
  if (data[data.length - 1] === '\n') {
    rows -= 1;
    str_arr.pop();
  }
  let columns = str_arr.length / rows;
  if (columns % 1 !== 0) {
    alert('数据不规范');
    return;
  }
  data = this.data_format(str_arr);
  let str = ''.padEnd(2 * columns, '|c');
  document.getElementById('input').value += ('\r\n\ \r\n\\begin{tabular}{' + str + '|}\r\n\\hline\r\n' + data + '\\hline\r\n\\end{tabular}'); // eslint-disable-line
}