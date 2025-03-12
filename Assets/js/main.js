const pokemonList = document.getElementById('pokemonList')
const loadMoreButtom = document.getElementById('loadMoreButtom')
const limit = 5
let offset = 0

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newhtml = pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.type}" onclick = "cardDetail(${pokemon.number})">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class= "type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>
                </li>
             `).join('')
        pokemonList.innerHTML += newhtml
    })
}

loadPokemonItens (offset,limit)

loadMoreButtom.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset,limit)
})