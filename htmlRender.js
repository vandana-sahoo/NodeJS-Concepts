const express = require('express')
const app = express()

//View Engine -- for render html in our server page/screen we need to setup . 
// we have a types of view engine however we are using here - ejs
// so install it - command(npm i ejs)
//so we don't need to reqire and all just need to write 1 line

app.set("view engine","ejs")

//when we are using ejs(view engine ) so need to creste 1 folder(views)* folder name is same evertime. inside this we need to cretae 1 file (index.ejs) --here we write html code to show in our server/frontend. 

//for showing this page through server we show using route.

app.get('/',(req,res)=>{
    res.render("index") //we write res.render and page name.
})

//start run
app.listen(3000)

// Refresh the page for updating code