import React from 'react';
import ReactDOM from 'react-dom';
import OrderViewPage from './OrderViewPage';


const paramsId = {id: 12};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OrderViewPage
      params={paramsId}/>,
    div);
});
