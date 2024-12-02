const express = require("express");
const app = express();
const userModel = require("./models/user");
const dbconnection = require("./config/db");

//html page render on screen
app.set("view engine", "ejs");

//for recieve data on req.body
// express built-in middleware for acess data inside (req.body) without this 2 middleware we get undefine.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to see/show the page on screen
app.get("/register", (req, res) => {
  res.render("register");
});

//accept data on this route
app.post("/register", async (req, res) => {
  //to submit form data
  // console.log(req.body);


//now creating new user using this details of user.
  // destructuring data inside their properties.
  const { username, email, password } = req.body;

  //in databse anything we want to do related user we need usermodel we pass through object
  //this is async code so we want when user created
 const newUser = await userModel.create({
    username: username,
    email: email,
    password: password,
  });

  //   then it will execute
res.send("newUser");
});

 
//read data
app.get('/get-user',(req,res)=>{
    userModel.find({
        username:'c'
        //findOne for only one return if nothing find match return null on console.
        //find for full data if not giving condition if nothing find match return empty arr
    }).then((user)=>{
        res.send(user)
    })
})

app.get('/update-user', async(req,res)=>{
  await  userModel.findOneAndUpdate({
        username: 'vani Sahu'},{
email:"v@tu9.com"
    })
    res.send("user updated")
})

app.get('/delete-user', async(req,res)=>{
    await  userModel.findOneAndDelete({
          username: 'vani Sahu'
      })
      res.send("user deleted")
  })




app.listen(3000);
