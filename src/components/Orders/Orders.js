import React from 'react';
import logo from '../../logo.svg';
import './Orders.css';
import OrdersList from './OrdersList.js';
import {order1, order2, order3, order4}  from './orderslistinfo.js';


export default class Orders extends React.Component {
  render() {
    return (
      <div className="Orders">
      <div className="Orders-header">
        <img src={logo} className="Orders" alt="logo"/>
        <h2>Welcome to Sloboda taxi</h2>
      </div>
      <OrdersList source={[order1,order2,order3,order4]} />
      </div>
    );
  }
}