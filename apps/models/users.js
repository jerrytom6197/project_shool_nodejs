var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function addUser(user) {
    if (user) {
        var defer = q.defer();
        var query = conn.query('INSERT INTO users SET email =?, password=?,fullname=?,phone=?,birthday=?,status=?', [user.email, user.password, user.fullname, user.phone, user.birthday, user.status], function (err, result) {
            console.log(err.code)
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });



        return defer.promise;
    }
    return false;
}

module.exports = {
    addUser: addUser
}
