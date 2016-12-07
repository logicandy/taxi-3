import React from 'react';
import ReactDOM from 'react-dom';
import OrderPage from './OrderPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderPage />, div);
});
