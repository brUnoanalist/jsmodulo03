async function leerPerros() {
    let data = await fetch("https://dog.ceo/api/breeds/list/all");
    /// console.log(data);
    let datos = await data.json();
    let lista = document.querySelector("ul")
    for (r in datos.message) {
        let elementos = document.createElement("li");
        elementos.innerText = r;
        lista.appendChild(elementos);
        console.log(r);
    }
}
leerPerros();

async function leerPerrosFotos(raza) {
    var btn = document.querySelector("boton")

    let url = "https://dog.ceo/api/breed/" + raza + "/images/random"
    let respuesta = await fetch(url);
    let datos = await respuesta.json();

    btn = addEventListener("click", function(e) {
        let randomPerro = datos.message;
        let foto = document.querySelector("img")
        foto.setAttribute("src", randomPerro);
        console.log(datos.message)


    })
}

leerPerrosFotos("akita");


///agregar un evento click a cada elemento < li > del ejercicio 5, para que al hacer click, se cargue
///UNA foto de la raza seleccionada en un < img > que debe estar a la derecha de la lista.Este img
///SIEMPRE debe estar anclado a la parte superior izquierda(no se debe mover al hacer scroll)