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
            {/* <input type='submit' className="glyphicons" value={'\u2713'}/> */} {/*u2714*/}
            <button type='submit' className="glyphicons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.3 46.3" className='svgCircle'>
                <g id="XMLID_18_">
                  <circle id="XMLID_20_" className={this.props.newTheme+'-circle'} cx="23.1" cy="23.1" r="23.1" />
                </g>
                <g id="XMLID_15_">
                  <path id="XMLID_17_" className={this.props.newTheme+'-fill'} d="M23.9 30.5l-2.4 2.4c-.9.9-2.4.9-3.3 0l-7.4-7.4c-.9-.9-.9-2.4 0-3.3l2.4-2.4c.9-.9 2.4-.9 3.3 0l7.4 7.4c.9.9.9 2.4 0 3.3z" style={{fill:'#fa0055'}} />
                  <path id="XMLID_16_" className={this.props.newTheme+'-fill'} d="M18.3 32.9l-2.4-2.4c-.9-.9-.9-2.4 0-3.3l13.8-13.8c.9-.9 2.4-.9 3.3 0l2.4 2.4c.9.9.9 2.4 0 3.3L21.6 32.9c-.9.9-2.4.9-3.3 0z" style={{fill:'#fa0055'}} />
                </g>
              </svg>
            </button>
            <div className="glyphicons" onClick={this.props.handleClickX}>
              {/* {'\u2a2f'} */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.3 46.3" className='svgCircle'>
                <g id="XMLID_18_">
                  <circle id="XMLID_20_" className={this.props.newTheme+'-circle'} cx="23.1" cy="23.1" r="23.1" />
                </g>
                <g id="XMLID_15_">
                  <path id="XMLID_17_" className={this.props.newTheme+'-fill'} d="M34 30.5L30.5 34c-.6.6-1.7.6-2.3 0l-16-15.9c-.6-.6-.6-1.7 0-2.3l3.5-3.5c.6-.6 1.7-.6 2.3 0l16 15.9c.7.6.7 1.6 0 2.3z" style={{fill:'#fa0055'}}/>
                  <path id="XMLID_16_" className={this.props.newTheme+'-fill'} d="M30.5 12.2l3.5 3.5c.6.6.6 1.7 0 2.3L18.1 34c-.6.6-1.7.6-2.3 0l-3.5-3.5c-.6-.6-.6-1.7 0-2.3l15.9-15.9c.6-.7 1.6-.7 2.3-.1z" style={{fill:'#fa0055'}}/>
                </g>
              </svg>
            </div>{/*u274c*/}
          </div>
        </form>

      </div>
    )
  }
});

module.exports = NewUserData;
