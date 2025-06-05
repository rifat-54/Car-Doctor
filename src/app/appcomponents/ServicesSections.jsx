import { collectinName, dbConnect } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
const ServicesSections = async () => {
  const serviceCollection = dbConnect(collectinName.servicesCollection);
  const data = await serviceCollection.find().toArray();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-14">Our Services</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {data?.map((item, idx) => (
          <div className="card shadow-sm w-full mx-auto " key={idx}>
            <div className="flex justify-center items-center">
              <Image
                className="rounded-md p-3 w-full h-[207px]"
                src={item?.img}
                width={307}
                height={207}
                alt={item?.title}
              ></Image>
            </div>
            <div className="p-5  flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold">{item?.title}</h3>
                <p className="text-[#FF3811]">Price : ${item?.price}</p>
              </div>
              <div>
                <Link href={`/services/${item?._id}`}>
                
                <FaArrowCircleRight className="text-[#FF3811] text-xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSections;
