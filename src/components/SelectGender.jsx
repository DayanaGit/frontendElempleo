import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';

export default function ComboBox() {
  return (
    <Autocomplete
      id='gender'
      options={gender}
      getOptionLabel={option => option.title}
      style={{ width: 250, marginLeft: 440, marginTop: 850 }}
      renderInput={params => <TextField {...params} label='Género' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'gender');
      }}
    />
  );
}

const gender = [
  { 'Id': 'Male', title: 'Masculino' },
  { 'Id': 'Female', title: 'Femenino' },
];
