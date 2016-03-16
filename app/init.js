let constants = require('constants');
let dateHelper = require('date-helper');
let grid = require('grid');
let birthdate = require('birthdate');

// When the birthdate is changed, rerender the grid with the updated weeks alive
birthdate.setupInputListener(function() {
  let weeksAlive = birthdate.getWeeksSinceBirthdate();
  grid.render(weeksAlive);
});

// For starters, set a default birthdate of TOTAL_YEARS ago
let defaultDate = dateHelper.yearsAgoFromToday(constants.TOTAL_YEARS);
birthdate.setBirthdate(defaultDate);
