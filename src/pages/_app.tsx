import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerprovider } from '../contexts/SidebarDrawerContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerprovider>
        <Component {...pageProps} />
      </SidebarDrawerprovider>
    </ChakraProvider>
  );
}

export default MyApp
