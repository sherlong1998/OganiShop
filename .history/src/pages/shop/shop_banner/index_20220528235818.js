import styles from './ShopBanner.module.scss';
import classNames from 'classnames/bind';
import bannerImage from '../../../assets/'
let cx = classNames.bind(styles);

function ShopBanner(){
    return (
        <div className = {cx('wrapper')}>
            <div className = {cx('shop_banner')}>
                <img/>
            </div>
        </div>
    );
}
export default ShopBanner;