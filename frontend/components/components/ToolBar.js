import React from 'react'

const ToolBar = (props) => {

  return (
    <div className="row tool-bar">
      <div className="col-xs-12">
        <button className="btn btn-dashboard" onClick={()=>{props.switchMode("Dashboard")}}>Dashboard</button>
        <button className="btn btn-story" onClick={()=>{props.switchMode("Scenario")}}>Story</button>
        <button className="btn btn-inventory">Inventory</button>
      </div>
    </div>
  )
}

export default ToolBar;
