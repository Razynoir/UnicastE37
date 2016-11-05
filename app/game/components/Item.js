import React from 'react';
import Wiki from '../full_wiki';

var Item = React.createClass({
  getInitialState: function(){
    return {
      item: this.props.item
    };
  },

  render: function(){
    var item = this.state.item;

    return (
      <div className="item">
        <div className="item-display">
          <img className="item-image" src={item.image_url}/>
        </div>
        <div className="item-info-over">
        <p>You have <span className="inline-bold">x{item.amount}</span> <span className="inline-bold">{item.name}</span></p>
        <p>{item.description}</p>
        <p className="item-note">{item.note}</p>
        <button>Use</button>
        </div>
        <div className="item-count-over">
          {item.amount}
        </div>
      </div>
    )
  }
})

export default Item;
