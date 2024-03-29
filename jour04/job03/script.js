function filterPokemon() {
  const id = document.getElementById('id').value.trim();
  const name = document.getElementById('name').value.trim().toLowerCase();
  const type = document.getElementById('type').value.trim().toLowerCase();

  fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
      const filteredPokemon = data.filter(pokemon => {
        return (!id || pokemon.id.toString() === id) &&
               (!name || pokemon.name.english.toLowerCase().includes(name)) &&
               (!type || pokemon.type.map(t => t.toLowerCase()).includes(type));
      });

      displayPokemon(filteredPokemon);
    })
    .catch(error => console.error('Błąd:', error));
}

function displayPokemon(pokemonList) {
  const pokemonContainer = document.getElementById('pokemonList');
  pokemonContainer.innerHTML = '';

  if (pokemonList.length === 0) {
    pokemonContainer.textContent = 'Brak Pokemonów spełniających kryteria.';
    return;
  }

  pokemonList.forEach(pokemon => {
    const pokemonInfo = document.createElement('div');
    pokemonInfo.innerHTML = `
      <h3>${pokemon.name.english}</h3>
      <p>ID: ${pokemon.id}</p>
      <p>Typ: ${pokemon.type.join(', ')}</p>
      <hr>
    `;
    pokemonContainer.appendChild(pokemonInfo);
  });
}

