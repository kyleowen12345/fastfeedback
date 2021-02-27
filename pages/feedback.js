import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardShell'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import FeedbackTable from '@/components/FeedbackTable'
import FeedbackTableHeader from '@/components/FeedbackTableHeader'
import Page from '@/components/Page';


function MyFeedback() {
  const {user}=useAuth()
  const { data, error,isValidating } = useSWR(user ? ['/api/feedback',user?.token]:null, fetcher,{revalidateOnFocus:false,})

  if(isValidating){
      return <DashboardShell><FeedbackTableHeader/><SiteTableSkeleton/></DashboardShell> 
  }if(!data || error || data.message){
 return  <DashboardShell><FeedbackTableHeader/><EmptyState/></DashboardShell>
  }else{
    return <DashboardShell><FeedbackTableHeader/><FeedbackTable feedback={data}/></DashboardShell>
  }
   
  
  
}
const MyFeedbackPage = () => (
  <Page name="Feedback" path="/feedback">
    <MyFeedback />
  </Page>
);
export default MyFeedbackPage

