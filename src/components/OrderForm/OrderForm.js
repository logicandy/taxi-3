import React from 'react';
import './OrderForm.css';

export default class OrderForm extends React.Component {

  constructor() {
    super();
    this.state = {
      client_id: '',
      driver_id: '',
      from: '',
      to: '',
      price: '',
      state: '',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentWillMount() {
    if (this.props.order)
      this.setState({
        client_id: this.props.order.client_id,
        driver_id: this.props.order.driver_id,
        from: this.props.order.from,
        to: this.props.order.to,
        price: this.props.order.price,
        state: this.props.order.state,
        comment: this.props.order.comment
      });
  }


  handleChange(e) {
    if (e.target.type == 'checkbox') {
      const oldValue = this.state.state;
      this.setState({[e.target.name]: !oldValue});
    }
    else {
      this.setState({[e.target.name]: e.target.value});
    }
    console.log(this.state[e.target.name]);

  }


  render() {
    return (
      <form className="OrderForm column col-6" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <h2>Order</h2>
          <label className="form-label">Client Email </label>
          <input
            name="client_id"
            className="form-input"
            type="text" list="clients-emails"
            placeholder="Client Email"
            onChange={this.handleChange}
            value={this.state.client_id}
          />
          <datalist className="form-select" id="clients-emails">
            <option>Client Email1</option>
            <option>Client Email2</option>
            <option>Client Email3</option>
          </datalist>
        </div>
        <div className="form-group">
          <label className="form-label">Driver`s name </label>
          <input
            name="driver_id"
            className="form-input"
            type="text" list="drivers-names"
            placeholder="Driver`s Name"
            onChange={this.handleChange}
            value={this.state.driver_id}
          />
          <datalist className="form-select" id="drivers-names">
            <option>Driver`s Name1</option>
            <option>Driver`s Name2</option>
            <option>Driver`s Name3</option>
          </datalist>
        </div>
        <div className="form-group">
          <label className="form-label">From</label>
          <input
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
            name="to"
            className="form-input"
            type="text"
            placeholder="Destination location"
            onChange={this.handleChange}
            value={this.state.to}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price &#8372;</label>
          <input
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
              name="completed"
              type="checkbox"
              onChange={this.handleChange}
              defaultChecked={this.state.state}
            />
            <i className="form-icon">
            </i> Completed
          </label>
        </div>
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
