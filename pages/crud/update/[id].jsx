'use strict';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Divider, Heading, Input, Stack, Textarea } from '@chakra-ui/react';
import _Heading from '../../../components/Heading';

export default function Id() {
  const { push, query } = useRouter();
  const [main, setMain] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
  const _fetch = async () => {
    const { data: _data } = await (await fetch(`/api/read?_id=${query.id}`)).json();

    if (!_data)
      return;

    setMain(_data.main);
    setFile(_data.file);
    setPrice(_data.price);
    setDescription(_data.description);
  }

  const update = async () => {
    const _data = await (await fetch('/api/update', {
      method: 'POST',
      body: JSON.stringify({ _id: query.id, main, price, description }),
    })).json();

    if (_data?.success) {
      alert('La modification a réussie');
      push('/crud/update');
    } else {
      alert('La peinture a échouée');
    }
  }

  useEffect(() => {
    _fetch();
  }, [query]);

  return (
    <Fragment>
      <_Heading>
        Modifier la peinture:
      </_Heading>
      <Card maxW='sm'>
        <CardBody>
          <Image src={file} alt='Affichage impossible' width={300} height={300} />
          <Stack mt={6} spacing={3}>
            <Heading size='md'>
              Description:
            </Heading>
            <Textarea size='lg' value={description} onChange={event => setDescription(event.target.value)} placeholder='Description' />
            <Heading size='md'>
              Prix:
            </Heading>
            <Input value={price} onChange={event => setPrice(event.target.value)} placeholder='Prix' />
            <Heading size='md'>
              Afficher à l'aperçu:
            </Heading>
            <Input value={main} onChange={event => setMain(event.target.value)} placeholder='Oui / Non' />
          </Stack>
        </CardBody>
        <Divider color='gray.200' />
        <CardFooter>
          <Button onClick={update}>
            Modifier
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
}
