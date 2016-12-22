import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import './OrderPage.css';
import Header from '../Header/Header';
import api from '../../modules/api';
import HintMessage from '../HintMessage/HintMessage';
import  {blank, order, existingCompleted} from '../../fixtures/orders';

export default class OrderPage extends React.Component {

  constructor() {
    super();
    this.state = {
      hint: null
    };

    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  handleAddSubmit(order) {

    const orderToSend = {
      client: {
        phone: order.client_id,
        email: order.email
      },
      order: {
        from: order.from,
        to: order.to,
        comment: order.comment
      }
    };

    api.createOrder(orderToSend).then((response) => {
      this.setState({
        hint: {
          message: response.result,
          type: 'success'
        }
      })
    }).catch((error) => {
      this.setState({
        hint: {
          message: error.email || error.phone,
          type: 'danger'
        }
      })
    })
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    return (
      <div>
        <Header
          text={'This is an order page'}
        />
        <OrderForm
          order={blank}
          onSubmit={this.handleAddSubmit}
        />
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


