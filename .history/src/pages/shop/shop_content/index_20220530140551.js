import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';
import imageShopItem from '../../../assets/image/featured/feature-2.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('product_discount_content_items_item', 'l-4', 'col')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('item_text')}>
                <span>{}</span>
                <a href={props.link}>Raisin nuts</a>
                <div className={cx('item_text_price')}> $30.00 <span>$36.00</span></div>
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
