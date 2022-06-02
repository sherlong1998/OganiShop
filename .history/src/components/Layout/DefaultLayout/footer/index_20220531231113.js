import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx(styles.footer)}>
                <div className={cx(styles.footer_left)}></div>
                <div className={cx(styles.footer)}></div>
            </div>
        </div>
    );
}

export default Footer;
