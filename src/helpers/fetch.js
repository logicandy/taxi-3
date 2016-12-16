function rejectOnError(response) {
  return response.ok
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText));
}


function parseAsJSON(response) {
  return response.json()
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
    .then(rejectOnError)
    .then(parseAsJSON);
}
