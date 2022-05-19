function sumar(x, y) {
    var promesa = new Promise(function(resolve, reject) {
        if (x == undefined || y == undefined) {
            reject("Error : falta un numero");

        } else {
            resolve(x, y);
        }
    });
    return promesa;

}
sumar(10, 20).then(function(data) {
    /// console.log(data)
})

let num1 = 10
let num2;

sumar(num1, num2).then(function(data) {
    /// console.log(data);
}).catch(function(err) {
    //console.log(err);
})

fetch("test.txt").then(function(data) {
    //console.log(data);
    data.text().then(function(data2) {
        //console.log(data2);
    })
})

async function leerDatos() {
    let datos = await fetch("test.txt");
    //console.log(datos);
    let texto = await datos.text();
    //console.log(texto);

}
leerDatos();

async function leerPerros() {
    let data = await fetch("https://dog.ceo/api/breeds/image/random");
    /// console.log(data);
    let datos = await data.json();
    //console.log(datos);
}
leerPerros();

async function obtenerPokemon(numero) {
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
    let datos = await respuesta.json();
    //console.log(datos);
}
obtenerPokemon(100)

async function cienPokemon()


cienPokemon();