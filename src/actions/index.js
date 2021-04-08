// eslint-disable-next-line no-new-object
const from = new Object();

export const handleInput = (event, id) => {
  console.log(event.Id);
  console.log(id);
  from[id] = event.Id;
  console.log(from);
};

export const handleSubmit1 = () => {

  return function (dispatch) {
    // eslint-disable-next-line no-use-before-define
    return handleSubmit().then((comments) => {
      dispatch({
        type: 'SET_FAVORITE',
        comments,
      });
    });
  };
};

export const handleSubmit = async () => {
  const url = 'http://localhost:3000/api/consulta';
  console.log(from);

  try {
    const fetchResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(from),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await fetchResponse.json();
    console.log(result);
    const { query } = result.data;
    const results = result.data.result;
    return {
      query,
      results,
    };

  } catch (e) {
    return e;
  }
};

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

