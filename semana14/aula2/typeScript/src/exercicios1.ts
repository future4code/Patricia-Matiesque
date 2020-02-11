const arr: number[] = [1, 2, 3]

type dados = {
    quantidadeNumeros: number,
    quantidadeImpares: number,
    somaArray: number,
}

const calcularNumeros = (arr: number[]): dados => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        } else (i % 2 === 0) {
            console.log(i)
        }
    }

    const respostas: dados = {
        quantidadeNumeros: arr.length,
        quantidadeImpares: 0,
        somaArray: 0,
    }
    return respostas
}

const resultados: dados = calcularNumeros(arr)
console.log(resultados)
