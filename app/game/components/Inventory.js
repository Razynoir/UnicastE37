import React from 'react';
import Item from './Item';

const Inventory = (props) => {
  var equipments = props.store.equipments;
  var items = props.store.items;
  var itemsDisplayList = [];

  var equipments = props.store.equipments;
  var equipmentsDisplayList = [];

  $.each(items, function(key, value){
    itemsDisplayList.push(<Item key={key} item={value} store={props.store} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
  })
  $.each(equipments, function(key, value){
    equipmentsDisplayList.push(<Item key={key} item={value} store={props.store} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
  })

  return (
    <div className="row inventory">
      <div className="col-md-6 inventory-left">
        <h2>Items</h2>
        <hr/>
        {itemsDisplayList}
        <h2>Equipments</h2>
        <hr/>
        {equipmentsDisplayList}
      </div>
      <div className="col-md-6 inventory-right">
      </div>
    </div>
  );
}

export default Inventory;
