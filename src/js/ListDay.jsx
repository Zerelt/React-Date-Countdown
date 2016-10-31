import React from 'react';

var ListDay = React.createClass({
  render: function() {
    return(
      <li onClick={this.props.onClickDayList0}>{this.props.myDay}</li>
    )
  }
});

module.exports = ListDay;
