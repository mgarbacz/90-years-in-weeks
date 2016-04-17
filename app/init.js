const constants = require('constants');
const dateHelper = require('date-helper');
const Grid = require('grid/grid');
//const Birthdate = require('birthdate');

function App({createEventHandler}) {
  const defaultDate = dateHelper.yearsAgoFromToday(constants.TOTAL_YEARS);
  const date = defaultDate.toISOString().split('T')[0];
  const weeksAlive = new Rx.BehaviorSubject(dateHelper.getWeeksSinceBirthdate(defaultDate));

  const handleChange = createEventHandler();

  handleChange
    .debounce(200)
    .subscribe(function(event) {
      // console.log(event.target.value.toString());
      let hi = dateHelper.getWeeksSinceBirthdate(new Date(event.target.value));
      // console.log(hi);
      weeksAlive.onNext(hi);
      // console.log(weeksAlive);
    });

  return (
    <div className="container">
      <h1 className="title">90 years in weeks</h1>
      <div className="birthdate-container">
        <label for="birthdate">Enter your birthday</label>
        <input type="date" name="birthdate" value={date} onChange={handleChange} />
      </div>
      <Grid fillWeeks={weeksAlive} />
    </div>
  );
}

Yolk.render(<App />, document.getElementById('container'));
