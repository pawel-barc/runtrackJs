$(document).ready(function() {
    const $images = $('.rainbow-image');
    const $shuffleButton = $('#shuffleButton');
    const $message = $('#message');

    // Fonction pour mélanger les images
    function shuffleImages() {
        let parent = $images.eq(0).parent();
        let shuffledImages = $images.toArray().sort(() => Math.random() - 0.5);
        parent.empty(); // Supprimer les images existantes
        shuffledImages.forEach(image => parent.append(image)); // Ajouter les images mélangées dans le bon ordre
    
    }

    // Fonction pour vérifier si les images sont dans le bon ordre
    function checkOrder() {
        let ordered = true;
        $images.each(function(index) {
            if ($(this).attr('src') !== `image${index + 1}.jpg`) {
                ordered = false;
                return false; // Arrêter la boucle each dès qu'une différence est trouvée
            }
        });
        return ordered;
    }

    // Écouteur d'événement pour le bouton de mélange
    $shuffleButton.on('click', function() {
        shuffleImages();
    });

    // Écouteur d'événement pour le relâchement d'une image
    $images.on('dragend', function() {
        if (checkOrder()) {
            $message.text("Vous avez gagné").css('color', 'green');
        } else {
            $message.text("Vous avez perdu").css('color', 'red');
        }
    });
});