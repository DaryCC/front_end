var p =document.querySelector('p');
var h1 = document.querySelector('h1');
document.onkeydown = function(event) {
  h1.innerHTML = "Keeeey down is **** " + event.key;
}
