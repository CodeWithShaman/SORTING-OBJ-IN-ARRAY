var users = [];

function usersSignUp() {

    var userObj = {

        UserName : document.getElementById("UserName").value,
        UserEmail : document.getElementById("UserEmail").value,
        UserPassword : document.getElementById("UserPassword").value,

    }

    users.push(userObj);

    console.log(users);

}

