import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxPosition"
        options={positions}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260,marginTop:85, float:"left"}}
        renderInput={(params) => <TextField {...params} label="Cargo" variant="outlined" />}
      />
    );
    
  }
 
  const positions = [
    { title: 'Abogado'},
    { title: 'Administrador'},
    { title: 'Almacenista'},
    { title: 'Analista'},
    { title: 'Asistente'},
    { title: 'Auditor'},
  ]