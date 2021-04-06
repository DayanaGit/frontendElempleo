/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { handleInput } from '../actions';

export default function ComboBox() {
  return (
    <Autocomplete
      id='evels'
      options={levels}
      getOptionLabel={option => option.Name}

      style={{ width: 350, marginLeft: 260, marginTop: 200 }}
      renderInput={params => <TextField {...params} label='Nivel Educativo' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'formacion');
      }}

    />
  );
}

const levels = [
  {
    'Id': 2,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Doctorado',
    'Level': 120,
  },
  {
    'Id': 3,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Especialización',
    'Level': 100,
  },
  {
    'Id': 4,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Maestría',
    'Level': 110,
  },
  {
    'Id': 6,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Universitaria',
    'Level': 90,
  },
  {
    'Id': 7,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Formación Tec profesional',
    'Level': 70,
  },
  {
    'Id': 9,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Media (10° - 13°)',
    'Level': 50,
  },
  {
    'Id': 10,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Tecnológica',
    'Level': 80,
  },
  {
    'Id': 11,
    'DeletedKey': 11,
    'IsUndefinedValue': true,
    'Name': 'Sin Definir',
    'Level': 0,
  },
  {
    'Id': 12,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Preescolar',
    'Level': 20,
  },
  {
    'Id': 13,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Básica Primaria (1° - 5°)',
    'Level': 30,
  },
  {
    'Id': 14,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Básica Secundaria (6° - 9°)',
    'Level': 40,
  },
  {
    'Id': 15,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Técnico Laboral',
    'Level': 60,
  },
];
