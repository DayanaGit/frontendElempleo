// eslint-disable-next-line no-new-object
const from = new Object();

export const handleInput = (event, id) => {
  console.log(event.Id);
  console.log(id);
  from[id] = event.Id;
  console.log(from);
};

// export const handleSubmit = () => {
//   console.log(from);
//   const url = 'http://localhost:3001/api/consulta';
//   fetch(url, {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(from), // data can be `string` or {object}!
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then(response => console.log('Success:', response));
// };

export const handleSubmit = () => {
  console.log(from);
  const url = 'http://localhost:3001/api/consulta';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(from), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
};

const addDevice = async (device) => {
  const { hostname: location } = window.location;
  const settings = {
    method: 'POST',
    body: JSON.stringify(device),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const response = await fetch(`http://${location}:9000/api/sensors/`, settings);
  if (!response.ok) throw Error(response.message);

  try {
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

//  export const  getDevices = async () => {
//   const location = window.location.hostname;
//   const settings = {
//       method: 'POST',
//       headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//       }
//   };
//   try {
//       const fetchResponse = await fetch(`http://${location}:9000/api/sensors/`, settings);
//       const data = await fetchResponse.json();
//       return data;
//   } catch (e) {
//       return e;
//   }    

// }
// export const handleSubmit = async () => {
//   const url = 'http://localhost:3001/api/consulta';
//   // const settings = {
//   //   method: 'POST',
//   //   body: JSON.stringify(from),
//   //   headers: {
//   //     Accept: 'application/json',
//   //     'Content-Type': 'application/json',
//   //   },
//   // };
//   try {
//     const fetchResponse = await fetch(url, {
//       method: 'POST', // or 'PUT'
//       body: JSON.stringify(from), // data can be `string` or {object}!
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await fetchResponse.json();
//     return data;
//   } catch (e) {
//     return e;
//   }
// };

export const setFavorite = () => ({
  type: 'SET_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

