import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './../constants';

const initialState = {
  currentPage: 0,
  isFetching: false,
  dataFetched: false,
  error: false,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
    case FETCHING_DATA_FAILURE:
    case FETCHING_DATA_SUCCESS:
      return action.page;
    default:
      return state;
  }
};

export default pagination;
