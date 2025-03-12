const pokemonLista = document.getElementById('pokemonList')
const detailCard = document.getElementById('pokemonCard')
const closeButton = document.getElementById('closeCard')

class CardDetails{
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
}
function cardDetail(number) {
    const link = `https://pokeapi.co/api/v2/pokemon/${number}/`
    
    fetch(link)
    
    .then ((response) => response.json())
    .then (convertPokeDetails)
}

function convertPokeDetails(pokeDetails){
    const cardDetails = new CardDetails(pokeDetails)

    cardDetails.name = pokeDetails.name
    cardDetails.number = pokeDetails.id
    cardDetails.types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    cardDetails.species = pokeDetails.species.name
    cardDetails.height = pokeDetails.height
    cardDetails.weight = pokeDetails.weight
    cardDetails.abilities = pokeDetails.abilities.map((ability) => ability.ability.name)
    cardDetails
}

