//import module httpมา 
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่าserver

const requestListener = function(req, res){
    res.writeHead(200);
    res.end('Hello World This is my first server');
} 

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () =>{
    console.group(`server is running on http://${host}:${port}`);
});