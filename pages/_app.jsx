'use strict';

import { ChakraProvider } from '@chakra-ui/react';
import Head from '../components/Head';
import Header from '../components/Header';

export default function _App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
