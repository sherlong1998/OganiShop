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
                <div className={cx('shop_sidebar_color')}>
                    <h4>color</h4>

                    <div class="color_white">
                        <label for="white">
                            White
                            <input type="radio" className={cx(styles.white)} />
                        </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Gray
                                    <input type="radio"  className={cx(styles.white)}/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--red">
                                <label for="red">
                                    Red
                                    <input type="radio"  className={cx(styles.white)}/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--black">
                                <label for="black">
                                    Black
                                    <input type="radio"  className={cx(styles.white)}/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--blue">
                                <label for="blue">
                                    Blue
                                    <input type="radio"  className={cx(styles.white)}/>
                                </label>
                            </div>
                            <div className="sidebar__item__color sidebar__item__color--green">
                                <label for="green">
                                    Green
                                    <input type="radio" className="green"/>
                                </label>
                            </div>


                </div>
                <div className={cx('shop_sidebar_size')}>
                    <h4>popular size</h4>
                </div>
                <div className={cx('shop_sidebar_product')}>
                    <h4>Last Product</h4>
                </div>
            </div>
        </div>
    );
}
export default ShopSidebar;
