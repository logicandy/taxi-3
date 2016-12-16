import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import Error from '../ErrorVisualizator/ErrorVisualizator';
import './SignUpPage.css';
import api from '../../modules/api';
import {browserHistory} from 'react-router';


const UNEXPECTED_ERROR_MESSAGE = 'Unexpected error';
const DATA_ERROR_MESSAGE = 'Invalid Username/password';

export default class SignUpPage extends React.Component {

  constructor() {
    super();
    this.state = {
      isAuthorizationFailed: false
    };
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeErrorBox = this.closeErrorBox.bind(this);
  }

  handleSignUpSubmit(user) {
    api.login(user)
      .then(() => {
        browserHistory.push('/drivers/order');
      })
      .catch(() => {
        this.setState({
          isAuthorizationFailed: true
        });
    });
  }

  closeErrorBox() {
    this.setState({
      isAuthorizationFailed: false
    });
  }

  render() {
    return (
      <div>
        <Header text={'Sign up page'}/>
        <SignUpForm onSubmit={this.handleSignUpSubmit}/>
        {
          this.state.isAuthorizationFailed ?
            <div id="error-block">
              <Error
                text={DATA_ERROR_MESSAGE}
                close={this.closeErrorBox}
              />
            </div> :
            null
        }
      </div>
    );
  }
}