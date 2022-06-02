import styles from './ShopSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopSidebar(){
    return (
        <div className = {cx('wrapper','col','l-3')}>
            < className = {cx('shop_sidebar')}>
                <div></div></
            </div>
        </div>
    );
}
export default ShopSidebar;