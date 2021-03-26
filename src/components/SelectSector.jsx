import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

export default function ComboBox() {
    return (
      <Autocomplete
        id="BoxSector"
        options={sectors}
        getOptionLabel={(option) => option.title}
        style={{ width: 350, marginLeft:260, float:"left"}}
        renderInput={(params) => <TextField {...params} label="Sector" variant="outlined" />}
      />
    );
  }
  
  const sectors = [
    { title: 'Agropecuario'},
    { title: 'Alimentos'},
    { title: 'Asegurador'},
    { title: 'Bebidas y tabaco'},
    { title: 'Comercio al por menos y retail'},
    { title: 'Construcción'},
  ]