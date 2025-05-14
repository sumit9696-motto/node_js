const express=require('express');
const studentData =require('../models/studentModel');
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
const studentModel = require('../models/studentModel');



exports.getallstudents= async (req,res)=>{
    try{
  const students= await studentData.find();
//   res.json(students);
  res.render('home', {students,message:null});
    }
    catch(error){
        res.status(500).json({message:error.message});

    }

};

exports.registerstudent= async (req,res)=>{


    try{

        const {fname,lname,email,phone,password}= req.body;
        const hashpassword= await bcrypt.hash(password,10);
        const newstudent= await studentData.create({fname,lname,email,phone,password:hashpassword});
     
        //  res.status(202).render('addstudent',{message:"register successfull"});
        // res.redirect('/');
          res.status(202).render('addstudent',{message:"register successfull"});
         ;

    }
    catch(error){
        res.status(500).json({message:error.message});

    }
};
exports.getregisterstudent= async (req,res)=>{


    try{

        res.render('addstudent',{message:null});

    }
    catch(error){
        res.status(500).json({message:error.message});

    }
}

exports.getupdatestudent= async (req,res)=>{
    try{
      
       const students= await studentData.findById(req.params.id);


        res.render('updatestudent',{students ,message:null});
     
    }
   
    catch(error){
res.status(500).json({message:error.message});
    }
}
exports.updatestudent= async(req,res)=>{
    try{
       const studenrecord= await studentData.findByIdAndUpdate(req.params.id,req.body,{new:true});
  if(!studenrecord)return res.status(404).json({message :"user not found"});
//   res.render("home",{message:"succcessful update"});
     res.redirect('/');
    }
    catch(error){
res.status(500).json({message:error.message});
    }
}

exports.deletestudent = async (req,res)=>{
    try{

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.loginstudent= async(req,res)=>{
    try{

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
} ;

exports.logout= async (req,res)=>{
    try{

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


exports.getbyidstudent=async (req,res)=>{
    try{
   const students= await studentData.findById(req.params.id);

   res.render('show', {students});
    }
    catch(error){
        res.status(500).json({message:error.message});

    }
}