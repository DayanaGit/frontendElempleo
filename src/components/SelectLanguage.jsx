import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxLanguage"
        options={languages}
        getOptionLabel={(option) => option.title}
        style={{ width: 350,marginTop:800,marginLeft:260}}
        renderInput={(params) => <TextField {...params} label="Idioma" variant="outlined" />}
      />
    );
    
  }
  
  const languages = [
    { title: '80%'},
    { title: '100%'},
    { title: '10%'},
    { title: '20%'},
  ]