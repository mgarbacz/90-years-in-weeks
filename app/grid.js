let constants = require('constants');
const Year = require('grid/year');

let grid = {
  gridElement: document.getElementById('grid'),

  gridTemplate({props}) {
    // let gridHtml = '';
    // for(let i = 0; i < constants.TOTAL_YEARS; i++) {
    //   gridHtml += this.yearTemplate(i);
    // }
    // return gridHtml;
    const {fillWeeks} = props;

    const years$ = [...Array(constants.TOTAL_YEARS).keys()];

    const years = years$
      .map(year => <Year year={year} fillWeeks={fillWeeks} />);

    console.log(years);

    return (
      <div>{years}</div>
    );
  },

  render(weeks) {
    console.log(weeks);
    Yolk.render(<this.gridTemplate fillWeeks={weeks}/>, this.gridElement);
  }
};

module.exports = grid;
