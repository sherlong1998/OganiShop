import styles from './Featured.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Featured() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
                <div className={cx('featured_top')}>
                    <div className={cx('featured_title')}>
                        <h2>Featured Product</h2>
                    </div>
                    <div className={cx('featured_controls')}>
                        <ul>
                            <li class="active" data-filter="*">
                                All
                            </li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('featured')}>

                </div>
            </div>
        </div>
    );
}

export default Featured;
