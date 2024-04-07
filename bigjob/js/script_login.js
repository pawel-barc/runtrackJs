 // Gestion du formulaire de connection
 document.getElementById("connexionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le comportement par défaut d'un événement de se produire

    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    // lire le fichier JSON avec les utilisateurs
    fetch('../json/utilisateurs.json')
        .then(response => response.json())
        .then(data => {
            var foundUser = data.utilisateurs.find(function(user) {
                return user.email === email && user.password === password;
            });

            if (foundUser) {
                // Lier l'utilisateur au page, en fonction du role
                switch (foundUser.role) {
                    case "Étudiant":
                        window.location.href = "pages/calendar.html";
                        break;
                    case "Modérateur":
                        window.location.href = "pages/backoffice.html";
                        break;
                    case "Administrateur":
                        window.location.href = "pages/administrateur.html";
                        break;
                    default:
                        console.error("Rôle d'utilisateur invalide.");
                        break;
                }
            } else {
                // Affiche l'erreur i le mot de passe ou le nom d'utilisateur est faux
                alert("Adresse e-mail ou mot de passe invalide. Veuillez réessayer.");
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON:', error);
        });
});