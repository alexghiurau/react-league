import React, { useState, useContext } from 'react';
import SeniorulContext from '../../context/seniorul/seniorulContext';

const SearchBlock = () => {
  const seniorulContext = useContext(SeniorulContext);

  const [text, setText] = useState('');
  const [server, setServer] = useState('EUW1');

  const onChange = (e) => setText(e.target.value);
  const servOnChange = (e) => setServer(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    seniorulContext.searchSummoner(server, text);
    setText('');
  };

  return (
    <div className='box has-text-centered'>
      <h1 className='title is-size-1'>React-League.gg</h1>
      <h2 className='subtitle'>League of Legends analytics and more...</h2>
      <form onSubmit={onSubmit}>
        <div className='field has-addons has-addons-centered'>
          <p className='control'>
            <span className='select'>
              <select onChange={servOnChange}>
                <option value='EUW1'>EUW</option>
                <option value='EUN1'>EUNE</option>
              </select>
            </span>
          </p>
          <p className='control'>
            <input
              className='input'
              name='text'
              type='text'
              value={text}
              placeholder='Search...'
              size='80'
              onChange={onChange}
            />
          </p>
          <p className='control'>
            <button type='submit' value='Search' className='button is-link'>
              <i className='fas fa-search'></i>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchBlock;
