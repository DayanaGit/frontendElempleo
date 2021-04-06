import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import handleInput from '../hooks/status';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from '../assets/styles/components/Selection.scss'

const SelectWorkArea = (Work) => {

  return (
    <Autocomplete
      id='WorkArea'
      options={Work.data[0]}
      getOptionLabel={option => option.Name}
      style={{ width: 350, marginLeft: 260}}
      renderInput={params => <TextField {...params} label='Area' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'workArea');
      }}

    />
  );
};

export default SelectWorkArea;
