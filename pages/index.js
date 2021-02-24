import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button,  Heading,  Flex } from "@chakra-ui/react"
import Link from 'next/link'





export default function Home() {

  const auth=useAuth()
  console.log(auth?.user)
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
       <Head>
       <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>FastFeedBack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Heading >
         FastFeedBack
        </Heading>
        
       {auth?.user ? 
       <Button  
       backgroundColor="gray.900"
       color="white"
       fontWeight="medium"
       mt={4}
       maxW="200px"
       _hover={{ bg: 'gray.700' }}
       _active={{
         bg: 'gray.800',
         transform: 'scale(0.95)'
       }}><Link href="/dashboard">Dashboard</Link></Button>
       : <Button backgroundColor="gray.900"
       color="white"
       fontWeight="medium"
       mt={4}
       maxW="200px"
       _hover={{ bg: 'gray.700' }}
       _active={{
         bg: 'gray.800',
         transform: 'scale(0.95)'
       }} onClick={(e)=>auth.signinWithGithub()}>Sign In</Button>}
       </Flex>
  )
}

