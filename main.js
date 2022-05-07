//variables
let user = 'John Doe';
console.log(user);
let student = 'Sergey';
console.log(student);
user = student; // Sergey
console.log(user);

//primitives
let test = 1;
test++;
test += '1'; // '21'
console.log(test);
test = Boolean(test); // true
console.log(test);

//arrays
let someArray = [2, 3, 5, 8];
let multiply = 1;
for (let i = 0; i < someArray.length; i++) {
  multiply *= someArray[i];
}

console.log(multiply);

let array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 5 && array[i] < 10) console.log(array[i]);
}

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] > 0) {
    console.log(arr[i]);
  }
}
