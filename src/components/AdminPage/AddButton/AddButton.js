import React from 'react';
import './AddButton.css';



export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-panel--add-button">
        <button
          onClick={this.props.handler}
          className="btn btn-primary">
          Add new {this.props.entity}
        </button>
      </div>
    );
  }
}
