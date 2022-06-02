import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';
import imageShopItem from '../../../assets/image/featured/feature-2.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('product_discount_content_items_item', 'l-4', 'col')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('item_text')}>
                <span>{props.kindItem}</span>
                <a href={props.link}>{props.nameItem}</a>
                <div className={cx('item_text_price')}>
                    {props.discountPrice}
                    <span>{props.price}</span>
                </div>
            </div>
        </div>
    );
}
function PostProductItem(props) {
    return (
        <div className={cx('shop_content_product_item', 'l-4', 'col')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('shop_content_product_item_text')}>
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
                        <div className={cx('product_discount_content_items', 'row')}>
                            <PostItem
                                image={imageShopItem}
                                title="image featured"
                                kindItem="Dried Fruit"
                                nameItem="Vegetable's Packet"
                                discountPrice="$30.00"
                                price="$36.00"
                            />
                            <PostItem
                                image={imageShopItem}
                                title="image featured"
                                kindItem="Dried Fruit"
                                nameItem="Vegetable's Packet"
                                discountPrice="$30.00"
                                price="$36.00"
                            />
                            <PostItem
                                image={imageShopItem}
                                title="image featured"
                                kindItem="Dried Fruit"
                                nameItem="Vegetable's Packet"
                                discountPrice="$30.00"
                                price="$36.00"
                            />
                        </div>
                        <div className={cx('product_discount_content_dot')}>
                            <h1>..</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('shop_content_filter')}>
                    <div className={cx('shop_content_filter_sort', 'l-4', 'col')}>
                        <span>Sort By</span>
                        <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                        </select>
                    </div>
                    <div className={cx('shop_content_filter_found', 'l-4', 'col')}>
                        <h6>
                            <span>16</span> Products found
                        </h6>
                    </div>
                    <div className={cx('shop_content_filter_option', 'l-4', 'col')}>
                    <div class="filter__option"></div>
                    </div>
                </div>
                <div className={cx('shop_content_product')}>
                <PostItem image={imageFeatured} title="image featured" desc="Crab Pool Security" price="$30.00" />
                    
                </div>
                <div className={cx('shop_content_pagination')}></div>
            </div>
        </div>
    );
}
export default ShopContent;
