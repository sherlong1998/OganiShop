import styles from './Featured.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Featured() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
                <div class="section-title">
                    <h2>Featured Product</h2>
                </div>
                
            </div>
        </div>
    );
}

export default Featured;
