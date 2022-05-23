var cuadrados=document.querySelectorAll(".square")

var rand = Math.floor(Math.random()*color.length);
var rValue = color[rand];
//console.log("Color ramdom es "+rValue)


for (let i = 0; i < color.length; i++ ){
      
      /*let colores=color[i]*/
      console.log(color)
      cuadrados[i].style ="background-color:"+color;