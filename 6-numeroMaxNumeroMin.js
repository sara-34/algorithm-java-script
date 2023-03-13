let array = []

function numMaxMin(array) {
    let numMax = array[0];
    let numMin = array [0];
    for (let i = 0; i < array.length; i++) {
        numMax = Math.max(array[i], numMax);
        numMin = Math.min(array[i],numMin);
    }
      return ([numMax, numMin]);
};