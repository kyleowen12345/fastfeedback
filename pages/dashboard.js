import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button,   Flex } from "@chakra-ui/react"
import EmptyState from '@/components/EmptyState'



export default function Dashboard() {
  const auth=useAuth()
  if(!auth.user){
      return 'Loading...'
  }
  return (
  <>
       <Head>
        <title>DashBoard</title>
      </Head>
       <EmptyState/>
      
    
    </>
  )
}

