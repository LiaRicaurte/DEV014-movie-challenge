export function getApi () {
  
  //crear función que haga una petición de data a la API (promesa o fetch?)
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=439469e2f1ad7767d8b48fd06cff0da4')
  .then(response => response.json())
  .then(response => response.results)
  .catch(err => console.error(err));
}
      
 