var codeJournalForm = document.querySelector('form');
var imageElement = document.querySelector('img');
var inputId = document.querySelector('#url');

function changeSrc(event) {
  imageElement.setAttribute('src', inputId.value);
}

codeJournalForm.addEventListener('input', changeSrc);

var title = document.querySelector('#title');
var url = document.querySelector('#url');
var notes = document.querySelector('#notes');
var imgElement = document.querySelector('img');

function submitForm(event) {
  event.preventDefault();
  var newFormObject = {
    formTitle: title.value,
    formUrl: url.value,
    formNotes: notes.value
  };

  var entryDomTree = renderEntry(newFormObject);
  $ul.appendChild(entryDomTree);
  viewSwap(data.view);

  newFormObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newFormObject);
  imgElement.setAttribute('src', 'images/placeholder-image-square.jpg');
  codeJournalForm.reset();
  toggleNoEntries();
}

codeJournalForm.addEventListener('submit', submitForm);

function renderEntry(entry) {
  var $li = document.createElement('li');
  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');

  var $desktopEntrySpaceBetween = document.createElement('div');
  $desktopEntrySpaceBetween.setAttribute('class', 'desktop-entry-space-between column-full');

  var $imageDesktopEntryPercWidth = document.createElement('div');
  $imageDesktopEntryPercWidth.setAttribute('class', 'desktop-entry-perc-width');

  var $img = document.createElement('img');
  $img.setAttribute('class', 'img-fill');
  $img.setAttribute('src', entry.formUrl);
  $img.setAttribute('alt', entry.formTitle);

  var $textDesktopEntryPercWidth = document.createElement('div');
  $textDesktopEntryPercWidth.setAttribute('class', 'desktop-entry-perc-width');

  var $headerThree = document.createElement('h3');
  var $headerThreeText = document.createTextNode(entry.formTitle);
  $headerThree.appendChild($headerThreeText);

  var $p = document.createElement('p');
  var $pText = document.createTextNode(entry.formNotes);
  $p.appendChild($pText);

  $li.appendChild($row);
  $row.appendChild($desktopEntrySpaceBetween);
  $desktopEntrySpaceBetween.appendChild($imageDesktopEntryPercWidth);
  $imageDesktopEntryPercWidth.appendChild($img);
  $desktopEntrySpaceBetween.appendChild($textDesktopEntryPercWidth);
  $textDesktopEntryPercWidth.appendChild($headerThree);
  $textDesktopEntryPercWidth.appendChild($p);

  return $li;
}

var $ul = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < data.entries.length; i++) {
    var entry = renderEntry(data.entries[i]);
    $ul.appendChild(entry);
  }
  viewSwap(entry.view);
  toggleNoEntries();
});

var $noEntriesP = document.querySelector('#no-entries');

function toggleNoEntries() {
  if (data.entries.length > 0) {
    $noEntriesP.className = 'hidden';
  }
}

var $entries = document.querySelector('#entries');
var $entryForm = document.querySelector('#entry-form');
$entryForm.setAttribute('class', '');

function viewSwap(viewName) {
  data.view = viewName;
  if (viewName === 'entries') {
    $entries.className = '';
    $entryForm.className = 'hidden';
  } else if (viewName === 'entry-form') {
    $entries.className = 'hidden';
    $entryForm.className = '';
  }
}

var $body = document.querySelector('body');
var $navbarEntries = document.querySelector('#navbar-entries');
var $newAnchor = document.querySelector('#new-anchor');

$body.addEventListener('click', function () {
  if (event.target === $navbarEntries) {
    viewSwap('entries');
  } else if (event.target === $newAnchor) {
    viewSwap('entry-form');
  }
});
