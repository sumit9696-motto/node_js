const http=require('http');

const myServer =http.createServer((req,res)=>{
    console.log('request received');
    res.end('Hello World');
});
myServer.listen(8000,()=>console.log('Server is running on port 8000'));