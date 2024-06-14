

//crear función que renderice los detalles de peliculas en elementos del DOM
export const renderDetail = (movie) => {
  console.log(movie)
  // crear un elemento que contenga el componente de vista
    const div = document.createElement("div");
    div.classList.add('flex-movie');
    //<img itemprop="background" src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.original_title}" />

    const semanticHTML = `  
        <img src="https://image.tmdb.org/t/p/w500/${movie.belongs_to_collection.poster_path}" alt="${movie.original_title}" />
        <dl itemscope itemtype="TMDBMovies">
        <div class="movieHeader">
          <dt itemprop="name"></dt><dd itemprop="description">${movie.original_title}</dd>
          <dt itemprop="name"></dt><dd itemprop="description">${movie.release_date}</dd>
        </div>
        </div class="movieDetails">
          <dt itemprop="name">Duración:</dt><dd itemprop="description">${movie.runtime}</dd>  
          <dt itemprop="name">Género:</dt><dd itemprop="description">${movie.genres.map(gen=>`${gen.name}`)}</dd>
        </div class="movieOverview">
          <dt itemprop="name">Sinopsis:</dt><dd itemprop="description">${movie.overview}</dd>
        </div>
        </dl> 
        `
      div.innerHTML = semanticHTML;
    // recibir como propiedad el id 
return div
  };