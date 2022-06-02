import styles from './ShopSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopSidebar(){
    return (
        <div className = {cx('wrapper','col','l-3')}>
            <div className = {cx('shop_sidebar')}>
                <div className = {cx('shop_sidebar_menu')}>

                </div>
                <div className = {cx('shop_sidebar_price')}>

                </div>
                <div className = {cx('shop_sidebar_color')}>

                </div>
                <div className = {cx('shop_sidebar_sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')}>

                </div>
            </div>
        </div>
    );
}
export default ShopSidebar;