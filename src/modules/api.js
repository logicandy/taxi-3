import fetch from '../helpers/fetch';

export default {
  login: (user, role) => {

    let path = 'drivers';
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
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`, {
      method: 'get'
    }).then((orderObj) => {
      return orderObj.order;
    });
  },
  acceptOrderByDriver: (id) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`, {
      method: 'put'
    });
  },

};

