const result = document.getElementById('result');
const form = document.forms.test;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const expectedData = [
        ['first', ['correct']],
        ['second', ['correct']],
        ['third[]', ['correct', 'correct']]
    ];
    let formData = new FormData(form);
    const inputNames = formData.keys();
    let count = 0;
    let checked = [];

    inputNames.forEach(function (name) {
        if (checked.includes(name)) {
            return;
        }
        checked.push(name);
        const inputData = formData.getAll(name);
        expectedData.forEach(expectedElement => {
            if (expectedElement[0] === name && isArrayEquals(expectedElement[1], inputData)) {
                count++;
            }
        });
    });
    if (count === 3) {
        result.textContent = 'Тест завершен. Хорошие знания!';
        result.style.color = 'green';
    } else if (count === 2) {
        result.textContent = 'Тест завершен. Средние знания!';
        result.style.color = 'yellow';
    } else if (count < 2) {
        result.textContent = 'Тест завершен. Плохие знания!';
        result.style.color = 'red';
    }
});

function isArrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

