import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button,  Heading,  Flex } from "@chakra-ui/react"




export default function Home() {
  const auth=useAuth()
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
       <Head>
        <title>FastFeedBack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Heading >
         FastFeedBack
        </Heading>
        
       {auth?.user ? 
       <Button onClick={(e)=>auth.signout()}>Sign-Out</Button>
       : <Button mt={4} size="sm" onClick={(e)=>auth.signinWithGithub()}>Sign In</Button>}
    
       </Flex>
  )
}

