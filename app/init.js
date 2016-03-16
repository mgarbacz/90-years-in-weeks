const WEEKS_IN_YEAR = 52;
const TOTAL_YEARS = 90;
let grid = document.getElementById('grid');

function weekTemplate() {
  return '<div class="week"></div>';
}

function yearTemplate() {
  let yearHtml = '<div class="year">';
  for(let i = 0; i < WEEKS_IN_YEAR; i++) {
    yearHtml += weekTemplate();
  }
  return yearHtml + '</div>';
}

function gridTemplate() {
  let gridHtml = '';
  for(let i = 0; i < TOTAL_YEARS; i++) {
    gridHtml += yearTemplate();
  }
  return gridHtml;
}

grid.innerHTML = gridTemplate();
