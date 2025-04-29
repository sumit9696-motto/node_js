import mongoose from "mongoose";

const dataSchema =new mongoose.Schema({
    id: {type: Number, required: true,unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password :{type:String,required :true},

})
export default mongoose.model("Data",dataSchema);