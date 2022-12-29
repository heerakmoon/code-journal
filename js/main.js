var imageInputListener = document.querySelector('form');
var imageElement = document.querySelector('img');
var inputId = document.querySelector('#url');

function changeSrc(event) {
  imageElement.setAttribute('src', inputId.value);
}

imageInputListener.addEventListener('input', changeSrc);

// var form = document.querySelector('form');
// var title = document.querySelector('#title');
// var url = document.querySelector('#url');
// var notes = document.querySelector('#notes');

// function submitForm(event) {
//   event.preventDefault();
//   var formObject = {
//     formTitle: title,
//     formUrl: url.value,
//     formNotes: notes.value
//   };
//   var formObject.entryId = nextEntryId;
//   console.log(formTitle);
// }

// form.addEventListener('submit', submitForm);
