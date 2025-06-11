import { collectinName, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"
import { authOptions } from './../../auth/[...nextauth]/route';


export const GET=async(req,{params})=>{

    const p=await params;
    const bookingCollections=dbConnect(collectinName.bookingCollections)

    const query={
        _id:new ObjectId(p?.id)
    }

    const singleData=await bookingCollections.findOne(query)


    return NextResponse.json(singleData)
}


export const PATCH=async(req,{params})=>{
    const p=await params;
    const body=await req.json()

    const session=await getServerSession(authOptions)
    const email=session?.user?.email;

    const bookingCollections=dbConnect(collectinName.bookingCollections)
    
    const query={
        _id:new ObjectId(p.id)
    }
    
    const singleData=await bookingCollections.findOne(query);

    const userOkay=email===singleData.email;

    if(userOkay){
        const filter={
            $set:{...body}
        }
    
        const option={
            upsert:true
        }
    
        const result=await bookingCollections.updateOne(query,filter)
        revalidatePath('/my-booking')
        return NextResponse.json(result)
    }else{
        return NextResponse.json({message:'forbidden access'},{status:403})
    }
    

  


}