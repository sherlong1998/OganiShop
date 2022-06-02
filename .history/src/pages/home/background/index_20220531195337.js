import styles from './Background.module.scss';
import classNames from 'classnames/bind';

import background from '../../../assets/image/background.jpg';

let cx = classNames.bind(styles);
function Background() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('background', 'l-9',m)}>
                <img src={background} alt="background" />
                <div className={cx('background__text')}>
                    <span>FRUIT FRESH</span>
                    <h2>
                        Vegetable <br />
                        100% Organic
                    </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="/shop" class="primary-btn">
                        SHOP NOW
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Background;
