// Função para retornar o numero invertido //
const reverso = (num) => {
    return (
      parseFloat(num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }



// Função para somar os valores //
const SUM = (value1, value2) => {
    return value1 + value2
}


let v = []

// Looping para retornar "num" + "reverso(num)" que sejam impares //
for(let num = 0; reverso(num) < 1000000; num++){
    if((num % 10) != 0 && (reverso(num) % 10) != 0){ // Verificar se o numero não termina com 0, se sim, retorna ao looping
        revNum = reverso(num)
        answer = num + revNum
        if((answer % 2) != 0){  // Verificar se o valor é impar, se não, retorna ao looping e não insere na array
            v.push(answer) // inseri os valores em uma array, para agilizar o processo
        }
    }
    
}

console.log(v) // retorna todos os valores
console.log(v.length) // retorna o total de valores 

