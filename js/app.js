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
//Nro aciertos preguntas
let nroaciertos = 0;

const visitante = prompt("¿Cual es tu nombre?");
confirm("Bienvenido! "+ visitante + ". Te saluda David! ¿Deseas seguir navegando?");


const pregunta1 = prompt("¿Mi segundo nombre es Roberto? ¿Sí o no?)"); // ROBERTO
if (respuesta1.toLowerCase() === pregunta1.toLowerCase()) {
    alert("Correcto");
    nroaciertos++;
    console.log(nroaciertos);
} else {
    alert("Incorrecto");
    console.log("Incorrecto!");
}

const pregunta2 = prompt("¿Trabajé en TLK? ¿Sí o no?");
if (respuesta2.toLowerCase() === pregunta2.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
    nroaciertos++;
    console.log(nroaciertos);
} else {
    console.log("Incorrecto!");    
}

const pregunta3 = prompt("¿El color de mi equipo favorito? ¿Sí o no?");
if (respuesta3.toLowerCase() === pregunta3.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
    nroaciertos++;
    console.log(nroaciertos);
} else {
    console.log("Incorrecto!");
}

const pregunta4 = prompt("Estudie en la USMP? ¿Sí o no?");
if (respuesta4.toLowerCase() === pregunta4.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
    nroaciertos++;
    console.log(nroaciertos);
} else {
    console.log("Incorrecto!");
}

const pregunta5 = prompt("¿Tengo 12 años tengo de experiencia? ¿Sí o no?");
if (respuesta5.toLowerCase() === pregunta5.toLowerCase()) {
    console.log("Correcto!");
    alert("Correcto");
    nroaciertos++;
    console.log(nroaciertos);
} else {
    console.log("Incorrecto!");
}

/* -----------------------INCIO Q6------------------------------------ */
//Nro max intentos
const maxintento = 4;
//Nro inicio intentos
let nrointento = 0;
//Nro x adivinar
const nroadivinar = 3;
//Nro demasiado bajo
const nrobajo = 1;
//Nro demasiado alto
const nroalto = 2;
let nroingresado = 0;

while(maxintento > nrointento){
    nrointento++;     
    nroingresado = prompt("Adivina un numero entre el 1 al 5! Adivinador!");    
    console.log(nroingresado);
    if(Math.abs(nroingresado - nroadivinar) == nroalto){                
        alert("No dejes de intentarlo! en esta ocasión fue demasiado alto. Intento #"+ nrointento);
    }else if (Math.abs(nroingresado - nroadivinar) == nrobajo){
        alert("No dejes de intentarlo! en esta ocasión fue demasiado bajo. Intento #"+ nrointento);
    }else{
        alert("Éxitos...! Acertaste al intento #"+ nrointento);
        nroaciertos++;
        break;
        console.log(nroaciertos);
        console.log("GARCIA");
    }
    if(nrointento == maxintento){
        alert("Se acabaron tus intentos!!!");
        break;
    }
    //nroingresado = 0;
}

/* -----------------------FIN Q6------------------------------------ */

/* -----------------------INCIO Q7------------------------------------ */
const nrointento7 = 6;
let satisfactorio = 0;

const grupofavorito = ["QUEEN","ACDC","METALLICA","LIBIDO","NIRVANA","U2"];

let grupoingresado = prompt("Adivina mi grupo musical favorito...! Tienes "+ nrointento7 + " intentos...! Suerte!");

for(let j = 1; j <= nrointento7; j++){
    for(let k=0; k < 6; k++){
        if(grupoingresado == grupofavorito[k].toUpperCase()){            
            alert("Acertaste!!! Feclicitaciones!!!");
            satisfactorio = 1;
            nroaciertos++;
            console.log("DAVID");
            break;
        }
    }
    if(satisfactorio == 1){
        break;
    }else{        
        grupoingresado = prompt("No acertaste...! Sigue intentándolo te quedan " + (nrointento7 - j) + " intentos");
    }
    // console.log(j + " " + satisfactorio);  
    if(j == nrointento7 && satisfactorio == 0){
        alert("Éxitos en tu próximo intento...!");
    }
}

/* -----------------------FIN Q7------------------------------------ */

alert("De 7 preguntas acertaste " + nroaciertos);