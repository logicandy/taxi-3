import React from 'react';
import Header from '../../Header/Header';
import {Link} from 'react-router';


export default class DriversOrder extends React.Component {
  render() {
    return (
      <div>
        <Header
          text={'Drivers orders'}
        />
        <ul>
          <li><Link to="/drivers/order/765765">order1</Link></li>
          <li><Link to="/drivers/order/89">order2</Link></li>
          <li><Link to="/drivers/order/7">order3</Link></li>
        </ul>
      </div>
    );
  }
}
