import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from '../assets/styles/components/Selection.scss'

const SelectIndustry = (industries) => {

  return (
    <Autocomplete
      id='combo-box-demo'
      options={industries.data[0]}
      getOptionLabel={option => option.Name}
      style={{ width: 350, marginLeft: 260, marginTop: 370 }}
      renderInput={params => <TextField {...params} label='Industria' variant='outlined' />}
    />
  );
};

export default SelectIndustry;
