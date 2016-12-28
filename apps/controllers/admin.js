var express = require("express");
var router = express.Router();
var config = require('config');

var data = {
    title: 'Login | '+config.get('domain.nameurl'),
    url: config.get('domain.url')
}

router.get("/", function (req, res) {
  res.render("admin/dashboard", {title: "Dashboard"});
});

router.get('/login', function(req, res){
    title
  res.render("admin/login", data);
});


module.exports = router;
