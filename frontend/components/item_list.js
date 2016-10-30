import React from 'react';

const ItemList = function(props){
  debugger;
  return (
    <div>
      <ul>
        {props.items.map((item, idx) => (<li key={idx}>{item.name}</li>))}
      </ul>
      <button onClick={props.addItem}>Add Item</button>
    </div>
  )
}

export default ItemList;
