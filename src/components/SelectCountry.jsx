import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/styles/components/Selection.scss'

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        fontSize: 18,
      },
    },
  });
  export default function CountrySelect() {
    const classes = useStyles();
    return (
        <Autocomplete
          id="country-select"
          className="auto"
          style={{ width: 350, marginLeft:260, marginTop:20, paddingBlock:10,float:"left"}}
          options={countries}
          classes={{
            option: classes.option,
          }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>
              <span>{countryToFlag(option.code)}</span>
              {option.label} ({option.code})
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField style={{color:'white'}}
              {...params}
              label="País de residencia"
              
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      );
    }

    const countries = [
        { code: 'AD', label: 'Andorra'},
        { code: 'AE', label: 'United Arab Emirates'},
        { code: 'AF', label: 'Afghanistan'},
        { code: 'AG', label: 'Antigua and Barbuda'},
        { code: 'AI', label: 'Anguilla'},
        { code: 'AL', label: 'Albania'},
        { code: 'AM', label: 'Armenia'},
        { code: 'AO', label: 'Angola'},
        { code: 'AQ', label: 'Antarctica'},
        { code: 'AR', label: 'Argentina'},
        { code: 'AS', label: 'American Samoa'},
    ];