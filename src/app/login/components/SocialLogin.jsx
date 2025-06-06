'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const router=useRouter()
    const session=useSession()
    const handleSocialLogin=(provider)=>{
     
        signIn(provider)
      
    }

    useEffect(()=>{
        if(session?.status=='authenticated'){
            router.push('/')
            toast.success('Successfully Login')
        }
    },[session?.status])
    return (
        <div className="flex justify-center gap-8">
          <p
            onClick={() => handleSocialLogin("google")}
            className="bg-slate-200 rounded-full p-3"
          >
            <FaGoogle type="button" />
          </p>
          <p
            onClick={() => handleSocialLogin("github")}
            className="bg-slate-200 rounded-full p-3"
          >
            <FaGithub type="button" />
          </p>
        </div>
      );
};

export default SocialLogin;