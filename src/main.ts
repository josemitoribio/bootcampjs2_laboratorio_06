
import {
    handleMePlanto,
    handlePedirCarta,
    handleNuevaPartida,
    handleVerResultado,
} from "./ui";

const botonPedirCarta = document.getElementById("pedirCarta");
const botonMePlanto = document.getElementById("plantarse");
const botonNuevaPartida = document.getElementById("nuevaPartida");
const botonVerResultado = document.getElementById("verResultado");

if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", handlePedirCarta);
   } else {
    console.error(`No se ha encontrado el elemento con id pedircarta`);
   };

if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", handleMePlanto);
   } else {
    console.error(`No se ha encontrado el elemento con id mePlanto`);
   };

if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", handleNuevaPartida);
   } else {
    console.error(`No se ha encontrado el elemento con id nuevaPartida`);
   };

if (botonVerResultado !== null && botonVerResultado !== undefined && botonVerResultado instanceof HTMLButtonElement) {
    botonVerResultado.addEventListener("click", handleVerResultado);
   } else {
    console.error(`No se ha encontrado el elemento con id verResultado`);
   };

