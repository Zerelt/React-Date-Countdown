import React from 'react';

var TwoButtons = React.createClass({

  render: function() {
    return(
      <div id={ !this.props.showing ? 'glyphiconsBox' : 'glyphiconsBoxFalse'}>
        <div className="glyphicons" onClick={this.props.handleClickPlus0}>{'\u002b'}</div>
        <div className="glyphicons" onClick={this.props.handleClosest}>{'\u02c4'}</div>
      </div>
    )
  }
});

module.exports = TwoButtons;
