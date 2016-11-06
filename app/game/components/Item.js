import React from 'react';
import Wiki from '../full_wiki';

var Item = React.createClass({
  getInitialState: function(){
    return this.props;
  },

  render: function(){
    var modifyInventoryWithSpecs = this.props.modifyInventoryWithSpecs;
    var item = this.props.item;

    var buttons = "";
    if(item.choices){
      buttons = item.choices.map((choice, idx) => {
        if(!choice.hasDisplayCondition && !choice.hasCondition){
          return (<button key={idx} onClick={() => {modifyInventoryWithSpecs(choice.storeImpact)}}>{choice.buttonText}</button>);
        }else if(!!choice.hasDisplayCondition && choice.satisfyDisplayCondition(props.store) &&
                (!choice.hasCondition || (!!choice.hasCondition && choice.satisfyCondition(props.store)))){
          return (<button key={idx} onClick={() => {modifyInventoryWithSpecs(choice.storeImpact)}}>{choice.buttonText}</button>);
        }else{
          return (<li>You do not meet requirement to use this.</li>)
        }
      })
    }

    if(this.props.isSuppressed){
      return (
        <div className="item">
          <div className="item-display">
            <img className="item-image" src={item.image_url} />
          </div>
          <div className="item-info-over">
            <p><span className="inline-bold">{item.name}</span></p>
            <p>{item.description}</p>
            <p className="item-note">{item.note}</p>
          </div>
        </div>
      )
    }else{
      return (
        <div className="item">
          <div className="item-display">
            <img className="item-image" src={item.image_url}/>
          </div>
          <div className="item-info-over">
          <p>You have <span className="inline-bold">x{this.props.item.amount}</span> <span className="inline-bold">{item.name}</span></p>
          <p>{item.description}</p>
          <p className="item-note">{item.note}</p>
          {buttons}
          </div>
          <div className="item-count-over">
            {item.amount}
          </div>
        </div>
      )
    }
  }
})

export default Item;
