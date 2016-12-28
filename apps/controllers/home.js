var express = require("express");
var router = express.Router();

router.get("/",function(req, res){
  res.json({"name":"Home"})
});

module.exports = router;
