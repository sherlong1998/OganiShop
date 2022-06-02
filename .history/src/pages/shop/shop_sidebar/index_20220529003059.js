import styles from './ShopBanner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopSidebar(){
    return (
        <div className = {cx('wrapper','')}>
            <div className = {cx('shop_sidebar')}>
                
            </div>
        </div>
    );
}
export default ShopSidebar;