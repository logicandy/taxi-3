import React from 'react';
import './ErrorVisualizator.css';


export default class ErrorVisualizator extends React.Component {
  render() {
    return (
      <div>
        <div
          className='error-block  toast toast-danger'>
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
