// ya no se usa
import { renderCards } from "./components/cards";
import { renderDetail } from "./components/details";
import { getApiMovies } from "./components/movieApp";
import { getApiDetail } from "./components/movieApp";

const app = document.querySelector("#app")
const buttonSeeMore = document.querySelector("#buttonSeeMore")

//función asíncrona
getApiMovies()
    .then((response)=>{
        //console.log('ver response en main.js', response)
        const moviesResult = renderCards(response)
        console.log('ver result', MoviesResult)
        app.appendChild(moviesResult) 
    })
    .catch(err=>console.log(err))

buttonSeeMore.addEventListener('click', function() {

})

//función asíncrona
/*getApiDetail()
    .then((response)=>{
        console.log('ver response en main.js', response) 
        const detailResult = renderDetail(response)
        app.append(detailResult)
    })
    .catch(err=>console.log(err))*/



