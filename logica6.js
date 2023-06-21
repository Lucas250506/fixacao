function filtro(array) {
    var numeros = [];
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        numeros.push(array[i]);
      }
    }
  
    return numeros;
  }
  console.log(filtro(["Js", 8, "hoje", 6, 7, 7, "teste"])); 
  console.log(filtro(["teste", "tentativa"])); 
  console.log(filtro([8, "nove", 10, "onze", 12])); 
  console.log(filtro([30, 40, "cinquenta", 60, 70]));