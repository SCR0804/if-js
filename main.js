// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности.

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = function (object1, object2) {
  if (
    typeof object1 === 'object' &&
    object1 !== null &&
    typeof object2 === 'object' &&
    object2 !== null
  ) {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    for (let prop in object1) {
      if (object2.hasOwnProperty(prop)) return deepEqual(object1[prop], object2[prop]);
    }
  } else if (object1 !== object2) return false;
  else return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
