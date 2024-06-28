import { navigateTo } from "../router";

//crear función que renderice el array de peliculas en elementos del DOM
export const renderCards = (data) => {
    // crear un elemento ul
    const ul = document.createElement("ul");
    //agregar un metodo que permite poner estilos al elemento ul
    ul.classList.add('flex-container');
    //iterar sobre el array de peliculas para crear elementos <li> para cada uno
    data.forEach(card => {
      const cardLi = document.createElement("li");
      cardLi.classList.add('flex-item');
      
      cardLi.setAttribute('itemscope', '')
      cardLi.setAttribute('itemtype', card.id)
      //crear un elemento <dl> dentro de cada elemento <li> con los detalles de la peliucla
      const semanticHTML= `
      <img src="https://image.tmdb.org/t/p/w500/${card.poster_path}" alt="${card.original_title}" />
        <dl itemscope itemtype="TMDBMovies">
        <dd itemprop="title">${card.original_title}</dd>
        <dd itemprop="releaseDate">${card.release_date}</dd>
        </dl> 
        <button id="buttonSeeMore">See more</button> 
        `
      cardLi.innerHTML=semanticHTML;

      const buttonSeeMore = cardLi.querySelector("#buttonSeeMore");
      buttonSeeMore.addEventListener('click', function() {
        navigateTo('/detail', {id:card.id})
      })

      ul.append(cardLi);  
    })

    return ul;
  };