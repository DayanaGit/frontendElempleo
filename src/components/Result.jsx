import React from 'react';
import '../assets/styles/components/result.scss';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { handleSubmit1 } from '../actions';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft:150,
    marginTop:50,
  },
}));

const Result = (props) => {

  const handleSetFavorite = () => {
    props.handleSubmit1();
  };
  const { result, query } = props;
  const classes = useStyles();

  return (
    <center>
      <Button
        variant='contained'
        color='default'
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={handleSetFavorite}
      >
        Buscar
      </Button>
      <div className='result'>

        <h1>Resultados</h1>

        <h3>Valores</h3>
        <p className='carousel-item__details--title'>{result}</p>

        <h3>Query</h3>
        <p className='carousel-item__details--title'>{query}</p>
      </div>
    </center>
  );
};

const mapDispatchToProps = {
  handleSubmit1,
};

export default connect(null, mapDispatchToProps)(Result);
