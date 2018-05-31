import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import FetchError from './../FetchError';

test('Error message and retry button are shown', () => {
  const fetchError = shallow(<FetchError message={'Oops !!!'} />);
  const message = <p>Could not fetch articles. Oops !!!</p>;
  const retryBtn = <button>Retry</button>;

  expect(fetchError.contains(message)).toEqual(true);
  expect(fetchError.contains(retryBtn)).toEqual(true);
  expect(fetchError).toMatchSnapshot();
});
