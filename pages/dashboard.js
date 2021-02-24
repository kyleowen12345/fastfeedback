import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardShell'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable'


export default function Dashboard() {
  const {user}=useAuth()
  const { data, error,isValidating } = useSWR(user ? ['/api/sites',user?.token]:null, fetcher,{revalidateOnFocus:false,})
 console.log(error)
  if(isValidating){
      return <DashboardShell><SiteTableSkeleton/></DashboardShell> 
  }if(!data || error || data.message){
 return  <DashboardShell><EmptyState/></DashboardShell>
  }else{
    return <DashboardShell><SiteTable sites={data}/></DashboardShell>
  }
   
  
  
}

