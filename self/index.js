const express =require('express');
const mongoose =require('mongoose');
const db= require('./config/db')
const dotenv= require('dotenv');
const userRoute= require("./routes/userRoute")
const session = require("express-session");


dotenv.config();


db();


const app= express();
app.use(express.urlencoded({extended:false}));

app.use(express.json());

const PORT= 3000;

app.use(session({
    secret: 'secrat123' ,
    resave:false ,
    saveUninitialized :false,
    cookie: { secure: false } ,
 }));

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
})



app.use("/api",userRoute);
