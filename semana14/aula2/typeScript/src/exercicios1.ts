const arr: number[] = [1, 2, 3, 4, 5, 6, 7]

type dados = {
    quantidadeNumeros: number,
    quantidadeImpares: number,
    somaArray: number,
}

const calcularNumeros = (arr: number[]): dados => {
    let totalDeNumerosImpares: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
    }
}

    const respostas: dados = {
        quantidadeNumeros: arr.length,
        quantidadeImpares: totalDeNumerosImpares,
        somaArray: 0,
    }
    return respostas
}


const resultados: dados = calcularNumeros(arr)
console.log(resultados)
