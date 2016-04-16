const constants = require('constants');

let dateHelper = {
  today() {
    let today = new Date();
    // Set the hours, minutes, seconds, ms to 0 so that we have a just the date
    today.setUTCHours(0, 0, 0, 0);
    return today;
  },
  todayInMs() {
    return this.today().getTime();
  },
  yearsAgoFromToday(years) {
    let date = this.today();
    date.setUTCFullYear(date.getUTCFullYear() - years);
    return date;
  },
  getWeeksSinceBirthdate(birthdate) {
    let milliseconds = this.todayInMs() - birthdate.getTime();
    let seconds = milliseconds / constants.MS_IN_SECOND;
    let minutes = seconds / constants.SECONDS_IN_MINUTE;
    let hours = minutes / constants.MINUTES_IN_HOUR;
    let days = hours / constants.HOURS_IN_DAY;
    let years = days / constants.DAYS_IN_YEAR;
    let weeks = Math.round(years * constants.WEEKS_IN_YEAR);
    return weeks;
  }
};

module.exports = dateHelper;
