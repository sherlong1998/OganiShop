import styles from "./ContactBanner.module.scss"
import classNames from 'classnames/bind';
import bannerImage from '../../../assets/image/breadcrumb.jpg'
let cx = classNames.bind(styles);
function ContactBanner() {
    return ( 
        <div className = {cx('wrapper')}>
        <div className = {cx('shop_banner')}>
            <img src={bannerImage} alt="banner" />
        </div>
    </div>
        );
}

export default ContactBanner;