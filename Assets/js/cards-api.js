const pokemonLista = document.getElementById('pokemonList');
const detailCard = document.getElementById('pokemonCard');
const closeButton = document.getElementById('closeCard');

closeButton.addEventListener('click', () => {
    const pokemonCard = document.getElementById('pokemonCard');
    if (pokemonCard) {
        pokemonCard.classList.add('hidden');
    }
});

class CardDetails {
    name;
    number;
    types = [];
    species;
    height;
    weight;
    abilities = [];
    hp;
    attack;
    defense; 
    spAttack;
    spDefense;
    Speed;
    photo;
    moves = [];
}

function cardDetail(number) {
    const link = `https://pokeapi.co/api/v2/pokemon/${number}/`;
    
    fetch(link)
    .then((response) => response.json())
    .then((pokeDetails) => {
        const cardDetails = convertPokeDetails(pokeDetails); // Converte os detalhes
        createCard(cardDetails); // Exibe o card
    })
    .catch((error) => {
        console.error("Erro ao carregar detalhes do Pokémon:", error);
    });
}

function convertPokeDetails(pokeDetails) {
    const cardDetails = new CardDetails();

    cardDetails.name = pokeDetails.name;
    cardDetails.number = pokeDetails.id;
    cardDetails.types = pokeDetails.types.map((typeSlot) => typeSlot.type.name);
    cardDetails.species = pokeDetails.species.name;
    cardDetails.height = pokeDetails.height;
    cardDetails.weight = pokeDetails.weight;
    cardDetails.abilities = pokeDetails.abilities.map((ability) => ability.ability.name);
    cardDetails.hp = pokeDetails.stats.find((stat) => stat.stat.name === "hp").base_stat;
    cardDetails.attack = pokeDetails.stats.find((stat) => stat.stat.name === "attack").base_stat;
    cardDetails.defense = pokeDetails.stats.find((stat) => stat.stat.name === "defense").base_stat;
    cardDetails.spAttack = pokeDetails.stats.find((stat) => stat.stat.name === "special-attack").base_stat;
    cardDetails.spDefense = pokeDetails.stats.find((stat) => stat.stat.name === "special-defense").base_stat;
    cardDetails.Speed = pokeDetails.stats.find((stat) => stat.stat.name === "speed").base_stat;
    cardDetails.photo = pokeDetails.sprites.other.dream_world.front_default;
    cardDetails.moves = pokeDetails.moves;

    return cardDetails;
}

function createCard(cardDetails) {
    const pokemonCard = document.getElementById('pokemonCard');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonTypes = document.getElementById('pokemonTypes');
    const pokemonSpecies = document.getElementById('pokemonSpecies');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonAbilities = document.getElementById('pokemonAbilities');
    const pokemonHp = document.getElementById('pokemonHp');
    const pokemonAttack = document.getElementById('pokemonAttack');
    const pokemonDefense = document.getElementById('pokemonDefense');
    const pokemonSpAtk = document.getElementById('pokemonSpAtk');
    const pokemonSpDef = document.getElementById('pokemonSpDef');
    const pokemonSpeed = document.getElementById('pokemonSpeed');
    const pokemonMoves = document.getElementById('pokemonMoves');

    // Define o tipo do Pokémon no atributo data-type
    const primaryType = cardDetails.types[0]; // Pega o primeiro tipo do Pokémon
    pokemonCard.setAttribute('data-type', primaryType);

    // Define a cor de fundo com base no tipo do Pokémon
    pokemonCard.style.backgroundColor = getTypeColor(primaryType);

    // Preenche os dados do Pokémon
    pokemonImage.src = cardDetails.photo;
    pokemonImage.alt = `${cardDetails.name} Image`;
    pokemonName.textContent = cardDetails.name;
    pokemonTypes.innerHTML = cardDetails.types.map(type => `<span class="type ${type}">${type}</span>`).join('');
    pokemonSpecies.textContent = `Species: ${cardDetails.species}`;
    pokemonHeight.textContent = `Height: ${cardDetails.height / 10}m`; // Converte para metros
    pokemonWeight.textContent = `Weight: ${cardDetails.weight / 10}kg`; // Converte para kg
    pokemonAbilities.textContent = `Abilities: ${cardDetails.abilities.join(', ')}`;
    pokemonHp.textContent = `HP: ${cardDetails.hp}`;
    pokemonAttack.textContent = `Attack: ${cardDetails.attack}`;
    pokemonDefense.textContent = `Defense: ${cardDetails.defense}`;
    pokemonSpAtk.textContent = `Sp. Atk: ${cardDetails.spAttack}`;
    pokemonSpDef.textContent = `Sp. Def: ${cardDetails.spDefense}`;
    pokemonSpeed.textContent = `Speed: ${cardDetails.Speed}`;

    // Preenche os movimentos
    pokemonMoves.innerHTML = ''; 
    const movesToShow = cardDetails.moves.slice(0, 5); // Mostra apenas os primeiros 5 movimentos
    movesToShow.forEach((move) => {
        const moveElement = document.createElement('li');
        moveElement.textContent = move.move.name;
        pokemonMoves.appendChild(moveElement);
    });

    // Exibe o card
    pokemonCard.classList.remove('hidden');
}

// Função para obter a cor com base no tipo do Pokémon
function getTypeColor(type) {
    const typeColors = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#5edfc6',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0'
    };

    return typeColors[type] || '#A8A878'; // Retorna a cor correspondente ou uma cor padrão
}