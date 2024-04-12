var current_users = ["taHa", "shaMeer", "Daniyal", "daniel"];
var new_users = ["joHn", "taHa", "Hamza", "bennY", "shaMeer"];
new_users.forEach(function (new_usersname) {
    var lowerCase = new_usersname.toLowerCase();
    if (current_users.map(function (c_users) { return c_users.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(new_usersname, ",is not available please write a different user name"));
    }
    else {
        console.log("The username ".concat(new_usersname, " is available"));
    }
});
