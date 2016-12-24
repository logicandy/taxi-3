import React from 'react';
import './AdminEditTool.css';
import TableList from '../ItemsTable/ItemsTable';
import AddButton from '../AddButton/AddButton';
import api from '../../../modules/api';

export default class AdminEditTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.handleOrderAdding = this.handleOrderAdding.bind(this);
  }

  componentDidMount() {
    api.adminGetData(this.props.entityToLoad)
      .then((data) => {
        this.setState({
          data: data,
        })
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.entityToLoad !== nextProps.entityToLoad) {
      api.adminGetData(nextProps.entityToLoad)
        .then((data) => {
          console.log(data);
          this.setState({
            data: data.orders || data,
          })
        })
    }
  }

  handleOrderAdding() {

  }

  render() {
    return (
      <div className="admin-edit-tool">
        <h2>{this.props.entityToLoad} editing</h2>
        <AddButton
          handler={this.handleOrderAdding}
          entity={this.props.entityToLoad}/>
        {
          this.state.data ?
            <TableList
              loadEntities={this.state.data}
            /> :
            <div className="loading"/>
        }
      </div>
    );
  }
}
