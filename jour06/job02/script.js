const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

$(document).ready(function(){
  $("#rebootButton").click(function(){
    var quotes = [
      "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.",
      "Wake up! Time to die!",
      "I was quit when I come in here, Bryant. I'm twice as quit now.",
      "Fiery the angels fell. Deep thunder rolled around their shores... Burning with the fires of Orc."
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes[randomIndex];
    $("#extendedSense").text(newQuote);
  });
});