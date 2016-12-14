import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import './OrderPage.css';
import Header from '../Header/Header';
import  {blank, existing, existingCompleted} from '../../fixtures/order';

class OrderPage extends React.Component {

  constructor() {
    super();
    this.state = {
      client_id: '',
      driver_id: '',
      from: '',
      to: '',
      state: false,
      price: '',
      comment: ''
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddSubmit(order) {
    this.setState({
      ...order,
    });
    console.log(this.state);
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
      </div>
    );
  }
}

export default OrderPage;
