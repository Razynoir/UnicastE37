import React from 'react';
import Wiki from '../full_wiki';

var Item = React.createClass({
  getInitialState: function(){
    return {
      item: this.props.item,
      isSuppressed: this.props.isSuppressed
    };
  },

  render: function(){
    var item = this.state.item;
    var button = (<button>Use</button>);
    if(this.state.isSuppressed){
      button = "";  
    }

    return (
      <div className="item equipped">
        <div className="item-display">
          <img className="item-image" src={item.image_url}/>
        </div>
        <div className="item-info-over">
        <p>You have <span className="inline-bold">x{item.amount}</span> <span className="inline-bold">{item.name}</span></p>
        <p>{item.description}</p>
        <p className="item-note">{item.note}</p>
        {button}
        </div>
        <div className="item-count-over">
          {item.amount}
        </div>
      </div>
    )
  }
})

export default Item;
