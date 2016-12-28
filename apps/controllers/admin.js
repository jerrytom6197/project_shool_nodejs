var express = require("express");
var router = express.Router();
var config = require('config');



router.get("/", function (req, res) {
    var data = {
        title: 'Dashboard | '+config.get('domain.nameurl'),
        url: config.get('domain.url')
    }
  res.render("admin/dashboard", data);
});



router.get('/login', function(req, res){
    var data = {
        title: 'Login | '+config.get('domain.nameurl'),
        url: config.get('domain.url')
    }
  res.render("admin/login", data);
});

function get (a) {

}

module.exports = router;
