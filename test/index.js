import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/dataRoute.js';


dotenv.config();

const app= express();
 
app.use(bodyParser.json());
app.use(cors());
const URL = process.env.DBURL;
const PORT =process.env.PORT || 8000;

mongoose.connect(URL)
    .then(()=>{
        console.log("database connect succesful");
        app.listen(PORT,()=>console.log(`server is running on port : ${PORT}`));
    })
    .catch(error=>console.log("error" , error));


app.get('/',(req,res)=>{
    res.send('server is running');
});

app.use("/api",route);


