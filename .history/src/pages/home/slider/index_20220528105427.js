import styles from  './S.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner','l-9')}>
                {/* banner */}
            </div>
            
        </div>
    );
}

export default Banner;
