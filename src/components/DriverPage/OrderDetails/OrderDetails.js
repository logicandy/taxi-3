import React from 'react';
import './OrderDetails.css';

export default class OrderDetails extends React.Component {
  constructor(props){
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date){
    const start = date.indexOf('T')+1;
    const end = date.indexOf('.');
    return date.slice(start, end);
  }

  render() {
    const {order} = this.props;
    return (
      <div className="order-view">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Order {order.id}</h2>
          </div>
          <div className="card-body">
            <table className="order-view--table table table-striped table-hover">
              <tbody>
              <tr>
                <th>Time of creation</th>
                <td>{this.formatDate(order.created_at)}</td>
              </tr>
              <tr>
                <th>Client Phone</th>
                <td>{order.client_id}</td>
              </tr>
              <tr>
                <th>From</th>
                <td>{order.from}</td>
              </tr>
              <tr>
                <th>To</th>
                <td>{order.to}</td>
              </tr>
              {
                order.comment ?
                  <tr>
                    <th>Comment</th>
                    <td>{order.comment}</td>
                  </tr> :
                  null
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}