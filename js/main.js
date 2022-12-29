var form = document.querySelector('form');
var imageElement = document.querySelector('img');
var inputId = document.querySelector('#url');

function changeSrc(event) {
  imageElement.setAttribute('src', inputId.value);
}

form.addEventListener('input', changeSrc);

var title = document.querySelector('#title');
var url = document.querySelector('#url');
var notes = document.querySelector('#notes');

function submitForm(event) {
  event.preventDefault();
  var newFormObject = {
    formTitle: title.value,
    formUrl: url.value,
    formNotes: notes.value
  };
  newFormObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newFormObject);
}

form.addEventListener('submit', submitForm);
