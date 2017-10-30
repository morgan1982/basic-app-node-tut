const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');
const fs = require('fs'); // filesystem module


http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', null, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("file not found..")
    } else {
      res.write(data);
    }
    res.end();
  }); //callback will run when it finishes reading the file(inde.html)
  // res.write(module2.myVariable);
  // module2.myFunction();

}).listen(3000);