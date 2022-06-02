import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopContent() {
    return (
        <div className={cx('wrapper l')}>
            <div className={cx('shop_content')}></div>
        </div>
    );
}
export default ShopContent;
