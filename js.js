
function calc() {
let a1 = +prompt('Введите первое число');
let b1 = prompt('Введите действие');
let a2 = +prompt('Введите второе число');
    if (b1 == '+') {
        alert(a1 + a2);
    } else if (b1 == '-') {
        alert(a1 - a2);
    } else if (b1 == '*') {
        alert(a1 * a2);
    } else if (b1 == '/') {
        alert(a1 / a2);
    } else if (b1 == '^') {
        alert(Math.pow(a1, a2));
    }
}

document.querySelector('button').onclick = calc;


