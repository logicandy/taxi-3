import React from 'react';
import Header from '../Header/Header';
import api from '../../modules/api';
import HintMessage from '../HintMessage/HintMessage.js';
import UserForm from '../UsersForm/UsersForm';


export default class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      orders: []
    };
  }
    componentDidMount(){
    api.getOrdersList().then((response) => {
      console.log(response);
      this.setState({
        orders: response.orders
      }
      );
    })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
      <Header text={'Edit Order'}/>
        <input type="text" value=""></input>
        <input type="text"></input>
        <input type="text"></input>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    );
  }
}
