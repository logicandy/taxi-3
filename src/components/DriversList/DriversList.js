import React from 'react';
import '../DriversList/DriversList.css';

export default class DriversList extends React.Component {
  constructor(props) {
  super(props);
  this.ifActive = this.ifActive.bind(this);
  this.displayDriver = this.displayDriver.bind(this);
  }
  ifActive(driverState) {
    if (driverState==='active') {
      return (<td className="Table-cell Active">active</td>);
    } else {
      return (<td className="Table-cell Non-active">non-active</td>);
    }
  };

  displayDriver(driver) {
    return (
      <tr key={driver.id}>
        <td className="Table-cell Driver-id">{driver.id}</td>
        {this.ifActive(driver.status)}
        <td className="Table-cell">{driver.name}</td>
        <td className="Table-cell">{driver.phone}</td>
        <td className="Table-cell">{driver.auto}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="Drivers-list">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th className="Table-header Driver-id">Driver ID</th>
            <th className="Table-header">Status</th>
            <th className="Table-header">Name</th>
            <th className="Table-header">Phone</th>
            <th className="Table-header">Auto</th>
          </tr>
          </thead>
          <tbody>
            {this.props.driver.map(this.displayDriver)}
          </tbody>
        </table>
      </div>
    );
  }

}