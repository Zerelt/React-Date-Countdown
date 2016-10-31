import React from 'react';

var ListMinute = React.createClass({
  render:function(){
    return(
      <li onClick={this.props.onClickMinuteList0}>{this.props.myMinute}</li>
    )
  }
});

module.exports = ListMinute;
