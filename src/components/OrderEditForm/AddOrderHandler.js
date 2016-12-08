import React from 'react';
import OrderEditForm from './OrderForm.js';

export default class AddOrderHandler extends React.Component {

  constructor() {
    super();
    this.state = {
      order: null
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddSubmit() {
    console.log('Added');
    return false;
  }

  render() {
    return (
      <OrderEditForm
        onSubmit={this.handleAddSubmit}
      />
    );
  }
}

