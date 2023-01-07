/*for (i = 0; i <= 10; i++) {
  console.log("for "+i);
}*/
/*let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  //i=posision en el arreglo
}*/
/*let user = "Michael"
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
 const mike = {
    nombre:"Michael",
    apellido:"Gonzalez",
    edad:24
}
for (const elemento of user) {
  console.log(elemento);
}*/

/*try {
  console.log("try: codigo a evaluar ")
  noExiste
} catch (error) {
  console.log("captura el error")
  console.log(error)
}finally{
console.log("bloque finally se ejecuta al final de un trycatch")
}*/

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}
console.log("*************************");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}*/
/*const numeros = [1, 2, 3];
//sin desestructuracion
let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];
console.log(uno, dos, tres);
console.log("*************************");
//con desestructuracion
const [one,two,three] = numeros;
console.log(one,two,three);

const persona = {
  nombre: "Michael",
  apellido: "Gonzalez",
  edad: 24
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad); */

/*let nombre = "Michael";
edad = 24;

const humano = {
  nombre:nombre,
  edad:edad,
  hablar:function(){
    console.log("Hola, me llamo " + this.nombre);
  }
}
console.log(humano);
humano.hablar();

const human = {
  nombre,
  edad,
  hablar(){
    console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años");
  }
}
console.log(human);
human.hablar();*/

/*function sumar(a,b,...c) {
  let resultado =  a + b;

  c.forEach(function(n){
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));*/

/*const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];

 console.log(arr1,arr2);

 arr3 = [...arr1,...arr2];
  console.log(arr3);*/

//const saludar = ()=>console.log("Hola");
/*const saludar = nombre =>console.log(`Hola ${nombre}`);
  saludar("Michael");*/

/*const sumar = (a,b)=>a+b;
    
  console.log(sumar(8,9));*/

/*const numeros = [1,2,3,4,5]
  numeros.forEach((el,index)=>console.log(`${el} esta en la posicion ${index}`));

  function perro(){
    console.log(this);
  }
  perro();*/

/*const perro = {
  nombre: "Firulais",
  ladrar() {
    console.log(this);
  },
};
perro.ladrar();*/

//POO
/*
clases >> Modelo a seguir
objetos >> Es una instancia de una clase (copia de la clase)
atributos >> Caracteristicas de un objeto
metodos >> Acciones que se pueden realizar con un objeto
*/

/*const animal = {
  nombre: "dana",
  sonar() {
    console.log("Sonido");
  }
};
const animal2 = {
  nombre: "lola",
  sonar() {
    console.log("Sonido");
  }
};
console.log(animal);
console.log(animal2);*/
/*
//Funcion constuctora
function Animal(nombre,genero){
//atributos
this.nombre = nombre;
this.genero = genero;
//metodos
this.sonar= function(){
  console.log("Sonido");
}
}
const dana = new Animal("dana","Hembra");
const lola = new Animal("lola","Hembra")

console.log(dana);
console.log(lola);*/

//Herencia prototipica

/*function Perro(nombre,genero,size){
  this.super = Animal;
  this.super(nombre,genero);
  this.size = size;
}
//perro esta heredando  de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobrescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
  console.log(`Soy un perro y mi sonido es un ladrido`);
}
Perro.prototype.ladrar = function(){
  console.log("GuauGuau")
}
const dana = new Perro("dana","Hembra","Pequeno");
const lola = new Animal("lola","Hembra")
console.log(dana);*/

//clases y herencia
/*class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("Sonido");
  }
   saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, size) {
    super(nombre, genero);
    this.size = size;
    this.Raza = null;
  }
  sonar() {
    console.log("ladrido");
  }
  ladrar() {
    console.log("GuauGuau");
  }
   static queEres(){
    console.log("Soy un perro");
  }
  set setRaza(raza){
    this.Raza = raza;
  }
  get getRaza(){
    return this.Raza 
  }
}

const mimi = new Animal("mimi", "Hembra");
scooby = new Perro("Scooby", "Macho", "Grande");

Perro.queEres();

console.log(scooby);
scooby.saludar();
scooby.ladrar();
scooby.sonar();
scooby.setRaza = "Gran Danes";
console.info(scooby.getRaza);*/

/*
class FamilyMember {
  constructor(Nombre, Apellido, Edad, profesion) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Edad = Edad;
    this.profesion = profesion;
  }
  saludar() {
    console.log(
      `Hola, me llamo ${this.Nombre} ${this.Apellido}, tengo ${this.Edad} años y soy ${this.profesion}`
    );
  }
}
const Padre = new FamilyMember("Jorge", "Gozalez", 51, "Repartidor");
Padre.saludar();

const Madre = new FamilyMember("Ana", "Tabima", 50, "Vendedora");
Madre.saludar();
const Hijo = new FamilyMember("Juan", "Gonzalez", 19, "Estudiante");
Hijo.saludar();*/

//Un metodo estatico es un metodo que no necesita una instancia de la clase para ser llamado.

/*console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear()

for (let i = 0; i < 10; i++) {
  console.count("Valor");
}
console.assert(1 === "1", "No es igual");*/
//Objeto Date.
/*let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getYear());
console.log(fecha.getFullYear())
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCHours());
console.log(fecha.getUTCMinutes());
console.log(fecha.getUTCSeconds());
console.log(fecha.getUTCMilliseconds());
console.log(fecha.toUTCString());
console.log(fecha.toISOString());
console.log(fecha.toJSON());
console.log(Date.now());*/
//Objeto Math-----------------------------------------------------
/*console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.round(7.8));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 2));//(n,elevado a la potencia)
console.log(Math.sign(-10));//-1 0 1
console.log(Math.random());//numero aleatorio entre 0 y 1
console.log(Math.round((Math.random()*1000)));//numero aleatorio entre 0 y 1000 */

//Operadores de cortocircuito-----------------------------------------------------
//Or > ||
/*function saludar(nombre = "Anonimo"){ //Default
  //nombre = nombre || "Anonimo";
  console.log(`Hola ${nombre}`);
}
saludar("juan");
saludar();
console.log(undefined || "valor derecha");//Valores truthy y falsy retorna el valor = true
//And > &&
console.log(1 && "valor izquierda");//Valores truthy y falsy retorna el valor = false contrario a || > Or*/

//console.log(window);
//window.alert("Hola");
//window.confirm("¿Estas seguro?");
//window.prompt("Ingresa tu nombre");

/*let alerta = alert("Hola");
confirmacion = confirm("¿Estas seguro?");
aviso = prompt("Ingresa tu nombre");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);*/

//expresiones regulares
/*let cadena =
  "lorem ipsum dolor sit amet consectetur 5 adipisicing 8 elit. Quisquam, 9 loremquidem 2 !";
let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem{1}/g;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));*/

//Funciones Anonimas Autoejecutables-----------------------------------------------------
(function () {
  console.log("Mi Primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi Segunda IIFE");
  console.log(d);
  console.log(w);
  console.log(c);
  c.log("este es um console.log");
})(document, window, console);
