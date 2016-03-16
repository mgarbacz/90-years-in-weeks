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
  }
};

module.exports = dateHelper;
