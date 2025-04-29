
const express= require("express");
const router =express.Router();
const Userdata= require("../models/usermodel");
const validationRegistration=require('../middlewares/userformvalid');
const {body,validationResult}=require('express-validator');
const bcrypt =require('bcryptjs');
const { getall, register, login, logout, home, update, deletes, sessioncheck, getbyid, checklogin } = require("../controlers/usercontrolers");
// const session = require("express-session");


router.get("/",getall);

// router.get("/:id" ,async (req,res)=>{
//     try{ const user = await Userdata.findById(req.params.id)
//         if(!user) return res.status(404).json({message : "user not found"})
//         res.json(user);

//     }catch(err){
//         res.status(500).json({message : err.message});
//     }
// });

router.post("/register",validationRegistration,register);


router.post("/login" ,login);

router.get("/logout",logout);

router.get("/home",checklogin,home);

router.put("/:id", update);


router.delete("/delete/:id",deletes);

// ✅ SESSION CHECK (for testing)
router.get('/session-check',sessioncheck); 
// ✅ LOGOUT (clear session)
// router.get('/logout', (req, res) => {
//     req.session.destroy(err => {
//         if (err) return res.status(500).json({ message: 'Error logging out' });

//         res.clearCookie('connect.sid'); // clear cookie from browser/Postman
//         res.status(200).json({ message: 'Logout successful' });
//     });
// });

// ✅ IMPORTANT: Dynamic route LAST
router.get('/:id', getbyid);


module.exports= router
