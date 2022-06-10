let listaInvitados = ["z","a","p","r"];
let invitado;
//!CREA ARRAY DE LISTA MEDIANTE PROMPT
document.getElementById("Lista").addEventListener("click", function listaArray() {
    do {
    invitado = prompt("Escribe el nombre ");
    listaInvitados = listaInvitados+"<br>"+" - "+invitado;
}while(invitado!=="")
    document.getElementById("result").innerHTML += "La lista de invitados es: " + listaInvitados; 
} )

//!AÑADE INVITADOS A LA LISTA
document.getElementById("ListaAdd").addEventListener("click", function listaAdd() {
  invitado = prompt("Escribe el nombre ");
    document.getElementById("resultAdd").innerHTML += "La lista de invitados es: "+listaInvitados+" - "+invitado;   
listaInvitados.push(invitado)
} )
//!ORDENA LA LISTA(Funciona si no activo Resultado Lista Inicial)
document.getElementById("ListaOl").addEventListener("click", function listaOl() {
document.getElementById("resultOl").innerHTML = "La lista de invitados es: "+ (listaInvitados.sort());
})
//!GANADOR ALEATORIO 
let ganador = listaInvitados[Math.floor(Math.random() * listaInvitados.length)];
document.getElementById("prize").addEventListener("click", function Prize() {
document.getElementById("resultPrize").innerHTML =( "El ganador es: "+ ganador); 
})