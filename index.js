// to any javascript code run with the help of node out of browser we write [node filename.js] 

console.log("hello world I'm Start Learnig Node,Express ,& MongoDB");
//to run this code [node index.js] 

// to start a application from scrach we have to install pacakge [package.json]   command (npm init -y)

/* What is package ??
packege is a resuable code which is predefine because these are essisial to use everytime for creating any application (which common for every application) so we only need to install the package. */

/* like we have [npmjs.com] where we can find open source package which is publish by someone */

/*ex- cat-me package  command to install (npm i cat-me) i used let see what happed there--

 for use this package inside index.js file  because it is inside node module -*/
 const catMe = require('cat-me')

 //to call this and see whats return 
 console.log(catMe())

//  run on terminal command(node index.js)
 

/* pacakeg.json - command [npm init -y] it is essensial for every application.
* inside this meta Data for developer 
to understand .what data contain this application.
* Main thing is dependencies - means inside application what code like now only[cat-me] is there.
* so it says without this [cat-me] this application not works*/

/*node.modules - it tell actual dependencies data inside there.
*without node modules we can't get result
command to install(npm install/i)
*/
 
/*package-lock.json - for system where we run te applcation.
*the data contain inside pacakge.json it explain in very detaild mannar inside this */
