import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from './DispatcherPage';
import Orders from '../OrdersPage/OrdersPage';
import api from '../../modules/api';
import OrdersList from '../OrdersList/OrdersList';
import DispatcherTabs from '../DispatcherTabs/DispatcherTabs';

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
const drivers = [{
  "id": "353",
  "name": "Anatoliy",
  "phone": "+380500002211",
  "status": "active",
  "auto": "bmw"},
  {
  "id": "353",
  "name": "Anatoliy",
  "phone": "+380500002211",
  "status": "active",
  "auto": "bmw"}];

it('renders without crashing', () => {
 api.getOrdersList = () =>  Promise.resolve(orders);
 api.getDriversList = () =>  Promise.resolve(drivers);
 const div = document.createElement('div');
 ReactDOM.render(
   <DispatcherTabs
     orders={orders} drivers={drivers}/>,
   div);
});

