const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

fetch('https://api.pinata.cloud/v3/farcaster/users/{fid}', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));