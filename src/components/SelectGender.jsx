import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';

export default function ComboBox() {
  return (
    <Autocomplete
      id='gender'
      // eslint-disable-next-line no-use-before-define
      options={gender}
      getOptionLabel={option => option.title}
      style={{ width: 310, marginLeft: 260, float:'left' }}
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
