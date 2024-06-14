import { renderDetail } from "../components/details.js";
import { getApiDetail } from "../lib/getMovies"

export const Detail = (props)=>{
    //console.log(props);
    const {id} = props
    const detail = document.createElement('div')

    getApiDetail(id)
        .then((response)=>{
            const detailResult = renderDetail(response)
            detail.appendChild(detailResult)
            //console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    return detail
}