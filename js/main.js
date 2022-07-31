const input = document.querySelector('#settings');
const filter = document.querySelector('#filter');

const openModal = () => {
    filter.style.display = 'block';
}

const closeModal = (event) => {
    if(event.target.contains(filter)) {
        filter.style.display = 'none';
    }
}

input.addEventListener('click', openModal);

document.addEventListener('click',closeModal);


const buttonsPlus = document.querySelectorAll('.form_btn__plus');
const buttonsMinus = document.querySelectorAll('.form_btn__minus');
const valueFields = document.querySelectorAll('.form_filter__value');

console.log(buttonsPlus);

const changeType = {
    plus: 'plus',
    minus: 'minus',
}

const changeValue = (currentValue, type, limit) => {
    let result = currentValue;

    if (currentValue === limit) {
        return result;
    }

    if(type === changeType.plus) {
        result = currentValue + 1;
        return result;
    }

    result = currentValue - 1;
    return result;
}

buttonsPlus.forEach((button, index) => {
    button.addEventListener('click', () => {
        let value = +valueFields[index].textContent;
        valueFields[index].textContent = changeValue(value, changeType.plus, +button.dataset.max);
    })
});

buttonsMinus.forEach((button, index) => {
    button.addEventListener('click', () => {
        let value = +valueFields[index].textContent;
        valueFields[index].textContent = changeValue(value, changeType.minus, 0);
    })
});

const btnAddChild = document.querySelector('.add_child');
const childrenWrap = document.querySelector('.form_children');
const childrenBox = document.querySelector('.form_children__box');
const btnRemoveChild = document.querySelector('.remove_child');
const child = `<select name="select" class="child"> 
  <option value="value1">1 year old</option>
  <option value="value2" selected>2 years old</option>
  <option value="value3">3 years old</option>
  <option value="value4">4 years old</option>
  <option value="value5">5 years old</option>
  <option value="value6">6 years old</option>
  <option value="value7">7 years old</option>
  <option value="value8">8 years old</option>
  <option value="value9">9 years old</option>
  <option value="value10">10 years old</option>
  <option value="value11">11 years old</option>
  <option value="value12">12 years old</option>
  <option value="value13">13 years old</option>
  <option value="value14">14 years old</option>
  <option value="value15">15 years old</option>
  <option value="value16">16 years old</option>
  <option value="value17">17 years old</option>  
</select>`;

btnAddChild.addEventListener('click', () => {
    const allChildren = document.querySelectorAll('.child').length;

    if (allChildren === +btnAddChild.dataset.max) {
        return;
    }

    childrenWrap.style.display = 'block';
    childrenBox.insertAdjacentHTML('afterbegin', child);
})

btnRemoveChild.addEventListener('click', ()=>{
    const allChildren = document.querySelectorAll('.child');

    if(allChildren.length > 0){
        allChildren[allChildren.length-1].remove();
    }

    if(allChildren.length === 1){
        childrenWrap.style.display = 'none';
    }

})