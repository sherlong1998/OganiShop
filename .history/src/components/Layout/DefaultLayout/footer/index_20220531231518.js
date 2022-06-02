import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/image/logo.png';
let cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx(styles.footer)}>
                <div className={cx(styles.footer_left)}>
                    <img src={logo} alt="logo footer" />
                    <ul>
                        <li>Address: 60-49 Road 11378 New York</li>
                        <li>Phone: +65 11.188.888</li>
                        <li>Email: hello@colorlib.com</li>
                    </ul>
                </div>
                <div className={cx(styles.footer_center)}>
                    
                </div>
                <div className={cx(styles.footer_right)}></div>
            </div>
        </div>
    );
}

export default Footer;
