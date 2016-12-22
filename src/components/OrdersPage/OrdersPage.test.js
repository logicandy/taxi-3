import React from 'react';
import ReactDOM from 'react-dom';
import Orders from './OrdersPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orders />, div);
});
