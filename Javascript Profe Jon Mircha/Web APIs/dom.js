/*let texto = "Hola mi nombre es Michael tengo 25 años y vivo en colombia";
const hablar = (texto) =>
speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);

console.log("*******Elementos del Documento********");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);// = <html>
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());    
}, 2000);
//console.log(document.getElementsByTagName("li"));
//console.log(d ocument.getElementsByClassName("card"));
//console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el)=>console.log(el));

console.log(document.querySelectorAll("#menu li"));

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
//************ 
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
//**************** 
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//*****************
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);
//----------------- $ = Variable del DOM--------------------------
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://www.youtube.com");
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "NEW NAME");
console.log($linkDOM.dataset.description);
//******************************
$linkDOM.dataset.description = "3er name con notacion del punto 😎";
console.log($linkDOM.dataset.description);

function tituloDinamico() {
  let i = 0;
  setInterval(() => {
    i++;
    document.title = `DOM - Cambio nº ${i}`;
  }, 1000);
}

tituloDinamico();
*/
const $linkDOM = document.querySelector(".link-dom");

//console.log($linkDOM.style.backgroundColor);

//console.log(window.getComputedStyle($linkDOM));
//console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
// 😎
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.marginTop = "10px";

//console.log($linkDOM.style);
//console.log($linkDOM.getAttribute("style"));
// Variables CSS - Custom Properties
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
//console.log(varDarkColor, varYellowColor);

$linkDOM.style.background = varYellowColor;
$linkDOM.style.color = varDarkColor;

//$body.style.background = varDarkColor;
//$body.style.color = varYellowColor;

//$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//$body.style.setProperty("background-color",varDarkColor)

//const $card = document.querySelector(".card");

//console.log($card.className);

//$card.classList.add("rotate-45");
//console.log($card.classList.contains("rotate-45"));
// remove and toggle
//$card.classList.remove("rotate-45")
//$card.classList.toggle("rotate-45");
//*****replace
//$card.classList.replace("rotate-45", "rotate-135");
//
//$card.classList.add("opacity-80", "sepia");
//$card.classList.remove("opacity-80", "sepia", "rotate-45");

//console.log($card.classList)

const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>El modelo de objetos del documento (<b><i>DOM-Document Object Model</i></b>) es una API para documentos HTML y XML.</p>
<p>Este provee una representacion estructural del documento,permitiendo modificar su contenido y presentacion visual mediante codigo JS.</p>
<p>
  <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.</mark>
</p>`;

//$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

//const $cards = document.querySelector(".cards");

/*console.log($cards);
console.log($cfards.children);
console.log($cards.children[2]);
//console.log($cards.parentNode);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

console.log($cards.previousElementSibling);

console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));


const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);
/************************ 
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año </h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["America", "Europa", "Africa", "Asia", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
// *****************FRAGMENTOS**************

const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


//*****************TTEMPLATES HTML*************************
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach( el => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
//Modificar elementos
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true)
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
  `;

$newCard.classList.add("card");
//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//$cards.insertBefore($newCard, $cards.lastElementChild);
$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards)*/
//****NUevos metodos**********
/*
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
  `;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);
/**************************** */
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);

/*MANEJADORES DE EVENTOS*/
/*--*/
function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  //nombre = prompt("Dime tu nombre");
  alert("Hola " + nombre);
}
const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");
$eventoSemantico.onclick = holaMundo; //<--/*-*/
$eventoSemantico.onclick = function (e) {
  console.log(e);

  alert("hola Mundo manejador de eventos semantico");
};
// desventaja : solo puedes añadir un evenHandler. Se reemplaza

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});

const removerDobleClick = (e) => {
  alert(`removiendo el evento de tipo ${e.type} `);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");
function flujoEventos(e) {
  console.log(
    `Hola ${this.className},el click lo origino ${e.target.className}`
  );
  //****
  e.stopPropagation();
}
console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //Fase de captura
  //div.addEventListener("click",flujoEventos,true)
  //div.addEventListener("click",flujoEventos,{
  //capture:false,
  //once:true, // el Evento se ejecuta una sola vez
  //})
});

$linkEventos.addEventListener("click", (e) => {
  alert("hey");
  //e.preventDefault();
});
//********************* */

window.addEventListener("resize",(e)=>{
console.clear();
console.log("***Evento Resize***");
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(e);
});