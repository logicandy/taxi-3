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
      hint: null
    };

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  handleSignUpSubmit(user) {
    api.login(user)
      .then(() => {
        browserHistory.push('/drivers/order');
      })
      .catch(() => {
        this.setState({
          hint: {
            message: DATA_ERROR_MESSAGE,
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
        <Header text={'Sign up page'}/>
        <SignUpForm onSubmit={this.handleSignUpSubmit}/>
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