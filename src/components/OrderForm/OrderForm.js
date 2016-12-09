import React from 'react';
import './OrderForm.css';

export default class OrderForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client_id: this.props.order.client_id ?
        this.props.order.client_id :
        '',
      driver_id: this.props.order.driver_id ?
        this.props.order.driver_id :
        '',
      from: this.props.order.from ?
        this.props.order.from :
        '',
      to: this.props.order.to ?
        this.props.order.to :
        '',
      price: this.props.order.price ?
        this.props.order.price :
        '',
      state: this.props.order.state,
      comment: this.props.order.comment ?
        this.props.order.comment :
        ''
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
    const isModifiedMode = Boolean(this.state.price) || Boolean(this.state.driver_id);
    return (
      <form className="OrderForm column col-6"
            onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2>Order</h2>
          <label className="form-label">Client Phone</label>
          <input
            required={true}
            pattern="\d+"
            name="client_id"
            className="form-input"
            type="text"
            placeholder="Client Phone"
            onChange={this.handleChange}
            value={this.state.client_id}
          />
        </div>
        {
          isModifiedMode ?
            <div className="form-group">
              <label className="form-label">Driver`s name </label>
              <input
                required={true}
                pattern="(\w+(\s)*)+"
                name="driver_id"
                className="form-input"
                type="text"
                placeholder="Driver`s Name"
                onChange={this.handleChange}
                value={this.state.driver_id}
              />
            </div>
            :
            <p>{''}</p>
        }
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
          isModifiedMode ?
            <div>
              <div className="form-group">
                <label className="form-label">Price &#8372;</label>
                <input
                  required={true}
                  pattern="[(0-9)+.?(0-9)*]+"
                  name="price"
                  className="form-input"
                  type="text"
                  placeholder="Price"
                  onChange={this.handleChange}
                  value={this.state.price}
                />
              </div>
              <div className="form-group">
                <label className="form-checkbox">
                  <input
                    required={true}
                    disabled={true}
                    name="state"
                    type="checkbox"
                    onChange={this.handleChange}
                    value={this.state.state}
                    checked={this.state.state}
                  />
                  <i className="form-icon">
                  </i> Completed
                </label>
              </div>
            </div> :
            <p>{''}</p>
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
