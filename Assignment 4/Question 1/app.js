//require("./api/data/dbconnection").open();
require("./api/data/db");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./api/routes");

app.set("port",5000);

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname,"public")));
app.use("/api",routes);

//const server = app.listen(app.get("port",function(){//errhere
const server = app.listen(app.get("port"),function(){
//    const port = server.address().port();//err here
    const port = server.address().port;
    console.log("Listening to port: "+port);
//}));//errhere
});