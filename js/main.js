var imageInputListener = document.querySelector('form');
var imageElement = document.querySelector('img');
var inputId = document.querySelector('#url');

function changeSrc(event) {
  imageElement.setAttribute('src', inputId.value);
}

imageInputListener.addEventListener('input', changeSrc);

var form = document.querySelector('form');

function submitForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', submitForm);
