import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxIndustry"
        options={industries}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260, marginTop:370 }}
        renderInput={(params) => <TextField {...params} label="Industria" variant="outlined" />}
      />
    );
  }
  
  const industries = [
    { title: 'Agropecuario'},
    { title: 'Alimentos'},
    { title: 'Asegurador'},
    { title: 'Bebidas y tabaco'},
    { title: 'Comercio al por menos y retail'},
    { title: 'Construcción'},
  ]