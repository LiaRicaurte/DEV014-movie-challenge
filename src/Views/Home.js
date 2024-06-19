
import filterByYear from "../components/filterByYear.js";
import { getMovieFilter } from "../lib/getMovies.js";
import { renderCards } from "../components/cards.js";
import { getApiMovies } from "../lib/getMovies.js";

export const Home =()=>{
    const section = document.createElement('section')
    const header = document.createElement('header')
    const title = document.createElement('h1')
    const filter = filterByYear()

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

    title.textContent = 'CINE EN CASA'
    header.append(title, filter)
    section.append(header, movies)
    
    return section    
}

 