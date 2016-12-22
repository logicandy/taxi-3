import React from 'react';
import ReactDOM from 'react-dom';
import OrderDetails from './OrderDetails';
import  {blank, existing, existingCompleted} from '../../../fixtures/orders';

const testOrder = {
  order_id: 12,
  ...existing
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OrderDetails
      order={testOrder}
    />, div);
});
