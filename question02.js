// Dados //

let x = 3
let tempoChegada = [-2,-1,0,1,2,3]
let contador = 0


// A função "forEach()" percorrerá pela array "tempoChegada", trazendo a quantidade de alunos pontuais //
tempoChegada.forEach(element => {
    if(element <= 0) {
        contador++
    } else {}
});

// Condição que verifica se a quantidade de alunos pontuais é maior ou igual à "x" //
// Se sim, aula normal, se não, aula cancelada. //
if(contador >= x){
    console.log('Aula normal.')
} else {
    console.log('Aula cancelada.')
    console.log(`Apenas ${contador} alunos chegaram dentro do horário.`)
}
