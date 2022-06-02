import ShopBanner from './shop_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';

var classNames = require('classnames');

function Shop() {
    return (
        <div>
            <ShopBanner />
            <div className = "grid wipe">
                <ShopSidebar className={classNames('l-3')} />
                <ShopContent className={classNames('l-9')}/>
            </div>
        </div>
    );
}

export default Shop;
