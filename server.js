let http = require("http");
let port = 9000;

let server = http.createServer(function(request, response){
    response.end("Hello Sani!!");
});

server.listen(port, function(){
    console.log("Server listening on port "+port);
});