
        document.getElementById("prenom").addEventListener("input", validateForm);
        document.getElementById("nom").addEventListener("input", validateForm);
        document.getElementById("adresse").addEventListener("input", validateForm);
        document.getElementById("message").addEventListener("input", validateForm);
        document.getElementById("PassW").addEventListener("input", validateForm);
        document.getElementById("PassWc").addEventListener("input", validateForm);
function validateForm() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("adresse").value;
    var codepostale = document.getElementById("message").value;
    var password = document.getElementById("PassW").value;
    var passwordConfirm = document.getElementById("PassWc").value;

    var prenomError = document.getElementById("prenomError");
    var nomError = document.getElementById("nomError");
    var emailError = document.getElementById("adresseError");
    var codepostaleError = document.getElementById("codepostaleError");
    var passError = document.getElementById("passError");
    var passWcError = document.getElementById("passWcError");

    // Validation du champs prénom
    if (prenom === "") {
        prenomError.textContent = "Le prenom est requis";
        document.getElementById("prenom").style.color = "red";
    } else if (prenom.length < 3) {
        prenomError.textContent = "Le prenom doit contenir au moins 3 lettres";
        document.getElementById("prenom").style.color = "red";
    } else {
        prenomError.textContent = "";
        document.getElementById("prenom").style.color = "green";

    }

    // Validation du champs nom
    if (nom === "") {
        nomError.textContent = "Le nom est requis";
        document.getElementById("nom").style.color = "red";
    } else if(nom.length < 3){
        nomError.textContent = "Le nom doit contenir au moins 3 lettres";
        document.getElementById("nom").style.color = "red";
    } else {
        nomError.textContent = "";
        document.getElementById("nom").style.color = "green";
        document.getElementById("nom").style.fontSize = "15px";
    }
    // Validation du champs email
    if (email === "") {
        emailError.textContent = "L'adresse e-mail est requise";
    
    }else if (!email.includes("@")){
        emailError.textContent = " Entrez votre email correctemment";
        
    } else {
        emailError.textContent = "";
    }

    // Validation du champs code postale
    if (codepostale === "") {
        codepostaleError.textContent = "Le code postal est requis";
    } else {
        codepostaleError.textContent = "";
    }

    // Validation du code postale
    if (codepostale !== "" && !(/^\d{5}$/.test(codepostale))) {
        codepostaleError.textContent = "Le code postal doit contenir 5 chiffres";
    } else {
        codepostaleError.textContent = "";
    }

    // Validation du champs mot de passe
    if (password === "") {
        passError.textContent = "Le mot de passe est requis";
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial";
    } else {
        passError.textContent = "";
    }
    

    // Validation du champs confirm mot de passe
    if (passwordConfirm === "") {
        passWcError.textContent = "La confirmation du mot de passe est requise";
    } else if (password !== passwordConfirm) {
        passWcError.textContent = "Les mots de passe ne correspondent pas";
    } else {
        passWcError.textContent = "";
    }
}

document.getElementById("showPassword").addEventListener("change", function() {
    var passwordInput = document.getElementById("PassW");
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
