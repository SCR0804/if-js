const wrapper = document.querySelector('.available_hotels');
const input = document.querySelector('#destination');
const btn = document.querySelector('.submit');
const parent = document.querySelector('#available_section');

const url = 'https://fe-student-api.herokuapp.com/api/hotels';


async function fetchData() {
    const response = await fetch(`${url}?search=${input.value}`);
    const data = await response.json();

    const cards = data.map(card => `<figure class="homes_pic">
    <img src=${card.imageUrl} alt=${card.name}>
                    <figcaption class="homes_desc">
                        ${card.name}
                    </figcaption>
                    <figcaption class="homes_desc_two">
                        ${card.city}, ${card.country}
                        </figcaption>
    </figure>`).join('');
    parent.insertAdjacentHTML('afterbegin', cards);
};


btn.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.style.display = 'block';
    fetchData();
})
