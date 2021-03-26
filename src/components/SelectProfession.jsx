import React from 'react';
// import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    float: 'left',
    marginLeft: 260,
    width: 350,
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
}));

const SelectProfession = (professions) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id='tags-standard'
        options={professions.data[0]}
        getOptionLabel={option => option.Name}
        renderInput={params => (
          <TextField
            {...params}
            variant='standard'
            label='Profesión'
            placeholder='Profesiones'
          />
        )}
      />
    </div>
  );
};

export default SelectProfession;
