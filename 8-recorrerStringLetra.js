function nombreLtra(palabra, letra) {
    let totalLetras = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) {
            totalLetras++

        }
    }
    return totalLetras;
}