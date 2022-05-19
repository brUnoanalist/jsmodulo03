///1.- Crear una consulta API para obtener el JSON de respuesta cuando consulte por una “Random
////Image”. Envíe los datos a pantallas para analizar el objeto devuelto por la API 
let foto = document.querySelector("img")
boton = document.querySelector("boton")
boton = addEventListener("click", function(e) {
            $.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
                    let url = data.message;
                    foto.setAttribute("src", url);
                    //  console.log(foto);

                })
                // });


            //la propiedad que contiene la imagen, cárguela en un nodo (etiqueta) html, mediante la
            //modificación de su propiedad src.

            ///Crear una consulta API para cargar los datos de todas las razas “List All Breeds”. Envíe el json a
            ///pantalla y analícelo
            $.getJSON("https://dog.ceo/api/breed/hound/list", function(data) {
                let lista = data.message
                console.log(lista)
            })