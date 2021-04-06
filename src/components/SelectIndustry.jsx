import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';


const SelectIndustry = (industries) => {

  return (
    <Autocomplete
      id='industry'
      options={industries.data[0]}
      getOptionLabel={option => option.Name}
      style={{ width: 350, marginLeft: 260 }}
      renderInput={params => <TextField {...params} label='Industria' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'industry');
      }}

    />
  );
};

export default SelectIndustry;
