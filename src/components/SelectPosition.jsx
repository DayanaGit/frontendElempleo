/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';

const SelectPositions = () => {

  return (
    <Autocomplete
      id='Position'
      options={positions}
      getOptionLabel={option => option.title}
      style={{ width: 350, marginLeft: 260, marginTop: 85, float: "left" }}
      renderInput={params => <TextField {...params} label='Cargo' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'Position');
      }}

    />
  );
};
const positions = [
  { title: 'Abogado' },
  { title: 'Administrador' },
  { title: 'Almacenista' },
  { title: 'Analista' },
  { title: 'Asistente' },
  { title: 'Auditor' },
];

export default SelectPositions;
