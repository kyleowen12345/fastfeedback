import FeedBack from "@/components/FeedBack";
import { useAuth } from "@/lib/auth";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { Box,FormControl,FormLabel,Input, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { useRef,useState } from "react";
import {createFeedback} from '@/lib/db'
export async function getStaticProps({params}) {
    const siteId=params.siteId
    const feedback=await getAllFeedback(siteId)
    
    return {
      props: {
          initialFeedback:feedback,
           
      }, 
    }
  }
  export async function getStaticPaths() {
    const sites=await getAllSites()
    const paths=sites?.map(i=>({
        params:{siteId:i.id}
    }))
    return {
      paths,
      fallback:  false // See the "fallback" section below
    };
  }
  // The page
export default function SiteFeedBack({initialFeedback}) {
  const auth=useAuth()
  const router=useRouter()
  const inputEl=useRef(null)
  const [allFeedBack,setAllFeedBack]=useState(initialFeedback)
  const onSubmit=(e)=>{
  e.preventDefault()
  const newFeedback={
    author:auth?.user?.email,
    authorId:auth?.user?.uid,
    siteId:router.query.siteId,
     text:inputEl.current.value,
     createdAt: new Date().toISOString(),
     provider:auth?.user.provider || auth?.user.providerData[0].providerId,
     status:"pending"
  }
  setAllFeedBack([newFeedback, ...allFeedBack])
  createFeedback(newFeedback)
  }
    return <Box display="flex" flexDirection="column" width="full" maxWidth="700px" margin='0 auto'>
      <Box as="form" onSubmit={onSubmit}>
      <FormControl id="email" my={8}>
  <FormLabel htmlFor="comment">Comment</FormLabel>
  <Input ref={inputEl} type="comment" id="comment" />
  <Button type="submit" fontWeight="medium" mt={2}>Submit</Button>
</FormControl>
      </Box>
        
{allFeedBack.map(i=>(
        <FeedBack key={i.createdAt} {...i}/>
    ))}
    </Box>
    
     
    
    
  }
  