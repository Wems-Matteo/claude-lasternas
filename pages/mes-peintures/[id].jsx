'use strict';

import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Box, Heading, HStack, Text, Stack } from '@chakra-ui/react';

export default function Id() {
  const { query } = useRouter();
  const [data, setData] = useState({});
  
  const _fetch = async () => {
    console.log(query.id);

    const { data: _data } = await (await fetch(`/api/read?_id=${query.id}`)).json();

    if (!_data)
      return;
    
    setData(_data);
  }

  useEffect(() => {
    _fetch();
  }, [query]);

  return (
    <Fragment>
      <HStack>
      <Box w='50vw' padding='20px'>
        <img src={data?.file} alt='Affichage impossible' />
      </Box>
        <Stack>
          <Heading size='md'>
            Description:
          </Heading>
          <Text>
            {data?.description === ''
              ? 'Aucune description'
              : data?.description
            }
          </Text>
          <Heading size='md'>
            Prix:
          </Heading>
          <Text color='blue.500' fontSize='xl'>
            {data?.price === ''
              ? 'Prix inconnu'
              : `${data?.price}€`
            }
          </Text>
        </Stack>
      </HStack>
    </Fragment>
  );
}
