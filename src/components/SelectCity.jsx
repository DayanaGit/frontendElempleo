import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="Boxcity"
        options={levels}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260, marginTop:30, float:"left" }}
        renderInput={(params) => <TextField {...params} label="Ciudad" variant="outlined" />}
      />
    );
  }
  
  const levels = [
    { title: 'Bogota'},
    { title: 'Barranquilla'},
    { title: 'Cartagena'},
    { title: 'Santa Marta'},
  ]