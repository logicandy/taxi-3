import React from 'react';
import './Header.css';
import {Link} from 'react-router';
import api from '../../modules/api';

export default class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      userHasToken: false,
      mainPage: null
    }
  };

  componentWillMount() {
    if (localStorage.getItem('auth_token')) {
      const url = localStorage.getItem('url');
      this.setState({
        userHasToken: true,
        mainPage: url
      })
    }
  }

  render() {
    return (
      <div className="Header--wrapper">
        <h2>{this.props.text}</h2>
        <nav className="Header--auth-nav">
          <ul>
            {
              this.state.userHasToken ?
                <li>
                  <Link
                    to={this.state.mainPage}>
                    <span className="label label-primary">
                    Main page
                    </span>
                  </Link>
                  <Link
                    to="/signin/"
                    onClick={api.signOut}>
                     <span className="label label-primary">
                    Sign Out
                     </span>
                  </Link>
                </li> :
                <li>
                  <Link
                    to="/signin/">
                    <span className="label label-primary">
                    Sign In
                    </span>
                  </Link>
                </li>
            }
          </ul>
        </nav>
      </div>
    )
  }
}
