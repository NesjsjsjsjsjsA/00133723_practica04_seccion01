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
const
