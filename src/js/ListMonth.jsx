import React from 'react';

var ListMonth = React.createClass({
  render: function() {
    return(
      <li onClick={this.props.onClickMonthList0}>{this.props.myMonth}</li>
    )
  }
});

module.exports = ListMonth;
