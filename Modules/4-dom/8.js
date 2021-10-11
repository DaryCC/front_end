var inputContent = document.getElementById('inputContent');
var textInput = document.getElementById('textInput');

textInput.oninput = function(){
  inputContent.innerHTML = this.value;
}