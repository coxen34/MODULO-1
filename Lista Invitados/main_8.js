let listaInvitados = ["z","a","p","r"];
let invitado;
//!CREA ARRAY DE LISTA MEDIANTE PROMPT
function listaArray(){
do {
    invitado = prompt("Escribe el nombre ");
    listaInvitados = listaInvitados+"<br>"+" - "+invitado;
}while(invitado!=="")
    document.getElementById("result").innerHTML += "La lista de invitados es: " + listaInvitados; 
} 
//!AÑADE INVITADOS A LA LISTA
listaInvitados.push(invitado)
 function listaAdd() {
    invitado = prompt("Escribe el nombre ");
    document.getElementById("resultAdd").innerHTML += "La lista de invitados es: "+listaInvitados+" - "+invitado; 
} 
//!ORDENA LA LISTA(Funciona si no activo Resultado Lista Inicial)

function listaOl() {
    document.getElementById("resultOl").innerHTML = "La lista de invitados es: "+ (listaInvitados.sort());
}
//!GANADOR ALEATORIO 
let ganador = listaInvitados[Math.floor(Math.random() * listaInvitados.length)];
function Prize() {
    document.getElementById("resultPrize").innerHTML =( "El ganador es: "+ ganador); 
}