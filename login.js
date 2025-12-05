document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    // HARD-CODE USER & ADMIN
    const adminAccount = {
        username: "admin",
        password: "admin123"
    };

    const userAccount = {
        username: "user",
        password: "user123"
    };

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const remember = document.getElementById("rememberMe").checked;

        // LOGIN ADMIN
        if (username === adminAccount.username && password === adminAccount.password) {
            sessionStorage.setItem("adminLoggedIn", "true");

            if (remember) {
                localStorage.setItem("adminRemember", "true");
                localStorage.setItem("adminUsername", username);
            }

            window.location.href = "admin-dashboard.html";
            return;
        }

        // LOGIN USER
        if (username === userAccount.username && password === userAccount.password) {
            sessionStorage.setItem("userLoggedIn", "true");

            if (remember) {
                localStorage.setItem("userRemember", "true");
                localStorage.setItem("userUsername", username);
            }

            window.location.href = "index.html";
            return;
        }

        // SALAH LOGIN
        errorMessage.textContent = "Username atau password salah!";
    });
});
