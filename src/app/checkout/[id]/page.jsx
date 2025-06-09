import CheckoutForm from '@/app/appcomponents/CheckOutFrom';
import React from 'react';

const page = async({params}) => {
    const p= params;
    const res=await fetch(`http://localhost:3000/api/service/${p?.id}`)
    const data=await res.json();

    return (
        <div>
            {/* <h2 className='text-4xl font-bold text-center my-10'>Book Service: {data?.title}</h2> */}
            <CheckoutForm data={data}></CheckoutForm>
            {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    );
};

export default page;