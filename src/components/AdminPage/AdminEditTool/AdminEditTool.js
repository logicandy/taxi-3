import React from 'react';
import api from '../../../modules/api';
import OrderForm from '../../OrderForm/OrderForm';
import UserForm from '../../UsersForm/UsersForm';
import HintMessage from '../../HintMessage/HintMessage';
import {MESSAGES} from '../../../constants/messages';
import BlockButton from '../SingleButton/SingleButton';
import {browserHistory} from 'react-router';


export default class AdminEditTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entityItem: null
    };

    this.blockUser = this.blockUser.bind(this);
    this.closeHint = this.closeHint.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    api.adminGetEntityById(this.props.params.entity, this.props.params.id)
      .then((response)=> {
        this.setState({
          entityItem: response
        });
      }).catch((error) => {
      console.log(error);
    })
  }

  handleEditSubmit(entity) {
    console.log(entity);
    api.adminUpdateEntity(this.props.params.entity, this.props.params.id, entity)
      .then(() => {
        this.setState({
          hint: {
            message: MESSAGES.ADMIN.UPDATE(this.props.params.entity),
            type: 'success'
          }
        });
        setTimeout(() => {
          browserHistory.push(`/admin/${this.props.params.entity}`)
        }, 1000);
      })
      .catch(() => {
        this.setState({
          hint: {
            message: MESSAGES.ADMIN.ERROR,
            type: 'danger'
          }
        });
      });
  }

  blockUser(){
    console.log('user blocked');
  }

  closeHint() {
    this.setState({
      hint: null
    });
  }

  render() {
    const role = this.props.params.entity.slice(0, this.props.params.entity.length - 1);
    return (
      <div>
        <h2>Edit {`${role} with id ${this.props.params.id}`}</h2>
        {
          this.state.entityItem ?
            this.props.params.entity === 'orders' ?
              <OrderForm
                mode={'edit'}
                order={this.state.entityItem.order}
                onSubmit={this.handleEditSubmit}
              /> :
              <div>
                <BlockButton
                  handler={this.blockUser}
                  isDanger={true}
                  text={`Block user`}
                />
                <UserForm
                  mode={'edit'}
                  entity={this.props.params.entity}
                  user={this.state.entityItem}
                  onSubmit={this.handleEditSubmit}
                />
              </div>
            :
            null
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


