window.onload = initPage;
function initPage() {
  changebg();
}
function changebg() {
  var rangeRed = document.getElementById('red');
  var rangeGreen = document.getElementById('green');
  var rangeBlue = document.getElementById('blue');
  var textRed = document.getElementById('redText');
  var textGreen = document.getElementById('greenText');
  var textBlue = document.getElementById('blueText');
  var textCod = document.getElementById('rgb');
  textRed.value = rangeRed.value;
  textGreen.value = rangeGreen.value;
  textBlue.value = rangeBlue.value;
  var rgb =
    'rgb(' +
    rangeRed.value +
    ',' +
    rangeGreen.value +
    ',' +
    rangeBlue.value +
    ')';
  textCod.innerHTML = rgb;
  var body = document.querySelector('body');
  body.style.background = rgb;
}
