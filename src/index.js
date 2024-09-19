import { Home } from './Views/Home.js';
import { Error } from './Views/Error.js'
import { Detail } from './Views/Detail.js'
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = {
  '/': Home,
  '/error': Error,
  '/detail': Detail
};

setRoutes(routes);

const root = document.querySelector('#app')
setRootEl(root);

window.onpopstate = function () {
  onURLChange(window.location.pathname)
};

window.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location.pathname)
});