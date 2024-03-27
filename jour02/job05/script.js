window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = (scrollPosition / maxScroll) * 100;

    let red, green, blue;
    if (percentage <= 50) {
        red = 255;
        green = percentage * 5.1; 
        blue = 0;
    } else {
        red = 255 - ((percentage - 50) * 5.1); 
        green = 255;
        blue = 0;
    }
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("couleur").style.backgroundColor = color;
};