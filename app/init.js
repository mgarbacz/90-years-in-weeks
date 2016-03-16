let constants = require('constants');
let grid = require('grid');

grid.render();

let birthdateElement = document.getElementById('birthdate');
let today = new Date();
today.setHours(0, 0, 0, 0);

let fullGridDate = new Date(today.getTime() - constants.TOTAL_YEARS_IN_MS);
birthdateElement.value = fullGridDate.toISOString().split('T')[0];

function setFilled(event) {
  let birthdate = new Date(birthdateElement.value);
  let milliseconds = today.getTime() - birthdate.getTime();
  let seconds = milliseconds / constants.MS_IN_SECOND;
  let minutes = seconds / constants.SECONDS_IN_MINUTE;
  let hours = minutes / constants.MINUTES_IN_HOUR;
  let days = hours / constants.HOURS_IN_DAY;
  let years = days / constants.DAYS_IN_YEAR;
  let weeks = Math.round(years * constants.WEEKS_IN_YEAR);

  var weekBoxElements = document.getElementsByClassName('week');
  for (let i = 0; i < weekBoxElements.length; i++) {
    let element = weekBoxElements[i];
    if (i < weeks) element.classList.add('filled');
    else element.classList.remove('filled');
  }
}

birthdateElement.addEventListener('input', setFilled);
setFilled();
