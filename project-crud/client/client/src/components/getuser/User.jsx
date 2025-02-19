import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";



const User=()=>{
 const [users,setUsers]=useState([]);
useEffect(()=>{
    const featchData= async()=>{
        const response=await axios.get("http://localhost:8000/api/alluser");
        setUsers(response.data);
    }
    featchData();
},[])

const deleteUser= async (userId)=>{
 await axios.delete(`http://localhost:8000/api/delete/${userId}`)
 .then((res)=>{
   console.log(res);
//    setUsers(users.filter((user)=>user._id !== userId));
setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userId));
toast.success(res.data.message,{position:"top-center"})

 })
 .catch((err)=>{
     console.log(err);
 })
}
    return(
        <div className="user-table">
        <Link to={"/add"} className="adduserbtn">Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="deletbtn" onClick={()=>deleteUser(user._id)}>Delete</button>
                                <Link to={`/edit/`+user._id} className="editbtn">Edit</Link>
                            </td>
                        </tr>
                        )

                    })
                }
                
            </tbody>
        </table>
        </div>
    )
}
export default User;