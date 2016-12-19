import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import HintMessage from '../HintMessage/HintMessage';
import './SignUpPage.css';
import api from '../../modules/api';
import {browserHistory} from 'react-router';


const UNEXPECTED_ERROR_MESSAGE = 'Unexpected error';
const DATA_ERROR_MESSAGE = 'Invalid Username/password';

export default class SignUpPage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ''
    };
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeHintMessage = this.closeHintMessage.bind(this);
  }

  handleSignUpSubmit(user) {
    api.login(user)
      .then(() => {
        browserHistory.push('/drivers/order');
      })
      .catch(() => {
        this.setState({
          message: DATA_ERROR_MESSAGE
        });
    });
  }

  closeHintMessage() {
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <Header text={'Sign up page'}/>
        <SignUpForm onSubmit={this.handleSignUpSubmit}/>
        {
          this.state.message ?
            <div id="error-block">
              <HintMessage
                color='red'
                text={this.state.message}
                close={this.closeHintMessage}
              />
            </div> :
            null
        }
      </div>
    );
  }
}