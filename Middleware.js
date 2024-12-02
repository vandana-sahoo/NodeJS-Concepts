const express = require("express");
const app = express();
const morgan = require('morgan');

//middleware func executed before hit any route in the server

app.use((req, res, next) => {
  console.log("this is custom middleware");
  //res.send("to show custom middleware home page"); 
  //If middleware needs to pass control, avoid using res.send()
  return next()
  //need to call next to give controll for next part of code
});

//specific custom middleware for specific route.
app.get("/about",(req,res,next)=>{
  const a = 4;
  const b = 5;
  console.log(a+b)
  next()
},
 (req, res) => {
  res.send("about home");
});

app.get("/contact", (req, res) => {
  res.send("this is contact");
});


// Use morgan with the 'dev' format
app.use(morgan("dev"));

app.get("/profile", (req, res) => {
  res.send("Hello World profile from morgan");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});



// Third party Morgan is a **middleware** used in Node.js applications for logging HTTP requests. It's commonly used with **Express.js** to track and monitor incoming requests, making debugging and analyzing server activity easier.

//need to install third pary middleware from (npmjs.com)
//install npm i morgan
//need require const morgan = require('morgan');
//morgan loger tells the request method,Route,responsePost ,time(to reponse back to server)

//Predefined Log Formats: Includes formats like `dev`, `combined`, and `short` for structured logs.

