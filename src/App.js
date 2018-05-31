import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import { Box } from 'grid-styled';
import NYTimesNews from './containers/NYTimesNews';
import Pagination from './containers/Pagination';
import configureStore from './configureStore';
import { fetchData } from './actions';

const NYTimesWrapper = styled.div.attrs({
  className: 'NYTimesWrapper',
})`
  box-sizing: content-box;
  margin: 0 auto;
  padding: 15px;
`;

const store = configureStore();
store.dispatch(fetchData(0));

class App extends Component {
  render() {
    return (
      <Box width={['100%']} m={'auto'} px={[1, 2, 3, 5]}>
        <NYTimesNews />
        <Pagination />
      </Box>
    );
  }
}

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);

export default App;
