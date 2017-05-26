import React from 'react';
import moment from 'moment';
import './Precise-range-plugin.js';


var EventItem = React.createClass({
  render: function() {
/*
//not necessary anymore since am now using moment.js and Precise-range-plugin; left it here for reference

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
    //Ternary condition necessary to display 00 hours and minutes when pHours and pDays are integers and not fractional numbers
*/
    //moment.js and Precise-range-plugin; returns an object when 3rd parameter is set to true;
    var timeObj = moment.preciseDiff(this.props.myEvent.targetDate, this.props.rightNow ,true);

    return(
      <li className={'list-group-item' + (this.props.myEvent.targetDate > this.props.rightNow ? ' list-group-item-ToGo' : ' list-group-item-Passed')}>
        <span className='eventTitle'>{this.props.myEvent.eventName}</span>
        <br/>
        <div>
          {/* <span>{pDays} <br/> Days</span>
          <span>{onlyHours} <br/> Hours</span>
          <span>{onlyMinutesLeft} <br/> Minutes</span> */}
          <span>{timeObj.years} <br/> Years</span>
          <span>{timeObj.months} <br/> Months</span>
          <span>{timeObj.days} <br/> Days</span>
          <span>{timeObj.hours} <br/> Hours</span>
          <span>{timeObj.minutes} <br/> Minutes</span>
        </div>
        <br/>
        <span>{this.props.myEvent.targetDate > this.props.rightNow ? 'To Go': 'Passed'}</span>
        <button onClick={this.props.removeMyList} >
          {/* {'\u2715'} */}
          <svg version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
          	viewBox="0 0 21.6 21.6">
            <g id="XMLID_1_">
            	<g id="XMLID_250_">
            		<circle id="XMLID_10_" style={{fill:'#f5f5f5'}} cx="10.8" cy="10.8" r="10.8"/>
            	</g>
            	<g id="XMLID_192_">
            		<path id="XMLID_244_" style={{fill:'#f44336'}} d="M16.1,15.9l-0.2,0.2c-0.6,0.6-1.7,0.6-2.3,0l-8-8c-0.6-0.6-0.6-1.7,0-2.3l0.2-0.2
            			c0.6-0.6,1.7-0.6,2.3,0l8,8C16.7,14.2,16.7,15.2,16.1,15.9z"/>
            		<path id="XMLID_242_" style={{fill:'#f44336'}} d="M15.9,5.6l0.2,0.2c0.6,0.6,0.6,1.7,0,2.3l-8,8c-0.6,0.6-1.7,0.6-2.3,0l-0.2-0.2
            			c-0.6-0.6-0.6-1.7,0-2.3l8-8C14.2,4.9,15.2,4.9,15.9,5.6z"/>
            	</g>
            </g>
          </svg>
        </button>{/*{'\u274c'}*/}
      </li>
    );
  }
});

module.exports = EventItem;
