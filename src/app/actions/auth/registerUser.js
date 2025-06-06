'use server'
import bcrypt from 'bcrypt'
import { collectinName, dbConnect } from '@/lib/dbConnect';
import React from 'react';

const registerUser = async(payload) => {
    const{email,password}=payload;
    const userCollecions=dbConnect(collectinName.userCollections)

    if(!email || !password){
        return null;
    }

    const user=await userCollecions.findOne({email:payload.email})

    if(!user){
        const hasPassword=await bcrypt.hash(password,10)
        payload.password=hasPassword;
        const result=await userCollecions.insertOne(payload);
        result.insertedId=result.insertedId.toString()
        
        return result;
    }else{
        return null;
    }
};

export default registerUser;