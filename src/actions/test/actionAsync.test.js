import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './../../constants';
import { fetchData } from './../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test action async', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('create FETCH_ARTICLE_SUCCESS when fetching has been done', () => {
    const page = 0;
    const articles = [];
    const response = {
      data: {
        response: {
          docs: articles,
        },
      },
    };
    fetchMock.getOnce('/todos', {
      body: response,
      headers: { 'content-type': 'application/json' },
    });

    const getDataExpectedAction = {
      type: FETCHING_DATA,
      data: [],
      page: page,
    };
    const getDataFailureExpectedAction = {
      type: FETCHING_DATA_FAILURE,
      data: [],
      errorMessage: 'Network Error',
      page: page,
    };
    const expectedActions = [getDataExpectedAction, getDataFailureExpectedAction];
    const store = mockStore();

    store.dispatch(fetchData(page)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
