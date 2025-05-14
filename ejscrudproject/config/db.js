const mongoose=require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

const DBURL= process.env.MONGOSEURL;
const PORT =process.env.PORT;
exports.db=()=>{mongoose.connect(DBURL).then(()=>{
    console.log(`database connect succesful on ${PORT}`)
})
.catch(error=>console.log(error.error)

)}