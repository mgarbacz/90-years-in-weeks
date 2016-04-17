const constants = require('constants');
const Year = require('grid/year');

function Grid({props}) {
  const {fillWeeks} = props;

  const years$ = [...Array(constants.TOTAL_YEARS).keys()];

  const years = years$
    .map(year => <Year year={year} fillWeeks={fillWeeks} />);

  return (
    <div className="grid">{years}</div>
  );
}

module.exports = Grid;
