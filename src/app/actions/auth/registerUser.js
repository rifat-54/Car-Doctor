'use server'

import { collectinName, dbConnect } from '@/lib/dbConnect';
import React from 'react';

const registerUser = async(payload) => {
    const{email,password}=payload;
    const userCollecions=dbConnect(collectinName.userCollections)

    if(!email || !password){
        return {success:false};
    }

    const user=await userCollecions.findOne({email:payload.email})

    if(!user){
        const result=await userCollecions.insertOne(payload);
        const{insertedId}=result;
        // console.log('result',result);
        console.log('idd',insertedId);
        return {insertedId};
    }else{
        return {success:false};
    }
};

export default registerUser;