let ROUTES = {}; // este es un objeto que va almacenar todas las rutas del proyecto, compuestas por un pathname (key) y un componente/vista (value)
let rootEl = ''; // hace referencia al elemento HTML (#root) que va a pintar las vistas/componentes

//esta función (un setter) asigna un valor a rootEl y lo valida 
export const setRootEl = (el) => { //parámetro (el) debe ser el elemento <div> del DOM que pinta la data consumida
  // assign rootEl
  rootEl = el 
}

//esta función (un setter) asigna un valor a ROUTES y lo valida 
export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  Object.assign(ROUTES,routes)
}


export const queryStringToObject = (queryString) => {
    if(!queryString) 
    return {};
  // convert query string to URLSearchParams
  let params = new URLSearchParams(queryString)
  // convert URLSearchParams to an object
  const obj = Object.fromEntries(params)
  // return the object
  return obj
}

// esta función se encarga de limpiar el contenido de root y pintar nuevo contenido (para que no se añadan nuevos componentes a los ya pintados)
const renderView = (pathname, props={}) => {
  // clear the root element
  rootEl.innerHTML=''
  // find the correct view in ROUTES for the pathname
  const route = ROUTES[pathname]
  // in case not found render the error view
  if(!route){
    rootEl.innerHTML= 'Error 404 ruta no encontrada'
  }
  // render the correct view passing the value of props
  //renderView(pathname, props)
  // add the view element to the DOM root element
  rootEl.appendChild(route(props))
} 

//esta funcion se encarga de almacenar el historial de rutas que ha visitado el navegador, lo cual nos permite usar el boton atras y adelante del navegador
export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  window.history.pushState({},pathname, `${window.location.origin+pathname}${props?`?${new URLSearchParams(props)}`:''}`)
  // render the view with the pathname and props
  renderView(pathname, props)
}

export const onURLChange = (location='/', props = {}) => { //location es el objeto que contiene las rutas
  // parse the location for the pathname and search params
  // convert the search params to an object, pasarle la url con queryStringToObject
  const params ={...props, ...queryStringToObject(window.location.search)}
  // render the view with the pathname and object
  //console.log(params) 
  renderView(location, params)
}

//onpopstat