import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const toggleBurgerMenu = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

  return (
    <nav
      className='navbar is-link'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item logo-cust' to='/'>
          React-League.gg
        </Link>

        <a
          role='button'
          href='#!'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasic'
          onClick={toggleBurgerMenu}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className='navbar-end navbar-menu'>
        {/* Begin twitch link */}
        <a
          href='https://www.twitch.tv/seniorul'
          className='navbar-item icon-text'>
          <span className='icon-text'>
            <span className='icon'>
              <i className='fab fa-twitch'></i>
            </span>
            <span>Twitch</span>
          </span>
        </a>

        {/* Begin about link */}
        <Link className='navbar-item' to='/about'>
          <span className='icon-text'>
            <span className='icon'>
              <i className='fas fa-question-circle'></i>
            </span>
            <span>Help</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
