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

const deepEqual = (object1, object2) => {
    for(let prop in object1){
        if(object1.hasOwnProperty(prop)){
            if(object1[prop] !== object2[prop]){
                return false;
            }
        }
    }
    for(let prop in object2){
        if(object2.hasOwnProperty(prop)){
            if(object2[prop] !== object1[prop]){
                return false;
            }
        }
    }
    return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj2, obj3));






