import Home from '../pages/home/index.js';
import Following from '../pages/following/index.js';

const publicRoutes = [
    {path:"/",component:Home},
    {path:"/following",component:Following},
]
const privateRoutes = [

]

export {publicRoutes,privateRoutes}