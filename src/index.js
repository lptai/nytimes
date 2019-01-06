import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import App from './App';
import configureStore from './configureStore';
import { fetchData } from './actions';

const store = configureStore();
store.dispatch(fetchData(0));

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
