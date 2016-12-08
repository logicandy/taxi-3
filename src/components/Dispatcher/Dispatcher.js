import React from 'react';
import EditOrderHandler from '../OrderEditForm/EditOrderHandler';
import AddOrderHandler from '../OrderEditForm/AddOrderHandler';
import './Dispatcher.css';


export default class Dispatcher extends React.Component {
  render() {
    return (
      <div className="Dispatcher container">
        <h1 className="Dispatcher-title"> Dispatcher page </h1>
        <AddOrderHandler/>
        <EditOrderHandler/>
      </div>
    );
  }
}
