import React from 'react';

const MoneyCounter = function(props){
  return (
    <div>
      <div>{props.money}</div>
      <button onClick={props.addMoney}>Add money</button>
    </div>
  )
}

export default MoneyCounter;
