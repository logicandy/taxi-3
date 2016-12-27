import React from 'react';
import './OrderForm.css';

export default class OrderForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client_id: this.props.order.client_id ?
        this.props.order.client_id : '',
      driver_id: this.props.order.driver_id ?
        this.props.order.driver_id : '',
      from: this.props.order.from ?
        this.props.order.from : '',
      to: this.props.order.to ?
        this.props.order.to : '',
      price: this.props.order.price ?
        this.props.order.price : '',
      email: this.props.order.email ?
        this.props.order.email : '',
      state: this.props.order.state,
      comment: this.props.order.comment ?
        this.props.order.comment : '',
      client_phone: this.props.order.client_phone ?
        this.props.order.client_phone : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    const isEditMode = this.props.mode === 'edit';
    return (
      <form className="OrderForm column col-6"
            onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2>Order</h2>
          {
            isEditMode ?
              <div>
                <div className="form-group">
                  <label className="form-label">Client id </label>
                  <input
                    required={false}
                    pattern="\d+"
                    name="client_id"
                    className="form-input"
                    type="text"
                    placeholder="Client id"
                    onChange={this.handleChange}
                    value={this.state.client_id}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Driver id </label>
                  <input
                    required={false}
                    pattern="\d+"
                    name="driver_id"
                    className="form-input"
                    type="text"
                    placeholder="Driver id"
                    onChange={this.handleChange}
                    value={this.state.driver_id}
                  />
                </div>
              </div>
              :
              null
          }
          <label className="form-label">Client Phone</label>
          <input
            required={true}
            pattern="\d{10}"
            name="client_phone"
            className="form-input"
            type="text"
            placeholder="Client Phone"
            onChange={this.handleChange}
            value={this.state.client_phone}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Client Email</label>
          <input
            name="email"
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label className="form-label">From</label>
          <input
            required={true}
            name="from"
            className="form-input"
            type="text"
            placeholder="Start location"
            onChange={this.handleChange}
            value={this.state.from}
          />
        </div>
        <div className="form-group">
          <label className="form-label">To</label>
          <input
            required={true}
            name="to"
            className="form-input"
            type="text"
            placeholder="Destination location"
            onChange={this.handleChange}
            value={this.state.to}
          />
        </div>
        {
          isEditMode ?
            <div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  required={true}
                  name="state"
                  className="form-input"
                  type="text"
                  placeholder="State"
                  onChange={this.handleChange}
                  value={this.state.state}
                />
              </div>
            </div> :
            null
        }
        <div className="form-group">
          <label className="form-label">Order description</label>
          <textarea
            name="comment"
            className="form-input"
            placeholder="Order description"
            rows="3"
            onChange={this.handleChange}
            value={this.state.comment}
          >
          </textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    );
  }
}
