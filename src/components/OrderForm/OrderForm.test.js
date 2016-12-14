import React from 'react';
import ReactDOM from 'react-dom';
import OrderForm from './OrderForm';
import  {blank, existing, existingCompleted} from '../../fixtures/order';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderForm
    order={blank}
  />, div);
});
