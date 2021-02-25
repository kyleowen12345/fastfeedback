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
          body{
            background-color: #EDF2F7;
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
    <AuthProvider>
    <ChakraProvider  theme={customTheme} resetCSS>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </ChakraProvider >
  </AuthProvider>
  )
  
}

export default MyApp
