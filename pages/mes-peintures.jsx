'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Center } from '@chakra-ui/react';
import Heading from '../components/Heading';
import Grid from '../components/Grid';

export default function MesPeintures() {
  const { push } = useRouter();
  const [data, setData] = useState([]);

  const _fetch = async () => {
    const { data: _data } = await (await fetch(`/api/read?found=${data.length}`)).json();

    if (!_data)
      return;

    setData(data.concat(_data));
  }

  const callback = useCallback(_id =>
    push(`/mes-peintures/${_id}`)
  );

  useEffect(() => {
    _fetch();
  }, []);

  return (
    <Fragment>
      <Heading>
        Voici mes peintures:
      </Heading>
      <Grid data={data} callback={callback} callToAction='Voir plus' />
      <Center h='200px'>
        <Button onClick={_fetch}>
          Voir plus
        </Button>
      </Center>
    </Fragment>
  );
}
