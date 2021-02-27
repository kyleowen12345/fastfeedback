
import { useAuth } from '@/lib/auth'

import DashboardShell from '@/components/DashboardShell'
import { Button,  Heading,  Flex, Icon } from "@chakra-ui/react"
import { createCheckoutSession,goToBillingPortal } from '@/lib/db'



export default function Account() {
  const {user}=useAuth()

    return <DashboardShell>
      
        <Button 
       backgroundColor="gray.900"
       color="white"
       fontWeight="medium"
       mt={4}
       maxW="200px"
       _hover={{ bg: 'gray.100' }}
       _active={{
         bg: 'gray.800',
         transform: 'scale(0.95)'
       }} onClick={(e)=> createCheckoutSession(user?.uid)}>Upgrade to starter</Button>
       <Button 
       backgroundColor="gray.900"
       color="white"
       fontWeight="medium"
       mt={4}
       maxW="200px"
       _hover={{ bg: 'gray.100' }}
       _active={{
         bg: 'gray.800',
         transform: 'scale(0.95)'
       }} onClick={(e)=> goToBillingPortal()}>Go to Billing</Button>
        </DashboardShell>

   
  
  
}

