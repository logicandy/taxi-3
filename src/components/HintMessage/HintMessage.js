import React from 'react';
import './HintMessage.css';


export default class HintMessage extends React.Component {
  render() {
    return (
      <div>
        <div
          className={this.props.color === 'success' ?
            'hint-block  toast toast-success' :
            'hint-block  toast toast-danger'}>
          <button
            className="btn btn-clear float-right"
            onClick={this.props.close}>
          </button>
          <span className="icon icon-error_outline">
          </span>
          {this.props.text}
        </div>
      </div>
    );
  }
}
