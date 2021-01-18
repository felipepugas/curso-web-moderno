// 01)
function numeros(x, y) {
    console.log(x + y, x - y, x * y)
}

numeros(3,4)

// 02)
function tipoTriangulo(x, y, z) {
    if (x == y && y == z) {
        console.log('Seu triângulo é Equilátero!')
    } else if (x == y || x == z || z == y) {
        console.log('Seu triângulo é Isósceles!!')
    } else {
        console.log('Seu triângulo é Escaleno!!!')
    }
}

tipoTriangulo(3, 1, 1)

// 03)
function potenciacao(base, expoente) {
    resultado = base ** expoente
    return resultado
}

console.log(potenciacao(2, 3))

// 04)
function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor))
    console.log(`Resto:  ${dividendo % divisor}`)
}
divisao(7, 3)

// 05)
function valorQuebrado(numeroQuebrado) {
    reais = `R$ ${numeroQuebrado.toFixed(2).toString().replace(".", ",")}`
    console.log(reais)
}

valorQuebrado(0.1 + 0.2)

// 06)
