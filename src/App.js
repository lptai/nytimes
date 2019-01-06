import React, { Component } from 'react';
import { Box } from 'grid-styled';
import NYTimesNews from './containers/NYTimesNews';
import Pagination from './containers/Pagination';

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

export default App;
