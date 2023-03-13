let numeroArr = [];
function  arreglo(numeroArr) {
    let numerosPares = [];
    for (let i = 0; i < numeroArr.length; i++) {
        if (numeroArr[i] % 2 == 0) {
            numerosPares.push(numeroArr[i]);
        }
    } return numerosPares;
    
}