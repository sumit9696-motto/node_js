const express= require('express');
const { getallstudents, getregisterstudent, getupdatestudent, registerstudent, updatestudent, deletestudent, loginstudent, logout, getbyidstudent } = require('../controlers/studentcontroles');

const router=express.Router();




router.get('/',getallstudents);
router.get('/registation',getregisterstudent);
router.get('/edit/:id',getupdatestudent);

router.post('/registation',registerstudent);
router.post('/edit/:id',updatestudent);
router.delete('/delete',deletestudent);
router.post('/login',loginstudent);
router.get('/logout',logout);
router.get('/:id',getbyidstudent);

module.exports=router;