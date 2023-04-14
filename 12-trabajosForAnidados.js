console.log("Hola mundo")

/*Ejercicio 1*/

function piramide(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "x";
        }
        console.log(row);
    }
    
}

piramide(3);

/* Ejercicio 2*/

function piramideInvertida(n){
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "x";
        }
        console.log(row);
    }
}

piramideInvertida(3);


/*Ejercicio 3*/

function piramide(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "x";
        }
        console.log(row);
    }

    for (let i = n; i >= 2; i--) {
        let row = "";
        for (let j = 1; j < i; j++) {
            row += "x";
        }
        console.log(row);
    }
    
}

piramide(3);


/* Ejercicio 4*/

function triangulo(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for(let r = i; r < n; r++){
            row += " ";
        }
        for (let j = 0; j < i*2+1; j++) {
            row += "x";
        }
        console.log(row);
    }
    
}

triangulo(3);

/* Ejercicio 5*/

function rombo(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for(var r = i; r < n; r++){
            row += " ";
        }
        for (let j = 0; j < i*2+1; j++) {
            row += "x";
        }
        console.log(row);
    }

    for (let i = n; i >= 0; i--) {
        let row = "";
        for(var r = 0; r < n - i; r++){
            row += " ";
        }
        for (let j = 0; j < i*2+1; j++) {
            row += "x";
        }
        console.log(row);
    }
    
}