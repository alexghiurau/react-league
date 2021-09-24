import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className='columns'>
        <div className='column'>
          <div className='box'>
            <h1 className='title'>React-League.gg</h1>
            <p className='subtitle'>About this app</p>
            <p>
              <strong>Version:</strong>{' '}
              <span className='tag is-link is-family-monospace'>1.1.4</span>
            </p>
            <p>
              <strong>Built with:</strong>{' '}
              <a href='https://reactjs.org/'>React</a>,{' '}
              <a href='https://nodejs.org/en/'>Node.js</a>,{' '}
              <a href='https://developer.riotgames.com/'>Riot Games API</a> and{' '}
              <a href='https://bulma.io'>Bulma</a>
            </p>
            <p>
              <strong>Github: </strong>TBD
            </p>
            <br />
            <Link to='/' className='button is-link'>
              Go back home
            </Link>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <h1 className='title'>API Documentation</h1>
            <p>This section will contain API info.</p>
            <br />
            <h1 className='title'>Changelog</h1>
            <span className='is-family-monospace'>
              <p>24/09/2021 - add iOS title bar colour</p>
              <p>
                24/09/2021 - development restarted, changed name to a more
                serious one
              </p>
              <p>08/07/2021 - added summoner not found functionality</p>
              <p>08/07/2021 - added error handling to server</p>
              <p>
                07/07/2021 - switched to fetch API, now works with summoners
                that are unranked
              </p>
              <p>03/07/2021 - added summoner level</p>
              <p>03/07/2021 - added server chooser for euw eune</p>
              <p>02/07/2021 - can now search users</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
