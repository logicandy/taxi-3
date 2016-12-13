import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import './SignUpPage.css';

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
    }, ()=> {
      const toSend = {
        phone: user.selectedRole === 'driver' ?
          this.state.user.phone :
          this.state.user.email,
        password: this.state.user.password,
      };

      console.log(JSON.stringify(toSend));


      fetch('http://localhost:7000/auth_user', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toSend)

      }).then((response) => {
        if (response.ok) {
          console.log('Logged in successfuly ', response);
        }
        else {
          console.log('Invalid Username/Password');
        }
      })
        .catch((error) => {
          console.log('Request failed', error);
        });
    });


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