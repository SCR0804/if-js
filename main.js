//Функция palindrome
const isPalindrome = (str) => str.split('').reverse().join('') === str;
console.log(isPalindrome('kayak'));
console.log(isPalindrome('rotator'));
console.log(isPalindrome('cover'));

//Функция min(a, b)
const min = (a, b) => Math.min(a, b);
console.log(min(12, 25));

const minNumber = (a, b) => (a < b ? a : b);
console.log(minNumber(58, 63));

//Функция max(a,b)
const max = (a, b) => Math.max(a, b);
console.log(max(12, 25));

const maxNumber = (a, b) => (a < b ? b : a);
console.log(maxNumber(58, 63));

//Создайте массив с десятью случайными элементами от 0 до 100
let someArray = [];
for (let i = 0; i < 10; i++) {
  someArray[i] = Math.floor(Math.random() * 100);
}

console.log(someArray);

//Напишите функцию, которая будет заменять все 0 на строку 'zero'
let numbers = [12, 150, 63, 200, 15, 205, 6090];
const changeToZero = (array) => array.join(' ').replaceAll(0, 'zero');
console.log(changeToZero(numbers));
