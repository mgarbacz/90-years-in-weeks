//const Observable = require('rx/dist/rx.min').Observable;
//const Yolk = require('yolk/dist/yolk.min');

function Week({props}) {
  const {filled} = props;

  const classNames = [
    'week',
    filled.map(bool => bool ? 'filled' : '')
  ];

  return (
    <div className={classNames}></div>
  );
}

module.exports = Week;
