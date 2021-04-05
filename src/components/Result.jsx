import React from 'react';
import '../assets/styles/components/result.scss';
import { connect } from 'react-redux';
import { handleSubmit1 } from '../actions';

const Result = (props) => {
  console.log(props);
  console.log('estoy result');
  const { query } = props;
  return (
    <center>
      <button className='button' onClick={handleSubmit1}>Iniciar sesión</button>
      <div className='result'>

        <h1>Resultados</h1>

        <h3>Valores</h3>
        <p />

        <h3>Query</h3>
        <p>
          {' '}
          { query }
        </p>

      </div>
    </center>
  );
};

const mapDispatchToProps = {
  handleSubmit1,
};

export default connect(null, mapDispatchToProps)(Result);
