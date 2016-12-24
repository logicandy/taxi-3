import React from 'react';
import Header from '../../Header/Header';
import {Link} from 'react-router';


export default class DriverPage extends React.Component {
  render() {
    return (
      <div>
        <Header
          text={'Drivers orders'}
        />
        <ul>
          <li><Link to="/driver/order/1">order1</Link></li>
          <li><Link to="/driver/order/2">order2</Link></li>
          <li><Link to="/driver/order/3">order3</Link></li>
        </ul>
      </div>
    );
  }
}
