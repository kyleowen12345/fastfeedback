import {db} from "@/lib/firebase-admin";

export default async(req, res) => {
  try {
    const startAtRes = await db.collection('sites')
  .orderBy('createdAt', 'desc')
  .startAt("2021-02-22T05:28:05.395Z")
  .limit(3)
  .get();
  const sites=[]
  
  startAtRes.forEach(doc=>{
    sites.push({id:doc.id,...doc.data()})
  })
   
res.status(200).json(sites)
  console.log(sites)
  } catch (error) {
    console.log('Error getting document',error)
  }
 

}
