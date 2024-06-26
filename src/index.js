import {Home} from './Views/Home.js';
import {Error} from './Views/Error.js'
import {Detail} from './Views/Detail.js'
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/detail': Detail
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
const root = document.querySelector('#app')
setRootEl(root);

window.onpopstate = function () {
  onURLChange(window.location.pathname)
};

window.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location.pathname)
});