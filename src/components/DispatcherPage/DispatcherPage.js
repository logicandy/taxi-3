import React from 'react';
import './DispatcherPage.css';
import Header from '../Header/Header';
import OrdersList from '../OrdersList/OrdersList';
import DispatcherTabs from '../DispatcherTabs/DispatcherTabs'
import {ordersArray}  from '../../fixtures/orders.js';

export default class Dispatcher extends React.Component {
  render() {
    return (
      <div>
        <Header
          text={'Dispatcher page'}
        />
        <DispatcherTabs />
      </div>
    );
  }
}
