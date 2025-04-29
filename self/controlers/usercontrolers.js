const Userdata= require("../models/usermodel");
const validationRegistration=require('../middlewares/userformvalid');
const {body,validationResult}=require('express-validator');
const bcrypt =require('bcryptjs');

exports.getall=async (req,res)=>{
    try{
    const users= await Userdata.find()
    res.json(users);
    }
    catch(err){
     res.status(500).json({message : err.message});
    }
};

exports.register=async (req,res)=>{
    
    const result = validationResult(req);
    if(!result.isEmpty()){
     return res.status(400).json({
        result:result.array().map(
                err=>({
                    field: err.param,
                    message : err.msg,
                } ) ),
        });
    }
    
  

    try{
        const {fname,lname,email,password}=req.body;
        const hasepassword= await bcrypt.hash(password,10);


        const newuser= await Userdata.create({fname,lname,email,password:hasepassword});
        res.status(202).json(newuser);

    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

exports.login=async(req,res)=>{
    const {email,password}= req.body;
    try{
     
       const isemail= await Userdata.findOne({email});
       if(!isemail) return res.status(404).json("email is not found or incorrect");
       const ismatch= await bcrypt.compare(password,isemail.password)
       if(!ismatch) return res.status(404).json("password is not found or incorrect");
       req.session.user= isemail.email;
    req.session.userId = isemail._id;
       
       res.status(202).json( req.session.userId,{message:"user login successfuly"});
    }
    catch(err){
res.status(400).json({message:err.message});
    }
};

exports.logout=(req,res)=>{
    req.session.destroy(()=>{
        res.send("user logout successfuly");
    })
};

exports.checklogin = (req,res,next)=>{
    if(req.session.user){
    next();
    
    }
    else{
        res.json("first you log in");
    }
    };

    exports.home=(req,res)=>{
        res.send(`<h1>${req.session.user} </h1>`);
     };

     exports.update=async (req,res)=>{
         try{
             const userupdate =await Userdata.findByIdAndUpdate(req.params.id, req.body,{new :true})
             if(!userupdate) return res.status(404).json("user not found");
             res.json(userupdate);
     
     
         }
         catch(err){
             res.status(500).json({message:err.message});
         }
     };

exports.deletes = async(req,res)=>{
    try{
        const userdelet= await Userdata.findByIdAndDelete(req.params.id);
        if(!userdelet) return res.status(404).json("user not found")
            res.status(202).json("user deleted successfuly");


    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.sessioncheck= (req, res) => {
    if (req.session.userId) {
        res.json({ loggedIn: true, userId: req.session.userId });
    } else {
        res.json({ loggedIn: false });
    }
};

exports.getbyid=async (req, res) => {
    try {
        const user = await Userdata.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};