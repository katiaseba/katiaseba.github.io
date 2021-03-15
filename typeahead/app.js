const endpoint = 'https://raw.githubusercontent.com/meilisearch/MeiliSearch/master/datasets/movies/movies.json';
const titles = []

fetch(endpoint)
.then(response => response.json())
.then(data => titles.push(...data))

function findMatches(wordToMatch, titles){
  return titles.filter(movie => {
    const regex = new RegExp(wordToMatch, 'gi')
    return movie.title.match(regex) 
  }) 
}

function displayMatches() {
  const matchArray = findMatches(this.value, titles)
  const html = matchArray.map(movie => {
    const regex = new RegExp(this.value, 'gi')
    const movieTitle = movie.title.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
    <span class="name"> ${movieTitle} </span> 
    <span class="genre"> ${movie.genres} </span>
    </li>
    `
  }).join('')
  suggestions.innerHTML=html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)