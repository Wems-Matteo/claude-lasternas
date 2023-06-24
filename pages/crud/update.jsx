'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Center } from '@chakra-ui/react';
import Heading from '../../components/Heading';
import Grid from '../../components/Grid';

export default function Index() {
  const { push } = useRouter();
  const [data, setData] = useState([]);

  const _fetch = async () => {
    const { data: _data } = await (await fetch(`/api/read?found=${data.length}`)).json();

    if (!_data)
      return;
    
    setData(data.concat(_data));
  }

  const callback = useCallback(id =>
    push(`/crud/update/${id}`)
  );

  useEffect(() => {
    _fetch();
  }, []);

  return (
    <Fragment>
      <Heading>
        Choisir la peinture à modifier:
      </Heading>
      <Grid data={data} callback={callback} callToAction='Modifier' />
      <Center h='200px'>
        <Button onClick={_fetch}>
          Voir plus
        </Button>
      </Center>
    </Fragment>
  );
}
