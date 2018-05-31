import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './../constants';

const initialState = {
  data: [],
  isFetching: false,
  dataFetched: false,
  error: false,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        error: false,
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: [...state.data, ...action.data],
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default articles;
