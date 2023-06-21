function repetir(elemento, quantidade) {
   
    if (typeof quantidade !== 'number' || quantidade < 0 || !Number.isInteger(quantidade)) {
      return "A quantidade deve ser um número inteiro não negativo.";
    }
  
    
    var arrayResultado = [];
  
   
    for (var i = 0; i < quantidade; i++) {
      arrayResultado.push(elemento);
    }
  
    return arrayResultado;
  }

console.log(repetir("teste", 9)); 
console.log(repetir(4, 2)); 
console.log(repetir("abc", 0)); 
console.log(repetir(2, -4)); 
console.log(repetir(true, 8));