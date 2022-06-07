import styles from './HeaderMenu.module.scss';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import { FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';

function HeaderMenu() {
    return (
        <div className={`${styles.header_menu} grid wipe row`}>
            <div className={`${styles.header_menu__logo} col l-3 m-3 `}>
                <img src={logo} alt="logo" />
            </div>
            <div className={`${styles.header_menu__right} l-9 m-9`}>
                <ul className={styles.header_menu__nav}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className={styles.page_list}>
                        <Link to="/">
                            Pages
                            <ul>
                                <li>
                                    <Link to="/details">Shop Details</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Shoping Cart</Link>
                                </li>
                                <li>
                                    <Link to="/">Check Out</Link>
                                </li>
                                <li>
                                    <Link to="/blog_details">Blog Details</Link>
                                </li>
                            </ul>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.header_menu__cart}>
                    <li>
                        <Link to="/">
                            <FaHeart />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <FaShoppingBag />
                        </Link>
                    </li>
                    <li>
                        item: <span>$150.00</span>{' '}
                    </li>
                </div>
            </div>
            <div className={styles.nav_bar}>
                <FaBars />
            </div>
        </div>
    );
}

export default HeaderMenu;
