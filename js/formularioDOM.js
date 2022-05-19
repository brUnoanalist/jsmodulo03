array=[]
let formulario = document.querySelector("#formulario");
let info=document.querySelector("body")
let titulo = document.createElement("h1");
let envio = (e)=>{
    e.preventDefault();
    
    let nombreFormulario=e.target.name.value
    console.log(nombreFormulario);

    array.push(nombreFormulario)
    console.log(array)
    titulo.innerText=nombreFormulario
    info.appendChild(titulo)


};
formulario.addEventListener("submit",envio);