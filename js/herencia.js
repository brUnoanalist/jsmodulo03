let plantas = ["ruda", "oregano", "cilantro", "perejil", "tomate"]



var plantas1 = plantas.filter(function(p) {
    return p != "perejil"
})
var plantas2 = plantas.filter(function(planta) {
    return planta[0] != "p"
})

var plantas3 = plantas.filter(function(plant) {
        return plant[plant.length - 1] != "o"
    })
    ///console.table(plantas3)


var fecha = new Date();
console.log(fecha);
var anio = fecha.getFullYear();
///console.log("ano" + anio);
var hoy = new Date(2022, 10);
///console.log(hoy);

///var anioNacimiento = prompt("Ingrese su anio de nacimiento")
///var resultado = anio - anioNacimiento
//alert("su edad es " + resultado)


class Usuario {
    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;
    }
    ingresar = function() {
        console.log("bienvenido " + this.nombre);
    }
    salir = function() {
        console.log("salir " + this.nombre);
    }
}

var usuario1 = new Usuario("Alexis", "123");
var usuario2 = new Usuario("Paula", "12345");
var usuario3 = new Usuario("Clemente", "686");


var arregloUsuarios = [usuario1, usuario2, usuario3];
console.log("el nombre del usuario es: " + usuario1.nombre)
usuario1.ingresar();
console.log("el nombre del usuario es: " + arregloUsuarios[1].nombre)


class Administrador extends Usuario {

    constructor(nombre, pass, sistemas) {
        super(nombre, pass)
        this.sistemas = sistemas;
    }
    eliminarUsuario = function(nombre) {
        arregloUsuarios = arregloUsuarios.filter(function(u) {
            return u.nombre != nombre;
        })
    }
    ingresar = function() {
        console.log("bienvenido administrador " + this.nombre);
    }
    salir = function() {
        console.log("Haz salido del software " + this.nombre);
    }
}

var adm1 = new Administrador("Denis", "12345", "windows");
console.log("El nombre del administrativo es: " + adm1.nombre);
console.log("El nombre del sistema es: " + adm1.sistemas);
adm1.ingresar();
adm1.salir()


class FiguraGeometrica {
    constructor(cantidadLados, medida) {
        this.cantidadLados = cantidadLados;
        this.medida = medida;
    }
    perimetro = function() {
        return this.medida + this.cantidadLados;
    }
}

var triangulo1 = new FiguraGeometrica(3, 3)

triangulo1.perimetro();

class cuadrado extends FiguraGeometrica {
    constructor(medida) {
        super(4, medida)
    }
    area = function() {
        return this.medida * this.medida
    }

}
var cuadrado1 = new cuadrado(3)
console.log(cuadrado1.area());