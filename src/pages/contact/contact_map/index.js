import styles from "./ContactMap.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactMap() {
    return <div className={cx('wrapper')}>
    <div className={cx('contact_map')}>
        
    </div>
</div>;
}

export default ContactMap;