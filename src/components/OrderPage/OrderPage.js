import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import './OrderPage.css';
import Header from '../Header/Header';
import api from '../../modules/api';
import HintMessage from '../HintMessage/HintMessage';
import  {blank, existing, existingCompleted} from '../../fixtures/order';

export default class OrderPage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: '',
      messageColor: 'green'
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.closeHintMessage = this.closeHintMessage.bind(this);
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
      if (response.error) {
        const errorMessage = {
          phone: `Phone ${response.error.phone}`,
          email: response.error.email
        };
        this.setState({
          message: errorMessage.phone || errorMessage.email,
          messageColor: 'red'
        })
      }
      else {
        this.setState({
          message: response.result,
          messageColor: 'green'
        })
      }
    }).catch((err) => {
      this.setState({
        message: err,
        messageColor: 'red'
      })
    })
  }

  closeHintMessage() {
    this.setState({
      message: ''
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
          this.state.message ?
            <HintMessage
              color={this.state.messageColor}
              text={this.state.message}
              close={this.closeHintMessage}
            /> :
            null
        }
      </div>
    );
  }
}


