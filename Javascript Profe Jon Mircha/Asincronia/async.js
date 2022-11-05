/*console.log("inicio");
setTimeout(()=>{
console.log("Ejecutando un setTimeOut,se ejecuta una sola vez.");
},3000); // timeout en 1000 milisegundos =1 segundo

setInterval(() => {
    console.log("Ejecutando un setInterval,se ejecuta indefinidamente cada intervalo de tiempo.");
}, 1000);*/
/*let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("Despues del clearTimeout");*/

/*let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);
console.log("Despues del clearInterval");*/

/*Codigo Sincrono Bloqueante*/

/*(() => {
  console.log("Codigo sincrono");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
console.log("********************************************************");
Codigo Asincrono No Bloqueante*/

/*(() => {
  console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");
})();*/

//Callbacks

/*function cuadradoCallback(value, Callback) {
  setTimeout(() => {
    Callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback ${value},${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback ${value},${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log("Inicia Callback");
      console.log(`Callback ${value},${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log("Inicia Callback");
        console.log(`Callback ${value},${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log("Inicia Callback");
          console.log(`Callback ${value},${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log("Inicia Callback");
            console.log(`Callback ${value},${result}`);
          });
        });
      });
    });
  });
});*/

//Promesas

/*function cuadradoPromise(value) {
  if (typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicia Promise");
    console.log(`Promise ${obj.value},${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value},${obj.result}`);
    return cuadradoPromise(2);
  })
  .then(obj => {
    console.log(`Promise ${obj.value},${obj.result}`);
    return cuadradoPromise(3);
  })
  .then(obj => {
    console.log(`Promise ${obj.value},${obj.result}`);
    return cuadradoPromise(4);
  })
  .then(obj => {

    console.log(`Promise ${obj.value},${obj.result}`);
    return cuadradoPromise(5);
  })
  .then(obj => {
    console.log(`Promise ${obj.value},${obj.result}`);
    console.log("Fin Promise")
  })
  .catch(err => console.error(err));*/

//Async-Await
  /*function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value * value,
        });
      }, 0 | (Math.random() * 1000));
    });
  }

  async function funcionAsyncronaDeclarada(){
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value},${obj.result}`)

    obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value},${obj.result}`)
      obj = await cuadradoPromise(2);
      console.log(`Async Function: ${obj.value},${obj.result}`)
      obj = await cuadradoPromise(3);
      console.log(`Async Function: ${obj.value},${obj.result}`)
      obj = await cuadradoPromise(4);
      console.log(`Async Function: ${obj.value},${obj.result}`)
      obj = await cuadradoPromise(5);
      console.log(`Async Function: ${obj.value},${obj.result}`)
      console.log("Fin Async Function")
  } catch (err) {
console.error(err)
  }
  }

  funcionAsyncronaDeclarada()

  const funcionAsyncronaExpresada = async ()=>{
      try {
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value},${obj.result}`)
    
        obj = await cuadradoPromise(1);
          console.log(`Async Function: ${obj.value},${obj.result}`)
          obj = await cuadradoPromise(2);
          console.log(`Async Function: ${obj.value},${obj.result}`)
          obj = await cuadradoPromise(3);
          console.log(`Async Function: ${obj.value},${obj.result}`)
          obj = await cuadradoPromise(4);
          console.log(`Async Function: ${obj.value},${obj.result}`)
          obj = await cuadradoPromise(5);
          console.log(`Async Function: ${obj.value},${obj.result}`)
          console.log("Fin Async Function")
      } catch (err) {
    console.error(err)
      }
      }

  funcionAsyncronaExpresada()*/

  