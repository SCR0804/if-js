const parent = document.querySelector('#render_section');
const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

async function fetchData() {
    const response = await fetch(url);
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



fetchData();