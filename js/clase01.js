class Auto {

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

}

let auto1 = new Auto("audi", "tt", 2003);
let auto2 = new Auto("mazda", "3", 2003);

console.log(auto1.marca);
console.log(auto2.marca);

class Rectangulo {

    constructor(lado1, lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;

    }
    area = function() {
        return this.lado1 * this.lado2
    }
    perimetro = function() {
        return ((this.lado1) * 2) + ((this.lado2) * 2)
    }
}

var r1 = new Rectangulo(5, 5)
console.log(r1.area())
r1.lado2 = 30;
console.log(r1.area());





class Usuario {

    constructor(nombre, apellido, rut) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rut = rut;
    }

}
let usuario1 = new Usuario("Bruno", "Fuenzalida", 17995223)
console.log(usuario1.nombre, usuario1.apellido)
usuario1.activo = false
console.log(usuario1)