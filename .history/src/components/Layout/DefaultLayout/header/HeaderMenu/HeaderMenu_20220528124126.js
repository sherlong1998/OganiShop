import styles from "./HeaderMenu.module.scss"
import logo from "./logo.png"
import { FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa'

function HeaderMenu() {
    return (
        <div className={`${styles.header_menu} grid wipe row`}>
            <div className={`${styles.header_menu__logo} col l-3 m-3`}>
                <img src={logo} alt="logo" />
            </div>
            <div className={`${styles.header_menu__right} l-9 m-9`} >
                <ul className={styles.header_menu__nav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li className={styles.page_list}><a href="#">Pages
                        <ul>
                            <li><a href="/">Shop Details</a></li>
                            <li><a href="#">Shoping Cart</a></li>
                            <li><a href="#">Check Out</a></li>
                            <li><a href="#">Blog Details</a></li>
                        </ul>
                    </a>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.header_menu__cart}>
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaShoppingBag /></a></li>
                    <li>item: <span>$150.00</span> </li>
                </div>
            </div>
            <div className={styles.nav_bar}><FaBars /></div>
        </div>
    )
}

export default HeaderMenu

