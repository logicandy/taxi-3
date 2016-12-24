import fetch from '../helpers/fetch';
import {ROUTES} from '../constants/routes';
import {browserHistory} from 'react-router';

export default {
  signIn: (user, role) => {
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
      const mainPageUrl = role==='admin'?`/${role}/orders`:`/${role}/`;

      localStorage.setItem('auth_token', data.auth_token);
      localStorage.setItem('url', mainPageUrl);
      browserHistory.push(mainPageUrl);

      return data;
    });
  },

  signOut: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('url');
  },

  createOrder: (order) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders`, {
      method: 'post',
      body: order,
    });
  },

  getOrder: (id) => {
    return fetch(`${process.env.REACT_APP_API_URI}/orders/${id}`, {
      method: 'get',
    }).then((response) => response.order);
  },

  acceptOrderByDriver: (id) => {
    return fetch(ROUTES.DRIVER_ROUTES.ACCEPT_ORDER(id), {
      method: 'put',
    });
  },

  adminGetData: (entity) => {
    return fetch(ROUTES.ADMIN_ROUTES.GET_ALL_ITEMS_ROUTES[entity], {
      method: 'get',
    });
  },

};

