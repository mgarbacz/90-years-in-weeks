let dateHelper = {
  getToday() {
    let today = new Date();
    // Set the hours, minutes, seconds, ms to 0 so that we have a just the date
    today.setUTCHours(0, 0, 0, 0);
    return today;
  },
  getTodayInMs() {
    return this.getToday().getTime();
  },
  getYearsAgoFromToday(years) {
    let date = this.getToday();
    date.setUTCFullYear(date.getUTCFullYear() - years);
    return date;
  }
};

module.exports = dateHelper;
