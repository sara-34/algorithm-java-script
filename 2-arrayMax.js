let array = [];

function numMaxArray(array) {
    let numMax = array[0];

    for (let i = 0; i < array.length; i++) {
        numMax = Math.max(array[i], numMax)
    }

    return numMax;
    
}

