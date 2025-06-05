import { collectinName, dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const servicePage = async({params}) => {

    const p=await params.id;
    const servicesCollection=dbConnect(collectinName.servicesCollection)
    const data=await servicesCollection.findOne({_id:new ObjectId(p)})


    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <figure className='relative  mx-auto '>
                        <Image className='rounded-md h-full'  src={'/assets/images/checkout/checkout.png'} width={1170} height={400} />
                        <div className=' bg-layer rounded-md top-0 w-full h-full absolute '>

                            <p className='text-white absolute top-[20%] left-[10%] text-3xl font-bold'>Services Details</p>
                       
                        </div>
                        
                    </figure>
                </div>
            </div>
            <p>{p}</p>
            {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    );
};

export default servicePage;