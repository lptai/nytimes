import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPagination from './../components/ListPagination';
import pagination from './../reducers/pagination';
import { fetchData } from './../actions';

const mapStateToProps = state => {
  return {
    currentPage: state.pagination,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPageChange(page) {
      dispatch(fetchData(page));
    },
  };
};

const Pagination = connect(mapStateToProps, mapDispatchToProps)(ListPagination);
export default Pagination;
