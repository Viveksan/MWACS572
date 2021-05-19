const express = require("express");
const app = express();
const path = require("path");

app.set("port",5000);

app.get("/", function(req, res){
    console.log("Inside GET");
    res.status(200).sendFile(path.join(__dirname,"html","home.html"));
  //res.status(200).send("Received GET request");
});

const server = app.listen(app.get("port"), function(){
                    const port = server.address().port;
                    console.log("Listening to port: "+port);

});