// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllSites } from "@/lib/db-admin";

export default async(req, res) => {
  try {
   const sites = await getAllSites()
   res.status(200).json(sites)
  } catch (error) {
    console.log('Error getting document',error)
  }
 

}
