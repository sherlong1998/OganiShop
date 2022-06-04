import styles from './ShopBanner.module.scss';
import classNames from 'classnames/bind';
import bannerImage from '../../../assets/image/breadcrumb.jpg'
let cx = classNames.bind(styles);

function ShopBanner(){
    return (
        <div className = {cx(styles.wrapper)}>
            <div className = {cx(styles.shop_banner)}>
                <img src={bannerImage} alt="banner" />
            </div>
        </div>
    );
}
export default ShopBanner;