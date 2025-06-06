'use client'

import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { signIn} from "next-auth/react"

const LoginFrom = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      console.log(email,password);
      try {
        const res= await signIn('credentials',{email,password,callbackUrl:'/'});
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    
       
      };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
          <label className="form-control w-full">
            <div className="label w-full">
              <span className="label-text mb-3  font-bold">Email</span>
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
              <span className="label-text mt-5 mb-3 font-bold">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <button type='submit' className="w-full h-12 mt-8 bg-orange-500 text-white font-bold">
            Sign In
          </button>
          <p className="text-center">Or Sign In with</p>
          {/* <SocialLogin /> */}
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/register" className="text-orange-500 font-bold">
              Register
            </Link>
          </p>
        </form>
      );
};

export default LoginFrom;