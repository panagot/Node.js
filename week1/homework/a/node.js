const http = require('http');

// The state variable
let state = 10;
let server = http.createServer(handler);


function handler(req, res){
    res.writeHead(200, {'content-Type': 'text/html'})

/* /state
 * response: the current state in a HTML format
 * When the server starts, this should return '10'
 */

    if (req.url === '/state'){
    res.write(`<h2 style= "color:green; text-align:center;">The current state is ${state} </h2>`)
    res.end();
    }

 /* /add
 * Response: "OK" in HTML format
 * This should add 1 to the current state
 */   


    if (req.url === '/add'){
        res.write(` <h2 style= "color:green; text-align:center;">The current state is ${state + 1}</h2>`)
        res.end();  
    }

/* /subtract
 * Response: "OK" in HTML format
 * This should subtract 1 ƒrom the current state
 */


    if (req.url === '/subtract'){
        res.write(`<h2 style= "color:green; text-align:center;">The current state is ${state - 1}</h2> `)
        res.end();  
    }

/* /reset
 * Response: "OK" in HTML format
 * This should set the state back to '10'
 */

    if (req.url === '/reset'){
        res.write(` <h2 style= "color:green; text-align:center;">The current state is ${state} </h2>`)
        res.end();  
    }
    else {
        
/* Any other URL
 * Response: return error code 404: 'Not found' with a friendly message and do
 * not change the state variable
 */

        res.end(' <h2 style= "color:green; text-align:center;">404 The page is not found </h2>');  
    }
}
server.listen(8080);
console.log('<h2 style= "color:green; text-align:center;">Server is running ...</h2>');
