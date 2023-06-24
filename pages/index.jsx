'use strict';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import Heading from '../components/Heading';
import Grid from '../components/Grid';

export default function Index() {
  const { push } = useRouter();
  const [data, setData] = useState([]);

  const _fetch = async () => {
    const { data: _data } = await (await fetch('/api/read?main=true')).json();

    if (!_data)
      return;

    setData(_data);
  }

  const callback = useCallback(_id =>
    push(`mes-peintures/${_id}`)
  );

  useEffect(() => {
    _fetch();
  }, []);

  return (
    <Fragment>
      <Heading>
        Voici un aperçu de mes peintures:
      </Heading>
      <Text fontSize={20} margin='20px'>
        Il y a la possibilité de réaliser des tableaux sur des thèmes personnalisés ! Vous pouvez me {' '}
        <Link href='/contact'>
          <u>
            contacter
          </u>
        </Link>
        .
      </Text>
      <Grid data={data} callback={callback} callToAction='Voir plus' />
    </Fragment>
  );
}
