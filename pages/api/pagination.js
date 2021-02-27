import {db} from "@/lib/firebase-admin";

export default async(req, res) => {
  try {
    const startAtRes = await db.collection('sites')
  .orderBy('site', 'desc')
  .limit(6)
  .get();
const last =startAtRes.docs[startAtRes.docs.length - 1]
const endAtRes = await db.collection('sites')
  .orderBy('site','desc')
  .startAfter(last.data().site)
  .limit(6)
  .get();
 
const sites=[]
  
startAtRes.forEach(doc=>{
    sites.push({id:doc.id,...doc.data()})
  })
 
res.status(200).json(sites)
  } catch (error) {
    console.log('Error getting document',error)
  }
 

}
