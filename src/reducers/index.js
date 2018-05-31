import { combineReducers } from 'redux';
import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './../constants';
import articles from './articles';
import pagination from './pagination';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return true;
    case FETCHING_DATA_SUCCESS:
    case FETCHING_DATA_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCHING_DATA:
    case FETCHING_DATA_SUCCESS:
      return null;
    case FETCHING_DATA_FAILURE:
      return action.errorMessage;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  articles,
  pagination,
  isFetching,
  errorMessage,
});

export default rootReducer;
