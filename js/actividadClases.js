////1.- Crear tres objeto (sin clase) que represente un gato: debe tener las propiedades nombre, raza,
///tipo pelaje, sexo. 

///var santi = {
/// nombre: nombre,
///raza: raza,
///tipo_pelaje: tipo_pelaje,
///sexo: sexo
//}
///var cachupin = {
/// nombre: nombre,
/// raza: raza,
/// tipo_pelaje: tipo_pelaje,
/// sexo: sexo
//}
///var alicia = {
///   nombre: nombre,
///   raza: raza,
///   tipo_pelaje: suave,
///   sexo: sexo
//}
//2.- crear la clase gato, con las mismas propiedades que el ejercicio anterior. A partir de este, crer
//tres nuevos objetos 

class Gato {
    constructor(nombre, raza, tipo_pelaje, sexo) {
        this.nombre = nombre;
        this.raza = raza;
        this.tipo_pelaje = tipo_pelaje;
        this.sexo = sexo;
    }
}

var gato1 = new Gato("Santi", "montanes", "suave", "masculino");
var gato2 = new Gato("cachupin", "montanes", "suave", "masculino");
var gato3 = new Gato("Alicia", "montanes", "suave", "femenino");

///3.- Crear una clase para representar un televisor, con propiedades Tamaño, marca y modelo. Crear
///dos objetos a partir de esta clase 

class Televisor {
    constructor(tamano, marca, modelo) {
        this.tamano = tamano;
        this.marca = marca;
        this.modelo = modelo;
    }
}
var tele1 = new Televisor(42, "Lg", "atom")
var tele2 = new Televisor(32, "Sansumg", "s107")


///4.- Crear una clase que represente un archivo, con propiedades nombre, tamaño y ruta. Crear un
///objeto a partir de esta clase. 

class Archivo {
    constructor(nombre, tamano, ruta) {
        this.nombre = nombre;
        this.tamano = tamano;
        this.ruta = ruta;
    }
}
var archivo1 = new Archivo("tarea", 42, "js/escritorio")

//5.-Crear una clase para representar una canción: con nombre, autor y duración

class Cancion {
    constructor(nombre, autor, duracion) {
        this.nombre = nombre;
        this.autor = autor;
        this.duracion = duracion;

    }

}
var cancion1 = new Cancion("tratame suavemente", "gustavo", "3:30")
console.log(cancion1.nombre)

//6.- Crear una clase para representar un disco de música, debe contener: nombre del disco, autor,
//año y un arreglo con las canciones del disco (que usará objetos del tipo canción). Crear dos objetos
///a partir de esta clase

class Disco extends Cancion {
    constructor(nombre, autor, duracion, nombre_disco, ano) {
        super(nombre, autor, duracion)
        this.nombre_disco = nombre_disco;
        this.ano = ano;
    }
}

var soda_estereo = new Disco("Soda Estereo", "Gustavo Cerrati", "3:30", "Profugos", 1998)
console.table(soda_estereo)

///7.- Crear una clase llamada playlist, la que contenga: nombre, género, un arreglo con una lista de
///canciones (del ejercicio 5). El arreglo al principio debe estar vacío. 

class Playlist {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.arreglo_can = [];
    }
    agregar_cancion = function(c) {
        this.arreglo_can.push(c)
    }

    eliminar_cancion = function(e) {
        var cancion_eliminar = prompt("ïngrese nombre de cancion a eliminar")
        if (cancion_eliminar == arreglo_can)
            this.arreglo_can.remove(e)
    }
}

var lista_canciones = new Playlist("ejercio", "rock")
lista_canciones.agregar_cancion(cancion1)
console.log(lista_canciones)