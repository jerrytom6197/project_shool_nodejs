var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set("views", __dirname + "/apps/views");
app.set("view engine","ejs");

var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);

app.use("/assets", express.static(__dirname+"/public"));



var host = config.get("server.host");
var port = config.get("server.port");


app.listen(port, host, function () {
  console.log('Run Server Hoilaco. Port',port);
})



