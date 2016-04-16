let constants = require('constants');
let dateHelper = require('date-helper');
let birthdate = require('birthdate');
const Grid = require('grid/grid');

// When the birthdate is changed, rerender the grid with the updated weeks alive
birthdate.setupInputListener(function() {
  const weeksAlive = birthdate.getWeeksSinceBirthdate();
  const gridElement = document.getElementById('grid');
  Yolk.render(<Grid fillWeeks={weeksAlive} />, gridElement);
});

// For starters, set a default birthdate of TOTAL_YEARS ago
let defaultDate = dateHelper.yearsAgoFromToday(constants.TOTAL_YEARS);
birthdate.setBirthdate(defaultDate);
