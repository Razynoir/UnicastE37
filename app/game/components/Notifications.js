import React from 'react';
import Item from './Item';
import Wiki from '../full_wiki';

class Notifications extends React.Component{
  constructor(props){
    super(props);
    this.notifications = props.notifications;
  }

  render(){
    setTimeout(function(){
      $(".notifications").css("opacity", "1");
      setTimeout(function(){
        $(".notifications").css("opacity", "0");
      }, 1500)
    }, 100)
    return (<div className="row notifications-holder">
      <div className="notifications">
        <ul className="list-group notification-list">
          {this.notifications.map((notification, idx) => {
            if(notification.type == "storeChange"){
              return (
                <li key={idx} className="list-group-item notification-item">{
                  notification.changes.map((item, idxx) => (
                    <span key={idxx} className="notification-span"><Item isSuppressed={true} item={Wiki[item.id]}/> {item.amountChange > 0 ? "+" : "-"} {item.amountChange} {Wiki[item.id].name}</span>
                  ))
                }</li>
              )
            }else if(notification.type == "journalChange"){
              return (
                <li key={idx} className="list-group-item notification-item">New Journal Entry</li>
              )
            }
          })}
        </ul>
      </div>
    </div>)
  }
}

export default Notifications;
