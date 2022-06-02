import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Banner from '../../../assets/image/breadcrumb.jpg';

let cx = classNames.bind(styles);
function ShopBanner() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('banner')}>
                <img src={Banner} alt="banner" />
            </div>
        </div>
    );
}

export default Banner;
