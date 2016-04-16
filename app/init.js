const constants = require('constants');
const dateHelper = require('date-helper');
const Grid = require('grid/grid');
const Birthdate = require('birthdate');

function App() {
  const defaultDate = dateHelper.yearsAgoFromToday(constants.TOTAL_YEARS);
  const date = defaultDate.toISOString().split('T')[0];
  const weeksAlive = dateHelper.getWeeksSinceBirthdate(defaultDate);

  return (
    <div className="container">
      <h1 className="title">90 years in weeks</h1>
      <Birthdate date={date} />
      <Grid fillWeeks={weeksAlive} />
    </div>
  );
}

Yolk.render(<App />, document.getElementById('container'));
