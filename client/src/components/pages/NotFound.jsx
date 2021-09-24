import React from 'react';
import { Link } from 'react-router-dom';
import blitz from '../../img/bc.png';

const NotFound = () => {
  return (
    <section className='section'>
      <div className='box has-text-centered'>
        <h1 className='title'>
          <span className='has-text-danger'>404</span> - Not Found
        </h1>
        <h2 className='subtitle'>
          The page you are looking for does not exist.
        </h2>
        <p>
          Click <Link to='/'>here</Link> to go back home.
        </p>
        <img src={blitz} style={{ maxWidth: '12rem' }} alt='not-found' />
      </div>
    </section>
  );
};

export default NotFound;
