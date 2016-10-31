import React from 'react';

const ItemList = (props) => {
  var items = [];
  for(var key in props.items){
    items.push(props.items[key])
  }

  return(
    <div className="container">
      {items.map((item, idx) => (
        <div className="row" key={idx}>
          <img className="item-image" src={item.image_url}/>
          <p>You have <span className="inline-bold">x{item.amount}</span> <span className="inline-bold">{item.name}</span></p>
        </div>
      ))}

      <button onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0001A00", amountChange: 100}]})}>Add $100</button>
      <button onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0002B94", amountChange: -10}, {id: "0001A00", amountChange: 20}]})}>Trade Stock</button>
    </div>
  );
}

export default ItemList;
