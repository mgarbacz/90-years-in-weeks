const constants = require('constants');
const Week = require('grid/week');

function Year({props}) {
  const {year, fillWeeks} = props;

  //const weeks$ = Rx.Observable.range(1, constants.WEEKS_IN_YEAR);
  const weeks$ = [...Array(constants.WEEKS_IN_YEAR).keys()];

  let fillWeeksVal = 0;
  let yearVal = 0;
  fillWeeks.subscribe(f => fillWeeksVal = f);
  year.subscribe(f => yearVal = f);

  var checkFilled = function(week) {
    return ((yearVal * constants.WEEKS_IN_YEAR) + week) < fillWeeksVal;
  };

  const weeks = weeks$
    .map(week => <Week filled={checkFilled(week)} />);

  // let yearHtml = '<div class="year">';
  // for(let i = 0; i < constants.WEEKS_IN_YEAR; i++) {
  //   let weekNumber = (year * constants.WEEKS_IN_YEAR) + i;
  //   yearHtml += this.weekTemplate(weekNumber);
  // }
  // return yearHtml + '</div>';

  return (
    <div className={'year'}>{weeks}</div>
  );
}

module.exports = Year;
