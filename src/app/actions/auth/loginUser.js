'use server'

import { collectinName, dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'


const loginUser = async(payload) => {
    const {email,password}=payload;
    const userCollection=dbConnect(collectinName.userCollections)

    const user=await userCollection.findOne({email})
    if(!user) return null;
    
    const ispasswordOk=bcrypt.compare(user.password,password)
    if(!ispasswordOk) return null;

    return user;
};

export default loginUser;