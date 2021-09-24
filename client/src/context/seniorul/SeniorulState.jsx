import React, { useReducer } from 'react';
import SeniorulContext from './seniorulContext';
import SeniorulReducer from './seniorulReducer';
import {
  GET_RANK_DATA,
  SEARCH_SUMMONER,
  SET_LOADING,
  SET_ERROR,
} from '../types';

const SeniorulState = (props) => {
  const initialState = {
    summoner: null,
    rankData: null,
    loading: false,
    errors: [],
  };

  const [state, dispatch] = useReducer(SeniorulReducer, initialState);

  const searchSummoner = async (server, text) => {
    setLoading();

    const uri = `/api/summoner/${encodeURIComponent(
      server
    )}/${encodeURIComponent(text)}`;
    const encodedUri = encodeURI(uri);

    const res = await fetch(encodedUri);
    const data = await res.json();

    if (data.status && data.status.status_code === 404) {
      console.log('404 was given');
      dispatch({
        type: SET_ERROR,
        payload: '404',
      });
    } else {
      dispatch({
        type: SEARCH_SUMMONER,
        payload: data,
      });

      getRankData(server, data.id);
    }
  };

  // get rank data
  const getRankData = async (server, id) => {
    setLoading();

    const uri = `/api/summoner/rank/${server}/${id}`;
    const encodedUri = encodeURI(uri);

    const res = await fetch(encodedUri);
    const data = await res.json();

    dispatch({
      type: GET_RANK_DATA,
      payload: data,
    });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SeniorulContext.Provider
      value={{
        summoner: state.summoner,
        rankData: state.rankData,
        loading: state.loading,
        errors: state.errors,
        getRankData,
        searchSummoner,
        setLoading,
      }}>
      {props.children}
    </SeniorulContext.Provider>
  );
};

export default SeniorulState;
