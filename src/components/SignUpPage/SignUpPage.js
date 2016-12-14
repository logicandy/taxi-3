import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import Header from '../Header/Header';
import Error from '../ErrorVisualizator/ErrorVisualizator';
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
      },
      isAuthorizationFailed: null
    };
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.closeErrorBox = this.closeErrorBox.bind(this);
  }

  handleSignUpSubmit(user) {


    this.setState({
      user: user
    }, ()=> {

      console.log(JSON.stringify(this.state.user));


      fetch('http://localhost:7000/auth_user', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.user)

      }).then((response) => {
        if (response.ok) {
          console.log('Logged in successfuly ', response);
        }
        else {
          console.log('Invalid Username/Password');
          this.setState({
            isAuthorizationFailed: true
          });
        }
      })
        .catch((error) => {
          console.log('Request failed', error);
        });
    });


  }

  closeErrorBox() {
    this.setState({
      isAuthorizationFailed: null
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
          (this.state.isAuthorizationFailed === true) ?
            <div id="error-block">
              <Error
                text={'Invalid Username/Password'}
                close={this.closeErrorBox}
              />
            </div>
            :
            <p>{''}</p>
        }

      </div>
    );
  }
}