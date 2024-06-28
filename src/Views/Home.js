
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

    filter.addEventListener('change', (e) => {
        console.log(e.target.value)
        getMovieFilter(e.target.value)
            .then((response)=>{
                movies.innerHTML = ''
                //console.log(response)
                const filterResult = renderCards(response)
                movies.appendChild(filterResult)
            })
            .catch(err=>console.log(err))
    })

    //función asíncrona
    getApiMovies()
        .then((response)=>{
            //  console.log('ver response en home.js', response)
            const moviesResult = renderCards(response)
            //console.log('ver result', moviesResult)
            movies.appendChild(moviesResult) 
        })
        .catch(err=>console.log(err))

    title.textContent = 'HOME CINEMA'
    header.append(title, filter)
    section.append(header, movies)
    
    return section    
}

 