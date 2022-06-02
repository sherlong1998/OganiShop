import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner','l-9')}></div>
        </div>
    );
}

export default Banner;
