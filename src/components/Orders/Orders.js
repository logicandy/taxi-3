import React from 'react';
import logo from '../../logo.svg';
import './Orders.css';
import Orderslist from './Orderslist.js';

export default class Orders extends React.Component {
  render() {
    return (
      <div className="Orders">
      <div className="Orders-header">
        <img src={logo} className="Orders" alt="logo"/>
        <h2>Welcome to Sloboda taxi</h2>
      </div>
      <Orderslist />
      </div>
    );
  }
}