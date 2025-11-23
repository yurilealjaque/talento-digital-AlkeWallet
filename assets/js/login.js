
const DEFAULT_USER = {
    username: "admin",
    password: "adm123"
};

function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

function findUser(username, password) {
    const users = getUsers();


    const user = users.find(u => u.username === username && u.password === password);
    if (user) return true;

  
    return username === DEFAULT_USER.username && password === DEFAULT_USER.password;
}

$(document).ready(function () {

    $("#loginForm").on("submit", function (e) {
        e.preventDefault();

        const user = $("#username").val().trim();
        const pwd = $("#clave").val().trim();

        const errorMsg = $("#errorMsg");
        errorMsg.addClass("d-none");

        if (findUser(user, pwd)) {
            handleSuccessfulLogin(user);
        } else {
            errorMsg.removeClass("d-none");
        }
    });

});

