import {
  GET_RANK_DATA,
  SEARCH_SUMMONER,
  SET_ERROR,
  SET_LOADING,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUMMONER:
      return {
        ...state,
        summoner: action.payload,
        loading: false,
      };
    case GET_RANK_DATA:
      return {
        ...state,
        rankData: action.payload,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
