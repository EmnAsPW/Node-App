const http = require('http');
const fs =require('fs');
 
//const hostname = '127.0.0.1';
const port = process.env.PORT;

const handleReadfile = (fileName, statusCode, req, res) =>{
    fs.readFile(fileName, "utf-8",(err, data)=>{

        if(err){
            console.log(err);
        }else{
            res.writeHead(202, {"Content-Type":"text/html"});
            res.write(data);
            res.end();        }
  });
} 
 
const server = http.createServer((req, res) => {
  
  if(req.url==="/"){
    handleReadfile("index.html", 200, req, res);
  }
  else if(req.url==="/about"){
    handleReadfile("about.html", 200, req, res);
  }
  else if(req.url==="/contact"){
    handleReadfile("contact.html", 200, req, res);
  }
  else{
    handleReadfile("error.html", 404, req, res);
  }

});
 
server.listen(port, () => {
  console.log(`Server running`);
});