import React from 'react';
import './OrderView.css';
import {browserHistory} from 'react-router';
import  {blank, existing, existingCompleted} from '../../../fixtures/order';
import api from '../../../modules/api';

export default class OrderView extends React.Component {
  constructor() {
    super();
    this.state = {
      order: null
    };
    this.backToOrders = this.backToOrders.bind(this);
  }

  componentWillMount() {
    /*  api.getOrder(this.props.params.id).then((order)=> {
     this.setState({
     order: order
     });
     });*/

    this.setState({
      order: existing
    });

  }

  backToOrders() {
    browserHistory.push('/drivers/order');
  }

  render() {
    return (
      <div className="modal-container order-view">
        <div className="modal-header">
          <div className="modal-title">
            <h3>Order { this.props.params.id}</h3>
          </div>
        </div>
        <div className="modal-body">
          <div className="content">
            <table className="order-view--table table table-striped table-hover">
              <tbody>
              <tr>
                <th>Client Phone</th>
                <td>{this.state.order.client_id}</td>
              </tr>
              <tr>
                <th>From</th>
                <td>{this.state.order.from}</td>
              </tr>
              <tr>
                <th>To</th>
                <td>{this.state.order.to}</td>
              </tr>
              {
                this.state.order.comment ?
                  <tr>
                    <th>Comment</th>
                    <td>{this.state.order.comment}</td>
                  </tr> : null
              }
              </tbody>
            </table>
          </div>
        </div>
        <div className="order-view--footer">
          <button
            onClick={this.backToOrders}
            className="btn order-view--back-button">
            Back to orders
          </button>
          <button className="btn btn-primary">Get order</button>
        </div>
      </div>
    );
  }
}
