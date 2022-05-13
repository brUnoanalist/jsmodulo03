///const { getJSON } = require("jquery");
class Gato {
    constructor(nombre, razao) {
        this.nombre = nombre;
        this.raza = razao
    }
}
let gato1 = new Gato("neko", "angora");
let gato2 = new Gato("cat", "egipcio");

let gajson = JSON.stringify(gato1);
///console.log(gajson);
///console.log(gato1)

let gatoObj = JSON.parse(gajson);
///console.log(gatoOb)

let arregloGatos = [gato1, gato2]


$.getJSON("https://pokeapi.co/api/v2/pokemon/25", function(data) {
    let pokemon = data
    console.log(pokemon)
    console.log(pokemon.name)
    console.log(pokemon.id)
    for (i in pokemon.types) {
        console.log(pokemon.types[i].type.name)
    }
    console.log(pokemon.sprites.front_default)
});

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
    function(data) {
        console.log(data.main.temp)
    })