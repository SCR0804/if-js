//Напишите функцию sum, которая возвращает сумму чисел
const summary = (x) => (y) => x + y;
console.log(summary(15)(35));

//Покрасьте абзацы по клику
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

let par1 = document.getElementById('text1');
let par2 = document.getElementById('text2');
let par3 = document.getElementById('text3');

const handleClick = () => {
  let i = 0;
  return function changeColor(event) {
    event.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
};

par1.addEventListener('click', handleClick());
par2.addEventListener('click', handleClick());
par3.addEventListener('click', handleClick());
