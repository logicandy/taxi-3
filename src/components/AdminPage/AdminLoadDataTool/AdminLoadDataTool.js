import React from 'react';
import './AdminLoadDataTool.css';
import TableList from '../../ItemsTable/ItemsTable';
import AddButton from '../SingleButton/SingleButton';
import api from '../../../modules/api';
import {browserHistory} from 'react-router';


export default class AdminEditTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entityData: null,
    };

    this.handleOrderAdding = this.handleOrderAdding.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {
    api.adminGetData(this.props.entityToLoad)
      .then((data) => {
        this.setState({
          entityData: data.orders || data,
        })
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.entityToLoad !== nextProps.entityToLoad) {
      api.adminGetData(nextProps.entityToLoad)
        .then((data) => {
          this.setState({
            entityData: data.orders || data,
          })
        })
    }
  }

  handleOrderAdding() {
    browserHistory.push(`/admin/${this.props.entityToLoad}/create`);
  }

  handleRowClick(id) {
    if (this.props.entityToLoad !== 'clients') {
      browserHistory.push(`/admin/${this.props.entityToLoad}/edit/${id}`);
    }
  }

  render() {
    const role = this.props.entityToLoad.slice(0, this.props.entityToLoad.length - 1);
    return (
      <div className="admin-edit-tool">
        <h2 className="admin-edit-tool--header">{this.props.entityToLoad}</h2>
        {
          this.props.entityToLoad === 'clients' ?
            null :
            <AddButton
              isDanger={false}
              handler={this.handleOrderAdding}
              entity={this.props.entityToLoad}
              text={`Add new ${role}`}
            />
        }{
        this.state.entityData ?
          <TableList
            rowClickHandler={this.handleRowClick}
            loadEntities={this.state.entityData}
          /> :
          <div className="loading"/>
      }
      </div>
    );
  }
}
