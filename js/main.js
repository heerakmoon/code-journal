function renderEntry(entry) {
  var $li = document.createElement('li');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');

  var $desktopEntrySpaceBetween = document.createElement('div');
  $desktopEntrySpaceBetween.setAttribute('class', 'desktop-entry-space-between');

  var $imgDesktopEntryPercWidth = document.createElement('div');
  $imgDesktopEntryPercWidth.setAttribute('class', 'desktop-entry-perc-width');

  var $img = document.createElement('img');
  $img.setAttribute('class', 'img-fill');

  var $textDesktopPercWidth = document.createElement('div');
  $textDesktopPercWidth.setAttribute('class', 'desktop-entry-perc-width');

  var $headerThree = document.createElement('h3');
  var $headerThreeText = '';
  $headerThree.textContent = $headerThreeText;

  var $p = document.createElement('p');
  var $pText = '';
  $p.textContent = $pText;

  $li.appendChild($row);
  $row.appendChild($desktopEntrySpaceBetween);
  $desktopEntrySpaceBetween.appendChild($imgDesktopEntryPercWidth);
  $imgDesktopEntryPercWidth.appendChild($img);
  $desktopEntrySpaceBetween.appendChild($textDesktopPercWidth);
  $textDesktopPercWidth.appendChild($headerThree);
  $textDesktopPercWidth.appendChild($p);
}

renderEntry();
