import React from 'react';
import ReactDOM from 'react-dom';
import OrderViewPage from './OrderViewPage';
import api from '../../../modules/api';
import  {order} from '../../../fixtures/orders';


const paramsId = {id: 12};

it('renders without crashing', () => {
  api.getOrder = () =>  Promise.resolve(order);
  const div = document.createElement('div');
  ReactDOM.render(
    <OrderViewPage
      params={paramsId}/>,
    div);
});
