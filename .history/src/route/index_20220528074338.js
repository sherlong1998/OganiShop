import HeaderOnly from '../components/Layout/HeaderOnly';

import Home from '../pages/home/index.js';
import Following from '../pages/following/index.js';
import Profile from '../pages/profile/index.js';
import Upload  from '../pages/upload/index.js';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', compone },
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };