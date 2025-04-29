import express from'express';

import { create,deleteuser,updateuser,getAllData,user, } from '../controller/dataController.js';

const route =express.Router();

route.post("/create",create);
route.get("/alluser",getAllData);
route.delete("/deleteuser/:id",deleteuser);
route.put("/updateuser/:id",updateuser);
route.get("/user/:id",user);


export default route;