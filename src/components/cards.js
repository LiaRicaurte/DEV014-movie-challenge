

//crear función que renderice el array de peliculas en elementos del DOM
export const renderCards = (data) => {
    // crear un elemento ul
    const ul = document.createElement("ul");
    //agregar un metodo que permite poner estilos al elemento ul
    ul.classList.add('flex-container');
    //iterar sobre el array de peliculas para crear elementos <li> para cada uno
    data.forEach(card => {
      const cardLi = document.createElement("li");
      
      cardLi.setAttribute('itemscope', '')
      cardLi.setAttribute('itemtype', card.id)
      //crear un elemento <dl> dentro de cada elemento <li> con los detalles de la peliucla
      const semanticHTML= `
      <dl itemscope itemtype="TMDBMovies">
      <img src="https://image.tmdb.org/t/p/w500/${card.poster_path}" alt="${card.original_title}" />
      <dd itemprop="title">${card.original_title}</dd>
      <dd itemprop="releaseDate">${card.release_date}</dd>
      </dl>  
       `
      cardLi.innerHTML=semanticHTML;
      cardLi.classList.add('flex-item');
  
      ul.append(cardLi);  
    })
    //usar metodo append para agregar elementos <li> a elementos <ul>
    return ul;
  };