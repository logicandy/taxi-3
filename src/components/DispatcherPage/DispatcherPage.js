import React from 'react';
import './DispatcherPage.css';
import Header from '../Header/Header';
import OrdersList from '../OrdersList/OrdersList';
import {ordersArray}  from '../../fixtures/orders.js';

export default class Dispatcher extends React.Component {
  render() {
    return (
      <div>
        <Header
          text={'Dispatcher page'}
        />
        <OrdersList
          orders={ordersArray}
        />
      </div>
    );
  }
}
