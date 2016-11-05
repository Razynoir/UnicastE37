import React from 'react'
import DateTime from './DateTime'

const DashBoard = (props) => {
  return (
    <div className="row dashboard">
      <div className="col-xs-12 col-md-6 dashboard-left">
        <DateTime />
      </div>
    </div>
  )
}

export default DashBoard;
