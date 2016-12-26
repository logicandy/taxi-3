import React from 'react';
import Header from '../../Header/Header';
import {Link, browserHistory} from 'react-router';
import ItemsList from '../../ItemsTable/ItemsTable';
import api from '../../../modules/api';
import OrderView from '../OrderViewPage/OrderViewPage';
import  {blank, order, existingCompleted} from '../../../fixtures/orders';


export default class DriverPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      activeOrder: null,
    };

    this.cancelOrderHandler = this.cancelOrderHandler.bind(this);
    this.completeOrderHandler = this.completeOrderHandler.bind(this);
    this.viewItem = this.viewItem.bind(this);
  }

  componentDidMount() {
    api.driverGetOrders()
      .then((response) => {
        const currentDriverId = response.driver_id;
        const driverOrders = response.orders.map((item)=> {
          if (item.driver_id === currentDriverId && item.state === 'active') {
            this.setState({
              activeOrder: item
            })
          }
          return Object.assign({}, {
            id: item.id,
            from: item.from,
            to: item.to,
            comment: item.comment,
          })
        });

        this.setState({
          orders: driverOrders
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  viewItem(id) {
    browserHistory.push(`/driver/order/${id}`);
  }

  cancelOrderHandler() {
    console.log('cancel order');
  }

  completeOrderHandler() {
    api.driverCompleteOrder(this.state.activeOrder.id)
      .then(() => {
        this.setState({activeOrder: null});
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <Header
          text={'Drivers page'}
        />
        {
          this.state.activeOrder ?
            <OrderView
              activeOrder={this.state.activeOrder}
              rightButtonHandler={this.completeOrderHandler}
              leftButtonHandler={this.cancelOrderHandler}
              buttonsText={{left: 'Cancel order', right: 'Complete order'}}/> :
            this.state.orders ?
              <div>
                <ItemsList
                  loadEntities={this.state.orders}
                  rowClickHandler={this.viewItem}
                />
              </div>
              :
              <div className="loading"/>
        }
      </div>
    );
  }
}
