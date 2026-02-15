function login() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "Ali" && pass === "1234") {

        document.querySelector(".form-container").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

    } else {
        alert("Wrong Username or Password");
    }
}

function openWhatsApp() {
    window.open("https://wa.me/923196919750", "_blank");
}