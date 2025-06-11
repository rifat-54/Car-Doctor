import { collectinName, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route";

export const GET=async(req)=>{

    const session=await getServerSession(authOptions)
    if(session){
        const email=session.user.email;
        const bookingCollections=dbConnect(collectinName.bookingCollections)
        const result=await bookingCollections.find({email}).toArray()

        return NextResponse.json(result)
    }

    return NextResponse.json({})
}


export const POST=async(req)=>{
    const data=await req.json();

    // console.log('routes->',data)
    const bookCollection=dbConnect(collectinName.bookingCollections)
    const result=await bookCollection.insertOne(data)
    
    return NextResponse.json({result})
}


