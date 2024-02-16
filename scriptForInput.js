document.querySelector('button').addEventListener('click', function() {
    // Получаем все div'ы с классом 'rowInp'
    let rows = document.querySelectorAll('.rowInp');

    // Проверяем, не превышает ли количество полей ввода 10
    if (rows[0].querySelectorAll('.squareInp').length < 10) {
        // Проходим по каждому div'у
        rows.forEach(function(row) {
            // Создаем новый input
            let newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.className = 'squareInp';

            // Создаем новый label
            let newLabel = document.createElement('label');
            newLabel.textContent = 'x' + (row.querySelectorAll('.squareInp').length + 1);

            // Получаем label и input, которые нужно переместить
            let equalsLabel = row.querySelector('label[for=""]');
            let resultInput = row.querySelector('.result');

            // Удаляем их из текущего положения
            row.removeChild(equalsLabel);
            row.removeChild(resultInput);

            // Добавляем новый input и label
            row.appendChild(newInput);
            row.appendChild(newLabel);

            // Возвращаем label и input обратно в конец div
            row.appendChild(equalsLabel);
            row.appendChild(resultInput);
        });
    } else {
        alert('Максимальное количество полей ввода - 10');
    }

    // Проверяем, не превышает ли количество div 10
    if (rows.length < 10) {
        // Получаем div, который нужно дублировать
        let rowToClone = rows[rows.length - 1];

        // Создаем копию div
        let clonedRow = rowToClone.cloneNode(true);

        // Обновляем id и очищаем значения полей ввода в склонированном div
        clonedRow.id = 'rowInp' + (rows.length + 1);
        let inputs = clonedRow.querySelectorAll('input');
        inputs.forEach(function(input) {
            input.value = '';
        });

        // Добавляем новый div в форму
        document.querySelector('form').appendChild(clonedRow);
    }
});



