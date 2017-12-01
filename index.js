var http = require('http');
var dt = require('./myfirst');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var rest = res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
console.log(rest.content);
}).listen(8080);