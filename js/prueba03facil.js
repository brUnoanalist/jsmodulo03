
var color=[];
console.log("hol")
let strinColor = document.querySelector("span");
let ganaste=document.querySelector("h2")
var cuadrados=document.querySelectorAll(".square")
var boton=document.querySelector("button")
var facil=document.querySelector("#facil")
function modoFacil(){
    color=[]
    for(i=3 ; i <6;i++)
    cuadrados[i].style.backgroundColor = "black";
    console.log(rValue)
    for ( i = 1; i <= 3; i++) {
        
        var rand1=Math.floor(Math.random() * (250 - 0)) + 0;
        var rand2=Math.floor(Math.random() * (250 - 0)) + 0;
        var rand3=Math.floor(Math.random() * (250 - 0)) + 0;
        var coloresLista="rgb("+rand1+", "+rand2+", "+rand3+")";
        color.push(coloresLista);
    }
    console.log(color)
    
    var rand = Math.floor(Math.random()*color.length);
    var rValue = color[rand];
    console.log("Color ramdom es "+rValue)
    
    
    strinColor.innerText = rValue;
    
    for (z = 0; z < color.length; z++ ){
        console.log("prueba")
        console.log(color)
        
        
        cuadrados[z].style ="background-color:"+color[z];
        
        }
    
        cuadrados.forEach(v => {
        v.addEventListener('click', fevent => {
            var clik1=fevent.target.style.backgroundColor;
            
            console.log(rValue)
            console.log(clik1)         
            if(rValue==clik1){
                console.log("ganaste")
                console.log(strinColor)
                ganaste.innerText = "Ganaste!!";
                
            }      else{
                ganaste.innerText = "Intentelo nuevamente";
                fevent.target.style.backgroundColor = "black";
    
    
            }
        })
    })
}

facil.addEventListener("click",f=>{
    console.log("ola")
    modoFacil()
        
    })