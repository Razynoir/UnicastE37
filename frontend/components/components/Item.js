import React from 'react'

class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = props;
  }

  render(){
    return (<div className="item-icon">this.state.name</div>)
  }
}
