import React from "react";
import "./add.css";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast  from "react-hot-toast";

const Add = () => {
    
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        
        setUser({...user,[name]:value});
       
    }
    const sumbitform = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user)
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
         <h2 className="m">Add User</h2>
            <form className="adduserform" onSubmit={sumbitform}>
                <div className="form-group">
                    <label htmlFor="fname">First Name :</label>
                    <input type="text" onChange={inputHandler} className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                </div>
                <div className="form-group">
                    <label htmlFor="lname"> Last Name:</label>
                    <input type="text" onChange={inputHandler} className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input type="email" onChange={inputHandler} className="form-control" id="email" placeholder="Enter Email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password : </label>
                    <input type="password" onChange={inputHandler} className="form-control" id="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary adduserbtn">Add User</button>
            </form>
        </div>
    )
}

export default Add;