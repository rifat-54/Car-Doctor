
import { collectinName, dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from './../../auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';



export const GET = async(req,{params}) => {
    const p=await params;
    const servicesCollection=dbConnect(collectinName.servicesCollection)
    const data=await servicesCollection.findOne({_id:new ObjectId(p?.id)})
   
    return NextResponse.json(data);

};


export const DELETE=async(req,{params})=>{

    const p=await params;

    const session=await getServerSession(authOptions)

    // console.log('ud-<',session)

    const bookingCollections=dbConnect(collectinName.bookingCollections)
    const bookData=await bookingCollections.findOne({_id:new ObjectId(p?.id)})

    // console.log(bookData)
    const okUser=session?.user?.email==bookData?.email;

    if(okUser){
        const result=await bookingCollections.deleteOne({_id:new ObjectId(p?.id)})
        
        //after delete again fetch the data on my booking routes
        revalidatePath('/my-booking')

        return NextResponse.json(result)
    }

    return NextResponse.json({success:false,message:'unauthorize access'})
}


