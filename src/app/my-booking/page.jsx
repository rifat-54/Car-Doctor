// 'use client'
import MyAllBookings from './component/MyBookingTable';
import { headers } from 'next/headers';

const mybookings=async()=>{
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/service`,{
        headers:new Headers(await headers())
    })
    const d=await res.json()
    return d;
}

const myBooking = async() => {
    const data=await mybookings()

    // console.log(data)
    return (
        <div>
           <MyAllBookings data={data}></MyAllBookings>
        </div>
    );
};

export default myBooking;