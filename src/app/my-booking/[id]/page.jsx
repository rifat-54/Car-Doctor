import React from 'react';
import UpdateBookingFrom from '../component/UpdateBookingTable';
import { headers } from 'next/headers';

const UpdateBooking = async({params}) => {
    const p=await params;
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/my-bookings/${p.id}`,{
        headers:new Headers(await headers())
    })
    const data=await res.json()
    // console.log(data)
    return (
        <div>
  
  <UpdateBookingFrom data={data} id={p?.id}></UpdateBookingFrom>
        </div>
    );
};

export default UpdateBooking;