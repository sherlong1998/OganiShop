import styles from './ContactInfo.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactInfo() {
    return <div className={cx('wrapper')}>
        <div className={cx}></div>
    </div>;
}

export default ContactInfo;
