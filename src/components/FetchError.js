import React from 'react';
import { Flex } from 'grid-styled';

const FetchError = ({ message, onRetry }) => (
  <Flex flexDirection={'column'}>
    <Flex justifyContent={'center'} mx={'auto'}>
      <p>Could not fetch articles. {message}</p>
    </Flex>
    <Flex justifyContent={'center'}>
      <button onClick={onRetry}>Retry</button>
    </Flex>
  </Flex>
);

export default FetchError;
