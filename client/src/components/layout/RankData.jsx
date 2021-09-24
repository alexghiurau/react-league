import React, { useEffect, useContext, Fragment } from 'react';
import SeniorulContext from '../../context/seniorul/seniorulContext';
import ProgressBar from './ProgressBar';

// images
import iron from '../../img/iron.png';
import bronze from '../../img/bronze.png';
import silver from '../../img/silver.png';
import gold from '../../img/gold.png';
import platinum from '../../img/platinum.png';
import diamond from '../../img/diamond.png';
import master from '../../img/master.png';
import grandmaster from '../../img/grandmaster.png';
import challenger from '../../img/challenger.png';

const RankData = () => {
  const seniorulContext = useContext(SeniorulContext);
  const { rankData, getRankData, summoner, getSummoner, loading } =
    seniorulContext;

  let solo = null;
  let flex = null;

  if (rankData === null || rankData.length === 0) {
    return <h1>No Rank data...</h1>;
  }

  if (rankData.length === 1 && rankData[0].queueType === 'RANKED_SOLO_5x5') {
    solo = rankData[0];
  } else if (
    rankData.length === 1 &&
    rankData[0].queueType === 'RANKED_FLEX_SR'
  ) {
    flex = rankData[0];
  } else {
    solo = rankData[0];
    flex = rankData[1];
  }

  if (loading) return <ProgressBar />;

  return (
    <div className='box has-text-centered'>
      {/* image, currently cannot do due to size limit */}
      {/* <img
        src={`${process.env.PUBLIC_URL}/assets/img/profileicon/${summoner.profileIconId}.png`}
        style={{ maxWidth: '6rem' }}
        alt='profileIcon'
      /> */}
      <img
        src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summoner.profileIconId}.jpg`}
        style={{ maxWidth: '6rem' }}
        alt='profileIcon'
      />
      <p className='is-size-2'>{solo.summonerName}</p>
      <span className='tag is-link is-medium'>
        Level {summoner.summonerLevel}
      </span>

      <br />

      <div className='columns'>
        <div className='column'>
          {solo === null ? (
            <h1 className='title is-size-4'>Unranked (Solo/Duo)</h1>
          ) : (
            <Fragment>
              <h1 className='title is-size-4'>Solo/Duo</h1>
              <img
                src={tierMapper[solo.tier]}
                style={{ maxWidth: '8rem' }}
                alt='rank-icon'
              />
              <p>
                <strong>
                  {solo.tier} {solo.rank}
                </strong>
              </p>
              <p>{solo.leaguePoints} LP</p>
              <p>
                <strong>Wins: </strong>
                {solo.wins} | <strong>Losses: </strong>
                {solo.losses}
              </p>
              <p>
                <strong>Win rate: </strong>
                {Math.round((solo.wins / (solo.wins + solo.losses)) * 100)}%
              </p>
            </Fragment>
          )}
        </div>
        <div className='column'>
          {flex === null ? (
            <h1 className='title is-size-4'>Unranked (Flex 5v5)</h1>
          ) : (
            <Fragment>
              <h1 className='title is-size-4'>Flex 5v5</h1>
              <img
                src={tierMapper[flex.tier]}
                style={{ maxWidth: '8rem' }}
                alt='rank-icon'
              />
              <p>
                <strong>
                  {flex.tier} {flex.rank}
                </strong>
              </p>
              <p>{flex.leaguePoints} LP</p>
              <p>
                <strong>Wins: </strong>
                {flex.wins} | <strong>Losses: </strong>
                {flex.losses}
              </p>
              <p>
                <strong>Win rate: </strong>
                {Math.round((flex.wins / (flex.wins + flex.losses)) * 100)}%
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const tierMapper = {
  IRON: iron,
  BRONZE: bronze,
  SILVER: silver,
  GOLD: gold,
  PLATINUM: platinum,
  DIAMOND: diamond,
  MASTER: master,
  GRANDMASTER: grandmaster,
  CHALLENGER: challenger,
};

export default RankData;
