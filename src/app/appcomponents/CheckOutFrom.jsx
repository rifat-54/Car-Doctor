"use client";

import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  const session = useSession();
  console.log(session);

  const handleBookService = async (e) => {
    toast("Submitting Booking...");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const bookingPayload = {
      // Session
      customerName: name,
      email,

      // User Inputs
      date,
      phone,
      address,

      // Extra information
      service_id: data._id,
      service_name: data.title,
      service_img: data.img,
      service_price: data.price,
    };

    // console.log(bookingPayload);

    const res=await fetch('http://localhost:3000/api/service',{
        method:'POST',
        body:JSON.stringify(bookingPayload)
    })

    const postedData=await res.json()

    console.log('from checkout',postedData)
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl mb-6">
          Book Service : {data?.title}
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
                defaultValue={data?.price}
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
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
