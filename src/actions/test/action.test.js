import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './../../constants';
import { getData, getDataSuccess, getDataFailure } from './../index';

describe('action', () => {
  it('Should create an action to get articles', () => {
    const page = 0;
    const getDataExpectedAction = {
      type: FETCHING_DATA,
      data: [],
      page: page,
    };
    expect(getData({ page })).toEqual(getDataExpectedAction);

    const articles = ['ARTICLES'];
    const getDataSuccessExpectedAction = {
      type: FETCHING_DATA_SUCCESS,
      data: articles,
      page: page,
    };
    expect(getDataSuccess({ page, articles })).toEqual(getDataSuccessExpectedAction);

    const errorMessage = 'BOOM !!!';
    const getDataFailureExpectedAction = {
      type: FETCHING_DATA_FAILURE,
      errorMessage: errorMessage,
      data: [],
      page: page,
    };
    expect(getDataFailure({ errorMessage, page })).toEqual(getDataFailureExpectedAction);
  });
});
