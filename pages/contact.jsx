'use strict';

import { Fragment } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Fragment>
      <Heading p={4} size='xl'>
        Vous pouvez me contacter:
      </Heading>
      <Box pl={8}>
        <Text>
          <strong>
            Tél:
          </strong>
          {' '}07 87 08 94 71
        </Text>
        <Text>
          <strong>
            Mail:
          </strong>
          {' '}lasternasclaude@gmail.com
        </Text>
      </Box>
    </Fragment>
  );
}
