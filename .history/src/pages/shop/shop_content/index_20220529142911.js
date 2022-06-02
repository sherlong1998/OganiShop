import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopContent() {
    return (
        <div className={cx('wrapper', 'col', 'l-9')}>
            <div className={cx('shop_content')}>
                <div className={cx('shop_content_product_discount')}>

                </div>
                <div className={cx('shop_content')}>
                
            </div>
            </div>
        </div>
    );
}
export default ShopContent;
