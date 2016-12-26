import fetch from '../helpers/fetch';

export default {
  login: (user, role) => {

    let path = 'auth_driver';
    if (role === 'dispatcher') {
      path = 'dispatchers'
    }
    else if (role === 'admin') {
      path = 'auth_admin'
    }

    return fetch(`${process.env.REACT_APP_API_URI}/${path}`, {
      method: 'post',
      body: user
    }).then((data) => {
      localStorage.setItem('auth_token', data.auth_token);
      return data;
    });
  },
  createOrder: (order) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders`, {
      method: 'post',
      body: order
    });
  },
  getOrder: (id) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`);
  },
  acceptOrderByDriver: (id) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`, {
      method: 'put'
    });
  },
  getOrdersList: () =>{
    return fetch(`${process.env.REACT_APP_API_URI}/orders`,{method: 'get'});
  },
  getDriversList: () =>{
    return fetch(`${process.env.REACT_APP_API_URI}/dispatchers/index_driver`,{method: 'get'});
  },
};

