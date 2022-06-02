import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/image/logo.png'
let cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx(styles.footer)}>
                <div className={cx(styles.footer_left)}>
                    <img />
                </div>
                <div className={cx(styles.footer_center)}></div>
                <div className={cx(styles.footer_right)}></div>
            </div>
        </div>
    );
}

export default Footer;
