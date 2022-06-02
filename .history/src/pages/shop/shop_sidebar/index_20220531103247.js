import styles from './ShopSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopSidebar() {
    return (
        <div className={cx('wrapper', 'col', 'l-3')}>
            <div className={cx('shop_sidebar')}>
                <div className={cx('shop_sidebar_menu')}>
                    <div className={`${styles.hero_title__name}`}>
                        <span>All Departments</span>
                    </div>
                    <ul className={`${styles.hero_title__list}`}>
                        <li>Fresh Meat</li>
                        <li>Vegetables</li>
                        <li>Fruits & Nut Gifts</li>
                        <li>Fresh Berries</li>
                        <li>Ocean Foods</li>
                        <li>Butter & Eggs</li>
                        <li>Fast food</li>
                        <li>Fresh Onion</li>
                        <li>Papayaya & Crisps</li>
                        <li>Oatmeal</li>
                        <li>Fresh Bananas</li>
                    </ul>
                </div>
                <div className={cx('shop_sidebar_price')}>
                    <h4>Price</h4>
                </div>
                <div className={cx(styles.shop_sidebar_color)}>
                    <h4>Color</h4>
                    <div className={cx(styles.color_white)}>
                        <label for="white">
                            <span>White</span>
                            <input type="radio" className={cx(styles.white)} />
                        </label>
                    </div>
                    <div className={cx(styles.color_gray)}>
                        <label for="gray">
                        <span>Gray</span>
                            <input type="radio" className="gray" />
                        </label>
                    </div>
                    <div className={cx(styles.color_red)}>
                        <label for="red">
                        <span>Red</span>
                            <input type="radio" className={cx(styles.red)} />
                        </label>
                    </div>
                    <div className={cx(styles.color_black)}>
                        <label for="black">
                        <span>Black</span>
                            <input type="radio" className={cx(styles.black)} />
                        </label>
                    </div>
                    <div className={cx(styles.color_blue)}>
                        <label for="blue">
                            <input type="radio" className={cx(styles.blue)} />
                            <span>Blue</span>
                        </label>
                    </div>
                    <div className={cx(styles.color_green)}>
                        <label for="green">
                        <span>Green</span>
                            <input type="radio" className={cx(styles.green)} />
                        </label>
                    </div>
                </div>
                <div className={cx('shop_sidebar_size')}>
                    <h4>Popular size</h4>
                    <div class="sidebar__item__size">
                                <label for="large">
                                    Large
                                    <input type="radio" id="large">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="medium">
                                    Medium
                                    <input type="radio" id="medium">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="small">
                                    Small
                                    <input type="radio" id="small">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="tiny">
                                    Tiny
                                    <input type="radio" id="tiny">
                                </label>
                            </div>
                </div>
                <div className={cx('shop_sidebar_product')}>
                    <h4>Last Product</h4>
                </div>
            </div>
        </div>
    );
}
export default ShopSidebar;
