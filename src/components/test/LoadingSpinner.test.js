import React from 'react';

import 'jest-styled-components';

import TestRenderer from 'react-test-renderer';
import LoadingSpinner from './../LoadingSpinner';

test('Loading spinner', () => {
  const testRenderer = TestRenderer.create(<LoadingSpinner />);
  expect(testRenderer).toMatchSnapshot();
});
