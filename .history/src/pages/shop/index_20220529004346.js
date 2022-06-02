import ShopBanner from './shop_banner';
import ShopContent from './shop_content';
import ShopSidebar from './shop_sidebar';

function Shop() {
    return (
        <div>
            <ShopBanner/>
            <div className="">
            <ShopSidebar/>
            <ShopContent/>
            </div>
           
        </div>
);
}

export default Shop;
