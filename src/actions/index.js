import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './../constants';
import axios from 'axios';

export function getData({ page }) {
  return {
    type: FETCHING_DATA,
    data: [],
    page: page,
  };
}

export function getDataSuccess({ articles, page }) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data: articles,
    page: page,
  };
}

export function getDataFailure({ errorMessage, page }) {
  return {
    type: FETCHING_DATA_FAILURE,
    data: [],
    errorMessage: errorMessage,
    page: page,
  };
}

export function fetchData(page) {
  return dispatch => {
    dispatch(
      getData({
        page: page,
      }),
    );

    const apiKey = '5763846de30d489aa867f0711e2b031c';
    const q = 'Singapore';

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${q}&page=${page}`,
      )
      .then(res => {
        dispatch(getDataSuccess({ articles: res.data.response.docs, page: page }));
      })
      .catch(error => {
        dispatch(
          getDataFailure({
            errorMessage: error.message,
            page: page,
          }),
        );
      });
  };
}
