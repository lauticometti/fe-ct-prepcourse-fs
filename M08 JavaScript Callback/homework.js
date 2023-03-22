/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:

  // let mayusName = '' // Mario

  // for ( let i = 0; i < nombre.length; i++ ) {
  //    if ( i === 0 ) {
  //       mayusName += nombre[i].toUpperCase()
  //       continue
  //     }
  //    mayusName += nombre[i]
  // }
  // return mayusName

  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:

  return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb(arrayOfNumbers.reduce((a, b) => a + b, 0));
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:

  for (let arrayElement of array) {
    cb(arrayElement);
  }
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  const mapReturn = [];

  for (let arrayElement of array) {
    const cbReturn = cb(arrayElement);
    mapReturn.push(cbReturn);
  }

  //   const mapReturned = array.map((element) => cb(element));

  return mapReturn;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  const filteredArray = [];

  for (let arrayElement of arrayOfStrings) {
    if (arrayElement[0] === "a") filteredArray.push(arrayElement);
  }

  return filteredArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
