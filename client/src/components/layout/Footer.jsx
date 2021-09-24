import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          <strong>React-League.gg</strong> by{' '}
          <a href='https://www.twitch.tv/bothsomewhere'>Rin</a>. The source code
          is licensed
          <a href='http://opensource.org/licenses/mit-license.php'> MIT</a>.
        </p>
        <p className='is-size-7'>
          React-League.gg is not endorsed by or affiliated with Riot Games.
          League of Legends and Riot Games are trademarks or registered
          trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
