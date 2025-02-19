import React, {useEffect, useState}from "react";
import "./edit.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import toast  from "react-hot-toast";


const Edit = () => {


    
    const {id}= useParams();
    const navigate = useNavigate();
    const [user,setUser]=useState("");

 const inputChangeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
 }
useEffect(()=>{
    const featchData= async()=>{
        const response=await axios.get(`http://localhost:8000/api/user/${id}`);
        setUser(response.data);
    }
    featchData();
},[id]);

const submitform = async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((res)=>{
   
        toast.success("create successfully a user",{position:"top-right"})
        navigate("/");

    }).catch((err)=>{
        console.log(err);
    })
}
    return (
        <div className="adduser">
            <Link to="/" className="backbtn">back</Link>
         <h2 className="m">Update User</h2>
            <form className="adduserform" onSubmit={submitform}>
                <div className="form-group">
                    <label htmlFor="fname">First Name :</label>
                    <input type="text" value={user.fname} onChange={inputChangeHandler} className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                </div>
                <div className="form-group">
                    <label htmlFor="lname"> Last Name:</label>
                    <input type="text" value={user.lname} onChange={inputChangeHandler} className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input type="email" value={user.email} onChange={inputChangeHandler} className="form-control" id="email" placeholder="Enter Email" name="email" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="password">Password : </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
                </div> */}
                <button type="submit" className="btn btn-primary adduserbtn">Update User</button>
            </form>
        </div>
    )
}
export default Edit;