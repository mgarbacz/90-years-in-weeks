const constants = require('constants');
const Year = require('grid/year');

function Grid({props, createEventHandler}) {
  // let gridHtml = '';
  // for(let i = 0; i < constants.TOTAL_YEARS; i++) {
  //   gridHtml += this.yearTemplate(i);
  // }
  // return gridHtml;
  const {fillWeeks} = props;

  const years$ = [...Array(constants.TOTAL_YEARS).keys()];

  const years = years$
    .map(year => <Year year={year} fillWeeks={fillWeeks} />);

  return (
    <div>{years}</div>
  );
}

module.exports = Grid;
