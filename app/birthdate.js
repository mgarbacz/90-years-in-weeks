let constants = require('constants');

let birthdate = {
  birthdateElement: document.getElementById('birthdate'),

  setBirthdate(date) {
    this.birthdateElement.value = date.toISOString().split('T')[0];
  },

  getWeeksSinceBirthdate(date) {
    let birthday = new Date(this.birthdateElement.value);
    let milliseconds = date.getTime() - birthday.getTime();
    let seconds = milliseconds / constants.MS_IN_SECOND;
    let minutes = seconds / constants.SECONDS_IN_MINUTE;
    let hours = minutes / constants.MINUTES_IN_HOUR;
    let days = hours / constants.HOURS_IN_DAY;
    let years = days / constants.DAYS_IN_YEAR;
    let weeks = Math.round(years * constants.WEEKS_IN_YEAR);
    return weeks;
  }
}

module.exports = birthdate;
