'use client'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navber = () => {
  const session=useSession()
  console.log(session?.status);
  const navlink = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>About</Link>
      </li>
      <li>
        <Link href={"/"}>Service</Link>
      </li>
      <li>
        <Link href={"/"}>Blog</Link>
      </li>
      <li>
        <Link href={"/"}>Contact</Link>
      </li>
   
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>
          <Link href={"/"} className=" text-xl">
            <Image src={"/assets/logo.svg"} alt="Logo" width={107} height={87} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <ul className="flex flex-wrap items-center gap-3">
            {
              session.status==='authenticated'?
              (<div className="flex gap-2 items-center">
              <li>
                <Image className="h-12 w-12 rounded-full" src={session?.data?.user?.image} width={40} height={40} alt="profile"/>
              </li>
              <li className="cursor-pointer btn-accent" onClick={()=>signOut()}>LouOut</li>
              </div>)
              :
              (<>
                <li>
                  <Link className="btn" href={'/login'}>Login</Link>
                </li>
                <li>
        
                  <Link className="btn" href={'/register'}>Register</Link>
                </li>
                
                
              </>)
            }
          </ul>
          <a className="btn ml-3">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
