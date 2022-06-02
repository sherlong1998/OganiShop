import styles from './ShopSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopSidebar(){
    return (
        <div className = {cx('wrapper','l-3')}>
            <div className = {cx('shop_sidebar')}>
                
            </div>
        </div>
    );
}
export default ShopSidebar;