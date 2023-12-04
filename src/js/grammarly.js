import { Notification } from '../utils/Notification';

export function grammarly() {
  let lc = document.getElementById('input').value;
  lc = lc.replace(/\\cite{.*?}/g, '[1]');
  lc = lc.replace(/\\eqref{.*?}/g, '(2)');
  lc = lc.replace(/\\ref{.*?}/g, '(3)');
  lc = lc.replace(/\\label{.*?}/g, '');
  lc = lc.replace(/\$.*?\$/g, '$A=B$');
  lc = lc.replace(/\\begin{align\*?}(.|\n)*?\\end{align\*?}/g, '$$$$A=B$$$$,');
  lc = lc.replace(/\\begin{equation\*?}(.|\n)*?\\end{equation\*?}/g, '$$$$A=B$$$$,');
  lc = lc.replace(/\\begin{thebibliography\*?}(.|\n)*?\\end{thebibliography\*?}/g, '');
  lc = lc.replace(/\d{8}/g, '1');
  lc = lc.replace(/(.|\n)*\\begin{abstract}/,'');
  document.getElementById('input').value = '\r\n\r\n' + lc;
  Notification('bottomRight', '已完成');
}