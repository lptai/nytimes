import React from 'react';

import 'jest-styled-components';

import Enzyme, { shallow } from 'enzyme';
import ListPagination, { PageItem } from './../ListPagination';

test('Pagination test > Expect generate 10 page items', () => {
  const pagination = shallow(
    <ListPagination currentPage={0} maxItemsPerPage={10} totalArticle={200} />,
  );
  expect(pagination.find(PageItem).length).toBe(20);
  expect(pagination).toMatchSnapshot();

  const emptyPagination = shallow(
    <ListPagination currentPage={0} maxItemsPerPage={10} totalArticle={0} />,
  );

  expect(emptyPagination.find(PageItem).length).toBe(0);
  expect(emptyPagination).toMatchSnapshot();

  const defaultPagination = shallow(<ListPagination currentPage={0} />);

  expect(defaultPagination.find(PageItem).length).toBe(10);
  expect(defaultPagination).toMatchSnapshot();
});
