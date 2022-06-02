import styles from "./ContactInfo.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactInfo() {
    return ( 
        <div className = {cx('wrapper')}>
        <div className = {cx('shop_banner')}>
            <img src={bannerImage} alt="banner" />
        </div>
    </div>
     );
}

export default ContactInfo;