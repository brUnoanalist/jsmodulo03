class Auto {
    constructor(marca, modelo, año, puertas, combustible) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.puertas = puertas;
        this.combustible = combustible;



    }
    Acelerar() {
        return ("El auto") + this.modelo + ("esta Acelerando a " + this.combustible)
    }
    subirVidrios() {
        return ("El auto ") + this.modelo + (" esta   Subiendo vidrios...")

    }


}
let auto1 = new Auto("Toyota", "  Yaris  ", 2020, 3, "Nafta")
console.log(auto1.Acelerar())
console.log(auto1.subirVidrios())