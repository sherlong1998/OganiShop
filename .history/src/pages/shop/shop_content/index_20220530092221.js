import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopContent() {
    return (
        <div className={cx('wrapper', 'col', 'l-9')}>
            <div className={cx('shop_content')}>
                <div className={cx('shop_content_product_discount')}>
                    <div className={cx('product_discount_title')}>
                        <h2>Sale Off</h2>
                    </div>
                    <div className={cx('product_discount_content')}>
                        <div className={cx('product_discount_content_items')}>

                        </div>
                    </div>
                </div>
                <div className={cx('shop_content_filter')}></div>
                <div className={cx('shop_content_product')}></div>
                <div className={cx('shop_content_pagination')}></div>
            </div>
        </div>
    );
}
export default ShopContent;
