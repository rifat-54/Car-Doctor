

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const servicePage = async({params}) => {
        const p=await params;
    const res=await fetch(`http://localhost:3000/api/service/${p?.id}`)
    const data=await res.json();


    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <figure className='relative  mx-auto '>
                        <Image className='rounded-md h-full'  src={'/assets/images/checkout/checkout.png'} width={1170} height={400} alt='banner' />
                        <div className=' bg-layer rounded-md top-0 w-full h-full absolute '>

                            <p className='text-white absolute top-[20%] left-[10%] text-3xl font-bold'>Services Details</p>
                       
                        </div>
                        
                    </figure>
                </div>
               
            </div>
            <div className='mt-10 md:px-10 grid grid-cols-12 justify-between gap-10'>
                <div className='col-span-8'>
                    <Image className='w-full rounded-md' src={data?.img} width={400} height={200} alt='banner'/>
                </div>
                <div className='col-span-3 mt-10'>
                    <Link href={`/checkout/${data?._id}`}>
                    <button className='btn bg-[#FF3811] text-white'>CheckOut $<span>{data?.price}</span> </button>
                    </Link>
                   
                </div>
            </div>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default servicePage;