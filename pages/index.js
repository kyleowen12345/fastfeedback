import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button,  Heading,Text,Code } from "@chakra-ui/react"

import {auth} from 'firebase'
import { useAuth } from '../lib/auth'



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


        </Heading>

       {auth?.user && <Text >
         Current user <Code>{auth?.user.email}</Code>
        </Text>}
       {auth?.user ?<Button onClick={(e)=>auth.signout()}>Sign-Out</Button>: <Button onClick={(e)=>auth.signinWithGithub()}>Sign In</Button>}

        </h1>

       {auth?.user && <p className={styles.description}>
         Current user <code>{auth?.user.email}</code>
        </p>}

       {auth?.user ?<button onClick={(e)=>auth.signout()}>Sign-Out</button>: <button onClick={(e)=>auth.signinWithGithub()}>Sign In</button>}


      </main>
    </div>
  )
}
