import BlogBanner from './shop_banner';
import BlogContent from './shop_content';
import BlogSidebar from './shop_sidebar';

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