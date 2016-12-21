import React from 'react';
import './Orders.css';

export default class OrdersList extends React.Component {
  constructor(props){
    super(props);
    this.ifactive = this.ifactive.bind(this);
    this.order = this.order.bind(this);
    this.orderlist = this.orderlist.bind(this);
  }
  ifactive(orderstate) {
    if(orderstate) {
      return(<td className="Table-cell Active">active</td>);
    } else {
      return(<td className="Table-cell Non-active">non-active</td>);
    }
  };
  order(param) {
    return(
      <tr id={param["id"]} key={param["id"]}>
        <td className="Table-cell Order-id">{param["id"]}</td>
        {this.ifactive(param["state"])}
        <td className="Table-cell">{param["client_id"]}</td>
        <td className="Table-cell">{param["driver_id"]}</td>
        <td className="Table-cell">{param["from"]}</td>
        <td className="Table-cell">{param["to"]}</td>
        <td className="Table-cell">{param["price"]}</td>
        <td className="Table-cell">{param["comment"]}</td>
        <td className="Table-cell">{param["created_at"]}</td>
        <td className="Table-cell">{param["updated_at"]}</td>
      </tr>
    );
  };
  orderlist(orderdata) {
    return(
      <div className="Order-list">
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="Table-header Order-id">Order ID</th>
            <th className="Table-header">State</th>
            <th className="Table-header">Client ID</th>
            <th className="Table-header">Driver ID</th>
            <th className="Table-header">From</th>
            <th className="Table-header">To</th>
            <th className="Table-header">Price</th>
            <th className="Table-header">Comment</th>
            <th className="Table-header">Created at</th>
            <th className="Table-header">Updated at</th>
          </tr>
        </thead>
        <tbody>
          {orderdata.map(this.order)}
        </tbody>
        </table>
      </div>
    );
  };
  render() {
    return(
      <div>
        {this.orderlist(this.props.source)}
      </div>
    );
  }
}