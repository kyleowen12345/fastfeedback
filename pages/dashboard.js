import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardShell'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable'
import SiteTableHeader from '@/components/SiteTableHeader'
import UpgradeEmptyState from '@/components/UpgradeEmptyState'


export default function Dashboard() {
  const {user}=useAuth()
  const { data, error,isValidating } = useSWR(user ? ['/api/sites',user?.token]:null, fetcher,{revalidateOnFocus:false,})

  if(!data){
      return <DashboardShell><SiteTableHeader/><SiteTableSkeleton/></DashboardShell> 
  }if(!data.length){
 return  <DashboardShell><SiteTableHeader/><SiteTable sites={data}/></DashboardShell>  
}else{
    return <DashboardShell>
      <SiteTableHeader isPaidAccount={user?.stripeRole}/>
{user?.stripeRole ? <EmptyState/>:<UpgradeEmptyState/>}
    
    </DashboardShell>
  }
   
  
  
}

