import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import Error from '../ErrorVisualizator/ErrorVisualizator';
import './SignUpPage.css';

export default class SignUpPage extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      isAuthorizationFailed: false,
      errorMessage: 'Unexpected error'
    };
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeErrorBox = this.closeErrorBox.bind(this);
  }

  handleSignUpSubmit(user) {


    this.setState({
      user: user
    }, ()=> {

      fetch('http://localhost:7000/auth_user', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.user)

      }).then((response) => {
        if (response.ok) {
        }
        else {
          this.setState({
            isAuthorizationFailed: true,
            errorMessage: 'Invalid Username/password'
          });
        }
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
        <Header
          text={'Sign up page'}
        />
        <SignUpForm
          onSubmit={this.handleSignUpSubmit}
        />
        {
          this.state.isAuthorizationFailed === true ?
            <div id="error-block">
              <Error
                text={this.state.errorMessage}
                close={this.closeErrorBox}
              />
            </div> :
            null
        }
      </div>
    );
  }
}