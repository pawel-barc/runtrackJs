
var approveButtons = document.querySelectorAll('.approve-btn');
var deleteButtons = document.querySelectorAll('.delete-btn');


approveButtons.forEach(function(button) {
    button.addEventListener('click', function() {
       
        var eventBox = this.parentNode.parentNode;
        console.log("L'événement a été accepté:", eventBox.querySelector('.card-title').textContent);
    });
});

deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var eventBox = this.parentNode.parentNode;
        eventBox.remove();
        console.log("L'événement a été suprimé:.");
    });
});