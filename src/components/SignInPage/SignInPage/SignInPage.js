import React from 'react';
import SignUpForm from '../SignInForm/SignInForm';
import Header from '../../Header/Header';
import HintMessage from '../../HintMessage/HintMessage';
import './SignInPage.css';
import api from '../../../modules/api';


const UNEXPECTED_ERROR_MESSAGE = 'Unexpected error';


export default class SignUpPage extends React.Component {

  constructor() {
    super();

    this.state = {
      hint: null
    };

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  handleSignUpSubmit(user, role) {
    api.signIn(user, role)
      .catch((error) => {
        this.setState({
          hint: {
            message: error || UNEXPECTED_ERROR_MESSAGE,
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
