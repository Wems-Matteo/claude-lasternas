'use strict';

import { useRouter } from 'next/router';
import { Fragment, useCallback, useState } from 'react';
import Heading from '../../components/Heading';
import Grid from '../../components/Grid';

export default function Delete() {
  const { push } = useRouter();
  const [data, setData] = useState([]);

  const _fetch = async () => {
    const { data: _data } = await (await fetch(`/api/read?found=${data.length}`));

    if (!_data)
      return;
    
    setData(data.concat(_data));
  }

  const callback = useCallback(async _id => {
    const _data = await (await fetch(`/api/delete?_id=${_id}`, { method: 'DELETE' })).json();
  
    if (_data?.success) {
      alert('La suppression a réussie');
      push('/api/delete');
    } else {
      alert('La suppression a échouée');
    }
  });

  useEffect(() => {
    _fetch();
  }, []);

  return (
    <Fragment>
      <Heading>
        Choisir la peinture à supprimer:
      </Heading>
      <Grid data={data} callback={callback} callToAction={'Supprimer'} />
      <Center h='200px'>
        <Button onClick={_fetch}>
          Voir plus
        </Button>
      </Center>
    </Fragment>
  );
}
