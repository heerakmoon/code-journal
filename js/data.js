/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function stringifyData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-local-storage', dataJSON);
}

window.addEventListener('beforeunload', stringifyData);

var existingDataJSON = localStorage.getItem('code-journal-local-storage');

if (existingDataJSON !== null) {
  data = JSON.parse(existingDataJSON);
}
