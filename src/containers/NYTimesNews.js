import { connect } from 'react-redux';
import { articles } from './../reducers';
import ArticleList from './../components/ArticleList';
import { fetchData } from './../actions';

const mapStateToProps = state => {
  return {
    articles: state.articles.data,
    currentPage: state.pagination,
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRetry(currentPage) {
      dispatch(fetchData(currentPage));
    },
  };
};

const NYTimesNews = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default NYTimesNews;
