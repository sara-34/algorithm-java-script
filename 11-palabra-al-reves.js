function invertirPalabra(palabra) {
    let palabraNueva = "";
    for (let i = palabra.length -1; i>= 0; i--) {
          palabraNueva += palabra[i];
        
    } 
    return palabraNueva;
}

