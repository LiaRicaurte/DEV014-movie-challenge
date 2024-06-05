import { getApiDetail } from "../lib/getMovies"

export const Detail = (props)=>{

    console.log('ver si llega el prop con el id: ', props);
    const div = document.createElement('div')
    div.textContent='Soy el detalle'

    getApiDetail(id)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

    return div
}