var variable1;
let variable2;
const variable3 = 2;

var $jquery, _private;
//var 50cent = 1, no vale nada = 1;
var variable = 2,
  VARIABLE = 2;

var camelCase = 2,
  snake_case = 2;

var camelCase = 2;
var snake_case = 3;

var miVariable;
let miOtraVariable; //Cannot redeclare

miVariable = 2;
miOtraVariable = 2;

var miVariable = 42;
//let miOtraVariable = miVariable;

console.log(miVariable);
var miVariable = 2;
console.log(miVariable);

console.log(miOtraVariable);
//let miOtraVariable = 2;
console.log(miOtraVariable);

const estoNoDaraproblemas = 42;
// const extoVaAFallar;
const estoTambienVaAFallar = 2;
//estoTambienVaAFallar = 3;

//Efectivamente fallaron 2 cosas, la declaración de let hecha posteriormente
//no escribir const al redefinir una variable

typeof variable;
//variable instanceof Clase;

typeof undefined;
typeof estaVariableQueNoHeInicializadoAun;

typeof null;
typeof { key: 2 };
typeof [15, 4];
typeof new Boolean(true);

typeof "hola";

typeof function () {};

typeof 1;
typeof 1.3;
typeof NaN;
typeof Infinity;

typeof Symbol();
typeof Symbol("mi simbolo");

//Aritmetica básica

const suma = 1 + 2;
const resta = 1 - 2;
const producto = 2 * 4;
const division = 9 / 3;
const potencia = 3 ** 2;
const modulo = 8 % 3;

//Suma de variables
const concatenarStrings = "Hola" + "" + "mundo" + "!";
const sumaStringYNumero = 1 + "1";
const banana = "b" + "a" + "n" + "a" + "n" + "a" + "!";

const expresion1 = (3 + 7) * 10;
const expresion2 = 3 + 7 * 10;
const expresion3 = 2 ** (3 ** 2);

let inicio = +5;
const sumaYAsigna = ++inicio;
const asignaYsuma = inicio++;
const restaYAsigna = --inicio;
const asignaYResta = inicio--;
console.log("Aqui");
console.log(inicio + 1);

let x = 1;
let y = 2;
let z = 3;

x = y;
x += z;
x *= y;
x /= y;
x %= x;
console.log(x);

//Caso análisis
const masFalsoQueYo = !true;
//const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;
console.log(noECherto);

let cherto = true || true;
cherto = false || false;
cherto = true || false;
console.log(cherto);

//const noECherto = false || false;

const mayorQue = 100 > 50;
const menorQue = 50 < 100;
const mayorOIgualque = 100 >= 50;
const menorOIgualque = 50 <= 100;
const igualOCasi = 100 == "100";
const igualYDelMismoTipo = 100 === 100;
const noIgual = 100 !== "100";

//Controles de flujo en JS

//bloque básico de un if else
const Boll = true;

if (Boll) {
  console.log("Hola cara de papa, em digo True porque me ejecuto");
} else {
  console.log("No me he logrado ejecutar");
}

if (!Boll) {
  console.log("Hola cara de papa, em digo True porque me ejecuto");
} else {
  console.log("No me he logrado ejecutar");
}

//Conficionales con condiciones intermedias

const miNumero = prompt("Adivina adivinador que valor ando pensando");
if (miNumero > 5) {
  alert("Frío, te has pasado");
} else if (miNumero < 5) {
  alert("Mi valor es más pequeño que eso");
} else {
  alert("!Ahhhh ES 5");
}

//Bloque case

let numero = prompt("Adivina adivinador");
switch (numero) {
  case "5":
    alert("JAJAJAJ ese es");
    break;
  case "4":
    alert("Casi pero no");
    break;
  default:
    alert("Frio como el calor");
}

//Bloque while

let edad = prompt("Dime ya tu edad", 0);
while (edad <= 18) {
  alert("eres algo joven aun amigo");
  console.log(edad);
  edad = prompt("dime tu edad", 0);
}
console.log(edad);

//Ciclo for
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

for (let i = 10, j = 0; i > j; i -= 1) {
  console.log(i, j);
}
