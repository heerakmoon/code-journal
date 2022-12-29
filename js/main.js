var imageInputListener = document.querySelector('form');
var imageElement = document.querySelector('img');
var inputId = document.querySelector('#url');

function changeSrc(event) {
  imageElement.setAttribute('src', inputId);
}

imageInputListener.addEventListener('input', changeSrc);
