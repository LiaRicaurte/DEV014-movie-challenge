

//crear función que renderice los detalles de peliculas en elementos del DOM
export const renderDetail = (movie) => {
  //console.log(movie)
  // crear un elemento que contenga el componente de vista
    const div = document.createElement("div");
    div.classList.add('flex-movie');
    //<img class="imageBackground" src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.original_title}" />

    const semanticHTML = `
        <div>  
          <img class="image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}" />
        </div>
        <div class="details">
          <dl itemscope itemtype="TMDBMovies">
            <div class="movieHeader">
            <dt itemprop="name"></dt><dd itemprop="detailTitle">${movie.original_title}</dd>
            <dt itemprop="name"></dt><dd itemprop="detailDate">${movie.release_date}</dd>
          </div>
          <div class="movieInfo">
            <div class="runTime"><dt itemprop="name"><b>Runtime:</b></dt><dd itemprop="description">${movie.runtime + ' min'}</dd></div>  
            <div class="genre"><dt itemprop="name"><b>Genre:</b></dt><dd itemprop="description">${movie.genres.map(gen=>` ${gen.name}`)}</dd></div>
          </div>
          <div class="movieOverview">
            <dt itemprop="name"><b>Overview:</b></dt><dd itemprop="description">${movie.overview}</dd>
          </div>
          </dl> 
        </div>
        `
      div.innerHTML = semanticHTML;
    // recibir como propiedad el id 
return div
  };