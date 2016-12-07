import React from 'react';
import './OrderEditForm.css';

export default class OrderEditForm extends React.Component {
  render() {
    return (
      <form className="OrderEditForm column col-6">
        <div className="form-group">
          <h2>Order</h2>
          <label className="form-label">Client Email </label>
          <input className="form-input" type="text" list="clients-emails" placeholder="Client Email"/><br/>
          <datalist className="form-select" id="clients-emails">
            <option>Client Email1</option>
            <option>Client Email2</option>
            <option>Client Email3</option>
          </datalist>
        </div>
        <div className="form-group">
          <label className="form-label">Driver`s name </label>
          <input className="form-input" type="text" list="drivers-names" placeholder="Driver`s Name"/><br/>
          <datalist className="form-select" id="drivers-names">
            <option>Driver`s Name1</option>
            <option>Driver`s Name2</option>
            <option>Driver`s Name3</option>
          </datalist>
        </div>
        <div className="form-group">
          <label className="form-label" placeholder="From">From</label>
          <input className="form-input" type="text" placeholder="Start location"/>
        </div>
        <div className="form-group">
          <label className="form-label" placeholder="From">To</label>
          <input className="form-input" type="text" placeholder="Destination location"/>
        </div>
        <div className="form-group">
          <label className="form-label" placeholder="Price">Price &#8372;</label>
          <input className="form-input" type="text" placeholder="Price"/>
        </div>
        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox"/>
            <i className="form-icon">
            </i> Completed
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Order description</label>
          <textarea className="form-input" placeholder="Order description" rows="3">
          </textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    );
  }
}
