const express= require('express');
const env=require('dotenv');
const { db } = require('./config/db');
const { urlencoded } = require('body-parser');
const Studentroute=require('./routes/studentRoutes')
const session= require('express-session');
// const path = require('path');
const app= express();
const path = require('path');


app.set('view engine', 'ejs');

env.config();
db();
// html form data accepect by using this middle wares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));


// app.get('/',(req,res)=>{
//     res.render('home');
// })

//session

app.use(session({
    secret:'sess123',
    resave:false,
    saveUninitialized:false,
}));



app.listen(3000, () =>{
    console.log("server isrunning on port");
});

app.use("/", Studentroute);