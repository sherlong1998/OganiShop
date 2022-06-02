import styles from './ContactInfo.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactInfo() {
    return <div className={cx('wrapper')}>
        <div className={cx('contact_info')}></div>
    </div>;
}

export default ContactInfo;
