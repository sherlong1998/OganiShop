import styles from './Featured.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Featured() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
            <div className={cx('featured_top')}>

            </div>
                
            </div>
        </div>
    );
}

export default Featured;
