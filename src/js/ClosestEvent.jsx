import React from 'react';

var ClosestEvent = React.createClass({
  render:function(){
    var diff = Math.abs(this.props.closestEv.targetDate - this.props.rightNow);
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
    // console.log(this.props.rightNow)
    return(
      <div className='closestEvent'>
        <div>
          <p>{this.props.closestEv.eventName}</p>
          <br/>

            <span>{pDays} <br/> Days</span>
            <span>{onlyHours} <br/> Hours</span>
            <span>{onlyMinutesLeft} <br/> Minutes</span>

          <br/>
        </div>
      </div>
    )
  }
});

module.exports = ClosestEvent;
