const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365.25;
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
let today = new Date()
today.setHours(0, 0, 0, 0);

const TOTAL_YEARS_MINUS_ONE_DAY_IN_MS = ((TOTAL_YEARS * DAYS_IN_YEAR) - 1)
  * HOURS_IN_DAY
  * MINUTES_IN_HOUR
  * SECONDS_IN_MINUTE
  * MS_IN_SECOND;
let fullGridDate = new Date(today.getTime() - TOTAL_YEARS_MINUS_ONE_DAY_IN_MS);
birthdateElement.value = fullGridDate.toISOString().split('T')[0];

function setFilled(event) {
  let birthdate = new Date(birthdateElement.value);
  let milliseconds = today.getTime() - birthdate.getTime();
  let seconds = milliseconds / MS_IN_SECOND;
  let minutes = seconds / SECONDS_IN_MINUTE;
  let hours = minutes / MINUTES_IN_HOUR;
  let days = hours / HOURS_IN_DAY;
  let years = days / DAYS_IN_YEAR;
  let weeks = Math.round(years * WEEKS_IN_YEAR);


  var weekBoxElements = document.getElementsByClassName('week');
  for (let i = 0; i < weekBoxElements.length; i++) {
    let element = weekBoxElements[i];
    if (i < weeks) element.classList.add('filled');
    else element.classList.remove('filled');
  }
}

birthdateElement.addEventListener('input', setFilled);
setFilled();
