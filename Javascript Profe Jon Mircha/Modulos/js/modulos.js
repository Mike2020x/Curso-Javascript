import saludar, { Saludar,PI, usuario} from "./constantes.js";
import { aritmetica as A } from "./aritmetica.js";

console.log("Archivo Modulo.js");
console.log(PI, usuario);
console.log(A.suma(7, 10));
//A = ALIAS de aritmetica
console.log(A.resta(10,7 ));

saludar();
let saludo = new Saludar();
saludo;