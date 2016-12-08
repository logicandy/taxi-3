import React from 'react';
import OrderEditForm from './OrderForm.js';
const json = require('./order.json');

export default class EditOrderHandler extends React.Component {

  constructor() {
    super();
    this.state = {
      order: null
    };
    this.loadData = this.loadData.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentWillMount() {
    console.log(json);
    this.loadData();
  }

  loadData() {
    this.setState({
      order: json
    })
  }

  handleEditSubmit(e) {
    e.preventDefault();
    console.log('Edited');
  }

  render() {
    return (
      <OrderEditForm
        onSubmit={this.handleEditSubmit}
        order={this.state.order}
      />
    );
  }
}
