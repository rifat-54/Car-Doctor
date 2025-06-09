import { collectinName, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    const data=await req.json();

    console.log('routes->',data)
    const bookCollection=dbConnect(collectinName.bookingCollections)
    const result=await bookCollection.insertOne(data)

    return NextResponse.json({result})
}