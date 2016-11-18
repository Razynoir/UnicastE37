import React from 'react'
import DateTime from './DateTime'
import Item from './Item'
import Wiki from '../full_wiki'

const DashBoard = (props) => {
  return (
    <div className="row dashboard">
      <div className="col-sm-12 col-md-6 dashboard-left">
        <DateTime />
      </div>
      <div className="col-sm-12 col-md-3 dashboard-middle">
        <table className="table qualities-table">
          <thead className="qualities-table-header">
            <tr>
              <td>Quality</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody className="qualities-table-body">
            <tr>
              <td><Item key={1} item={Wiki["0001A23"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A23"].amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-12 col-md-3 dashboard-right">
        <table className="table attributes-table">
          <thead className="attributes-table-header">
            <tr>
              <td>Attribute</td>
              <td>Ratings</td>
            </tr>
          </thead>
          <tbody className="attributes-table-body">
            <tr>
              <td><Item key={1} item={Wiki["0001A24"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A24"].amount}</td>
            </tr>
            <tr>
              <td><Item key={1} item={Wiki["0001A25"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A25"].amount}</td>
            </tr>
            <tr>
              <td><Item key={1} item={Wiki["0001A26"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A26"].amount}</td>
            </tr>
            <tr>
              <td><Item key={1} item={Wiki["0001A27"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A27"].amount}</td>
            </tr>
            <tr>
              <td><Item key={1} item={Wiki["0001A28"]} store={props.store} isSuppressed={true} /></td>
              <td>{props.store.qualities["0001A28"].amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashBoard;
