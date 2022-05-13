let btn = document.querySelector("#actualizar");
let textoChiste = document.querySelector("h2");
btn.addEventListener("click", function(e) {
    $.getJSON(" https://api.chucknorris.io/jokes/random", function(data) {
        chiste = data.value;
        textoChiste.innerText = chiste



        console.log(chiste);

    })
});