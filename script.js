const search = window.location.search.split('?')[1];
const expectedParams = ['first', 'second', 'third%5B%5D'];
const getParams = search.split('&').map(function (param) {
    return param.split('=');
});

let count = 0;
let subcount = 0;
getParams.forEach(function (data) {
    console.log(data[0]);
    console.log(data[1]);
    if (expectedParams.includes(data[0]) && data[1] === 'correct' && !data[0].endsWith('%5B%5D')) {
        count++;
    } else if (expectedParams.includes(data[0]) && data[1] === 'correct' && data[0].endsWith('%5B%5D')) {
        subcount++;
    }

});

if (subcount === 2) {
    count += 1;
}

const result = document.getElementById('result');

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

