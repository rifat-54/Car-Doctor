'use client'
import React from 'react';
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import registerUser from '@/app/actions/auth/registerUser';

const RegisterFrom = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, email, password });
        // await registerUser({ name, email, password });
       const rs= await registerUser({ name, email, password })
       console.log('register page->',rs);

        
      };
      return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
          <label className="form-control w-full">
            <div className="label w-full">
              <span className="label-text mb-1 font-bold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="name"
            />
          </label>
          <label className="form-control w-full">
            <div className="label w-full">
              <span className="label-text mt-4 mb-1 font-bold">Email</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label w-full">
              <span className="label-text mt-4 mb-1 font-bold">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <button className="w-full h-12 mt-8 bg-orange-500 text-white font-bold">
            Sign Up
          </button>
          <p className="text-center">Or Sign In with</p>
          {/* <SocialLogin /> */}
          <p className="text-center">
            Don't Have an account?{" "}
            <Link href="/login" className="text-orange-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      );
};

export default RegisterFrom;