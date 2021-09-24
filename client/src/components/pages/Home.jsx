import React, { Fragment } from 'react';

import SearchBlock from '../layout/SearchBlock';
import ProfileComponent from '../layout/ProfileComponent';

const Home = () => {
  return (
    <Fragment>
      <section className='section'>
        <div className='container'>
          <SearchBlock />
          <ProfileComponent />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
