'use strict';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Divider, Heading, Input, Stack, Textarea } from '@chakra-ui/react';
import _Heading from '../../components/Heading';

export default function Create() {
  const { push } = useRouter();
  const [file, setFile] = useState('');
  const [previewFile, setPreviewFile] = useState('');
  const [main, setMain] = useState('Non');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
  const create = async () => {
    const data = await (await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({ main, file, price, description }),
    })).json();

    if (data?.success) {
      setFile('');
      setPreviewFile('');
      setPrice('');
      setDescription('');
      alert('La création a réussie');
      push('/mes-peintures');
    } else {
      alert('La création a échouée');
    }
  }

  const onChange = files => {
    if (files && files[0]) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(files[0]);
      fileReader.onload = async function () {
        setFile(fileReader.result);
        setPreviewFile(fileReader.result);
      }
    }
  }

  return (
    <Fragment>
      <_Heading>
        Ajouter une nouvelle peinture:
      </_Heading>
      <Card maxW='sm'>
        <CardBody>
          <Input type='file' onChange={event => onChange(event.target.files)} />
          <Image src={previewFile} alt='Aucun fichier choisi' width={300} height={300} />
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
          <Button onClick={create}>
            Ajouter
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
}
