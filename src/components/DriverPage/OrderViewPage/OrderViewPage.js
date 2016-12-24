import React from 'react';
import './OrderViewPage.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import {browserHistory} from 'react-router';
import  {blank, order, existingCompleted} from '../../../fixtures/orders';
import HintMessage from '../../HintMessage/HintMessage';
import api from '../../../modules/api';


export default class OrderViewPage extends React.Component {

  constructor() {
    super();
    this.state = {
      order: null,
      hint: null,
    };

    this.backToOrders = this.backToOrders.bind(this);
    this.acceptOrder = this.acceptOrder.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  componentDidMount() {
    api.getOrder(this.props.params.id)
      .then((order) => {
        this.setState({
          order: order
        });
      })
  }

  acceptOrder() {
    api.acceptOrderByDriver(this.props.params.id)
      .then((response) => {
        console.log(response);
        this.setState({
          hint: {
            message: `You successfully accepted an order ${response.current_order.id}`,
            type: 'success'
          }
        })
      })
      .catch(() => {
        this.setState({
          hint: {
            message: 'Something bad happened on the server',
            type: 'danger'
          }
        });
      });
  }

  backToOrders() {
    browserHistory.push('/driver');
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    return (
      <div>
        {
          this.state.order &&
          <OrderDetails
            order={this.state.order}
          />
        }
        <div className="order-view--footer">
          <button
            onClick={this.backToOrders}
            className="btn order-view--back-button">
            Back to orders
          </button>
          <button
            onClick={this.acceptOrder}
            className="btn btn-primary order-view--accept-button">
            Accept order
          </button>
        </div>
        {
          this.state.hint &&
          <HintMessage
            hint={this.state.hint}
            close={this.closeHint}
          />
        }
      </div>
    );
  }
}
