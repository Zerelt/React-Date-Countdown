import React from 'react';
import moment from 'moment';
import './Precise-range-plugin.js';

var ClosestEvent = React.createClass({
  render:function(){
    //var diff,hours,days, pDays,pHours,onlyHours,onlyMinutesLeft;
    var timeObj;
    if (this.props.closestEv !=undefined) {
      /*

      diff = Math.abs(this.props.closestEv.targetDate - this.props.rightNow);
      hours = diff/(1000*60*60);
      days = diff/(1000*60*60*24);
      //only days (until the dot)
      pDays = days.toString().indexOf('.') == -1 ? days : days.toString().slice(0, days.toString().indexOf('.'));
      //total hours (until the dot) (equivalent of pDays*24)
      pHours = hours.toString().indexOf('.') == -1 ? hours : hours.toString().slice(0, hours.toString().indexOf('.'));
      //hours except the full days until the dot
      onlyHours =  parseInt(pHours)-24*parseInt(pDays);
      //minutes left (besides full days and hours)
      onlyMinutesLeft = hours.toString().indexOf('.') == -1 ? '00' : Math.round(60*Number(hours.toString().slice(hours.toString().indexOf('.'))));
      // console.log(this.props.rightNow)

      */
      timeObj = moment.preciseDiff(this.props.closestEv.targetDate, this.props.rightNow , true );

    } else {
      // diff=hours=days='';
      // pDays=onlyHours=onlyMinutesLeft='';
      timeObj='';
    }


    return(
      <div className={'closestEvent '+this.props.newTheme+'-closest'}>
        <div>
          <p>{this.props.closestEv==undefined ? 'No upcoming events' : this.props.closestEv.eventName }</p>
          <br/>

            {/* <span>{pDays} <br/>{ pDays=='' ? '' : 'Days' }</span>
            <span>{onlyHours} <br/>{ onlyHours=='' ? '' : 'Hours' }</span>
            <span>{onlyMinutesLeft} <br/>{ onlyMinutesLeft=='' ? '' : 'Minutes'}</span> */}
            <span>{timeObj.years} <br/>{ timeObj=='' ? '' : 'Years' }</span>
            <span>{timeObj.months} <br/>{ timeObj=='' ? '' : 'Months' }</span>
            {/* <br/> */}
            <span>{timeObj.days} <br/>{ timeObj=='' ? '' : 'Days' }</span>
            <span>{timeObj.hours} <br/>{ timeObj=='' ? '' : 'Hours' }</span>
            <span>{timeObj.hours} <br/>{ timeObj=='' ? '' : 'Minutes'}</span>

          <br/>
        </div>
      </div>
    )
  }
});

module.exports = ClosestEvent;
