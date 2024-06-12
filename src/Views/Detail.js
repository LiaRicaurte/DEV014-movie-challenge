import { renderDetail } from "../components/details.js";
import { getApiDetail } from "../lib/getMovies"

export const Detail = (props)=>{
    //console.log(props);
    const {id} = props
    console.log('ver si llega el prop con el id: ', props);
    const detail = document.createElement('div')

    getApiDetail(id)
        .then((response)=>{
            detail.appendChild(renderDetail(response))
            //console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    return detail
}