let constants = require('constants');
let grid = require('grid');
let birthdate = require('birthdate');

let today = new Date();
today.setUTCHours(0, 0, 0, 0);
let defaultDate = new Date(today.getTime());
defaultDate.setUTCFullYear(today.getUTCFullYear() - constants.TOTAL_YEARS);
birthdate.setBirthdate(defaultDate);

function renderGrid() {
  let weeksAlive = birthdate.getWeeksSinceBirthdate(today);
  grid.render(weeksAlive);
}

birthdate.birthdateElement.addEventListener('input', renderGrid);
renderGrid();
