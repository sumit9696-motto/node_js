const http = require('http');

const myServer = http.createServer((req,res)=>{
     console.log(`server is running`);
     res.end("hello this is server");
     console.log(req);

});

myServer.listen(8000,()=>console.log('Server is running on port 8000'));