import fetch from '../helpers/fetch';
import {ROUTES} from '../constants/routes';
import {browserHistory} from 'react-router';

export default {
  signIn: (user, role) => {
    return fetch(ROUTES.COMMON.SIGN_IN[role], {
      method: 'post',
      body: user
    }).then((data) => {
      const path = role.slice(0, role.length - 1);
      const mainPageUrl = role === 'admins' ? `/${path}/drivers` : `/${path}/`;

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
    return fetch(ROUTES.COMMON.CREATE_ORDER, {
      method: 'post',
      body: order,
    });
  },

  getOrder: (id) => {
    return fetch(ROUTES.COMMON.GET_ORDER(id), {
      method: 'get',
    }).then((response) => response.order);
  },

  driverGetOrders: () => {
    return fetch(ROUTES.DRIVER_ROUTES.GET_ORDERS, {method: 'get'});
  },

  driverCompleteOrder: (id) => {
    return fetch(ROUTES.DRIVER_ROUTES.COMPLETE_ORDER(id), {
      method: 'PATCH',
    });
  },

  driverSendCancellationRequest: (id, entity) => {
    return fetch(ROUTES.DRIVER_ROUTES.CANCEL_ORDER(id), {
      method: 'put',
      body: entity,
    });
  },

  dispatcherCancelOrder: (id, entity) => {
    return fetch(ROUTES.DISPATCHER.CANCEL_ORDER(id), {
      method: 'PATCH',
      body: entity,
    });
  },

  acceptOrderByDriver: (id) => {
    return fetch(ROUTES.DRIVER_ROUTES.ACCEPT_ORDER(id), {
      method: 'PATCH',
    });
  },

  adminGetData: (entity) => {
    return fetch(ROUTES.ADMIN_ROUTES.GET_ALL_ITEMS_ROUTES[entity], {
      method: 'get',
    });
  },

  adminGetEntityById: (entity, id) => {
    return fetch(ROUTES.ADMIN_ROUTES.GET_ITEM[entity](id), {
      method: 'get',
    });
  },

  adminUpdateEntity: (entity, id, body)=> {
    let bodyToSend = body;

    if (entity !== 'orders' && entity !== 'admins') {
      const singleName = entity.slice(0, entity.length - 1);
      bodyToSend = {[singleName]: body};
    }

    return fetch(ROUTES.ADMIN_ROUTES.UPDATE[entity](id), {
      method: 'put',
      body: bodyToSend,
    });
  },

  adminCreateEntity: (entity, body)=> {
    let bodyToSend = body;

    if (entity !== 'orders') {
      const singleName = entity.slice(0, entity.length - 1);
      bodyToSend = {[singleName]: body};
    }
    console.log(bodyToSend);
    return fetch(ROUTES.ADMIN_ROUTES.CREATE[entity], {
      method: 'post',
      body: bodyToSend,
    });
  },

  adminDestroyClient: (id) => {
    return fetch(ROUTES.ADMIN_ROUTES.DESTROY.clients(id), {
      method: 'post',
    });
  },
};

