let constants = require('constants');

let grid = {
  gridElement: document.getElementById('grid'),
  weeks: 0,

  weekTemplate(weekNumber) {
    let classString = 'week';
    if (weekNumber < this.weeks) classString += ' filled';
    return `<div class="${classString}"></div>`;
  },

  yearTemplate(year) {
    let yearHtml = '<div class="year">';
    for(let i = 0; i < constants.WEEKS_IN_YEAR; i++) {
      yearHtml += this.weekTemplate((year * constants.WEEKS_IN_YEAR) + i);
    }
    return yearHtml + '</div>';
  },

  gridTemplate() {
    let gridHtml = '';
    for(let i = 0; i < constants.TOTAL_YEARS; i++) {
      gridHtml += this.yearTemplate(i);
    }
    return gridHtml;
  },

  render(weeks) {
    this.weeks = weeks;
    console.log(this.weeks);
    this.gridElement.innerHTML = this.gridTemplate();
  }
};

module.exports = grid;
