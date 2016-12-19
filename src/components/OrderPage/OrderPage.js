import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import './OrderPage.css';
import Header from '../Header/Header';
import api from '../../modules/api';
import Error from '../ErrorVisualizator/ErrorVisualizator';
import  {blank, existing, existingCompleted} from '../../fixtures/order';

export default class OrderPage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: '',
      messageColor: 'green'
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.closeErrorBox = this.closeErrorBox.bind(this);
  }

  handleAddSubmit(order) {

    const customOrder = {
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

    api.createOrder(customOrder).then((response) => {
      (response.error) ?
        this.setState({
          message: `Phone ${response.error.phone}` || response.error.email,
          messageColor: 'red'
        }) :
        this.setState({
          message: response.result,
          messageColor: 'green'
        })
    }).catch((err) => {
      this.setState({
        message: err
      })
    })
  }

  closeErrorBox() {
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
            <Error
              color={this.state.messageColor}
              text={this.state.message}
              close={this.closeErrorBox}
            /> :
            null
        }

      </div>
    );
  }
}


