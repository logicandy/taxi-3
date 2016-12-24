function handleResponse(response) {
  return response.json().then((data) => {
    if (response.ok) {
      return data;
    }
    throw data.error || data.errors;
  });
}

export default function (...args) {
  const options = args[1];
  const token = localStorage.getItem('auth_token');
  const defaults = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    Object.assign(defaults.headers, {'Authorization': `Bearer ${token}`})
  }

  const after = {
    body: JSON.stringify(options.body),
  };

  return fetch(args[0], {...defaults, ...options, ...after})
    .then(handleResponse);
}
