import React, {Component} from 'react';
import logo from '../../logo.svg';
import OrderForm from '../OrderForm/OrderForm';
import './OrderPage.css';

import  {blank, existing} from '../OrderForm/order';

class OrderPage extends Component {


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
    alert(this.state.client_id);
  }

  render() {
    return (
      <div className="OrderPage">
        <div className="OrderPage-header">
          <img src={logo} className="OrderPage" alt="logo"/>
          <h2>Welcome to Sloboda taxi</h2>
        </div>
        <OrderForm
          order={blank}
          onSubmit={this.handleAddSubmit}
        />
      </div>
    );
  }
}

export default OrderPage;
