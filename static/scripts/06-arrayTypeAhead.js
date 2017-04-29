const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// json with information about city and state names

// initiate cities as an empty array so items will be pushed to it according to what is searched
const cities = [];

// fetch is a promise that returns an object with the data that was requested
fetch(endpoint)
  .then(blob => blob.json()) // blob is simply the name to what will be returned by the endpoint json feed, which then is parsed to json
  .then(data => cities.push(...data)); // push data to the cities array, ... is the spread operator

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // regex to add commas between the numbers
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');

    // add matched results found inside our span elements
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    // return cityName and stateName as list elements
    // also replaces population numbers for numbers with commas
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches); // updates matched results on each change (click outside input)
searchInput.addEventListener('keyup', displayMatches); // updates matched results on each keyup