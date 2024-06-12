

//crear función que renderice los detalles de peliculas en elementos del DOM
export const renderDetail = (movie) => {
  console.log(movie)
  //console.log('algo');
    // crear un elemento 
    const div = document.createElement("div");

    const semanticHTML= `
    <h1>algo</h1>
        <dl itemscope itemtype="TMDBMovies">
        <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.original_title}" />
        <dd itemprop="originalTitle">${movie.original_title}</dd>
        <dd itemprop="releaseDate">${movie.release_date}</dd>
        <dd itemprop="runtime">${movie.runtime}</dd>  
        <dd itemprop="genre">${movie.genres.map(gen=>`<strong> ${gen.name}</strong>`)}</dd>
        <dd itemprop="overview">${movie.overview}</dd>
        </dl> 
        `
      div.innerHTML=semanticHTML;
    // recibir como propiedad el id 
    // llmas ala API con la funcion getDetailMovie
return div
  };