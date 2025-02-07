// Basicamente, aqui será definido o limite de dados que irão carregar por vez
const offset = 0;
const limit = 10;
// aqui é definido a const 'url', e nela sera armazenada as informações puxadas da API seguindo o limite das variaveis 
// mencionada anteriormente
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
        alt="${pokemon.name}">
    </div>

    </li>
    `
}


console.log(document.getElementsByClassName('pokemons'))

// o fetch nos retorna uma promise, ou seja, na hora que se faz o request ele promete que se tudo der certo, ele vai trazer um retorno
// um processamento asincrono, ele irá ser executado e nao possui uma resposta de imediato, uma hora vai ter, mas nao instantaneo
//fetch(url)
    // o .then seria uma resposta positiva com os dados que foram acessados da API
//    .then((response) => response.json())
    // o .json seria uma palavra reservada que irá nos retornar um json do retorno da promisse que foi acessado pelo .then
    // por si so ela tbm é uma promisse mas pra nao dar bagunça na cabeça vamos ignorar isso de momento
//    .then((jsonBody) => jsonBody.results)
    // Esta linha acima irá pegar o results do .then anterior e pegar a lista de pokemons
    // Este aqui de baixo basicamente irá receber o Array que é de certa forma um subproduto da filtragem da 
    // primeira promisse realizada pelo fetch
//    .then((pokemonList) => {
//        for (let i = 0; i < pokemonList.length; i++) {
//            const pokemon = pokemonList[i];
//            console.log(convertPokemonToLi(pokemon))

            
//        }
//    })
    // o .catch seria uma resposta negativa sem o retorno dos dados 
    .catch((error) => console.log(error))




 