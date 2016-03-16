let constants = require('constants');

let grid = {
  gridElement: document.getElementById('grid'),

  weekTemplate() {
    return '<div class="week"></div>';
  },

  yearTemplate() {
    let yearHtml = '<div class="year">';
    for(let i = 0; i < constants.WEEKS_IN_YEAR; i++) {
      yearHtml += this.weekTemplate();
    }
    return yearHtml + '</div>';
  },

  gridTemplate() {
    let gridHtml = '';
    for(let i = 0; i < constants.TOTAL_YEARS; i++) {
      gridHtml += this.yearTemplate();
    }
    return gridHtml;
  },

  render() {
    this.gridElement.innerHTML = this.gridTemplate();
  }
}

module.exports = grid;
