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

document.querySelector('.countTheResults').addEventListener('click', function() {
    let matrix = [];
    let rows = document.querySelectorAll('.rowInp');
    for (let i = 0; i < rows.length; i++) {
        let inputs = rows[i].querySelectorAll('.squareInp');
        let result = rows[i].querySelector('.result');
        let row = [];
        for (let j = 0; j < inputs.length; j++) {
            row.push(parseFloat(inputs[j].value));
        }
        row.push(parseFloat(result.value));
        matrix.push(row);
    }
    
    let res = gaussMethod(matrix);
    
    let resultDiv = document.createElement('div');
    resultDiv.textContent = 'Результат: ' + res.join(', ');
    document.body.appendChild(resultDiv);
});

document.querySelector('.installGaussTask').addEventListener('click', function() {
    let values = [
        [2, 7, 3, 980],
        [3, 4, 5, 780],
        [5, 6, 1, 860]
    ];
    let rows = document.querySelectorAll('.rowInp');
    for (let i = 0; i < rows.length; i++) {
        let inputs = rows[i].querySelectorAll('.squareInp');
        let result = rows[i].querySelector('.result');
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = values[i][j];
        }
        result.value = values[i][values[i].length - 1];
    }
});