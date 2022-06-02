import BlogBanner from './blog_banner';
import BlogContent from './blog_content';
import BlogSidebar from './blog_sidebar';

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