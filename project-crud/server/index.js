import express from 'express' ;
import bodyParser from 'body-parser' ;
import mongoose from 'mongoose' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import route from './routes/userRoute.js';


dotenv.config() ;
const app = express() ;

app.use(bodyParser.json()) ;
// use.bodyParser(bodyParser.urlencoded({extended: true})) ;
app.use(cors()) ;


const PORT = process.env.PORT || 3000 ;

const URL= process.env.DBURL ;

mongoose.connect(URL)
.then(()=>{
    console.log('Database connected') ;
    app.listen(PORT,()=> console.log(`Server is running on port: ${PORT}`)) ;
})
.catch(err => console.error("error ",err)) ;


app.use("/api",route);








