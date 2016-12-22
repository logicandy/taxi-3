import React from 'react';
import logo from '../../logo.svg';
import './OrdersPage.css';
import OrdersList from '../OrdersList/OrdersList.js';
import {order1, order2, order3, order4}  from '../../fixtures/orderslistinfo.js';


export default class Orders extends React.Component {
  render() {
    return (
      <div className="Orders">
      <div className="Orders-header">
        <img src={logo} className="Orders-logo" alt="logo"/>
        <h2>Welcome to Sloboda taxi</h2>
      </div>
      <OrdersList orders={[order1,order2,order3,order4]} />
      </div>
    );
  }
}