import React from 'react';
import '../assets/styles/components/result.scss';
import { connect } from 'react-redux';
import { handleSubmit1 } from '../actions';

const Result = (props) => {

  const handleSetFavorite = () => {
    props.handleSubmit1();
  };
  const { result, query } = props;

  return (
    <center>
      <button
        className='button'
        onClick={handleSetFavorite}
      >
Obtener Resultados
      </button>
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
