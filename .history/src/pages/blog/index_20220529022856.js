import BlogBanner from './_banner';
import BlogContent from './_content';
import BlogSidebar from './_sidebar';

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