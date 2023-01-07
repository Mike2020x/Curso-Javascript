let id = Symbol("id");
let id2 = Symbol("id2");

//console.log(id === id2)
///console.log(id,id2)
//console.log(typeof id,typeof id2)

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

//const persona = {
 // [NOMBRE]: "Michael", //Symbol
 // edad: 24,
//};
//console.log(persona);
//persona.NOMBRE = "Michael Gonzalez";
//console.log(persona);
//console.log(persona.NOMBRE);
//console.log(persona[NOMBRE]);

//persona[SALUDAR] = function () {
 // console.log("Hola");
//};
//console.log(persona);
//persona[SALUDAR]();

/*for (const propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
    }*/

// console.log(Object.getOwnPropertySymbols(persona))
let mapa = new Map();
mapa.set("nombre", "Mike");
mapa.set("apellido", "Gonzalez");
mapa.set("edad", 24);

//console.log(mapa);
//console.log(mapa.size);
//console.log(mapa.has("correo"));
//console.log(mapa.has("nombre"));
//console.log(mapa.get("nombre"));
//mapa.set("nombre", "Michael");
//console.log(mapa.get("nombre"));
//mapa.delete("apellido");
//console.log(mapa);

//for (let [key, value] of mapa) {console.log(`Llave:${key}, Valor:${value}`);}

const ws = new WeakSet();//

let valor1 = {"valor 1":1};
let valor2 = {"valor 2":2};
let valor3 = {"valor 3":3};

/*ws.add(valor1);//
ws.add(valor2);
console.log("no se puede acceder a los valores porque son objetos");
console.log(ws);//
console.log(ws.has(valor1))
console.log(ws.has(valor2))
console.log(ws.has(valor3))*/

const iterables = [1,2,3,4,5]

//Accedemos al iterador del array,objeto,string iterable
const iterador = iterables[Symbol.iterator]();

//.next() iterador
/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());*/

let next = iterador.next();

/*while (!next.done){
  console.log(next.value);
  next = iterador.next() //detienen el ciclo mientras no sea done
}*/


const persona = {
  nombre : "",
  apellido : "",
  edad : 0
}

const manejador = {
  set(obj,prop,value){
    obj[prop] = value;
  }
}
const michael = new Proxy(persona,manejador);
michael.nombre = "Michael";
michael.apellido = "Gonzalez";
michael.edad = 24;

const juan = new Proxy(persona,manejador);
michael.nombre = "Juan";
michael.apellido = "Gonzalez";
michael.edad = 20;

//console.log(persona.nombre);

//console.log(this);