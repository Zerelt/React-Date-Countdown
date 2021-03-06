import '../css/master.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import AppTitle from './AppTitle.jsx';
import EventItem from './EventItem.jsx';
import TwoButtons from './TwoButtons.jsx';
import ListYear from './ListYear.jsx';
import ListMonth from './ListMonth.jsx';
import ListDay from './ListDay.jsx';
import ListHour from './ListHour.jsx';
import ListMinute from './ListMinute.jsx';
import NewUserData from './NewUserData.jsx';
import ClosestEvent from './ClosestEvent.jsx';
import ColorTheme from './ColorTheme.jsx';


//=================== TOP LEVEL ====================================
var App = React.createClass({
  //=================== LIFECYCLE =================================
  getInitialState:function() {
    // var dlst=['-'];
    var ylst=[];
    for(var j=1950; j<=2050;j++){
      ylst.push(j);
    }

    return({
      arr:[
        {eventName:'Birthday',targetDate:1489914000000},
        {eventName:'Meeting',targetDate:1480503600000},
        {eventName:'Lunch',targetDate:1500410000000},
        {eventName:'Christmas 2017',targetDate:1516870800000},
        {eventName:'New Years Eve 23:59 o\'clock',targetDate:1517439540000}
      ],

      //=================== TOGGLE FORM =====================
      show:false,

      //=================== TOGGLE CLOSEST EVENT ===========
      showC:false,

      //============== YEAR ================
      yearVisible:false,
      yearList:ylst,
      selectedYear:'',

      //============== MONTH ==============
      monthVisible:false,
      monthList:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      selectedMonth:'',

      //============= DAY ===============
      dayVisible:false,
      dayList:[],
      selectedDay:'',

      //============= HOUR =============
      hourVisible:false,
      hourList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      selectedHour:'',

      //============= MINUTES =========
      minuteVisible:false,
      minuteList:['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
      selectedMinute:'',

      //============ TODAY IN MILISEC ===========
      rightNow:'',

      //============ INPUTED TIME IN MILISEC ========
      timeInput:'',

      //============ CLOSEST EVENT ===============
      closestEvn:'',

      //============ THEME BTN HANDLER ============
      newTheme:'selector-p',

      //============ SHOW THEME PICKER ============
      chooseTheme: false
    });
  },
  componentWillMount:function() {
    this.todayUpdate();
  },
  componentDidMount:function() {
    this.timer=setInterval(this.todayUpdate,1000);
    // console.log(this.state.rightNow);

    var storingEvent=this.state.rightNow; /*using i<=this.state.rightNow gave 'cannot read property of undefined,but assiging it to a variable like so works (why?)'*/
    var sortedArr = this.state.arr.sort(function(a,b){
      return a.targetDate - b.targetDate;
    });

    var closestEv = (function() {
      for(var i=0; i<=sortedArr.length-1; i++) {
        if(sortedArr[i].targetDate >= storingEvent) {
          // console.log(sortedArr[i]);
          return sortedArr[i];
        }
      }
    })();

    this.setState({
      closestEvn: closestEv
    });
    // console.log(this.state.closestEvn);
  },
  componentDidUpdate: function() {
    // var test1 = ReactDOM.findDOMNode(this.refs.glyphiconsBox0)

    //inputed time parts:
    var isY = this.state.selectedYear.toString();
    var isM = this.state.selectedMonth;
    switch(isM) {
      case 'January': isM = 1; break;
      case 'February': isM = 2; break;
      case 'March': isM = 3; break;
      case 'April': isM = 4; break;
      case 'May': isM = 5; break;
      case 'June': isM = 6; break;
      case 'July': isM = 7; break;
      case 'August': isM = 8; break;
      case 'September': isM = 9; break;
      case 'October': isM = 10; break;
      case 'November': isM = 11; break;
      case 'December': isM = 12; break;
                   }
    var isD = this.state.selectedDay.toString();
    var isH = this.state.selectedHour;
    var isMi = this.state.selectedMinute;

    //calculation to find difference between now and inputed time
    if(this.state.selectedDay !== '' && this.state.selectedHour!=='' && this.state.selectedMinute!=='') {
      //inputed time object
      var bDate = new Date(isY, isM, isD, isH, isMi);
      //miliseconds of the inputed time object
      var bDateMilis = bDate.getTime();

      //difference between today and inputed time
      var diff = Math.abs(bDateMilis - this.state.rightNow);
      var hours = diff/(1000*60*60);
      var days = diff/(1000*60*60*24);

      // var fst = days.toString();
      var pDays = days.toString().slice(0, days.toString().indexOf('.'));
      var pHours = hours.toString().slice(0, hours.toString().indexOf('.'));
      //===== setState TIMEINPUT =====================
      /*(if condition necessary to avoid infinite loop while days/hours/minutes are still selected)
      If you use setState inside componentDidUpdate it updates the component, resulting in a call to componentDidUpdate which subsequently calls setState again resulting in the infinite loop.*/
      if(this.state.timeInput === ''){
        this.setState({
          timeInput:bDateMilis
        });
        // console.log(this.state.timeInput);
      }
    }
  },
  componentWillUnmount:function() {
    clearInterval(this.timer);
  },

  //============================== YEAR ============================
  onClickYearSpan:function(){
    this.setState({
      yearVisible: !this.state.yearVisible,
      monthVisible : false,
      dayVisible : false,
      hourVisible : false,
      minuteVisible : false
    })
  },
  onClickYearList:function(e){
    var slctY = this.state.yearList[e];
    this.setState({
      selectedYear:slctY,
      yearVisible: !this.state.yearVisible
    });
    var test = this.state.selectedYear
    // console.log(test);
  },

  //============================== MONTH ===========================
  onClickMonthSpan:function(){
    this.setState({
      monthVisible: !this.state.monthVisible,
      yearVisible : false,
      dayVisible : false,
      hourVisible : false,
      minuteVisible : false
    });
    // console.log('test1');
  },
  onClickMonthList: function(e){
    var slctM = this.state.monthList[e];
    this.setState({
      selectedMonth: slctM,
      monthVisible: !this.state.monthVisible
    })
  },

  //=============================== DAY ============================
  onClickDaySpan:function(){
    var mnthCopy = this.state.selectedMonth;
    switch(mnthCopy) {
      case 'January': mnthCopy = 1; break;
      case 'February': mnthCopy = 2; break;
      case 'March': mnthCopy = 3; break;
      case 'April': mnthCopy = 4; break;
      case 'May': mnthCopy = 5; break;
      case 'June': mnthCopy = 6; break;
      case 'July': mnthCopy = 7; break;
      case 'August': mnthCopy = 8; break;
      case 'September': mnthCopy = 9; break;
      case 'October': mnthCopy = 10; break;
      case 'November': mnthCopy = 11; break;
      case 'December': mnthCopy = 12; break;
                   }
    var d = new Date(this.state.selectedYear, mnthCopy, 0)
    var maxMnth = d.getDate();
    var mnthRange = [];
    for (var i=1; i<=maxMnth; i++) {
      mnthRange.push(i)
    }
    if(this.state.selectedMonth=='' || this.state.selectedYear==''){
      mnthRange=['-'];
    }
    this.setState({
      dayList: mnthRange,
      dayVisible: !this.state.dayVisible,
      yearVisible : false,
      monthVisible : false,
      hourVisible : false,
      minuteVisible : false
    })
  },
  onClickDayList:function(e){
    var slctD = this.state.dayList[e];
    this.setState({
      selectedDay:slctD,
      dayVisible: !this.state.dayVisible
    });
  },

  //=============================== HOURS =========================
  onClickHourSpan:function(){
    this.setState({
      hourVisible: !this.state.hourVisible,
      yearVisible : false,
      monthVisible : false,
      dayVisible : false,
      minuteVisible : false
    });
  },
  onClickHourList:function(e){
    var slctH = this.state.hourList[e];
    this.setState({
      selectedHour:slctH,
      hourVisible: !this.state.hourVisible
    })
  },

  //============================== MINUTES ========================
  onClickMinuteSpan:function(){
    this.setState({
      minuteVisible: !this.state.minuteVisible,
      yearVisible : false,
      monthVisible : false,
      dayVisible : false,
      hourVisible : false
    })
  },
  onClickMinuteList:function(e){
    var slctMi = this.state.minuteList[e];
    this.setState({
      selectedMinute:slctMi,
      minuteVisible: !this.state.minuteVisible
    })
  },

  //================= ADD SUBMIT REMOVE ==========================
  handleSubmit:function(e){
    e.preventDefault();
    let submitF = ReactDOM.findDOMNode(this.allTheSounds).children[2];
    submitF.play();

    var newDataStuff = {
      eventName: e.target.eventName.value,
      targetDate: this.state.timeInput
    };
    // console.log(newDataStuff);
    var newArr = this.state.arr.slice();
    newArr.push(newDataStuff);
    this.setState({
      arr:newArr,
      show: !this.state.show,
      yearVisible: false,
      monthVisible: false,
      dayVisible: false,
      hourVisible: false,
      minuteVisible: false,
      selectedYear:'',
      selectedMonth:'',
      selectedDay:'',
      selectedHour:'',
      selectedMinute:'',
      timeInput:''
    })
  },
  handleRemove:function(index){
    let deleteEv = ReactDOM.findDOMNode(this.allTheSounds).children[3];
    deleteEv.play();

    /*splice method is editing the state object directly,
    which you should never do. Calling slice first creates a copy of the data*/
    var newArr2 = this.state.arr.slice() //make copy of current state
    newArr2.splice(index,1); //remove element
    this.setState({
      arr: newArr2
    });
  },
  handleClickPlus: function(){
    let plusS = ReactDOM.findDOMNode(this.allTheSounds).children[0];
    plusS.play();

    this.setState({
      show : !this.state.show
    })
  },
  handleClickX:function() {
    let cancelSub = ReactDOM.findDOMNode(this.allTheSounds).children[1];
    cancelSub.play();

    this.setState({
      show: !this.state.show,
      yearVisible: false,
      monthVisible: false,
      dayVisible: false,
      hourVisible: false,
      minuteVisible: false,
      selectedYear:'',
      selectedMonth:'',
      selectedDay:'',
      selectedHour:'',
      selectedMinute:'',
      timeInput:''
    })
  },
  closeAllMenus:function() {
    this.setState({
      yearVisible: false,
      monthVisible : false,
      dayVisible : false,
      hourVisible : false,
      minuteVisible : false
    });
  },

  //================== SHOW CLOSEST EVENT ========================
  handleClosest:function(){
    let closestSound = ReactDOM.findDOMNode(this.allTheSounds).children[0];
    closestSound.play();

    var storingEvent=this.state.rightNow; /*using i<=this.state.rightNow gave 'cannot read property of undefined,but assiging it to a variable like so works (why?)'*/
    var sortedArr = this.state.arr.sort(function(a,b){
      return a.targetDate - b.targetDate;
    });

    var closestEv = (function() {
      for(var i=0; i<=sortedArr.length-1; i++) {
        if(sortedArr[i].targetDate >= storingEvent) {
          // console.log(sortedArr[i]);
          return sortedArr[i];
        }
      }
    })();

    this.setState({
      closestEvn: closestEv
    });
    // console.log(this.state.closestEvn);
    this.setState({
      showC: !this.state.showC
    });
    // console.log('we got the signal !');
    // console.log(this.state.showC);
  },

  //================= TODAY IN MILISEC FUNCTION ===================
  todayUpdate:function() {
    // today parts:
    var xs = new Date();
    var xsD = xs.getDate().toString();
    var xsM = (xs.getMonth()+1).toString();
    var xsY = xs.getFullYear().toString();
    var xsH = xs.getHours().toString();
    var xsMi = xs.getMinutes().toString();

    //today
    var aDate = new Date(xsY, xsM, xsD);

    //formated hours and minutes
    var xsHF = xsH < 10 ? '0'+xsH : xsH;
    var xsMF = xsMi < 10 ? '0'+xsMi : xsMi;

    //today with hours and min specified
    var aDate2 = new Date(xsY, xsM, xsD, xsHF,xsMF);
    // console.log('Today time in miliseconds:   '+ aDate2.getTime());
    var finalDate = aDate2.getTime()
    this.setState({
      rightNow: finalDate
    });
    // console.log('Today time in miliseconds:   '+ aDate2.getTime());
  },

  //================= THEME BUTTON HANDLER ========================
  handleColorTheme:function(){
    let newColorSound = ReactDOM.findDOMNode(this.allTheSounds).children[0];
    newColorSound.play();

    this.setState({
      chooseTheme: !this.state.chooseTheme
    });
    // console.log('clicked handleColorTheme');
  },

  //================ NEW THEME SELECTOR ===========================
  newColor: function (e) {
    e.preventDefault();
    var colorChange = e.target.value;
    this.setState({
      newTheme: e.target.value,
      chooseTheme: false
    });
  },


  render: function(){

    //======================== MAIN LIST ======================================
    var listFunction = function(item,index) {
      return(
        <EventItem removeMyList={this.handleRemove.bind(this,index)}  key={index} myEvent={item} rightNow={this.state.rightNow}/>
      )
    }.bind(this); //remember to bind here AND in the props you're passing hte remove function with(bind the index there as well !!!!!! ) !!!!!!
    var newArr = this.state.arr.slice().sort(function(a,b) {
      // console.log(typeof this.state.arr[0].target.Date);
      return a.targetDate - b.targetDate;
    }).map(listFunction); /*do not use the variable itself in the render; the original and copied arrays are 2 different things, even though when the original gets updates so does the copy in this react app, BUT the indexes (and thus the keys) in the copy are different after an update happens. So instead use the code of newArr in the render without the slice()*/

    //======================== YEAR ============================================
    var lstYear = function(item,index) {
      return(
        <ListYear onClickYearList0={this.onClickYearList.bind(this,index)} myYear={item} key={index} />
      )
    }.bind(this);
    var showYear = this.state.yearList.map(lstYear);

    //======================== MONTH ==========================================
    var lstMonth = function(item,index) {
      return(
        <ListMonth onClickMonthList0={this.onClickMonthList.bind(this,index)} myMonth={item} key={index} />
      )
    }.bind(this);
    var showMonth = this.state.monthList.map(lstMonth);

    //======================== DAY ===========================================
    var lstDay = function(item,index) {
      return(
        <ListDay onClickDayList0={this.onClickDayList.bind(this,index)} myDay={item} key={index} />
      )
    }.bind(this);
    var showDay = this.state.dayList.map(lstDay); /*.map needs an Array ! setting the dayList state or the mnthRange variable to something that's not an array will make the app not work properly !!!*/

    //======================== HOURS ========================================
    var lstHour = function(item,index) {
      return (
        <ListHour onClickHourList0={this.onClickHourList.bind(this,index)} myHour={item} key={index} />
      )
    }.bind(this);
    var showHour = this.state.hourList.map(lstHour);

    //======================== MINUTES ======================================
    var lstMinute = function(item,index){
      return(
        <ListMinute onClickMinuteList0={this.onClickMinuteList.bind(this,index)} myMinute={item} key={index} />
      )
    }.bind(this);
    var showMinute = this.state.minuteList.map(lstMinute);

    //======================= CLOSEST EVENT ================================
    var closestEv = function() {
      for(var i=0; i<=this.state.arr.length-1; i++) {
        if(this.state.arr[i].targetDate >= this.state.rightNow) {
          return this.state.arr[i];
        }
      }
    };
    // var closestEv={eventName:'test',targetDate:153}

    return(
      <div className={'centeredDiv '+this.state.newTheme} ref={(allTheSounds) => this.allTheSounds = allTheSounds}>
        <audio preload='auto' src={require('../sounds/genericx3.mp3')} type='audio/mpeg' />
      {/* putting the audio tag inside the glyphicons div inside the TwoButtons component and trying to
        access/play it via ReactDOM.findDOMNode(this.plusSign).children[1].children[0]; gives undefined  */}
        <audio preload='auto' src={require('../sounds/cancelSub.mp3')} type='audio/mpeg' />
        <audio preload='auto' src={require('../sounds/submitF.mp3')} type='audio/mpeg' />
        <audio preload='auto' src={require('../sounds/deleteE.mp3')} type='audio/mpeg' />
        <AppTitle
          newTheme={this.state.newTheme}
          handleColorTheme={this.handleColorTheme}
        />
        <div className='listWrapper'>
          <ul className='list-group'>
            {this.state.arr.sort(function(a,b) {
              return a.targetDate - b.targetDate;
            }).map(listFunction)}

          </ul>
        </div>
        {this.state.chooseTheme ? <ColorTheme newTheme={this.state.newTheme} newColor={this.newColor} /> : null}
        {this.state.showC ? <ClosestEvent closestEv={this.state.closestEvn}
                            rightNow={this.state.rightNow}
                            newTheme={this.state.newTheme}/> : null}
        {/*<AcceptOrCancel showing={this.state.show} handleClickPlus0={this.handleClickPlus}/>*/}
        <TwoButtons ref='glyphiconsBox0'
          showing={this.state.show}
          handleClickPlus0={this.handleClickPlus}
          handleClosest={this.handleClosest}
          newTheme={this.state.newTheme}
        />
        { this.state.show ? <NewUserData
                              handleSubmit0={this.handleSubmit}
                              showing={this.state.show}
                              handleClickX={this.handleClickX}
                              onClickYearSpan={this.onClickYearSpan}
                              showYear={showYear}
                              onClickMonthSpan={this.onClickMonthSpan}
                              showMonth={showMonth}
                              onClickDaySpan={this.onClickDaySpan}
                              showDay={showDay}
                              onClickHourSpan={this.onClickHourSpan}
                              showHour={showHour}
                              onClickMinuteSpan={this.onClickMinuteSpan}
                              showMinute={showMinute}
                              closeAllMenus={this.closeAllMenus}
                              {...this.state}/> : null }
      </div>
    );
  }
});

ReactDOM.render(<App />,document.getElementById('app'));
