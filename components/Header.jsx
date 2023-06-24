'use strict';

import NextLink from 'next/link';

import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg='gray.100' px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Ouvrir le menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems='center'>
            <NextLink href='/'>
              <Heading size='lg'> 
                Claude Lasternas
              </Heading>
            </NextLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NextLink href='/mes-peintures'>
                <Text
                  px={2}
                  py={1}
                  rounded='md'
                  _hover={{
                    bg: 'gray.200',
                    textDecoration: 'none',
                  }}>
                  Mes peintures
                </Text>
              </NextLink>
              <NextLink href='/contact'>
                <Text
                  px={2}
                  py={1}
                  rounded='md'
                  _hover={{
                    bg: 'gray.200',
                    textDecoration: 'none',
                  }}>
                  Contact
                </Text>
              </NextLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as='nav' spacing={4}>
              <NextLink href='/mes-peintures'>
                <Text
                  px={2}
                  py={1}
                  rounded='md'
                  _hover={{
                    bg: 'gray.200',
                    textDecoration: 'none',
                  }}>
                  Mes peintures
                </Text>
              </NextLink>
              <NextLink href='/contact'>
                <Text
                  px={2}
                  py={1}
                  rounded='md'
                  _hover={{
                    bg: 'gray.200',
                    textDecoration: 'none',
                  }}>
                  Contact
                </Text>
              </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
