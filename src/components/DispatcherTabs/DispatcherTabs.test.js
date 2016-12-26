import React from 'react';
import ReactDOM from 'react-dom';
import DispatcherTabs from './DispatcherTabs';
import DriversList from '../DriversList/DriversList';
import api from '../../modules/api';

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
 api.getDriversList = () =>  Promise.resolve(drivers);
 const div = document.createElement('div');
 ReactDOM.render(
   <DriversList
     driver={drivers}/>,
   div);
});