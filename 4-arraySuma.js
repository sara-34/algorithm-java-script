const numeroSuma = [3,4,5,6];

function arraySuma(numeroSuma) {
    let suma = 0;
    for (let i = 0; i < numeroSuma.length; i++) {
        suma += numeroSuma[i];
    }
    return suma;
    
}