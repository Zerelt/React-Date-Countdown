import React from 'react';

var EventItem = React.createClass({
  render: function() {

    var diff = Math.abs(this.props.myEvent.targetDate - this.props.rightNow);
    var hours = diff/(1000*60*60);
    var days = diff/(1000*60*60*24);
    //only days (until the dot)
    var pDays = days.toString().indexOf('.') == -1 ? days : days.toString().slice(0, days.toString().indexOf('.'));
    //total hours (until the dot) (equivalent of pDays*24)
    var pHours = hours.toString().indexOf('.') == -1 ? hours : hours.toString().slice(0, hours.toString().indexOf('.'));
    //hours except the full days until the dot
    var onlyHours =  parseInt(pHours)-24*parseInt(pDays);
    //minutes left (besides full days and hours)
    var onlyMinutesLeft = hours.toString().indexOf('.') == -1 ? '00' : Math.round(60*Number(hours.toString().slice(hours.toString().indexOf('.'))));

    /*Ternary condition necessary to display 00 hours and minutes when pHours and pDays are integers and not fractional numbers*/

    return(
      <li className={'list-group-item' + (this.props.myEvent.targetDate > this.props.rightNow ? ' list-group-item-ToGo' : ' list-group-item-Passed')}>
        <span className='eventTitle'>{this.props.myEvent.eventName}</span>
        <br/>
        <div>
          <span>{pDays} <br/> Days</span>
          <span>{onlyHours} <br/> Hours</span>
          <span>{onlyMinutesLeft} <br/> Minutes</span>
        </div>
        <br/>
        <span>{this.props.myEvent.targetDate > this.props.rightNow ? 'To Go': 'Passed'}</span>
        <button onClick={this.props.removeMyList} >{'\u2715'}</button>{/*{'\u274c'}*/}
      </li>
    );
  }
});

module.exports = EventItem;
