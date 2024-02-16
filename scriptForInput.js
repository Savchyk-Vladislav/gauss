document.querySelector('button').addEventListener('click', function() {
    let rows = document.querySelectorAll('.rowInp');

    if (rows[0].querySelectorAll('.squareInp').length < 10) {
        rows.forEach(function(row) {
            let newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.className = 'squareInp';

            let newLabel = document.createElement('label');
            newLabel.textContent = 'x' + (row.querySelectorAll('.squareInp').length + 1);

            let equalsLabel = row.querySelector('label[for=""]');
            let resultInput = row.querySelector('.result');
            row.removeChild(equalsLabel);
            row.removeChild(resultInput);

            row.appendChild(newInput);
            row.appendChild(newLabel);

            row.appendChild(equalsLabel);
            row.appendChild(resultInput);
        });
    } else {
        alert('Максимальное количество полей ввода - 10');
    }

    if (rows.length < 10) {
        let rowToClone = rows[rows.length - 1];
        let clonedRow = rowToClone.cloneNode(true);
        clonedRow.id = 'rowInp' + (rows.length + 1);
        let inputs = clonedRow.querySelectorAll('input');
        
        inputs.forEach(function(input) {
            input.value = '';
        });

        document.querySelector('form').appendChild(clonedRow);
    }
});