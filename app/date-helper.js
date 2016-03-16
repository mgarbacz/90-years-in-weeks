let dateHelper = {
  getToday() {
    let today = new Date();         // creates a full Date & time object
    today.setUTCHours(0, 0, 0, 0);  // sets Hours/Minutes/Seconds/MS to 0
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
