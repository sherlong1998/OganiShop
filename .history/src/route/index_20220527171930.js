import Home from '../pages/home/index.js';
import Following from '../pages/following/index.js';
import Profile from '../pages/profile/index.js';
import HeaderOnly from '../pages/profile/index.js';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
