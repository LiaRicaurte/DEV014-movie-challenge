export function getApiMovies () {
    //crear función que haga una petición de data de peliculas a la API
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=439469e2f1ad7767d8b48fd06cff0da4')
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
  }

export function getApiDetail (id) {
    //crear función que haga una petición de data de detalles de peliculas a la API
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0NjllMmYxYWQ3NzY3ZDhiNDhmZDA2Y2ZmMGRhNCIsInN1YiI6IjY2NDQyZDM4ODg4MjFmN2UxNjJlYjljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._n8tNpaYE_--VwfIVmvSj-mMfAnv299W_0-2eLG-ukU'
      }
    };
    
    return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options) //mockear la data del fetch para los tests
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err));

    /*return fetch(`https://api.themoviedb.org/3/movie/${id}?token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0NjllMmYxYWQ3NzY3ZDhiNDhmZDA2Y2ZmMGRhNCIsInN1YiI6IjY2NDQyZDM4ODg4MjFmN2UxNjJlYjljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._n8tNpaYE_--VwfIVmvSj-mMfAnv299W_0-2eLG-ukU`)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));*/
  }