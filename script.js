
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            localStorage.setItem("username", username);
            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const storedUsername = localStorage.getItem("username");

            if (username === storedUsername) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password");
            }
        });
    }

    const user = localStorage.getItem("loggedInUser");
    if (user && document.getElementById("user")) {
        document.getElementById("user").textContent = user;
    }
});
