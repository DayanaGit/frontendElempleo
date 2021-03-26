import React from 'react';
// import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    float: 'left',
    marginLeft: 260,
    marginTop: 90,
    width: 350,
    '& > * + *': {
      marginTop: theme.spacing(260),
    },
  },
}));

const selectSalary = (salaries) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id='tags-standard'
        options={salaries.data[0]}
        getOptionLabel={option => option.Range}
        renderInput={params => (
          <TextField
            {...params}
            variant='standard'
            label='Aspiración Salarial'
            placeholder='Salarios'
          />
        )}
      />
    </div>
  );
};

export default selectSalary;
