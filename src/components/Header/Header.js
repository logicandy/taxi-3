import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-wrapper">
        <img src={logo} className="Header" alt="logo"/>
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}
