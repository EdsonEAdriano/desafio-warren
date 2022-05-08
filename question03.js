// Dados //
let n = 10
let v = [2,3,4]
let vAnswer = []
let vTemp = []

// Função para calcular os valores dentro do vetor "v" //
const SUM = (array) => {
    let sum = 0
    array.forEach(element => {
        sum = sum + element
    })

    return sum
}



const array2Valores = () => {
    // Looping para inserir todas as combinações do vetor "v", na variavel "vAnswer" //
    for(let x of v){
        for(let y of v){
                vAnswer.push([x, y])

        }
    }

    // Looping para mostrar no console apenas as combinações que no total é igual a variavel "n" //
    for(let i = 0; i < vAnswer.length; i++){
        if(SUM(vAnswer[i]) == n){        
            vTemp.push(vAnswer[i])
        } else {}
    }
    return vTemp.length
}

const array3Valores = () => {
    // Looping para inserir todas as combinações do vetor "v", na variavel "vAnswer" //
    for(let x of v){
        for(let y of v){
            for(let z of v){
                vAnswer.push([x, y, z])

            }   
        }
    }

    // Looping para mostrar no console apenas as combinações que no total é igual a variavel "n" //
    for(let i = 0; i < vAnswer.length; i++){
        if(SUM(vAnswer[i]) == n){        
            vTemp.push(vAnswer[i])
        } else {}
    }

    return vTemp.length
}

const array4Valores = () => {
    // Looping para inserir todas as combinações do vetor "v", na variavel "vAnswer" //
    for(let x of v){
        for(let y of v){
            for(let z of v){
                for(let a of v){
                    vAnswer.push([x, y, z, a])
    
                }  
            }   
        }
    }

    // Looping para mostrar no console apenas as combinações que no total é igual a variavel "n" //
    for(let i = 0; i < vAnswer.length; i++){
        if(SUM(vAnswer[i]) == n){        
            vTemp.push(vAnswer[i])
        } else {}
    }

    return vTemp.length

}

const array5Valores = () => {
    // Looping para inserir todas as combinações do vetor "v", na variavel "vAnswer" //
    for(let x of v){
        for(let y of v){
            for(let z of v){
                for(let a of v){
                    for(let b of v){
                        vAnswer.push([x, y, z, a, b])
        
                    } 
    
                }  
            }   
        }
    }

    // Looping para mostrar no console apenas as combinações que no total é igual a variavel "n" //
    for(let i = 0; i < vAnswer.length; i++){
        if(SUM(vAnswer[i]) == n){        
            vTemp.push(vAnswer[i])
        } else {}
    }

    return vTemp.length

}

// Condição para verificar qual a menor array //
if(array2Valores() > 0) {
} 
else if (array3Valores() > 0){
} 
else if (array4Valores() > 0){
} 
else if (array5Valores() > 0){
} 
else {}


console.log(vTemp)