// eslint-disable-next-line no-new-object
const from = new Object();

export const handleInput = (event, id) => {
  console.log(event.Id);
  console.log(id);
  from[id] = event.Id;
  console.log(from);
};

export const handleSubmit1 = () => ({
  type: 'SET_FAVORITE',
  payload: 'PRUEBA',
});

export const handleSubmit = async () => {
  const url = 'http://localhost:3001/api/consulta';
  console.log(from);
  try {
    const fetchResponse = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(from), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await fetchResponse.json();
    console.log(data);
    return {
      type: 'SET_FAVORITE',
      payload: data,

    };
       
  } catch (e) {
    return e;
  }
};

export const setFavorite = payload => ({
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

