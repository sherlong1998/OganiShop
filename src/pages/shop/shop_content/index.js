import styles from './ShopContent.module.scss';
import classNames from 'classnames/bind';

import Slider from 'react-slick';


import imageProduct1 from '../../../assets/image/product/product-1.jpg';
import imageProduct2 from '../../../assets/image/product/product-2.jpg';
import imageProduct3 from '../../../assets/image/product/product-3.jpg';
import imageProduct4 from '../../../assets/image/product/product-4.jpg';
import imageProduct5 from '../../../assets/image/product/product-5.jpg';
import imageProduct6 from '../../../assets/image/product/product-6.jpg';
import imageProduct7 from '../../../assets/image/product/product-7.jpg';
import imageProduct8 from '../../../assets/image/product/product-8.jpg';
import imageProduct9 from '../../../assets/image/product/product-9.jpg';
import imageProduct10 from '../../../assets/image/product/product-10.jpg';
import imageProduct11 from '../../../assets/image/product/product-11.jpg';
import imageProduct12 from '../../../assets/image/product/product-12.jpg';

import imageDiscount1 from '../../../assets/image/product/discount/pd-1.jpg'
import imageDiscount2 from '../../../assets/image/product/discount/pd-2.jpg'
import imageDiscount3 from '../../../assets/image/product/discount/pd-3.jpg'
import imageDiscount4 from '../../../assets/image/product/discount/pd-4.jpg'
import imageDiscount5 from '../../../assets/image/product/discount/pd-5.jpg'
import imageDiscount6 from '../../../assets/image/product/discount/pd-6.jpg'

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('product_discount_content_items_item','col')}>
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
        <div className={cx('shop_content_product_item', 'l-4', 'm-6', 'c-12', 'col')}>
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
                        <div className={cx('product_discount_content_items')}>
                            <Slider
                            dots = {true}
                            infinite = {true}
                            slidesToShow= {3}
                            slidesToScroll={ 1}
                            autoplay={ true}
                            speed={2000}
                            autoplaySpeed={ 3000}
                             cssEase={ 'ease'}
                             >
                                <PostItem
                                    image={imageDiscount1}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                                <PostItem
                                    image={imageDiscount2}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                                <PostItem
                                    image={imageDiscount3}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                                <PostItem
                                    image={imageDiscount4}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                                <PostItem
                                    image={imageDiscount5}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                                
                                <PostItem
                                    image={imageDiscount6}
                                    title="image featured"
                                    kindItem="Dried Fruit"
                                    nameItem="Vegetable's Packet"
                                    discountPrice="$30.00"
                                    price="$36.00"
                                />
                            </Slider>
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
                <div className={cx('shop_content_product', 'row')}>
                    <PostProductItem
                        image={imageProduct1}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct2}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct3}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct4}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct5}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct6}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct7}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct8}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct9}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct10}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct11}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                    <PostProductItem
                        image={imageProduct12}
                        title="image featured"
                        desc="Crab Pool Security"
                        price="$30.00"
                    />
                </div>
                <div className={cx('shop_content_pagination')}>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                </div>
            </div>
        </div>
    );
}
export default ShopContent;
