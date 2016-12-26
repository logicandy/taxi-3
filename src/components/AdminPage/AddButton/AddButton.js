import React from 'react';
import './AddButton.css';


export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const role = this.props.entity.slice(0, this.props.entity.length - 1);
    return (
      <div className="admin-panel--add-button">
        <button
          onClick={this.props.handler}
          className="btn btn-primary">
          Add new {role}
        </button>
      </div>
    );
  }
}
