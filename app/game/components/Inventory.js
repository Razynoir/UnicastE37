import React from 'react';
import Item from './Item';

const Inventory = (props) => {
  var equipments = props.store.equipments;
  var items = props.store.items;
  var items_display_list = [];

  $.each(items, function(key, value){
    items_display_list.push(<Item key={key} item={value} />);
  })

  return (
    <div className="row inventory">
      <div className="col-md-6 inventory-left">
        <h2>Items</h2>
        <hr/>
        {items_display_list}
      </div>
      <div className="col-md-6 inventory-right">
      </div>
    </div>
  );
}

export default Inventory;
