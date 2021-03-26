import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxWorkArea"
        options={areas}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260, marginTop:680 }}
        renderInput={(params) => <TextField {...params} label="Área Trabajo" variant="outlined" />}
      />
    );
  }
  
  const areas = [
    { title: 'Administrativa y Financiera'},
    { title: 'Archivo y Documentación'},
    { title: 'Auditoria'},
    { title: 'Calidad'},
    { title: 'Comercial, Ventas y Telemercadeo'},
    { title: 'Comercio Exterior'},
  ]