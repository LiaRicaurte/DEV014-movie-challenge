import { navigateTo } from "../router";


export const renderCards = (data) => {

  const ul = document.createElement("ul");

  ul.classList.add('flex-container');

  data.forEach(card => {
    const cardLi = document.createElement("li");
    cardLi.classList.add('flex-item');

    cardLi.setAttribute('itemscope', '')
    cardLi.setAttribute('itemtype', card.id)

    const semanticHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${card.poster_path}" alt="${card.original_title}" />
        <dl itemscope itemtype="TMDBMovies">
        <dd itemprop="title">${card.original_title}</dd>
        <dd itemprop="releaseDate">${card.release_date}</dd>
        </dl> 
        <button id="buttonSeeMore">See more</button> 
        `
    cardLi.innerHTML = semanticHTML;

    const buttonSeeMore = cardLi.querySelector("#buttonSeeMore");
    buttonSeeMore.addEventListener('click', function () {
      navigateTo('/detail', { id: card.id })
    })

    ul.append(cardLi);
  })

  return ul;
};