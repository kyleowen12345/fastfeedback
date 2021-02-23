import { getAllFeedback } from "@/lib/db-admin"



export default async(req, res) => {
  try {
      const siteId=req.query.siteId
   const feedback= await getAllFeedback(siteId)
   res.status(200).json(feedback)
  } catch (error) {
    console.log('Error getting document',error)
  }
 

}