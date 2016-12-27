import React from 'react';
import './SingleButton.css';


export default class SingleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.handler}
        className={this.props.isDanger?'block-button--danger btn btn-primary':'btn btn-primary'}>
        {this.props.text}
      </button>
    );
  }
}
