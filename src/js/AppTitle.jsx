import React from 'react';

var AppTitle = React.createClass({
  render: function() {
    return(
      <h2 className={this.props.newTheme+'-h2'}>
        Countdown List
        <span className='colorOptions' onClick={this.props.handleColorTheme}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </h2>
    )
  }
});

module.exports = AppTitle;
