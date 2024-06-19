import { renderDetail } from "../components/details.js";
import { getApiDetail } from "../lib/getMovies"

export const Detail = (props)=>{
    //console.log(props);
    const section = document.createElement('section')
    const header = document.createElement('header')
    const title = document.createElement('h1')
    const detail = document.createElement('div')

    const {id} = props
    getApiDetail(id)
        .then((response)=>{
            const detailResult = renderDetail(response)
            detail.appendChild(detailResult)
            //console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })

    title.textContent = 'CINE EN CASA'
    header.appendChild(title)
    section.append(header, detail)

    return section
}