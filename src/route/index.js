

import Home from '../pages/home/index.js';
import Shop from '../pages/shop/index.js';
import Blog from '../pages/blog/index.js';
import Contact from '../pages/contact/index.js';
import Details from '../pages/details/index.js';
import Cart from '../pages/cart/index.js';
import BlogDetails from '../pages/blog_details/index.js';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/details', component: Details },
    { path: '/cart', component: Cart },
    {path: '/blog_details', component: BlogDetails}
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
