
import { renderCards } from "../components/cards.js";
import { getApiMovies } from "../lib/getMovies.js";

export const Home =()=>{
    const movies = document.createElement('div')

    //función asíncrona
    getApiMovies()
        .then((response)=>{
            //console.log('ver response en home.js', response)
            const moviesResult = renderCards(response)
            //console.log('ver result', moviesResult)
            movies.appendChild(moviesResult) 
        })
        .catch(err=>console.log(err))
    return movies    
}

 