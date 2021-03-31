/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import handleInput from '../hooks/status';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from '../assets/styles/components/Selection.scss'

const SelectPositions = () => {

  return (
    <Autocomplete
      id='industry'
      options={positions}
      getOptionLabel={option => option.title}
      style={{ width: 350, marginLeft: 260, float: 'left', top: 30 }}
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
