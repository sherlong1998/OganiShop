import styles from './ShopBanner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function ShopBanner(){
    return (
        <div className = {cx('w')}></div>
    );
}
export default ShopBanner;