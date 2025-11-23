const LS_USERS_KEY = "users";

function getUsers() {
    return JSON.parse(localStorage.getItem(LS_USERS_KEY) || "[]");
}

function saveUsers(users) {
    localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
}

function userExists(username) {
    return getUsers().some(u => u.username === username);
}

$(document).ready(function() {

    $("#registerForm").on("submit", function(e) {
        e.preventDefault();

        const username = $("#regUsername").val().trim();
        const pwd = $("#regPassword").val();
        const confirmPwd = $("#regConfirm").val();

        const error = $("#regError");
        const success = $("#regSuccess");

        error.addClass("d-none");
        success.addClass("d-none");

        if (!username || !pwd) {
            error.text("Todos los campos son obligatorios").removeClass("d-none");
            return;
        }

        if (pwd !== confirmPwd) {
            error.text("Las contraseñas no coinciden").removeClass("d-none");
            return;
        }

        if (userExists(username)) {
            error.text("El usuario ya existe").removeClass("d-none");
            return;
        }

        const newUser = { username: username, password: pwd };

        const users = getUsers();
        users.push(newUser);
        saveUsers(users);

        success.removeClass("d-none");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 900);
    });

});
