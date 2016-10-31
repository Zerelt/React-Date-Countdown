import React from 'react';

var ListYear = React.createClass({
  render: function() {
    return(
      <li onClick={this.props.onClickYearList0}>{this.props.myYear}</li>
    )
  }
});

module.exports = ListYear;
