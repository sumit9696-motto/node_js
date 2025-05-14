const express=require('express');
const {body,validationResult}= require('express-validator');

exports.validationRegistation= [
    body('fname').notEmpty().withMessage('fname is not empaty')
]