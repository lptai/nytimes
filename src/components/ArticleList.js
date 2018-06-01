import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import LoadingSpinner from './LoadingSpinner';
import FetchError from './FetchError';

const Divider = styled.div`
  border-top: 1px solid #e2e2e2;
  padding-top: 10px;
  margin-top: 10px;
`;

const ArticleList = ({ articles, isFetching, errorMessage, onRetry, currentPage }) => {
  if (isFetching && articles.length === 0) {
    return <LoadingSpinner />;
  }

  if (errorMessage && articles.length === 0) {
    return <FetchError message={errorMessage} onRetry={() => onRetry(currentPage)} />;
  }

  return articles.map((article, idx) => {
    const isArticle = article.document_type === 'article';
    const displayDivider = idx !== articles.length - 1;
    return (
      <div key={article._id}>
        {isArticle && <Article key={article._id} article={article} />}
        {isArticle && displayDivider && <Divider />}
      </div>
    );
  });
};

ArticleList.propTypes = {};

export default ArticleList;
