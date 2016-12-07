import React from 'react';
import OrderEditForm from '../OrderEditForm/OrderEditForm';
import './Dispatcher.css';


export default class Dispatcher extends React.Component {
  render() {
    return (
      <div className="Dispatcher container">
        <h1 className="Dispatcher-title"> Dispatcher page </h1>
        <OrderEditForm/>
      </div>

    );
  }
}
