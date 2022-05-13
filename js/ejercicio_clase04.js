///let foto = document.querySelector('img');
///let btn = document.querySelector('button');

///btn.addEventListener("click", function(e) {
///$.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
/// let obj = data.obj;
let URLimagen = data.message;
foto.setAttribute("src", URLimagen);


var min = 1
var max = 500
    ///let btn = document.querySelector('button');
numero_pokemon = Math.floor(Math.random() * (max - min) + min);
console.log(numero_pokemon)

let botonpoke = document.querySelector("botonPokemon");
botonpoke.addEventListener("click", function(e) {
    $.getJSON("https://pokeapi.co/api/v2/pokemon/" + numero_pokemon,
        function(data) {
            let pokemon = data
            let URLimagenpoke = pokemon.sprites.front_default;


            console.log(pokemon)
            console.log(pokemon.name)
            console.log(pokemon.id);
        })
})