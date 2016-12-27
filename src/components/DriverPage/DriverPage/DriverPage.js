import React from 'react';
import Header from '../../Header/Header';
import {Link, browserHistory} from 'react-router';
import ItemsList from '../../ItemsTable/ItemsTable';
import api from '../../../modules/api';
import OrderView from '../OrderViewPage/OrderViewPage';
import HintMessage from '../../HintMessage/HintMessage';
import CancellationForm from '../CancellationForm/CancellationForm';
import {MESSAGES} from '../../../constants/messages';


export default class DriverPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hint: null,
      orders: null,
      activeOrder: {
        cancellationForm: false,
        orderData: null,
      },
    };

    this.sendCancellationRequest = this.sendCancellationRequest.bind(this);
    this.cancelButtonVisibilityHandler = this.cancelButtonVisibilityHandler.bind(this);
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
              cancellationForm: false,
              activeOrder: {
                orderData: item
              }
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
      .catch(() => {
        this.setState({
          hint: {
            message: MESSAGES.UNEXPECTED_ERROR_MESSAGE,
            type: 'danger'
          }
        });
      });
  }

  viewItem(id) {
    browserHistory.push(`/driver/order/${id}`);
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  cancelButtonVisibilityHandler() {
    this.setState({
      activeOrder: {
        cancellationForm: !this.state.activeOrder.cancellationForm,
        orderData: this.state.activeOrder.orderData,
      }
    })
  }

  completeOrderHandler() {
    api.driverCompleteOrder(this.state.activeOrder.id)
      .then(() => {
        this.setState({
          activeOrder: null,
        });
      })
      .catch(() => {
        this.setState({
          hint: {
            message: MESSAGES.UNEXPECTED_ERROR_MESSAGE,
            type: 'danger'
          }
        });
      });
  }

  sendCancellationRequest(request) {
    console.log(request);
    api.driverSendCancellationRequest(this.state.activeOrder.orderData.id, request)
      .then(() => {
        console.log('ok');
      })
      .catch(() => {
        this.setState({
          hint: {
            message: MESSAGES.UNEXPECTED_ERROR_MESSAGE,
            type: 'danger'
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Header
          text={'Driver page'}
        />
        {
          this.state.activeOrder.orderData ?
            <div>
              <OrderView
                activeOrder={this.state.activeOrder.orderData}
                rightButtonHandler={this.completeOrderHandler}
                leftButtonHandler={this.cancelButtonVisibilityHandler}
                buttonsText={{left: 'Cancel order', right: 'Complete order'}}
              />
              {
                this.state.activeOrder.cancellationForm &&
                <CancellationForm
                  handleSubmit={this.sendCancellationRequest}
                />
              }
              {
                this.state.hint &&
                <HintMessage
                  hint={this.state.hint}
                  close={this.closeHint}
                />
              }
            </div> :
            this.state.orders ?
              <div>
                <ItemsList
                  loadEntities={this.state.orders}
                  rowClickHandler={this.viewItem}
                />
              </div> :
              <div className="loading"/>
        }
      </div>
    );
  }
}
