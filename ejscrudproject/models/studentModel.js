const mongoose=require('mongoose');

const studentSchema =new mongoose.Schema({
    fname: {type :String,required:true},
    lname: {type :String,required:true},
    email: {type :String,required:true},
    phone: {type :String,required:true},
    password: {type :String,required:true,unique:true},
    
});

module.exports=mongoose.model('student',studentSchema);