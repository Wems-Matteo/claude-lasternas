'use strict';

import { Heading } from '@chakra-ui/react';

export default function _Heading({ children }) {
  return (
    <Heading p={4} size='xl'>
      {children}
    </Heading>
  );
}
