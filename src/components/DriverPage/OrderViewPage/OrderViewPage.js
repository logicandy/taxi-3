import React from 'react';
import './OrderViewPage.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import {browserHistory} from 'react-router';
import  {blank, order, existingCompleted} from '../../../fixtures/orders';


export default class OrderViewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      order: null
    };

    this.backToOrders = this.backToOrders.bind(this);
  }

  componentWillMount() {
   /* api.getOrder(this.props.params.id).then((order)=> {
      this.setState({
        order: order
      });
    });*/

    this.setState({
      order: {
        order_id: this.props.params.id,
        ...order
      }
    });

  }

  backToOrders() {
    browserHistory.push('/drivers/order');
  }

  render() {
    return (
      <div>
        <OrderDetails
          order={this.state.order}
        />
        <div className="order-view--footer">
          <button
            onClick={this.backToOrders}
            className="btn order-view--back-button">
            Back to orders
          </button>
          <button
            className="btn btn-primary order-view--accept-button">
            Accept order
          </button>
        </div>
      </div>
    );
  }
}
