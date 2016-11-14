import React from 'react';

var NewUserData = React.createClass({
  render:function() {

    return(
      <div className='userInput' onSubmit={this.props.handleSubmit0}>{/*onSubmit={}*/}
        <form className='inputWrapper'>
          <div className='inputInnerWrapper'>
          <input onClick={this.props.closeAllMenus} placeholder='Event Name*' type='text' name='eventName' maxLength={27} autoFocus />

          <div className='newWrapper' onClick={this.props.onClickYearSpan}>
            <span>
              {this.props.selectedYear>1 ? this.props.selectedYear : 'Year*'}
            </span>
            <div className = {'listStyle' + ( this.props.yearVisible ? " showListYes" : " showListNo" )}>
              <ul>
                {this.props.showYear}
              </ul>
            </div>
          </div>

          <div className='newWrapper' onClick={this.props.onClickMonthSpan}>
            <span>
              {this.props.selectedMonth.length>1 ? this.props.selectedMonth : 'Month*'}
            </span>
            <div className = {'listStyle' + ( this.props.monthVisible ? " showListYes" : " showListNo" )}>
              <ul>
                {this.props.showMonth}
              </ul>
            </div>
          </div>

          <div className='newWrapper' onClick={this.props.onClickDaySpan}>
            <span>
              {this.props.selectedDay!='' ? this.props.selectedDay : 'Day*'}
            </span>
            <div className = {'listStyle' + ( this.props.dayVisible ? " showListYes" : " showListNo" )}>
              <ul>
                {this.props.showDay}
              </ul>
            </div>
          </div>

          <div className='newWrapper' >
            <div className='halfWrapper' onClick={this.props.onClickHourSpan} >
              <span>
                {this.props.selectedHour!='' ? this.props.selectedHour : 'Hour*'}
              </span>
              <div className={'listStyle' + ( this.props.hourVisible ? " showListYes" : " showListNo" )}>
                <ul>
                  {this.props.showHour}
                </ul>
              </div>
            </div>

            <div className='separator'>:</div>

            <div className='halfWrapper' onClick={this.props.onClickMinuteSpan}>
              <span>
                {this.props.selectedMinute!='' ? this.props.selectedMinute : 'Minutes*'}
              </span>
              <div className={'listStyle' + ( this.props.minuteVisible ? " showListYes" : " showListNo" )}>
                <ul>
                  {this.props.showMinute}
                </ul>
              </div>
            </div>
          </div>
          </div>{/*end inputInnerWrapper*/}
          <div id={this.props.showing ? 'glyphiconsBox2' : 'glyphiconsBoxFalse'}>
            <input type='submit' className="glyphicons" value={'\u2713'}/>{/*u2714*/}
            <div className="glyphicons" onClick={this.props.handleClickX}>{'\u2a2f'}</div>{/*u274c*/}
          </div>
        </form>

      </div>
    )
  }
});

module.exports = NewUserData;
