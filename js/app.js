"use strict";

// Pregunta 1 Cual es mi segundo nombre
const respuesta1 = "Sí";
// Pregunta 2 En que empresa trabajo actualmente
//const respuesta2 = "TLK";
const respuesta2 = "Sí";
// Pregunta 3 Cual es el color de mi equipo favorito
//const respuesta3 = "Blanquiazul";
const respuesta3 = "Sí";
// Pregunta 4 Donde estudie
//const respuesta4 = "USMP";
const respuesta4 = "Sí";
// Pregunta 5 Cuantos años tengo de experiencia
//const respuesta5 = "12";
const respuesta5 = "Sí";

// //case sensitive: Es sensible a mayusculas y minusculas
// let puntos = 0;

const visitante = prompt("¿Cual es tu nombre?");
confirm("Bienvenido! "+ visitante + ". Te saluda David! ¿Deseas seguir navegando?");


const pregunta1 = prompt("¿Mi segundo nombre es Roberto? ¿Sí o no?)"); // ROBERTO
if (respuesta1.toLowerCase() === pregunta1.toLowerCase()) {
    alert("Correcto");
    console.log("Correcto!");
} else {
    alert("Incorrecto");
    console.log("Incorrecto!");
}

const pregunta2 = prompt("¿Trabajé en TLK? ¿Sí o no?");
if (respuesta2.toLowerCase() === pregunta2.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
} else {
    console.log("Incorrecto!");
    console.log("Incorrecto!");
}

const pregunta3 = prompt("¿El color de mi equipo favorito? ¿Sí o no?");
if (respuesta3.toLowerCase() === pregunta3.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
} else {
    console.log("Incorrecto!");
    console.log("Incorrecto!");
}

const pregunta4 = prompt("Estudie en la USMP? ¿Sí o no?");
if (respuesta4.toLowerCase() === pregunta4.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
} else {
    console.log("Incorrecto!");
    console.log("Incorrecto!");
}

const pregunta5 = prompt("¿Tengo 12 años tengo de experiencia? ¿Sí o no?");
if (respuesta5.toLowerCase() === pregunta5.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
} else {
    console.log("Incorrecto!");
    console.log("Incorrecto!");
}

// console.log("USANDO FOR");
// for (let i = 0; i < arregloTotal.length; i++) {
//   console.log(arregloTotal[i][1]);
//   const respuesta = prompt(arregloTotal[i][1]);
// }