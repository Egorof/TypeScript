"use strict";
function solve(str) {
    // Преобразуем строку в массив символов
    const arr = str.split("");
    // Создаем массив для хранения результата
    const result = new Array(arr.length);
    // Получаем массив без пробелов
    const charsWithoutSpaces = arr.filter((char) => char !== " ").reverse();
    return charsWithoutSpaces;
}
console.log(solve("your code rocks"));
