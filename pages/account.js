import Head from 'next/head'
import { useAuth } from '@/lib/auth'
// import EmptyState from '@/components/EmptyState'
// import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardShell'
import { Button,  Heading,  Flex, Icon } from "@chakra-ui/react"
import { createCheckoutSession,goToBillingPortal } from '@/lib/db'
// import useSWR from 'swr'
// import fetcher from '@/utils/fetcher'
// import SiteTable from '@/components/SiteTable'
// import SiteTableHeader from '@/components/SiteTableHeader'


export default function Account() {
  const {user}=useAuth()
//   const { data, error,isValidating } = useSWR(user ? ['/api/sites',user?.token]:null, fetcher,{revalidateOnFocus:false,})
//  console.log(data)
//   if(isValidating){
//       return <DashboardShell><SiteTableHeader/><SiteTableSkeleton/></DashboardShell> 
//   }if(!data || error || data.message){
//  return  <DashboardShell><SiteTableHeader/><EmptyState/></DashboardShell>
//   }else{
    return <DashboardShell>
        {/* <SiteTableHeader/><SiteTable sites={data}/> */}
        <Button 
    //    leftIcon={<Icon >
    //    <path
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    //    />
    //  </Icon>}
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
    //    leftIcon={<Icon >
    //    <path
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    //    />
    //  </Icon>}
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
//   }
   
  
  
}

