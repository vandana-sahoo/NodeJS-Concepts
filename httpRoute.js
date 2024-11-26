
/* ------Routing -------*/

const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === "/about"){
        res.end("the about page")
    }
    if(req.url === "/profile"){
        res.end("the profle page")
    }
    if(req.url === "/"){
        res.end("the home page")
    }
})

server.listen(3000)

//When you see /favicon.ico logged in the console, it is because most browsers automatically request the favicon for a webpage when accessing a server.


//Note - evertime when we upadte code we are start sever again. to solve this prblm we have a package or a command(npx nodemon Route.js)