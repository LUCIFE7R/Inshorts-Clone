import mongoose from "mongoose";
import React from 'react'

const Connection=async(username,password)=>{
    try{
        const URL=`mongodb://${username}:${password}@ac-hbmdtlk-shard-00-00.zgzqool.mongodb.net:27017,ac-hbmdtlk-shard-00-01.zgzqool.mongodb.net:27017,ac-hbmdtlk-shard-00-02.zgzqool.mongodb.net:27017/?ssl=true&replicaSet=atlas-ykm4ui-shard-0&authSource=admin&retryWrites=true&w=majority`;

        await mongoose.connect(URL,{useNewUrlParser:true})

        console.log("Database connected Successfully");
    }catch(error){
        console.log("Error while connecting DB",error)
    }
}

export default Connection;