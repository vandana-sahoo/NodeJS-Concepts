//need to install package - npm i express

//inside node module  & package.json we can check it shows

//to require this package
const express = require('express')

const app = express();
//now everthing inside app 

// to access app._____ 

//for now we do routing app.get(method) to do routing

app.get("/",(req,res)=>{
    res.send("express home page");
})

app.get("/about",(req,res)=>{
    res.send("express about page");
})

app.get("/profile",(req,res)=>{
    res.send(" express profile page");
})


// run 
app.listen(3000)

//execute in terminal - npx nodemon exHttpRoute.js