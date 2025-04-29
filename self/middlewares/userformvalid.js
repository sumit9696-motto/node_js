const express = require('express');
const {body,validationResult}=require("express-validator");


var validationRegistration=[
    body('fname').notEmpty().withMessage('fname is required'),

    body('lname').notEmpty().withMessage('lname is required'),

    body('email').notEmpty().withMessage('password is required')
    .isEmail().withMessage("this is not valid mail id"),

    body('password').notEmpty().withMessage('password is required')
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
    .isStrongPassword().withMessage("enter vaild password ")
   ,
]

module.exports=validationRegistration