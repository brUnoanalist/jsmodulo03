class Libro {

    constructor(nombre, autor, editorial, genero) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }
    e
    mostrarLibro = function() {
        console.log("nombre: " + this.nombre, "autor: " + this.autor, "editorial: " + this.editorial, "genero: " + this.genero);




    }



}


libro1 = new Libro("harry potter", "Jc ROWLING", "Alfaguarda", "Fantasia");
libro2 = new Libro("el quijote", "la mancha", "castle", "aventura");
libro3 = new Libro("el principito", "juan perez", "bkn", "autoayuda");

lista = []
lista.push(libro1)
lista.push(libro2)
lista.push(libro3)
console.table(lista)
console.log(libro3.mostrarLibro())
console.log(libro2.mostrarLibro())
console.log(libro1.mostrarLibro())
filtrarLibro()