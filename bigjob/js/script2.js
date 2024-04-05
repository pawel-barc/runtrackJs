
document.getElementById("Email").addEventListener("input", validateForm);
document.getElementById("Password").addEventListener("input", validateForm);

function validateForm() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var emailError = document.getElementById("EmailError");
    var passError = document.getElementById("PasswordError");

    // Validation du champs email
    if (email === "") {
        emailError.textContent = "L'adresse e-mail est requise";
    } else if (!email.includes("laplateforme.io")) {
        emailError.textContent = "Entrez votre email correctement";
        document.getElementById("Email").style.color = "red";
    } else {
        emailError.textContent = "";
        document.getElementById("Email").style.color = "green";
    }

    // Validation du champs mot de passe
    if (password === "") {
        passError.textContent = "Le mot de passe est requis";
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial";
        document.getElementById("Password").style.color = "red";
    } else {
        passError.textContent = "";
        document.getElementById("Password").style.color = "green";
    }
}

document.getElementById("showPassword").addEventListener("change", function() {
    var passwordInput = document.getElementById("Password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("showPasswordc").addEventListener("change", function() {
    var passwordInput = document.getElementById("PassWc");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
