let constants = require('constants');
let dateHelper = require('date-helper');

let birthdate = {
  birthdateElement: document.getElementById('birthdate'),

  setBirthdate(date) {
    this.birthdateElement.value = date.toISOString().split('T')[0];
    this.birthdateElement.dispatchEvent(new Event('input'));
  },

  getWeeksSinceBirthdate() {
    let birthday = new Date(this.birthdateElement.value);
    let milliseconds = dateHelper.getTodayInMs() - birthday.getTime();
    let seconds = milliseconds / constants.MS_IN_SECOND;
    let minutes = seconds / constants.SECONDS_IN_MINUTE;
    let hours = minutes / constants.MINUTES_IN_HOUR;
    let days = hours / constants.HOURS_IN_DAY;
    let years = days / constants.DAYS_IN_YEAR;
    let weeks = Math.round(years * constants.WEEKS_IN_YEAR);
    return weeks;
  },

  setupInputListener(inputEventHandler) {
    this.birthdateElement.addEventListener('input', inputEventHandler);
  }
};

module.exports = birthdate;
