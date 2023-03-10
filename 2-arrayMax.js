const array = [8,1,3,5,10];

function numMaxArray(array) {
    let numMax = array[0];

    for (let i = 0; i < array.length; i++) {
        numMax = Math.max(array, numMax)
    }

    return numMax;
    
}

