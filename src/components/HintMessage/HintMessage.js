import React from 'react';
import './HintMessage.css';


export default class HintMessage extends React.Component {
  render() {
    return (
      <div>
        <div
          className={this.props.hint.type === 'success' ?
            'hint-block  toast toast-success' :
            'hint-block  toast toast-danger'}>
          <button
            className="btn btn-clear float-right"
            onClick={this.props.close}
          />
          {this.props.hint.message}
        </div>
      </div>
    );
  }
}
