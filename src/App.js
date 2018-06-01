import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Box } from 'grid-styled';
import NYTimesNews from './containers/NYTimesNews';
import Pagination from './containers/Pagination';
import configureStore from './configureStore';
import { fetchData } from './actions';

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
