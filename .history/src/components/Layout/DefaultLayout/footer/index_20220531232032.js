import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/image/logo.png';
let cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx(styles.footer,"row")}>
                <div className={cx(styles.footer_left)}>
                    <img src={logo} alt="logo footer" />
                    <ul>
                        <li>Address: 60-49 Road 11378 New York</li>
                        <li>Phone: +65 11.188.888</li>
                        <li>Email: hello@colorlib.com</li>
                    </ul>
                </div>
                <div className={cx(styles.footer_center)}>
                    <h6>Useful Links</h6>
                    <ul>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">About Our Shop</a>
                        </li>
                        <li>
                            <a href="/">Secure Shopping</a>
                        </li>
                        <li>
                            <a href="/">Delivery information</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Our Sitemap</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Who We Are</a>
                        </li>
                        <li>
                            <a href="/">Our Services</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">Innovation</a>
                        </li>
                        <li>
                            <a href="/">Testimonials</a>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles.footer_right)}>
                    <h6>Join Our Newsletter Now</h6>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form action="#">
                        <input type="text" placeholder="Enter your mail" />
                        <button type="submit" class="site-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
