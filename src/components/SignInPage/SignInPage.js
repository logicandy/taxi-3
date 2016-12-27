import React from 'react';
import SignUpForm from '../UsersForm/UsersForm';
import Header from '../Header/Header';
import HintMessage from '../HintMessage/HintMessage';
import './SignInPage.css';
import api from '../../modules/api';
import {MESSAGES} from '../../constants/messages';


export default class SignUpPage extends React.Component {

  constructor() {
    super();

    this.state = {
      hint: null
    };

    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  handleSignInSubmit(user, role) {
    api.signIn(user, role)
      .catch((error) => {
        this.setState({
          hint: {
            message: error || MESSAGES.UNEXPECTED_ERROR_MESSAGE,
            type: 'danger'
          }
        })
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
        <Header text={'Sign in page'}/>
        <SignUpForm
          user={''}
          onSubmit={this.handleSignInSubmit}/>
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
