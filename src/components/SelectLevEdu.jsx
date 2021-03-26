import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxLevelEdu"
        options={levels}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260, marginTop:200 }}
        renderInput={(params) => <TextField {...params} label="Nivel Educativo" variant="outlined" />}
      />
    );
  }
  
  const levels = [
    { title: 'Preescolar'},
    { title: 'Basica Primaria (1º - 5º)'},
    { title: 'Basica Secundaria (6º - 9º)'},
    { title: 'Media (10º - 13º)'},
    { title: 'Tecnico Laboral'},
    { title: 'Profesional'},
  ]