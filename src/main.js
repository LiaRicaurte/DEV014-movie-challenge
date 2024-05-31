import { renderCards } from "./components/cards";
import { getApi } from "./components/movieApp";

const app = document.querySelector("#app")

//función asíncrona
getApi()
    .then((response)=>{
        console.log('ver response en main.js', response)
        const result = renderCards(response)
        console.log('ver result', result)
        app.appendChild(result) 
    })
    .catch(err=>console.log(err))





