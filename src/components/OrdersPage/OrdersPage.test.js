import React from 'react';
import ReactDOM from 'react-dom';
import Orders from './OrdersPage';
import api from '../../modules/api';
import OrdersList from '../OrdersList/OrdersList.js';

const orders = [{
    "id":"356",
    "client_id":"001",
    "driver_id":"015",
    "from":"A",
    "to":"B",
    "state":false,
    "price":"50.00",
    "comment":"example",
    "created_at":"14-08-2016",
    "updated_at":"-"}];

it('renders without crashing', () => {
 api.getOrdersList = () =>  Promise.resolve(orders);
 const div = document.createElement('div');
 ReactDOM.render(
   <OrdersList
     orders={orders}/>,
   div);
});
