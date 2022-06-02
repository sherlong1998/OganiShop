import BlogBanner from './_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';

var classNames = require('classnames');

function Shop() {
    return (
        <div>
            <ShopBanner />
            <div className = "grid wipe row">
                <ShopSidebar/>
                <ShopContent/>
            </div>
        </div>
    );
}

export default Shop;
export default Blog;