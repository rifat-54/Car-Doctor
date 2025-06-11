"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const UpdateBookingFrom = ({ data ,id}) => {
  const session = useSession();
  const router=useRouter()


  

  const handleBookService = async (e) => {
    toast("Submitting Booking...");
    e.preventDefault();

    const form = e.target;
   
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
  
    const bookingPayload = {
    
      date,
      phone,
      address,

    
    };

    

    const res=await fetch(`/api/my-bookings/${id}`,{
        method:'PATCH',
        body:JSON.stringify(bookingPayload)
    })

    const updateRes=await res.json()
    if(updateRes?.matchedCount){
        toast.success('Successfully Updated');
        router.push('/my-booking')
    }

    // console.log('from Update',updateRes)
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl mb-6">
          Book Service : {data?.service_name}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session?.data?.user?.name}
                readOnly
                type="text"
                name="name"
                className="input w-full input-bordered"
              />
            </div>

            <div className="from-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session?.data?.user?.email}
                readOnly
                type="text"
                name="email"
                placeholder="email"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={data?.service_price}
                readOnly
                name="price"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
              defaultValue={data?.date}
                type="date"
                name="date"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
              defaultValue={data?.phone}
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control grid grid-cols-1">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
              defaultValue={data?.address}
                type="text"
                name="address"
                placeholder="Your Address"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          <div className="form-control  mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white btn-block"
            >
              Update Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookingFrom;
