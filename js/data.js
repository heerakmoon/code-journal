/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var dataJSON = JSON.stringify(data);
localStorage.setItem('code-journal-local-storage', dataJSON);

window.addEventListener('beforeunload', event);

var existingDataJSON = localStorage.getItem('code-journal-local-storage');

if (existingDataJSON !== null) {
  data = JSON.parse(existingDataJSON);
}
