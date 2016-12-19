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
      hint: {
        message: '',
        type: 'success'
      }
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.closeHintBox = this.closeHintBox.bind(this);
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
        this.setState({
          hint: {
            message: response.error.phone || response.error.email,
            type: 'danger'
          }
        })
      }
      else {
        this.setState({
          hint: {
            message: response.result,
            type: 'success'
          }
        })
      }
    }).catch((err) => {
      this.setState({
        hint: {
          message: err,
          type: 'danger'
        }
      })
    })
  }

  closeHintBox() {
    this.setState({
      hint: {message: ''}
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
          this.state.hint.message ?
            <HintMessage
              hint={this.state.hint}
              close={this.closeHintBox}
            /> :
            null
        }
      </div>
    );
  }
}


