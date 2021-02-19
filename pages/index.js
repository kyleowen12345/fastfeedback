import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button,  Heading,Text,Code } from "@chakra-ui/react"

export default function Home() {
  const auth=useAuth()
  return (
    <div >
       <Head>
        <title>FastFeedBack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading >
         FastFeedBack
        </Heading>

       {auth?.user && <Text >
         Current user <Code>{auth?.user.email}</Code>
        </Text>}
       {auth?.user ?<Button onClick={(e)=>auth.signout()}>Sign-Out</Button>: <Button onClick={(e)=>auth.signinWithGithub()}>Sign In</Button>}
      </main>
    </div>
  )
}
