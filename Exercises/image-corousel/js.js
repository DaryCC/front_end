var images = [
  "Photos/1.jpg",
  "Photos/2.jpg",
  "Photos/3.jpg",
  "Photos/4.jpg",
  "Photos/5.jpg",
  "Photos/6.jpg",
  "Photos/7.jpg",
];
var imagenes= document.querySelector('img');
var index= 0;
var next = document.getElementById('next-button');

var incrementIndex = function() {
  if (index < images.length - 1)
    index++;
  else
    index = 0;

  return index;
}
next.onclick = function(){
  imagenes.setAttribute('src',images[incrementIndex(index)]);
}
