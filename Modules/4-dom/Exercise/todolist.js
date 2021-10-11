var  todoList= document.getElementById('todoList');
var  botonAgregarElemento = document.getElementById('addTodo');
var forma = document.getElementById('todo');
botonAgregarElemento.onclick = function(){
  console.log(forma.value);
  var li= document.createElement('li');
  li.innerHTML=forma.value;
  todoList.appendChild(li);

}
