
import { renderCards } from "../components/cards.js";
import { getApiMovies } from "../lib/getMovies.js";

export const Home =()=>{
    const app = document.createElement('div')

    //función asíncrona
    getApiMovies()
        .then((response)=>{
            //console.log('ver response en main.js', response)
            const moviesResult = renderCards(response)
            //console.log('ver result', moviesResult)
            app.appendChild(moviesResult) 
        })
        .catch(err=>console.log(err))
return app    
}
