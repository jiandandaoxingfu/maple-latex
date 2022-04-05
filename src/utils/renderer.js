var islock = false;

function preview_math(target) {
  islock = false;
  target.innerHTML = document.getElementById('buffer').innerHTML;
}

export function renderer(source, target) {
  if (islock) return;
  islock = true;
  let value = source.value.replace(/(beta|gamma|eta|zeta|xi|alpha|delta)/g, '$1   ');
  document.getElementById('buffer').innerHTML = value.replace(/\n/g, "<br />");
  if (source.tagName.toLowerCase() === 'input') {
    document.getElementById('buffer').innerHTML = '$' + document.getElementById('buffer').innerHTML + '$';
  }
  window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('buffer')], [preview_math, target]);
}