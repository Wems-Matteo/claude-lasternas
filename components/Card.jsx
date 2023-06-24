'use strict';

import Image from 'next/image';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';

export default function _Card({ _id, file, price, description, callback, callToAction }) {
  if (!_id)
    return (
      <Card maxW='sm'>
        <CardBody>
          <Image src={file} alt='Affichage impossible' width={300} height={300} />
          <Stack mt={6} spacing={3}>
            <Heading size='md'>
              Description:
            </Heading>
            <Text>
              Chargement
            </Text>
            <Text color='blue.500' fontSize='xl'>
              Chargement
            </Text>
          </Stack>
        </CardBody>
        <Divider color='gray.200' />
        <CardFooter>
          <Button>
            Chargement
          </Button>
        </CardFooter>
      </Card>
    );

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={file} alt='Affichage impossible' width={300} height={300} />
        <Stack mt={6} spacing={3}>
          <Heading size='md'>
            Description:
          </Heading>
          <Text>
            {description === ''
              ? 'Aucune description'
              : description
            }
          </Text>
          <Text color='blue.500' fontSize='xl'>
            {price === ''
              ? 'Prix inconnu'
              : `${price}€`
            }
          </Text>
        </Stack>
      </CardBody>
      <Divider color='gray.200' />
      <CardFooter>
        <Button onClick={() => callback(_id)}>
          {callToAction}
        </Button>
      </CardFooter>
    </Card>
  )
}
