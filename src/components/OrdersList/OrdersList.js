import React from 'react';
import '../OrdersPage/OrdersPage.css';

export default class OrdersList extends React.Component {

  constructor(props) {
    super(props);

    this.ifActive = this.ifActive.bind(this);
    this.displayOrder = this.displayOrder.bind(this);
  }

  ifActive(orderState) {
    if (orderState) {
      return (<td className="Table-cell Active">active</td>);
    } else {
      return (<td className="Table-cell Non-active">non-active</td>);
    }
  };

  displayOrder(order) {
    return (
      <tr key={order.id}>
        <td className="Table-cell Order-id">{order.id}</td>
        {this.ifActive(order.state)}
        <td className="Table-cell">{order.client_id}</td>
        <td className="Table-cell">{order.driver_id}</td>
        <td className="Table-cell">{order.from}</td>
        <td className="Table-cell">{order.to}</td>
        <td className="Table-cell">{order.price}</td>
        <td className="Table-cell">{order.comment}</td>
        <td className="Table-cell">{order.created_at}</td>
        <td className="Table-cell">{order.updated_at}</td>
      </tr>
    );
  };

  render() {
    return (
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
          {this.props.orders.map(this.displayOrder)}
          </tbody>
        </table>
      </div>
    );
  }
}