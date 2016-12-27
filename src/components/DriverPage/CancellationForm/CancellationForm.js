import React from 'react';
import './CancellationForm.css';

export default class OrderDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cancel_comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const entityToSend = {cancel_comment: this.state.cancel_comment, cancel_request:true};
    this.props.handleSubmit(entityToSend);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-3">Cancellation Message</label>
          <textarea
            onChange={this.handleChange}
            name="cancel_comment"
            className="form-input"
            placeholder="Please, describe a reason of order cancellation "
            rows="3"
          />
        </div>
        <input className="btn btn-primary cancellation-order--button" type="submit" value="Send request for cancellation!"/>
      </form>
    );
  }
}
