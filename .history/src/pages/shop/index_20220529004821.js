import ShopBanner from './shop_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';

var classNames = require('classnames');


function Shop() {
    return (
        <div>
            <ShopBanner/>
            <div className = {classNames("grid",'wipe',row)}>
            <ShopSidebar/>
            <ShopContent/>
            </div>
           
        </div>
);
}

export default Shop;
