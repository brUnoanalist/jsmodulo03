var color=[];
console.log("hol")
let strinColor = document.querySelector("span");
let ganaste=document.querySelector("h2")
var cuadrados=document.querySelectorAll(".square")
var boton=document.querySelector("button")
var facil=document.querySelector("#facil")

for ( i = 1; i <= 6; i++) {
    
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

for (let i = 0; i < color.length; i++ ){
    console.log("prueba")
    
    let colores=color[i]
    cuadrados[i].style ="background-color:"+color[i];
    }

    cuadrados.forEach(y => {
    y.addEventListener('click', event => {
        var clik=event.target.style.backgroundColor;
    
       
        
        
        if(rValue==clik){
            console.log("ganaste")
            console.log(clik)
            
            
            
            console.log(strinColor)
            ganaste.innerText = "Ganaste!!";
            
        
        }      else{
            ganaste.innerText = "Intentelo nuevamente";
            event.target.style.backgroundColor = "black";


        }
    })
})


boton.addEventListener("click",e=>{
    location.reload();
})


function modoFacil(){
    color=[]
    for(i=3 ; i <6;i++)
    cuadrados[i].style.backgroundColor = "black";
    
    for ( i = 1; i <= 3; i++) {
        
        var rand1=Math.floor(Math.random() * (250 - 0)) + 0;
        var rand2=Math.floor(Math.random() * (250 - 0)) + 0;
        var rand3=Math.floor(Math.random() * (250 - 0)) + 0;
        var coloresLista="rgb("+rand1+", "+rand2+", "+rand3+")";
        color.push(coloresLista);
    }
    
    
    var rand = Math.floor(Math.random()*color.length);
    var rValue = color[rand];
    console.log("Color ramdom es "+rValue)
    
    
    strinColor.innerText = rValue;
    
    for (i = 0; i < color.length; i++ ){
        console.log("prueba")
        console.log(color)
        
        
        cuadrados[i].style ="background-color:"+color[i];
        
        }
    
        cuadrados.forEach(v => {
            
        v.addEventListener('click', fevent => {
            
            let clik1=fevent.target.style.backgroundColor
            
            
            console.log(clik1)         
            if(rValue==clik1){
                console.log("ganaste")
                
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









      
      
      
      


