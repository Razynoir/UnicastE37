import React from 'react'

const ToolBar = (props) => {
  return (
    <div className="row tool-bar">
      <div className="col-xs-12">
        <button className="btn btn-dashboard" onClick={()=>{props.switchMode("Dashboard")}}>Dashboard</button>
        <button className="btn btn-analysis" onClick={() => {props.switchMode("Analysis")}}>Analysis</button>
        <button className="btn btn-scenario" onClick={()=>{props.switchMode("Scenario")}}>Scenario</button>
        <button className="btn btn-inventory" onClick={() => {props.switchMode("Inventory")}}>Inventory</button>
        <button className="btn btn-journal" onClick={() => {props.switchMode("Journal")}}>Journal</button>
      </div>
    </div>
  )
}

export default ToolBar;
