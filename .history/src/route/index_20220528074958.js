import HeaderOnly from '../components/Layout/HeaderOnly';

import Home from '../pages/home/index.js';
import Shop from '../pages/shop/index.js';
import Profile from '../pages/profile/index.js';
import Upload  from '../pages/contact/index.js';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload,},
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };