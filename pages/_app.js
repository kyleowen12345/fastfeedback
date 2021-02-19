
import { AuthProvider } from "@/lib/auth"
import { ChakraProvider } from "@chakra-ui/react"
import {Global,css} from '@emotion/react'
import customTheme from "@/styles/theme"
const GlobalStyle = ({ children }) => {
  return (
    <>
      {/* <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head> */}
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider  theme={customTheme}>
  <AuthProvider>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </AuthProvider>
  </ChakraProvider >
  )
  

import { AuthProvider } from "../lib/auth"


function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Component {...pageProps}/>
  </AuthProvider>

}

export default MyApp
