//1. to create any server/access any package.
//write require('')

//2. we need to require a package http. and store in const(variable).
const http = require('http')

// Note: we need to install evry pacakge before use but http pacakge is installed by default with node.js

//3. this method create server in this existen variable(server) and take a callback and return when anyone send req in this server.
 const server = http.createServer((req,res)=>{
    res.end('woo Request Accepted')
 })

 //4.to start server in 3000 port
 server.listen(3000)
 //port - is like entry gate of our system to pass data  called port.
 

 //5. to execute this terminal (node app.js)

 