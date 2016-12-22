import React from 'react';
import ReactDOM from 'react-dom';
import OrdersList from './OrdersList.js';
import {ordersArray}  from '../../fixtures/orders.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrdersList orders={ordersArray} />, div);
});
