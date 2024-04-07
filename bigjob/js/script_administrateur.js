$(document).ready(function() {

    $.getJSON('../json/utilisateurs.json', function(data) {
        var users = data.utilisateurs;
        var tableBody = $("#userTableBody");

        $.each(users, function(index, user) {
            if (user.role !== "Administrateur") {
                var row = $("<tr>");
                row.append($("<td>").text(user.id));
                row.append($("<td>").text(user.nom));
                row.append($("<td>").text(user.email));
                row.append($("<td>").text(user.role));
                var actionCell = $("<td>");
                var deleteButton = $("<button>").addClass("btn btn-danger").text("Supprimer");
                deleteButton.click(function() {
                    row.remove();
                });
                actionCell.append(deleteButton);
                row.append(actionCell);
                tableBody.append(row);
            }
        });
    });
});