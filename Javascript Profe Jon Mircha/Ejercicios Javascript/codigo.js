//1
//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10
function contarCaracteres(cadena = "") {
  if (typeof cadena === "string") {
    return console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
  } else {
    return console.warn("Error");
  }
}
//Version Simplificada con arrow function
const contarCaracteres2 = (cadena) =>
  typeof cadena === "string"
    ? console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
    : console.warn("Error");

//contarCaracteres2("Hola Mundo");

//2
/*Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function cortarTexto(cadena, numero) {
  if (typeof cadena === "string" && typeof numero === "number") {
    return console.log(cadena.substring(0, numero));
  } else {
    return console.log("Error");
  }
}

const cortarTexto2 = (cadena, numero) =>
  typeof cadena === "string" && typeof numero === "number"
    ? console.log(cadena.substring(0, numero))
    : console.log("Error");

//cortarTexto("Hola Mundo", 4);

//3
/*Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function contarPalabras(cadena) {
  if (typeof cadena === "string") {
    return console.log(cadena.split(" "));
  } else {
    console.log("Error");
  }
}
//arrow funtion
const contar = (cadena) =>
  !cadena
    ? console.log("No ingresaste una cadena")
    : console.log(cadena.split(" "));

//contar("Mi mama me mima");

//4
/*Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
function repetir(cadena = "", reps = undefined) {
  for (let i = 1; i <= reps; i++) console.log(cadena + i);
}
//De esta forma evitamos los else y el codigo es mas legible
const repetir2 = (cadena = "", reps = undefined) => {
  if (!cadena) return console.warn("No ingresaste una cadena valida");

  if (reps === undefined)
    return console.warn("No ingreaste el numero de repeticiones");

  if (reps === 0)
    return console.error("El numero de repeticiones no puede ser cero");

  if (Math.sign(reps) === -1)
    return console.error("El numero de veces no puede ser negativo");

  for (let i = 1; i <= reps; i++) console.log(cadena);
};

//repetir("Hola ", 20);

//5)
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (texto = "") => {
  console.log(texto.split("").reverse().join(""));
};

//invertirTexto("hola");

//6)
//Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabra = (texto = "", palabra = "") => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (!palabra) return console.warn("No ingresaste una palabra");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = texto.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return console.info(`la palabra ${palabra} se repite ${contador} veces`);
};

//contarPalabra("Hola mama mi mama me mima yo amo a mi mama ", "mama");

//7)
//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (texto = "") => {
  //primero casos de error
  if (!texto) return console.warn("No ingresaste un texto");
  //cambios y verificaciones
  texto = texto.toLowerCase();

  let alrevez = texto.split("").reverse().join("");

  return texto === alrevez
    ? console.info(
        `${texto} es un palindromo,palabra original ${texto} palabra al reves ${alrevez}`
      )
    : console.info(
        `${texto} no es palindromo palabra original ${texto} palabra al reves ${alrevez}`
      );
};

//palindromo("Maluco");

//8)
//Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.log("No ingresate un texto")
    : !patron
    ? console.log("No ingresate un patron")
    : console.info(texto.replace(new RegExp(patron, "ig"), "")); //expresiones regulares*

//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 xyz5, xyz6", "xyz")*/

/*9)
Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const Aleatorio = () => {
  return console.info(Math.round(Math.random() * 100) + 501); //+1 para que no se incluya el numero 600
};

//Aleatorio();

/*10)Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicúa = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un numero`);

  numero = numero.toString(); //  convertir a string
  let alrevez = numero.split("").reverse().join(""); //revezar
  return numero === alrevez //** */
    ? console.info(`${numero} es capicua`)
    : console.info(`${numero} no es capicua`);
};

//capicúa(212.212);

/*11) 
Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");

  if (Math.sign(numero) === -1) return console.warn("NO numeros negativos");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
};
//factorial(4);

//12)
//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado,NO es un número`);
  if (numero === 0) return console.error("El número no puede ser 0");
  if (numero === 1) return console.error("El número no puede ser 1");
  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");
  //codigo para determinar el primo
  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El numero ${numero},No es primo`)
    : console.log(`El numero ${numero},Si es primo`);
};
//numeroPrimo(201);

//13)
//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado,NO es un número`);

  return numero % 2 === 0
    ? console.log(`El numero ${numero} es par`)
    : console.log(`El numero ${numero} es impar`);
};

//numeroParImpar(398);

//14)
//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const gradosToFarhenheit = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.error(`No ingresaste grados a convertir`);

  if (typeof grados !== "number")
    return console.error(`El valor ${grados} ingresado,No es un numero`);

  if (unidad === undefined)
    return console.log(`No ingresaste la unidad a convertir`);

  if (typeof unidad !== "string")
    return console.log(
      `El valor ${unidad} ingresado,No es una unidad valida string`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor no reconocido");

  if (unidad === "C")
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  }
};

//gradosToFarhenheit(0,"C");
//gradosToFarhenheit(100,"C");
//gradosToFarhenheit(100,"F");

//15)
//Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binaryToDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.error(`No ingresaste un numero`);
  if (base === undefined) return console.error(`No ingresaste una base`);
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado,No es un numero`);
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado,No es un numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10` //**ParseInt pasa el numero a la base especificada*/
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2` //**toString convierte el numero a la base especificada*/
    );
  } else {
    return console.error(`La base ${base} no es reconocida`);
  }
};

//binaryToDecimal(10,2);

//16)
//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (monto = undefined, porcentaje = 0) => {
  if (monto === undefined) return console.error(`No ingresaste un monto`);
  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado,No es un numero`);
  if (monto === 0) return console.error(`El monto no puede ser 0`);
  if (Math.sign(monto) === -1)
    return console.error(`El monto no puede ser negativo`);
  if (typeof porcentaje !== "number")
    return console.error(`El valor ${porcentaje} ingresado,No es un numero`);
  if (Math.sign(porcentaje) === -1)
    return console.error(`El descuento no puede ser negativo`);
  return console.info(
    `${monto} - ${porcentaje}% = ${monto - (monto * porcentaje) / 100}`
  );
};

//descuento(1000,25);

//17)
//Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcular = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste una fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

//calcular(new Date(1997,09,14));
//calcular(new Date(2997,09,14));

//18)
//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVC = (cadena = undefined) => {
  if (!cadena || typeof cadena !== "string")
    console.warn(`No ingresaste un texto valido`);

  let vocales = 0;
  let consonantes = 0;

  cadena = cadena.toLocaleLowerCase();
  for (let letra of cadena) {
    if (/[aeiouáéíóú/]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

//contarVC("Maracachafa");

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarNombre = (nombre = undefined) => {
  if (!nombre || typeof nombre !== "string")
    return console.warn(`No ingresaste un texto`);
  if (nombre.length < 3) return console.warn(`El nombre es muy corto`);
  if (nombre.length > 20) return console.warn(`El nombre es muy largo`);

  let regExp = /^[a-zA-Z\s]+$/g.test(nombre);

  return !regExp
    ? console.warn(`El nombre contiene caracteres invalidos`)
    : console.info(`El nombre ${nombre} es valido`);
};
//let nombre = prompt("Ingresa tu nombre");
//validarNombre(nombre);

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

const validarEmail = (email = undefined) => {
  if (!email || typeof email !== "string")
    return console.warn(`No ingresaste un Email`);
  if (email.length < 3) return console.warn(`El email es muy corto`);
  if (email.length > 25) return console.warn(`El email es muy largo`);

  let RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(
      email
    );

  return !RegExp
    ? console.warn(`El email no es valido`)
    : console.info(`El email ${email} es valido`);
};
//validarEmail("micha78nn@hotmail.com");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

const elevarAlCuadrado = (array = undefined) => {
  if (!array || !Array.isArray(array))
    return console.warn(`No ingresaste un array`);
  if (array.length === 0) return console.warn(`El array esta vacio`);

  let arrayCuadrado = [];
  for (let numero of array) {
    arrayCuadrado.push(numero ** 2);
  }
  return console.info(arrayCuadrado);
};

//elevarAlCuadrado([2, 4, 6]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

const numMaxMin = (arr = undefined) => {
  if (!arr) return console.warn(`No ingresaste un array`);
  if (arr.length === 0) return console.warn(`El array esta vacio`);
  // let max = array[0];
  //let min = array[0];
  /*for (let numero of array) {
    if (numero > max) max = numero;
    if (numero < min) min = numero;
  }*/
  return console.info(
    `valor maximo ${Math.max(...arr)} y valor minimo ${Math.min(...arr)}`
  );
};

//|numMaxMin([1, 4, 5, 99, -60]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const paresImpares = (array = undefined) => {
  if (!array)
    // || !Array.isArray(array))
    return console.warn(`No ingresaste un array`);
  if (!(array instanceof Array))
    return console.warn(`El valor ingresado no es un array`);
  if (array.length === 0) return console.warn(`El array esta vacio`);

  let pares = [];
  let impares = [];
  for (let numero of array) {
    numero % 2 === 0 ? pares.push(numero) : impares.push(numero);
  }
  return console.info({
    pares,
    impares,
  });
};
//paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ordenarAscDesc = (array = undefined) => {
  if (!array)
    // || !Array.isArray(array))
    return console.warn(`No ingresaste un array`);
  if (!(array instanceof Array))
    return console.warn(`El valor ingresado no es un array`);
  if (array.length === 0) return console.warn(`El array esta vacio`);

  for (let num of array) {
    if (typeof num !== "number")
      return console.warn(`El valor ingresado no es un numero`);
  }
  return console.info({
    array,
    asc: array.map((el) => el).sort(),
    desc: array
      .map((el) => el)
      .sort()
      .reverse(),
  });
};
//ordenarAscDesc([7, 5,7,8,6]);

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

const quitarDuplicados = (array = undefined) => {
  if (!array)
    // || !Array.isArray(array))
    return console.warn(`No ingresaste un array`);
  if (!(array instanceof Array))
    return console.warn(`El valor ingresado no es un array`);
  if (array.length === 0) return console.warn(`El array esta vacio`);
  if (array.length === 1)
    return console.warn(`El array debe tener mas de 1 elemento`);

  /*return console.info({
    original: array,
    sinDuplicados: array.filter((value,index,self) => self.indexOf(value) === index),*/

  /**/ return console.info({
    original: array,
    sinDuplicados: [...new Set(array)],
  });
};

//quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (array = undefined) => {
  if (array === undefined) return console.warn(`No ingresaste un array`);
  if (!(array instanceof Array))
    return console.warn(`El valor ingresado no es un array`);
  if (array.length === 0) return console.warn(`El array esta vacio`);
  if (array.length === 1)
    return console.warn(`El array debe tener mas de 1 elemento`);

  for (let num of array) {
    if (typeof num !== "number")
      return console.warn(`El valor ingresado no es un numero`);

    return console.info(
      array.reduce((total, num, index, arr) => {
        total += num;
        if (index === arr.length - 1) {
          return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
        } else {
          return total;
        }
      })
    );
  }
};
//promedio([9,8,7,6,5,4,3,2,1,0]);

/* 27) Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.       - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

/* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War,Western*/

class Pelicula {
  constructor({ id, titulo, director, año, paises, generos, calificacion }) {
    this.titulo = titulo;
    this.director = director;
    this.id = id;
    this.año = año;
    this.paises = paises;
    this.generos = generos;
    this.calificacion = calificacion;

    //instanciar metodo
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarAño(año);
    this.validarPaises(paises);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  /**/ static get listaGeneros() {
    //cuando un atributo es estatico se puede llamar sin instanciar la clase
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-Show",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  static generosAceptados() {
    //metodo estatico que devuelve los géneros aceptados
    return console.info(
      `Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  //metodos
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (typeof valor !== "string")
      return console.error(`${propiedad} "${valor}" no es un string.`);

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" tiene una longitud de ${longitud}`
      );

    return true;
  }

  validarLongitudNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (typeof valor !== "number")
      return console.error(`${propiedad} "${valor}" no es un numero.`);

    if (valor.length < 4)
      return console.error(
        `${propiedad} "${valor}" tiene una longitud de ${longitud}`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (!(valor instanceof Array))
      return console.error(`${propiedad} "${valor}" no es un arreglo.`);

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos.`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`${propiedad} "${valor}" no es un string.`);
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido,debe tener 9 caracteres,los 2 primeros letras minusculas,los 7 restantes numeros.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarAño(año) {
    if (this.validarLongitudNumero("Año", año))
      if (!/^([0-9]){4}$/.test(año))
        return console.error(
          `El Año "${año}" no es valido,debe ser un numero de 4 digitos.`
        );
  }

  validarPaises(paises) {
    this.validarArreglo("Paises", paises);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarLongitudNumero("Calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(`La calificacion debe ser un numero del 0 al 10`)
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(`
  Ficha Tecnica
   Titulo: ${this.titulo}
   Director: ${this.director}
   IMDB id: ${this.id}
   Año de estreno: ${this.año}
   Paises: ${this.paises.join("-")}
   Generos: ${this.generos.join(",")}
   Calificacion: ${this.calificacion}
    `);
  }
}

//Pelicula.generosAceptados();
/*const peli = new Pelicula({
  id: "tt0111161",
  titulo: "El señor de los anillos",
  director: "Peter Jackson",
  año: 2001,
  paises: ["España", "EEUU"],
  generos: ["Fantasy", "Adventure"],
  calificacion: 5.89,
});

peli.fichaTecnica();*/

const misPelis = [
  {id: "tt0111161",
  titulo: "El señor de los anillos",
  director: "Peter Jackson",
  año: 2001,
  paises: ["España", "EEUU"],
  generos: ["Fantasy", "Adventure"],
  calificacion: 7.29
},

  {id: "tt0111161",
  titulo: "Mision Imposible",
  director: "Peter Jackson",
  año: 1997,
  paises: ["España", "EEUU"],
  generos: ["Fantasy", "Adventure"],
  calificacion: 4.89
},

  {id: "tt0111161",
  titulo: "Avengers Endgame",
  director: "Peter Jackson",
  año: 2020,
  paises: ["España", "EEUU"],
  generos: ["Fantasy", "Adventure"],
  calificacion: 8.25
}
]

//misPelis.forEach(el => new Pelicula(el).fichaTecnica())