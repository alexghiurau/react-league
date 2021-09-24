import React, { useContext } from 'react';
import SeniorulContext from '../../context/seniorul/seniorulContext';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';
import sorakaIcon from '../../img/soraka.webp';
import fizzIcon from '../../img/fizz.webp';

import RankData from './RankData';

const ProfileComponent = () => {
  const seniorulContext = useContext(SeniorulContext);
  const { rankData, getRankData, summoner, getSummoner, loading, errors } =
    seniorulContext;

  if (loading) return <ProgressBar />;

  // if (errors.length > 0) {
  //   console.log(errors);
  //   return <h1>404 not found</h1>;
  // }

  if (!loading && summoner !== null && rankData !== null && errors.length < 1) {
    return <RankData />;
  } else if (errors.length > 0) {
    console.log(errors);
    return (
      <div className='container has-text-centered'>
        <h1 className='title is-size-4'>Summoner not found...</h1>
        <div className='container has-text-centered'>
          <img src={fizzIcon} style={{ maxWidth: '10rem' }} alt='not-found' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='container has-text-centered'>
        <img src={sorakaIcon} style={{ maxWidth: '10rem' }} alt='not-found' />
      </div>
    );
  }
};

ProfileComponent.propTypes = {
  getData: PropTypes.func,
  rankData: PropTypes.array,
  loading: PropTypes.bool,
};

export default ProfileComponent;
