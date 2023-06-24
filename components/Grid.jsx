'use strict';

import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';

export default function Grid({ data, callback, callToAction }) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 4 }} spacing='20px' padding='20px'>
      {data.map(({ _id, file, price, description }) =>
        <Card
          _id={_id}
          file={file}
          price={price}
          description={description}
          callback={callback}
          callToAction={callToAction}
        />
      )}
    </SimpleGrid>
  );
}
