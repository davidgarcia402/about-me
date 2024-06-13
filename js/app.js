"use strict";

// podemos crear una variable para la opción de afirmación y otra para la negación
const afirmacion = "Sí";
const negacion = "No";

//Nro aciertos preguntas
// recomendacion: usar camellCase cuando creemos variable
// nombreDeAlumno - promedioFinal
let nroAciertos = 0;

function compararRespuesta(textoDePregunta) {
  const pregunta = prompt(textoDePregunta); // ROBERTO
  if (afirmacion.toLowerCase() === pregunta.toLowerCase()) {
    alert("Correcto");
    nroAciertos++;
    console.log(nroAciertos);
  } else {
    alert("Incorrecto");
    console.log("Incorrecto!");
  }
}

// recuerdan cual es la estructura de las funciones?
function preguntarNombre() {
  const visitante = prompt("¿Cual es tu nombre?");
  confirm(
    "Bienvenido! " + visitante + ". Te saluda David! ¿Deseas seguir navegando?"
  );
}

// function preguntarSegundoNombre() {
//   compararRespuesta("¿Mi segundo nombre es Roberto? ¿Sí o no?)");
// }

// function preguntarTrabajo() {
//   compararRespuesta("¿Trabajé en TLK? ¿Sí o no?");
// }

// function preguntarColorDeEquipo() {
//   compararRespuesta("¿El color de mi equipo favorito? ¿Sí o no?");
// }

// function preguntarLugarDeEstudio() {
//   compararRespuesta("Estudie en la USMP? ¿Sí o no?");
// }

// function preguntarCantidadDeExperiencia() {
//   compararRespuesta("¿Tengo 12 años tengo de experiencia? ¿Sí o no?");
// }

// preguntarNombre();
// preguntarSegundoNombre();
// preguntarTrabajo();
// preguntarColorDeEquipo();
// preguntarLugarDeEstudio();
// preguntarCantidadDeExperiencia();
// preguntarNombre();
// compararRespuesta("¿Mi segundo nombre es Roberto? ¿Sí o no?)");
// compararRespuesta("¿Trabajé en TLK? ¿Sí o no?");
// compararRespuesta("¿El color de mi equipo favorito? ¿Sí o no?");
// compararRespuesta("Estudie en la USMP? ¿Sí o no?");
// compararRespuesta("¿Tengo 12 años tengo de experiencia? ¿Sí o no?");
const preguntas = [
  "¿Mi segundo nombre es Roberto? ¿Sí o no?",
  "¿Trabajé en TLK? ¿Sí o no?",
  "¿El color de mi equipo favorito? ¿Sí o no?",
  "Estudie en la USMP? ¿Sí o no?",
  "¿Tengo 12 años tengo de experiencia? ¿Sí o no?",
];
preguntarNombre();
for (let i = 0; i < preguntas.length; i++) {
  compararRespuesta(preguntas[i]);
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

while (maxintento > nrointento) {
  nrointento++;
  nroingresado = prompt("Adivina un numero entre el 1 al 5! Adivinador!");
  console.log(nroingresado);
  if (Math.abs(nroingresado - nroadivinar) == nroalto) {
    alert(
      "No dejes de intentarlo! en esta ocasión fue demasiado alto. Intento #" +
        nrointento
    );
  } else if (Math.abs(nroingresado - nroadivinar) == nrobajo) {
    alert(
      "No dejes de intentarlo! en esta ocasión fue demasiado bajo. Intento #" +
        nrointento
    );
  } else {
    alert("Éxitos...! Acertaste al intento #" + nrointento);
    nroaciertos++;
    break;
    console.log(nroaciertos);
    console.log("GARCIA");
  }
  if (nrointento == maxintento) {
    alert("Se acabaron tus intentos!!!");
    break;
  }
  //nroingresado = 0;
}

/* -----------------------FIN Q6------------------------------------ */

/* -----------------------INCIO Q7------------------------------------ */
const nrointento7 = 6;
let satisfactorio = 0;

const grupofavorito = ["QUEEN", "ACDC", "METALLICA", "LIBIDO", "NIRVANA", "U2"];

let grupoingresado = prompt(
  "Adivina mi grupo musical favorito...! Tienes " +
    nrointento7 +
    " intentos...! Suerte!"
);

for (let j = 1; j <= nrointento7; j++) {
  for (let k = 0; k < 6; k++) {
    if (grupoingresado == grupofavorito[k].toUpperCase()) {
      alert("Acertaste!!! Feclicitaciones!!!");
      satisfactorio = 1;
      nroaciertos++;
      console.log("DAVID");
      break;
    }
  }
  if (satisfactorio == 1) {
    break;
  } else {
    grupoingresado = prompt(
      "No acertaste...! Sigue intentándolo te quedan " +
        (nrointento7 - j) +
        " intentos"
    );
  }
  // console.log(j + " " + satisfactorio);
  if (j == nrointento7 && satisfactorio == 0) {
    alert("Éxitos en tu próximo intento...!");
  }
}

/* -----------------------FIN Q7------------------------------------ */

alert("De 7 preguntas acertaste " + nroaciertos);
