
const parent = document.querySelector('#render_section');

const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

async function fetchData() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  const cards = data.map(item => `
    <img src=${item.imageUrl} alt=${item.name}>
                    <figcaption class="homes_desc">
                        ${item.name}
                    </figcaption>
                    <figcaption class="homes_desc_two">
                        ${item.city}, ${item.country}
                    </figcaption>
  `
  );
  parent.insertAdjacentHTML('afterbegin', cards);

}

fetchData()
