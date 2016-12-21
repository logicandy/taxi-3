import React from 'react';
import ReactDOM from 'react-dom';
import OrdersList from './OrdersList.js';
import {order1, order2, order3, order4}  from '../../fixtures/orderslistinfo.js';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrdersList orders={[order1,order2,order3,order4]} />, div);
});
