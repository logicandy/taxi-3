import React from 'react';
import './CancellationForm.css';

export default class OrderDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const entityToSend = {...this.state};
    this.props.handleSubmit(entityToSend);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-3">Cancellation Message</label>
          <textarea
            onChange={this.handleChange}
            name="message"
            className="form-input"
            placeholder="Please, describe a reason of order cancellation "
            rows="3"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Send request for cancellation!"/>
      </form>
    );
  }
}
