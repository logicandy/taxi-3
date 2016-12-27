import React from 'react';
import Header from '../../Header/Header';
import AdminPanel from '../AdminPanel/AdminPanel'


export default class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <Header
          text={'Admin page'}
        />
        <AdminPanel entity={this.props.params.entity}>
          {this.props.children}
        </AdminPanel>
      </div>
    );
  }
}


