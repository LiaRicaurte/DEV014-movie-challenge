export function getApiMovies () {
  
    //crear función que haga una petición de data de peliculas a la API
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=439469e2f1ad7767d8b48fd06cff0da4')
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
  }

export function getApiDetail (id) {
    //crear función que haga una petición de data de detalles de peliculas a la API
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=439469e2f1ad7767d8b48fd06cff0da4`)
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
  }