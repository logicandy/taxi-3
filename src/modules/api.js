import fetch from '../helpers/fetch';

export default {
  login: (user) => {
    return fetch(`${process.env.REACT_APP_API_URI}/auth_user`, {
      method: 'post',
      body: user
    }).then((data) => {
      localStorage.setItem('auth_token', data.auth_token);
      return data;
    });
  }
};

