import React from 'react';
import './Orders.css';

export default class OrdersList extends React.Component {
  constructor(props){
    super(props);
    this.ifactive = this.ifactive.bind(this);
    this.displayorder = this.displayorder.bind(this);
  }
  ifactive(OrderState) {
    if(OrderState) {
      return(<td className="Table-cell Active">active</td>);
    } else {
      return(<td className="Table-cell Non-active">non-active</td>);
    }
  };
  displayorder(Order) {
    return(
      <tr id={Order.id} key={Order.id}>
        <td className="Table-cell Order-id">{Order.id}</td>
        {this.ifactive(Order.state)}
        <td className="Table-cell">{Order.client_id}</td>
        <td className="Table-cell">{Order.driver_id}</td>
        <td className="Table-cell">{Order.from}</td>
        <td className="Table-cell">{Order.to}</td>
        <td className="Table-cell">{Order.price}</td>
        <td className="Table-cell">{Order.comment}</td>
        <td className="Table-cell">{Order.created_at}</td>
        <td className="Table-cell">{Order.updated_at}</td>
      </tr>
    );
  };
  render() {
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
          {this.props.orders.map(this.displayorder)}
        </tbody>
        </table>
      </div>
    );
  }
}