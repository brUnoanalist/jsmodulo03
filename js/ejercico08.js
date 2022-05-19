function cargarCard(textoTitulo, urlFoto) {
    let contenedor = document.createElement("div")
    let card = document.createElement("div")
    let imagen = document.createElement("img")
    let cardBody = document.createElement("div")
    let titulo = document.createElement("h5")
    let boton = document.createElement("button")

    cardBody.appendChild(titulo);
    cardBody.appendChild(boton);
    card.appendChild(imagen);
    card.appendChild(cardBody);
    contenedor.appendChild(card);
    contenedor.className = "col - 2 ";
    card.className = "card"
    card.style = "width: 18rem;";
    imagen.className = "card-img-top";
    imagen.setAttribute()

}
async function cargarPerros() {
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all")
    datos = await respuesta.json();
    for (r in datos.message) {
        console.log(r);
    }

}
cargarPerros()