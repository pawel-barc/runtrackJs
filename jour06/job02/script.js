const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('rebootButton').addEventListener('click', function() {
      this.textContent = 'Rebooting...'; // Zmiana tekstu na przycisku po kliknięciu
      // Tutaj możesz dodać dodatkową logikę, np. wywołać funkcję rebootowania systemu
  });
});