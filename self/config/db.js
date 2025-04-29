const mongoose =require('mongoose');
const express =require('express');
const dotenv= require('dotenv');
dotenv.config();

const DBURL= process.env.MONGOSEURL
 const db = ()=> {mongoose.connect(DBURL).then(()=>{
    console.log("database connect succesful")
    }).catch(error=>console.log("error",error)
    );}


module.exports=db;
