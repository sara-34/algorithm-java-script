function vocales(palabras) {
    palabras = palabras.toLowerCase();
    let totalVocales = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a" || palabras[i] === "e" || palabras[i] === "i" || palabras[i] === "o" ||palabras[i] === "u") {
            totalVocales++;
            
            
        }
        
    }return totalVocales;
    
}