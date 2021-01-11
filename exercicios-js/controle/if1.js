function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdaddEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}
seForVerdaddEuFalo()
seForVerdaddEuFalo(null)
seForVerdaddEuFalo(undefined)
seForVerdaddEuFalo(NaN)
seForVerdaddEuFalo('')
seForVerdaddEuFalo(0)
seForVerdaddEuFalo(-1)
seForVerdaddEuFalo(' ')
seForVerdaddEuFalo('?')
seForVerdaddEuFalo([])
seForVerdaddEuFalo([1, 2])
seForVerdaddEuFalo({})