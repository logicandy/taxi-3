import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import './SignUpPage.css'


export default class SignUpPage extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        selectedRole: 'driver',
        email: '',
        phone: '',
        password: ''
      }
    };
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  handleSignUpSubmit(user) {

    (user.selectedRole === 'driver') ?
      delete user.email :
      delete user.phone;

    this.setState({
      user: user
    });
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <Header
          text={'Sign up page'}
        />
        <SignUpForm
          user={this.state.user}
          onSubmit={this.handleSignUpSubmit}
        />
      </div>
    );
  }
}
