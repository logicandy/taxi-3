import React from 'react';
import './SignUpForm.css';

export default class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRole: this.props.user.selectedRole,
      email: this.props.user.email,
      phone: this.props.user.phone,
      password: this.props.user.password
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {

    (e.target.type === 'radio' ) ?
      this.setState({
        selectedRole: e.target.value
      }) :
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const isDriver = this.state.selectedRole === 'driver';
    return (
      <form className="column col-6"
            onSubmit={this.handleSubmit}>
        <p>Sign up as:</p>
        <div className="form-group">
          <label className="form-radio">
            <input
              type="radio"
              name="role"
              value={'driver'}
              checked={this.state.selectedRole === 'driver'}
              onChange={this.handleChange}
            />
            <i className="form-icon">
            </i> Driver
          </label>
          <label className="form-radio">
            <input
              type="radio"
              name="role"
              value={'dispatcher'}
              checked={this.state.selectedRole === 'dispatcher'}
              onChange={this.handleChange}
            />
            <i className="form-icon">
            </i> Dispatcher
          </label>
          <label className="form-radio">
            <input
              type="radio"
              name="role"
              value={'admin'}
              checked={this.state.selectedRole === 'admin'}
              onChange={this.handleChange}
            />
            <i className="form-icon">
            </i> Admin
          </label>
        </div>
        {
          isDriver ?
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                required={true}
                pattern="\d{3,15}"
                name="phone"
                className="form-input"
                type="text"
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </div> :
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                required={true}
                name="email"
                className="form-input"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
        }
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            required={true}
            name="password"
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Sign up"/>
      </form>
    );
  }
}
