
        document.getElementById("prenom").addEventListener("input", validateForm);
        document.getElementById("nom").addEventListener("input", validateForm);
        document.getElementById("adresse").addEventListener("input", validateForm);
        document.getElementById("PassW").addEventListener("input", validateForm);
        document.getElementById("PassWc").addEventListener("input", validateForm);
function validateForm() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("adresse").value;
    var password = document.getElementById("PassW").value;
    var passwordConfirm = document.getElementById("PassWc").value;

    var prenomError = document.getElementById("prenomError");
    var nomError = document.getElementById("nomError");
    var emailError = document.getElementById("adresseError");
    var passError = document.getElementById("passError");
    var passWcError = document.getElementById("passWcError");

    // Validation du champs prénom
    if (prenom === "") {
        prenomError.textContent = "Le prenom est requis";
    } else if (!/^[A-Za-z]+$/.test(prenom)) {
        prenomError.textContent = "Le prenom doit contenir uniquement des lettres";
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
    } else if (!/^[A-Za-z]+$/.test(nom)) {
        nomError.textContent = "Le nom doit contenir uniquement des lettres";
        document.getElementById("nom").style.color = "red";
    } else if(nom.length < 3){
        nomError.textContent = "Le nom doit contenir au moins 3 lettres";
        document.getElementById("nom").style.color = "red";
    } else {
        nomError.textContent = "";
        document.getElementById("nom").style.color = "green";
    }
    // Validation du champs email
    if (email === "") {
        emailError.textContent = "L'adresse e-mail est requise";
    }else if (!email.includes("laplateforme.io")){
        emailError.textContent = " Entrez votre email correctemment";
        document.getElementById("adresse").style.color = "red";
    } else {
        emailError.textContent = "";
        document.getElementById("adresse").style.color = "green";
    }
    // Validation du champs mot de passe
    if (password === "") {
        passError.textContent = "Le mot de passe est requis";
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial";
        document.getElementById("PassW").style.color = "red";
    } else {
        passError.textContent = "";
        document.getElementById("PassW").style.color = "green";
    }
    

    // Validation du champs confirm mot de passe
    if (passwordConfirm === "") {
        passWcError.textContent = "La confirmation du mot de passe est requise";
    } else if (password !== passwordConfirm) {
        passWcError.textContent = "Les mots de passe ne correspondent pas";
        document.getElementById("PassWc").style.color = "red";
    } else {
        passWcError.textContent = "";
        document.getElementById("PassWc").style.color = "green";
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

document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Les données tapés par l'utilisateur seront telechargées 
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("adresse").value;
    var password = document.getElementById("PassW").value;

    // Creation d'objet d'utilisateur
    var newUser = {
        "prenom": prenom,
        "nom": nom,
        "email": email,
        "password": password
    };
   
$.getJSON("utilisateurs.json", function(data) {
    // Iteration de tout les utilsateurs
    $.each(data.utilisateurs, function(index, utilisateur) {
        // Création d'élément d'un liste pour tout les utilisateurs
        var listItem = $("<li>").text(utilisateur.nom + " - " + utilisateur.email + " - " + utilisateur.role);
        // Ajoute un élément dans liste
        $("#user-list").append(listItem);
    });
});


    fetch('../json/utilisateurs.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
    .then(response => response.json())
    .then(data => {

        console.log("L'utilisateur a été enregistré:", data);
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter à votre compte");
       
    })
    .catch((error) => {
        console.error("Il y a eu une erreur lors de l'inscription de l'utilisateur:", error);
        alert("Il y a eu une erreur lors de l'inscription de l'utilisateur. Veuillez réessayer plus tard.");
    });
});
