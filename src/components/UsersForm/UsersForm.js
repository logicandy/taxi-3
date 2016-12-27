import React from 'react';
import './UsersForm.css';

export default class UsersForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRole: this.props.entity ?
        this.props.entity : 'drivers',
      email: this.props.user.email ?
        this.props.user.email : '',
      phone: this.props.user.phone ?
        this.props.user.phone : '',
      password: this.props.user.password ?
        this.props.user.password : '',
      name: this.props.user.name ?
        this.props.user.name : '',
      auto: this.props.user.auto ?
        this.props.user.auto : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {

    e.preventDefault();

    const role = this.state.selectedRole;
    const credentialProperty = role === 'drivers' ? 'phone' : 'email';

    if (this.props.mode) {
      if (role === 'clients') {

        this.props.onSubmit({phone: this.state.phone, email: this.state.email});
      }
      else {
        const user = {
          name: this.state.name,
          [credentialProperty]: this.state[credentialProperty]
        };
        const auto = role === 'drivers' ? {auto: this.state.auto} : {};
        const creation = this.props.mode === 'create' ? {password: this.state.password} : {};
        Object.assign(user, auto, creation);

        this.props.onSubmit(user)
      }
    }
    else {
      const user = {
        password: this.state.password,
        [credentialProperty]: this.state[credentialProperty]
      };
      this.props.onSubmit(user, role);
    }
  }

  render() {
    const editMode = this.props.mode === 'edit';
    const createMode = this.props.mode === 'create';
    const isDriver = this.state.selectedRole === 'drivers';
    const isClient = this.state.selectedRole === 'clients';

    return (
      <form className="column col-6"
            onSubmit={this.handleSubmit}>
        {
          editMode || createMode ?
            isClient ?
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  required={true}
                  pattern="\d{10}"
                  name="phone"
                  className="form-input"
                  type="text"
                  placeholder="Phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div> :
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  required={true}
                  name="name"
                  className="form-input"
                  type="text"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div> :
            <div>
              <p>Sign up as:</p>
              <div className="form-group">
                <label className="form-radio">
                  <input
                    type="radio"
                    name="selectedRole"
                    value={'drivers'}
                    checked={this.state.selectedRole === 'drivers'}
                    onChange={this.handleChange}
                  />
                  <i className="form-icon">
                  </i> Driver
                </label>
                <label className="form-radio">
                  <input
                    type="radio"
                    name="selectedRole"
                    value={'dispatchers'}
                    checked={this.state.selectedRole === 'dispatchers'}
                    onChange={this.handleChange}
                  />
                  <i className="form-icon">
                  </i> Dispatcher
                </label>
                <label className="form-radio">
                  <input
                    type="radio"
                    name="selectedRole"
                    value={'admins'}
                    checked={this.state.selectedRole === 'admins'}
                    onChange={this.handleChange}
                  />
                  <i className="form-icon">
                  </i> Admin
                </label>
              </div>
            </div>
        }{
        isDriver ?
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              required={true}
              pattern="\d{10}"
              name="phone"
              className="form-input"
              type="text"
              placeholder="Phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div> :
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              required={!isClient}
              name="email"
              className="form-input"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
      }{
        isDriver && (editMode || createMode) ?
          <div className="form-group">
            <label className="form-label">Auto</label>
            <input
              required={true}
              name="auto"
              className="form-input"
              type="text"
              placeholder="Auto"
              onChange={this.handleChange}
              value={this.state.auto}
            />
          </div> :
          null
      }{
        !editMode && !isClient ?
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              required={true}
              name="password"
              className="form-input"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div> :
          null
      }
        <input className="btn btn-primary" type="submit" value={this.props.entity ? 'Save' : 'Sign up'}/>
      </form>
    );
  }
}
