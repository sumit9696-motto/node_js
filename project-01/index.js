const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;


///MIDDLEWARE
app.use(express.urlencoded({extended:false}));
//ROUTES
app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
});
//REST API 
app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app
.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user= users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    
//todo update user by id in MOCK_DATA.json
const id = Number(req.params.id);
const user= users.find((user)=>user.id===id);
const index = users.indexOf(user);
const body =req.body;
users[index]={
    ...user,
    ...body,
};
fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    if(err){
        return res.status(500).json({message:'error'});}
        return res.json(users[index]);
    });

    // return res.json({message:'pending'});
})
.delete((req,res)=>{
    //tood delete user by id in MOCK_DATA.json
    const id = Number(req.params.id);
    const user= users.find((user)=>user.id===id);
    const index = users.indexOf(user);
    users.splice(index,1);
    return res.json({message:'user deleted'});


});


// app.get('/api/users/:id',(req,res)=>{

//     const id = Number(req.params.id);
//     const user= users.find((user)=>user.id===id);
//     return res.json(user);
// });

app.post('/api/users',(req,res)=>{
    //todo create new user
    // crosole.log('POST request to the homepage');

    const body =req.body;
    // console.log(body);

    users.push({
        id:users.length+1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        if(err){
            return res.status(500).json({message:'error'});}
            return res.json(users[users.length-1]);
    });

    //return res.json({message:'pending'});


});

// app.patch('/api/users/:id',(req,res)=>{

//     //todo update user by id
//     // crosole.log('POST request to the homepage');
//     return res.json({message:'pending'});

// });

// app.delete('/api/users/:id',(req,res)=>{

//     //tood delete user by id
//     // crosole.log('POST request to the homepage');



//     return res.json({message:'pending'});

// });


app.listen(port,()=>console.log(`Server is running on port ${port}`));