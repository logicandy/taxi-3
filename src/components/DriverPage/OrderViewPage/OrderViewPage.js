import React from 'react';
import './OrderViewPage.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import {browserHistory} from 'react-router';
import HintMessage from '../../HintMessage/HintMessage';
import api from '../../../modules/api';
import {MESSAGES} from '../../../constants/messages';


export default class OrderViewPage extends React.Component {

  constructor() {
    super();
    this.state = {
      order: null,
      hint: null,
    };

    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.handleRightButton = this.handleRightButton.bind(this);
    this.acceptOrder = this.acceptOrder.bind(this);
    this.closeHint = this.closeHint.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  componentDidMount() {
    if (this.props.activeOrder) {
      this.setState({
        order: this.props.activeOrder
      });
    }
    else {
      api.getOrder(this.props.params.id)
        .then((order) => {
          this.setState({
            order: order
          });
        })
        .catch(() => {
          this.setState({
            hint: {
              message: MESSAGES.UNEXPECTED_ERROR_MESSAGE,
              type: 'danger'
            }
          });
        })
    }
  }

  acceptOrder() {
    api.acceptOrderByDriver(this.props.params.id)
      .then((response) => {
        this.setState({
          hint: {
            message: MESSAGES.ORDERS.ACCEPT(response.current_order.id),
            type: 'success'
          },
        });
        setTimeout(() => browserHistory.push('/driver/'), 1000);
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

  handleLeftButton() {
    if (this.props.leftButtonHandler) {
      this.props.leftButtonHandler();
    }
    else {
      browserHistory.push('/driver/');
    }
  }

  handleRightButton() {
    if (this.props.rightButtonHandler) {
      this.props.rightButtonHandler();
    }
    else {
      this.acceptOrder();
    }
  }

  buttonText(button) {
    if (this.props.buttonsText) {
      return (button === 'left') ? this.props.buttonsText.left : this.props.buttonsText.right;
    }
    else {
      return (button === 'left') ? 'Back to orders' : 'Accept order';
    }
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    return (
      <div>
        {
          this.state.order &&
          <OrderDetails
            order={this.state.order}
          />
        }
        <div className="order-view--footer">
          <button
            onClick={this.handleLeftButton}
            className="btn order-view--left-button">
          <span> {this.buttonText('left')}</span>
          </button>
          <button
            onClick={this.handleRightButton}
            className="btn order-view--right-button">
           <span> {this.buttonText('right')}</span>
          </button>
        </div>
        {
          this.state.hint &&
          <HintMessage
            hint={this.state.hint}
            close={this.closeHint}
          />
        }
      </div>
    );
  }
}