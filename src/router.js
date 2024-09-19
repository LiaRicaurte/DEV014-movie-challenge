let ROUTES = {};
let rootEl = '';

export const setRootEl = (el) => {
  rootEl = el
}

export const setRoutes = (routes) => {
  Object.assign(ROUTES, routes)
}


export const queryStringToObject = (queryString) => {
  if (!queryString)
    return {};
  let params = new URLSearchParams(queryString)
  const obj = Object.fromEntries(params)
  return obj
}

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''
  const route = ROUTES[pathname]
  if (!route) {
    rootEl.innerHTML = 'Error 404 ruta no encontrada'
  }
  rootEl.appendChild(route(props))
}

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, `${window.location.origin + pathname}${props ? `?${new URLSearchParams(props)}` : ''}`)
  renderView(pathname, props)
}

export const onURLChange = (location = '/', props = {}) => {
  const params = { ...props, ...queryStringToObject(window.location.search) }
  renderView(location, params)
}
