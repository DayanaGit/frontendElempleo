import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';

const selectSalary = (salary) => {

  return (
    <Autocomplete
      id='salary'
      options={salary.data[0]}
      getOptionLabel={option => option.Range}
      style={{ width: 350, marginLeft: 260, marginTop: 370 }}
      renderInput={params => <TextField {...params} label='Salarios' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'salary');
      }}

    />
  );
};

export default selectSalary;
