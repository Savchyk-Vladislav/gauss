function gaussMethod(matrix) {
    let size = matrix.length;  
    for (let i = 0; i < size; i++) {

        let tempEl = matrix[0][i];
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[0][j] = matrix[0][j] / tempEl;
        }

        for (let j = 1; j < matrix.length; j++) {
            tempEl = matrix[j][i];
            for (let k = 0; k < matrix[j].length; k++) {
                matrix[j][k] -= matrix[0][k] * tempEl;
            }
        }

        for (let j = 1; j < matrix.length; j++) {
            [matrix[j - 1], matrix[j]] = [matrix[j], matrix[j - 1]];
        }
    }

    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        res[i] = parseFloat(matrix[i][matrix[i].length - 1]).toFixed(2);
        res[i] = parseFloat(res[i]);
    }

    return res;
}

let matrix = [[2, 7, 3, 980], [3, 4, 5, 780], [5, 6, 1, 860]];
let res = gaussMethod(matrix);
console.log(res);