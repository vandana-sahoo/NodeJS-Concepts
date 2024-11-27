// frontend data use on server.
// after submittion of from how data use.

const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//to link our static file(css,js) we use this built in middleware.then simply link it.public is a folder name.
app.use(express.static("public"))


app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render("form");
    // res.send("hello") we can pass only one response at a time
})

//we create this route for receiving data after submit form .
// we use post method so that data not show in frontend url

app.post('/get-form-data',(req,res)=>{

    // console.log(req.query); //using get we see data here

    console.log(req.body); //using post data comes here but express cant't read this directly we have to use express bulit-in middleware. 

    res.send('data recieved');
})
 

app.listen(3000)


// The res (response) object is used to send data back to the client. You can only use one response method (res.send(), res.render(), res.json(), etc.) per request. 

// Why Only One Response?
// In HTTP, once a response is sent back to the client, the connection is considered complete. Sending another response would conflict with the original response.

// If you want to send both HTML and data, pass the data to the template engine (like EJS) and include it in the rendered output.