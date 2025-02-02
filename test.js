"use strict";
function arrayDiff(arr1, arr2) {
    const set2 = new Set(arr2);
    // Используем метод фильтрации для получения элементов первого массива,
    // которые не содержатся во втором массиве
    const result = arr1.filter((item) => !set2.has(item));
    // Возвращаем результат
    return result;
}
console.log(arrayDiff([1, 1, 2, 2, 1, 3, 2, 4], [2, 1]));
function sumTwoSmallestNumbers(numbers) {
    // Сортируем массив от меньшего к большему
    const sortedNumbers = numbers.sort((a, b) => a - b);
    // Возвращаем сумму двух наименьших положительных чисел
    return sortedNumbers[0] + sortedNumbers[1];
}
// Пример использования функции
const array = [19, 5, 42, 2, 77];
const result = sumTwoSmallestNumbers(array);
console.log(result); // Вывод: 7 (2 + 5)
const toInitials = (name) => name
    .split(" ")
    .map((word) => word[0] + ".")
    .join(" ");
function solution(number) {
    return number < 1
        ? 0
        : [...new Array(number).keys()]
            .filter((n) => n % 3 == 0 || n % 5 == 0)
            .reduce((a, b) => a + b);
}
// obj.keys
function reverseStringKeepingSpaces(str) {
    // Преобразуем строку в массив символов
    const arr = str.split('');
    // Создаем массив для хранения результата
    const result = new Array(arr.length);
    // Получаем массив без пробелов
    const charsWithoutSpaces = arr.filter(char => char !== ' ').reverse();
    // Индекс для отслеживания положения в массиве с символами без пробелов
    let index = 0;
    // Заполняем результат, перезаписывая символы по индексу
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            result[i] = ' '; // Если пробел, оставляем его
        }
        else {
            result[i] = charsWithoutSpaces[index]; // Берем символ из reversed
            index++; // Переходим к следующему символу
        }
    }
    // Возвращаем перевернутую строку с сохраненными пробелами
    return result.join('');
}
