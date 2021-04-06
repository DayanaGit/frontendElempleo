/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import handleInput from '../hooks/status';

const SelectPositions = (positions) => {

  return (
    <Autocomplete
      id='position'
      options={positions.data[0]}
      getOptionLabel={option => option.Name}
      style={{ width: 350, marginLeft: 260, float: "left" }}
      renderInput={params => <TextField {...params} label='Cargo' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'Position');
      }}

    />
  );
};


export default SelectPositions;
