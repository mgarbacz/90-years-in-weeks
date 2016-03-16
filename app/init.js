const WEEKS_IN_YEAR = 52;
const TOTAL_YEARS = 90;
let gridElement = document.getElementById('grid');

function weekTemplate() {
  return '<div class="week"></div>';
}

function yearTemplate() {
  let yearHtml = '<div class="year">';
  for(let i = 0; i < WEEKS_IN_YEAR; i++) {
    yearHtml += weekTemplate();
  }
  return yearHtml + '</div>';
}

function gridTemplate() {
  let gridHtml = '';
  for(let i = 0; i < TOTAL_YEARS; i++) {
    gridHtml += yearTemplate();
  }
  return gridHtml;
}

gridElement.innerHTML = gridTemplate();

let birthdateElement = document.getElementById('birthdate');

function setFilled(event) {
  let birthdate = new Date(birthdateElement.value);
  let milliseconds = Date.now() - birthdate.getTime();
  let seconds = milliseconds / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  let weeks = days / 7;

  var weekBoxElements = document.getElementsByClassName('week');
  for (let i = 0; i < weekBoxElements.length; i++) {
    let element = weekBoxElements[i];
    if (i < weeks) element.classList.add('filled');
    else element.classList.remove('filled');
  }
}

birthdateElement.addEventListener('input', setFilled);
setFilled();
