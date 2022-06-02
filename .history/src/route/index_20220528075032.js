import HeaderOnly from '../components/Layout/HeaderOnly';

import Home from '../pages/home/index.js';
import Shop from '../pages/shop/index.js';
import Blog from '../pages/blog/index.js';
import Upload  from '../pages/contact/index.js';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop },
    { path: '/blog', component: Blog },
    { path: '/upload', component: Upload,},
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };