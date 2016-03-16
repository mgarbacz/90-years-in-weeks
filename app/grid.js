let constants = require('constants');

let grid = {
  gridElement: document.getElementById('grid'),
  fillWeeks: 0,

  weekTemplate(weekNumber) {
    let classString = 'week';
    if (weekNumber < this.fillWeeks) classString += ' filled';
    return `<div class="${classString}"></div>`;
  },

  yearTemplate(year) {
    let yearHtml = '<div class="year">';
    for(let i = 0; i < constants.WEEKS_IN_YEAR; i++) {
      let weekNumber = (year * constants.WEEKS_IN_YEAR) + i;
      yearHtml += this.weekTemplate(weekNumber);
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
    this.fillWeeks = weeks;
    this.gridElement.innerHTML = this.gridTemplate();
  }
};

module.exports = grid;
