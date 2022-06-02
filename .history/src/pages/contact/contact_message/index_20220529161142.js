import styles from "./ContactMessage.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactMessage() {
    return <div className={cx('wrapper')}>
    <div className={cx('contact_map')}>
        
    </div>
</div>;
}


export default ContactMessage;