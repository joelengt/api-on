
// Devuelve un true para online , y false para offline

var s = document.getElementById('status');
setInterval(function () {
  s.className = navigator.onLine ? 'online' : 'offline';
  s.innerHTML = navigator.onLine ? 'online' : 'offline';  
}, 250)

// Usando solo navigator.onLine
// Devuelte true o false

if(navigator.onLine === true){
   console.log("Estoy online")
}else{
   console.log("Estoy Offline")
}
