import React from 'react';

var ListHour = React.createClass({
  render:function() {
    return(
      <li onClick={this.props.onClickHourList0}>{this.props.myHour}</li>
    )
  }
});

module.exports = ListHour;
