import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-wrapper">
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}
