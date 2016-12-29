var express = require("express");
var router = express.Router();
var config = require('config');
var utils = require("../helpers/utils");


router.get("/", function (req, res) {
    res.render("admin/dashboard", getTitleAndUrl('Dashboard'));
});

router.get('/login', function (req, res) {
    res.render("admin/login", getTitleAndUrl('Login'));
});

router.get("/user/add", function (req, res) {
    res.render("admin/adduser", getTitleAndUrl('Add User'));
});

router.post("/user/add", function (req, res) {
    var user = req.body;
    var data = {
        email: user.email,
        password: user.password,
        reqeatPassword: user.reqeatPassword,
        fullname: user.fullname,
        birthday: user.birthday
    }
    var datasite = {
        url: config.get('domain.url')
    }
    title: title + ' | ' + config.get('domain.nameurl')

    var email = utils.checkEmail(data.email),
        password = utils.checlPassword(data.password),
        repeatPassword = utils.checkRepeatPassword(data.password, data.reqeatPassword),
        fullname = utils.checkFullName(data.fullname),
        birthday = utils.checkBirthday(data.birthday)

    if (email != null || password != null || repeatPassword != null || fullname != null || birthday != null) {
        var error = "";
        if (email == null) {
            error = error + email + ' , ';
        }
        if (password == null) {
            error = error + password + ' , ';
        }
        if (repeatPassword == null) {
            error = error + repeatPassword + ' , ';
        }
        if (fullname == null) {
            error = error + fullname + ' , ';
        }
        if (birthday == null) {
            error = error + birthday + ' , ';
        }
        var count = error.length;
        error = error.slice(0, count - 2);
        res.render("/user/add", data)
    }

});




module.exports = router;
