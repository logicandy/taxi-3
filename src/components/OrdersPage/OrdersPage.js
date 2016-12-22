import React from 'react';
import logo from '../../logo.svg';
import './OrdersPage.css';
import Header from '../Header/Header';
import api from '../../modules/api';
import OrdersList from '../OrdersList/OrdersList.js';
import HintMessage from '../HintMessage/HintMessage.js';

//import {order1, order2, order3, order4}  from '../../fixtures/orderslistinfo.js';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      orders: []
    };
  }
  componentDidMount(){
    api.getOrdersList().then((response) => {
      console.log(response.orders);
      this.setState({
        orders: response.orders
      }
      );
    })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="Orders">
      <div className="Orders-header">
        <img src={logo} className="Orders-logo" alt="logo"/>
        <h2>Welcome to Sloboda taxi</h2>
      </div>
      <OrdersList orders={this.state.orders} />
      </div>
    );
  }
}