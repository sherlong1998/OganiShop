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
                        <div className={cx('product_discount_content_items', 'row', 'col')}>
                            <div className={cx('product_discount_content_items_item', 'l-4', 'col')}></div>
                            <div className={cx('product_discount_content_items_item', 'l-4', 'col')}></div>
                            <div className={cx('product_discount_content_items_item', 'l-4', 'col')}></div>
                        </div>
                        <div className={cx('product_discount_content_dot')}>
                            <h1>..</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('shop_content_filter','row','col')}>
                    <div className={cx('shop_content_filter_sort','l-4','col')}>

                    </div>
                    <div className={cx('shop_content_filter_found','l-4')}>

                    </div>
                    <div className={cx('shop_content_filter_option','l-4')}>

                    </div>
                </div>
                <div className={cx('shop_content_product')}></div>
                <div className={cx('shop_content_pagination')}></div>
            </div>
        </div>
    );
}
export default ShopContent;
