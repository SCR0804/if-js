const texts = document.querySelectorAll('.text');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.current === undefined) {
      this.current = 0;
    }

    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }

    if (this.current === this.data.length) {
      this.current = 0;
      return this.next();
    }

    return {
      done: true,
    };
  },
};

function changeColor(color) {
  return function (event) {
    event.target.style.color = color.next().value;
  };
}

for (let text of texts) {
  text.addEventListener('click', changeColor({ ...colors }));
}
