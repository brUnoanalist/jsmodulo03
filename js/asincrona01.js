class Animal {

    constructor(nombre, cantDepatas, alimento) {
        this.nombre = nombre;
        this.cantDepatas = cantDepatas;
        this.alimento = alimento;
    }
    mandarAComer = function() {
        return this.nombre + (" esta comiendo")
    }
}
var gato = new Animal("Santi", 4, "Carnivoro")
var pajaro = new Animal("Tuku tuku", 2, "omnivoro")
var pez = new Animal("Espada", 0, "omnivoro")
console.log(gato.mandarAComer())
console.log(pajaro.mandarAComer())
console.log(pez.mandarAComer())