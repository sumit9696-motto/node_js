import express from "express";

import { create ,getAllData,user,updateuser,deleteuser} from "../controller/userController.js";


const route= express.Router();

route.post("/create",create);
route.get("/alluser",getAllData);
route.get("/user/:id",user);
route.put("/update/:id",updateuser);
route.delete("/delete/:id",deleteuser);



export default route;