import ShopBanner from './shop_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';
import styles from './ShopStyle.module.scss';
var classNames = require('classnames');

function Shop() {
    return (
        <div>
            <ShopBanner />
            <div className = {classNames}>
                <ShopSidebar/>
                <ShopContent/>
            </div>
        </div>
    );
}

export default Shop;
