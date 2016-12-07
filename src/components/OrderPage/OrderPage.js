import React, {Component} from 'react';
import logo from '../../logo.svg';
import './OrderPage.css';

class OrderPage extends Component {
  render() {
    return (
      <div className="OrderPage">
        <div className="OrderPage-header">
          <img src={logo} className="OrderPage" alt="logo"/>
          <h2>Welcome to Sloboda taxi</h2>
        </div>
        <p className="OrderPage-intro">
          This is an order page
        </p>
      </div>
    );
  }
}

export default OrderPage;
