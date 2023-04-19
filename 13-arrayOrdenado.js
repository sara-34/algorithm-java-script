let arr = [10, 15, 1, 3, 5, 7];

function organizarArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temporal = arr[i];
                arr[i] = arr[j];
                arr[j] = temporal;
            }
        }
    }
    return arr;
}


let array = [10, 56, 3, 45, 20, 18, 2, 1];

function parEimpar(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i]) % 2 == 0 && Math.abs(array[j]) % 2 == 1) {
                    let temporal = array[i];
                    array[i] = array[j];
                    array[j] = temporal;
            }
            if (Math.abs(array[i]) % 2 == 0 && Math.abs(array[j]) % 2 == 0) {
                if (array[i] > array[j]) {
                    let temporal = array[i];
                    array[i] = array[j];
                    array[j] = temporal;
                }

            }
            if (Math.abs(array[i]) % 2 == 1 && Math.abs(array[j]) % 2 == 1) {
                if (array[i] > array[j]) {
                    let temporal = array[i];
                    array[i] = array[j];
                    array[j] = temporal;
                }
            }

        }
    }

    return array;

}

