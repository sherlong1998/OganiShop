import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('product_discount_content_items_item', 'l-4', 'col')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('featured_item_text')}>
                <h6>
                    <a href="/">{props.desc}</a>
                </h6>
                <h5>{props.price}</h5>
            </div>
        </div>
    );
}

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
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                        </div>
                        <div className={cx('product_discount_content_dot')}>
                            <h1>..</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('shop_content_filter')}>
                    <div className={cx('shop_content_filter_sort', 'l-4', 'col')}></div>
                    <div className={cx('shop_content_filter_found', 'l-4', 'col')}></div>
                    <div className={cx('shop_content_filter_option', 'l-4', 'col')}></div>
                </div>
                <div className={cx('shop_content_product')}>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                    <div className={cx('shop_content_product_item','l-4', 'col')}></div>
                </div>
                <div className={cx('shop_content_pagination')}></div>
            </div>
        </div>
    );
}
export default ShopContent;
