import React from 'react';

const ItemList = (props) => {
  debugger;
  return(
    <div>
      <h1>Money is ${props.items["0001A00"].amount}</h1>
      <button onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0001A00", amountChange: 100}]})}>Add $100</button>
    </div>
  );
}

export default ItemList;
