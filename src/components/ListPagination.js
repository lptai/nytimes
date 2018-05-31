import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const PageItem = styled.li.attrs({
  className: 'page-item',
})`
  display: inline;
  & > a {
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.42857143;
    text-decoration: none;
    color: ${props => (props.isCurrentPage ? 'white' : '#337ab7')};
    background-color: ${props => (props.isCurrentPage ? '#337ab7' : '#fff')};
    border: 1px solid #ddd;
    margin-left: -1px;
    &:focus,
    &:hover {
    ${props =>
      props.isCurrentPage
        ? `
        z-index: 3;
        color: #fff;
        background-color: #337ab7;
        border-color: #337ab7;
        cursor: default;`
        : `
      z-index: 2;
      color: #23527c;
      background-color: #eee;
      border-color: #ddd;
    }`};
  }
`;

const ListPagination = props => {
  const { totalArticle, maxItemsPerPage, currentPage, onPageChange } = props;

  if (totalArticle < maxItemsPerPage) {
    return null;
  }

  const pages = [];

  for (let i = 0; i < totalArticle / maxItemsPerPage; i++) {
    pages.push(i);
  }

  const buildPages = () =>
    pages.map((page, idx) => {
      const isCurrentPage = page === currentPage;

      const onPageClick = e => {
        e.preventDefault();
        if (isCurrentPage) {
          return;
        }
        onPageChange(page);
      };
      return (
        <PageItem key={idx} className="" onClick={onPageClick} isCurrentPage={isCurrentPage}>
          <a className="page-link" href="#">
            {page + 1}
          </a>
        </PageItem>
      );
    });

  return (
    <div className="pagination">
      <ul className="page">
        <Flex flexDirection={'row'} justifyContent={'center'}>
          {buildPages()}
        </Flex>
      </ul>
    </div>
  );
};

ListPagination.propTypes = {
  maxItemsPerPage: PropTypes.number,
  totalArticle: PropTypes.number,
};

ListPagination.defaultProps = {
  maxItemsPerPage: 10,
  totalArticle: 100,
};

export { PageItem };

export default ListPagination;
