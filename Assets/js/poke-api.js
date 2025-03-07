const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    // nome e numero
    pokemon.number =pokeDetail.order
    pokemon.name = pokeDetail.name
    // seleção do tipo principal
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    // tipo principal e secundario
    pokemon.types = types 
    pokemon.type = type
    // foto do pokemon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}