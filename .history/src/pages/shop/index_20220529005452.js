import ShopBanner from './shop_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';

var classNames = require('classnames');

function Shop() {
    return (
        <div>
            <ShopBanner />
            <div className = "grid wipe row">
                <ShopSidebar className= />
                <ShopContent className={classNames('l-9')}/>
            </div>
        </div>
    );
}

export default Shop;
