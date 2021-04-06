import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id='gender'
        options={gender}
        getOptionLabel={(option) => option.title}
        style={{ width: 250, marginLeft:440}}
        renderInput={(params) => <TextField {...params} label='Género' variant='outlined' />}
      />
    );
  }
  
  const gender = [
    { title: 'Masculino'},
    { title: 'Femenino'},
  ]