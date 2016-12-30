var express = require("express");
var router = express.Router();
var config = require('config');
var utils = require("../helpers/utils");
var tblUser = require("../models/users")
var namesite = config.get('domain.nameurl');
var datasite = {
    url: config.get('domain.url'),
    title: null,
    error: null,
    success: null

}
var addUser = 'Add User | ' + namesite;


router.get("/", function (req, res) {
    res.render("admin/dashboard", getTitleAndUrl('Dashboard'));
});

router.get('/login', function (req, res) {
    res.render("admin/login", getTitleAndUrl('Login'));
});

router.get("/user/add", function (req, res) {
    datasite.title = addUser;
    datasite.error = null;
    datasite.success = null;
    res.render("admin/adduser", datasite);
});

router.post("/user/add", function (req, res) {
    var user = req.body;
    var data = {
        email: user.email,
        password: user.repeatPassword,
        fullname: user.fullname,
        phone: "0968690229",
        // birthday: user.birthday,
        birthday: "",
        status: 0
    }
    datasite.title = addUser;


    var email = utils.checkEmail(data.email),
        password = utils.checkPassword(data.password),
        repeatPassword = utils.checkRepeatPassword(user.password, data.password),
        fullname = utils.checkFullName(data.fullname),
        birthday = utils.checkBirthday(data.birthday);

    if (email != null || password != null || repeatPassword != null || fullname != null || birthday != null) {
        var error = "";
        if (email != null) {
            error = error + email + ' , ';
        }
        if (password != null) {
            error = error + password + ' , ';
        }
        if (repeatPassword != null) {
            error = error + repeatPassword + ' , ';
        }
        if (fullname != null) {
            error = error + fullname + ' , ';
        }
        if (birthday != null) {
            error = error + birthday + ' , ';
        }
        var count = error.length;
        error = error.slice(0, count - 2);
        datasite.error = error;
        res.render("admin/adduser", datasite);
    } else {
        var result = tblUser.addUser(data);
        if (!result) {
            error = "Sorry.Add User Error";
            datasite.error = error;
            res.render("admin/adduser", datasite)
        } else {
            var success = "Add User Successfully";
            datasite.success = success;
            res.render("admin/adduser", datasite);
        }

    }


});


router.get("/", function (req, res) {
    var data = {
        title: 'Dashboard | ' + config.get('domain.nameurl'),
        url: config.get('domain.url')
    }
    res.render("admin/dashboard", data);
});


router.get('/login', function (req, res) {
    var data = {
        title: 'Login | ' + config.get('domain.nameurl'),
        url: config.get('domain.url')
    }
    res.render("admin/login", data);
});


module.exports = router;
