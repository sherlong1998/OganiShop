import styles from './Background.module.scss';
import classNames from 'classnames/bind';

import background from '../../../assets/image/background.jpg';

let cx = classNames.bind(styles);
function Background() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('background', 'l-9', 'm-9')}>
                <img src={background} alt="background" />
            </div>
            
        </div>
    );
}

export default Background;
