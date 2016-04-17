//const Observable = require('rx/dist/rx.min').Observable;
//const Yolk = require('yolk/dist/yolk.min');
const constants = require('constants');

function Week({props}) {
  const {week, year, fillWeeks} = props;

  const filled = Rx.Observable
    .zip(week, year, function(w, y) {
      return {w, y};
    }).combineLatest(fillWeeks, function(z, fw) {
      return ((z.y * constants.WEEKS_IN_YEAR) + z.w) < fw;
    });

  const fillClass = new Rx.BehaviorSubject('');

  const classNames = [
    'week',
    fillClass
  ];

  filled.subscribe(function(fill) {
    let cn = fill ? 'filled': '';
    if (classNames[1].value !== cn) {
      classNames[1].onNext(cn);
    }
  });

  return (
    <div className={classNames}></div>
  );
}

module.exports = Week;
