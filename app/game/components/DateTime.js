import React from 'react'

var _timezoneHash = {
  "AST": "Atlantic Time",
  "EDT": "Eastern Time",
  "EST": "Eastern Time",
  "CST": "Central Time",
  "CDT": "Central Time",
  "MST": "Mountain Time",
  "MDT": "Mountain Time",
  "PST": "Pacific Time",
  "PDT": "Pacific Time",
  "AKST": "Alaska Time",
  "AKDT": "Alaska Time",
  "HST": "Hawaii Time",
  "HAST": "Hawaii Time",
  "HADT": "Hawaii Time"
}

var _dayInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var _monthInYear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getTimeInfo(){
  var today = new Date();
  var utc = today.toString().split(" ");
  var timeZone = utc[utc.length - 1];
  timeZone = timeZone.slice(1,4);

  var time = [today.getHours(), today.getMinutes()];
  var noon = "AM";
  noon = (time[0]  == (time[0] %= 12) ? "AM" : "PM");
  if(time[0] == 0 && noon == "PM"){ time[0] = 12 }
  if(time[1] < 10){ time[1] = "0" + time[1]; }

  var date = [_dayInWeek[today.getDay()], _monthInYear[today.getMonth()], today.getDate(), today.getFullYear()];

  return time.concat(noon).concat(_timezoneHash[timeZone]).concat(date);

}

var DateTime = React.createClass({
  getInitialState: function(){
    var thisComponent = this;

    return {
      timeInfo: getTimeInfo(),
      updateTime: setInterval(() => {
        thisComponent.setState({timeInfo: getTimeInfo()});
      })
    };
  },

  componentWillUnmount: function(){
    clearInterval(this.state.updateTime);
  },

  render: function(){
    var timeInfo = this.state.timeInfo;
    return(
      <div>
        <div className="col-xs-6">
          <div className="panel panel-primary panel-date">
            <div className="panel-heading panel-date-heading">
              {timeInfo[5]} {timeInfo[6]}, {timeInfo[7]}
            </div>
            <div className="panel-body panel-date-body">
              {timeInfo[4]}
            </div>
          </div>
        </div>

        <div className="col-xs-6">
          <div className="panel panel-primary panel-clock">
            <div className="panel-heading panel-clock-heading">
              {timeInfo[3]}
            </div>
            <div className="panel-body panel-clock-body">
              {timeInfo[0]}:{timeInfo[1]} {timeInfo[2]}
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default DateTime;
