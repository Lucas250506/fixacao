function calcularDiasDeVida(idade) {
    if (idade < 0) {
      return "A idade não pode ser um número negativo.";
    } else {
      var dias = idade * 365;
      return dias;
    }
  }
  console.log(calcularDiasDeVida(25));   
  console.log(calcularDiasDeVida(-10));   
  console.log(calcularDiasDeVida(40));   