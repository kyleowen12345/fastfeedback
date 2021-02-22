// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/lib/firebase-admin";

export default async(req, res) => {
  try {
    const snapshot=await db.collection('sites').orderBy('createdAt', 'desc').get()
    const sites=[]
   snapshot.forEach(doc=>{
     sites.push({id:doc.id,...doc.data()})
   })
   res.status(200).json(sites)
  } catch (error) {
    console.log('Error getting document',error)
  }
 

}
