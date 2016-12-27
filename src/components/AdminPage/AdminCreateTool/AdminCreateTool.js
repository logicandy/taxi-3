import React from 'react';
import './AdminCreateTool.css';
import api from '../../../modules/api';
import OrderForm from '../../OrderForm/OrderForm';
import UserForm from '../../UsersForm/UsersForm';
import  {blank} from '../../../fixtures/orders';
import HintMessage from '../../HintMessage/HintMessage';
import {MESSAGES} from '../../../constants/messages';
import {browserHistory} from 'react-router';


export default class AdminCreateTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hint: null,
    };

    this.closeHint = this.closeHint.bind(this);
    this.handleCreationSubmit = this.handleCreationSubmit.bind(this);
  }

  handleCreationSubmit(entity) {
    let dataToSend = entity;
    if (this.props.params.entity === 'orders') {
      dataToSend = {
        client: {
          phone: entity.client_phone,
          email: entity.email
        },
        order: {
          from: entity.from,
          to: entity.to,
          comment: entity.comment
        }
      };
    }

    api.adminCreateEntity(this.props.params.entity, dataToSend)
      .then(() => {
        this.setState({
          hint: {
            message: MESSAGES.ADMIN.CREATE(this.props.params.entity),
            type: 'success'
          }
        });
        setTimeout(() => {
          browserHistory.push(`/admin/${this.props.params.entity}`)
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          hint: {
            message: error.email || error.phone || MESSAGES.ADMIN.ERROR,
            type: 'danger'
          }
        });
      });
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    return (
      <div>
        <h2>Add {this.props.params.entity}</h2>
        {
          this.props.params.entity === 'orders' ?
            <OrderForm
              order={''}
              mode={'create'}
              onSubmit={this.handleCreationSubmit}
            /> :
            <UserForm
              mode={'create'}
              user={''}
              entity={this.props.params.entity}
              onSubmit={this.handleCreationSubmit}
            />
        }{
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
