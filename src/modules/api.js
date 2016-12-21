import fetch from '../helpers/fetch';

export default {
  login: (user) => {
    return fetch(`${process.env.REACT_APP_API_URI}/auth_driver`, {
      method: 'post',
      body: user
    }).then((data) => {
      localStorage.setItem('auth_token', data.auth_token);
      return data;
    });
  },
  createOrder: (order) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders`,{
      method: 'post',
      body: order
    });
  },
  getOrder: (id) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`);
  },
};

