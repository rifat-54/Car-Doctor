'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
const DeleteBookingButtion = ({id}) => {
    const router=useRouter()
    const handleDelete=async()=>{
      
        const res=await fetch(`/api/service/${id}`,{
            method:'DELETE'
        })
        const d=await res.json()
        router.refresh()
        
        if(d.deletedCount){
            toast.success('Successfully Deleted!')
        }
      
    }


    return (
        <div>
        

            <MdDelete onClick={handleDelete} className='text-red-500 text-2xl'/>
          
        </div>
    );
};

export default DeleteBookingButtion;