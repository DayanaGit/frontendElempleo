// import { useState, useEffect } from 'react';

// import SelectPosition from '../components/SelectPosition';
// import useInitialState from './useInitialState';
// eslint-disable-next-line no-new-object
const from = new Object();

export const handleInput = (event, id) => {
  console.log(event.Id);
  console.log(id);
  from[id] = event.Id;
  console.log(from);
};

export const handleSubmit = () => {
  const url = 'http://localhost:3000/api/consulta';
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

// export default {handleInput, handleSubmit;

