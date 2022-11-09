let express = require("express");
let port = 9000;

app = express();

app.get("/",function(request, response){
    response.end("Hello Sani!!");
});

app.listen(port, function(){
    console.log("Server listening on port "+port);
});